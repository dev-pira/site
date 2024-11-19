import { Box, Container, Paper, Button as MuiButton } from "@mui/material";
import { NextPage } from "next";
import { Button } from "../../../../components";
import { Typography } from "../../../../components/Typography";
import { useAuth } from "../../../../context/authContext";
import {
  collection,
  doc,
  getDocs,
  setDoc,
  updateDoc,
} from "firebase/firestore";
import { db } from "../../../../services/firebase";
import { useRouter } from "next/router";
import { useState } from "react";
import QRCode from "react-qr-code";
import { Countdown } from "../../../../components/Countdown";
import EmojiSpawner from "../../../../components/EmojiSpawner/EmojiSpawner";

import * as S from "../../../../styles/sorteadorStyles";

type Participant = {
  id: string;
  name: string;
  email: string;
  drawn?: boolean;
};

const RaffleManagementPage: NextPage = () => {
  const router = useRouter();
  const eventName = router.query.eventname as string;
  const { user, logOut, logIn } = useAuth();
  const [raffleInitialized, setRaffleInitialized] = useState(false);
  const [raffleParticipants, setRaffleParticipants] = useState<
    Participant[] | null
  >(null);
  const [drawnParticipant, setDrawnParticipant] = useState<Participant | null>(
    null,
  );
  const [pageState, setPageState] = useState("NEW_DRAWN");
  const handleLogIn = async () => await logIn();

  const handleLogOut = async () => await logOut();

  const handleInitRaffleSession = async () => {
    const raffleSession = {
      eventName,
      active: true,
    };
    const raffleSessionDoc = doc(db, "raffle", eventName);
    await setDoc(raffleSessionDoc, raffleSession);
    setRaffleInitialized(true);
    setDrawnParticipant(null);
  };

  const handleFinishRaffleSession = async () => {
    const raffleSessionDoc = doc(db, "raffle", eventName);
    await updateDoc(raffleSessionDoc, { active: false });
    setRaffleInitialized(false);
    setDrawnParticipant(null);
    getRaffleParticipants().then((participants) => {
      setRaffleParticipants(participants);
    });
  };

  const getRaffleParticipants = async (): Promise<Participant[]> => {
    const collectionReference = collection(
      db,
      "raffle",
      eventName,
      "participants",
    );
    const _raffleParticipants: Participant[] = [];
    (await getDocs(collectionReference)).forEach((doc) => {
      const { name, email } = doc.data();
      const participant: Participant = { id: doc.id, name, email };
      _raffleParticipants.push(participant);
    });
    return _raffleParticipants;
  };

  const handleRaffle = async () => {
    if (!raffleParticipants?.length) {
      console.error("No raffle participants");
      setDrawnParticipant(null);
      return;
    }

    // trazer todos os participantes do evento, se nao tiver a colecao no estado
    // sortear
    // 1. pegar range
    const lenght = raffleParticipants.length;
    // 2. gerar um random entre 0 e range -1
    const index = Math.floor(Math.random() * (lenght - 1));
    // 3. pegar o item do indice pra mostrar na tela
    setDrawnParticipant(raffleParticipants[index]);
    // 4. atualiza estado da página
    setPageState("COUNTDOWN");

    // 5. tirar o indice da coleção
    if (drawnParticipant) {
      const raffleParticipantReference = doc(
        db,
        "raffle",
        eventName,
        "participants",
        drawnParticipant.id,
      );
      updateDoc(raffleParticipantReference, { drawn: "true" }).then(() => {
        raffleParticipants.splice(index, 1);
      });
    }

    // 6. marcar como sorteado no db
  };

  return (
    <Container maxWidth={false} disableGutters sx={S.container}>
      <Container>
        <Box sx={S.innerContainer}>
          <Typography
            variant={"h1"}
            sx={{ fontSize: { xs: "3.5rem", sm: "4.25rem" } }}
          >
            Sorteador do evento{" "}
            <Typography
              variant="introSpan"
              color="gradient_green"
              sx={{ whiteSpace: "nowrap" }}
            >
              {eventName}
            </Typography>
          </Typography>
          <hr />
          <Paper elevation={2} sx={S.paper}>
            {pageState === "NEW_DRAWN" && (
              <>
                <Box
                  sx={{
                    display: "flex",
                    flex: "0",
                  }}
                >
                  <MuiButton
                    disabled={!raffleParticipants?.length}
                    onClick={handleRaffle}
                    variant="pulse"
                    sx={S.buttonNextResult}
                  >
                    Sortear
                  </MuiButton>
                </Box>
              </>
            )}

            {pageState === "COUNTDOWN" && (
              <>
                <Countdown
                  duration={5}
                  colors={["#04FFB4", "#20E3CD", "#3BC8E6", "#57ACFF"]}
                  colorsTime={[7, 5, 2, 0]}
                  size={250}
                  strokeWidth={24}
                  onComplete={() => setPageState("RESULT")}
                >
                  {({ remainingTime }) => (
                    <div>
                      <Typography variant="introSpan">
                        {remainingTime}
                      </Typography>
                    </div>
                  )}
                </Countdown>
              </>
            )}
            {pageState === "RESULT" && (
              <>
                <Box sx={S.buttonNextDrawn}>
                  <Button
                    onClick={() => {
                      setPageState("NEW_DRAWN");
                    }}
                  >
                    Próximo
                  </Button>
                </Box>
                <Box sx={S.resultBox}>
                  {drawnParticipant && (
                    <Typography variant="h3">
                      {drawnParticipant.name}
                    </Typography>
                  )}
                </Box>
                <EmojiSpawner emojis={["🎉", "🎉", "🥳"]} />
              </>
            )}
            {pageState === "ENROLLMENT" && (
              <>
                <QRCode
                  size={256}
                  value={`devpira.com.br/eventos/${eventName}/sorteio`}
                />
              </>
            )}
          </Paper>
        </Box>
        <Paper sx={S.footerPaper}>
          <Container sx={S.footerContainer}>
            {!user && <Button onClick={handleLogIn}>Entrar</Button>}
            {user && (
              <>
                <Button onClick={handleLogOut}>Sair</Button>
                {!raffleInitialized && (
                  <Button onClick={handleInitRaffleSession}>
                    Iniciar inscrições pro sorteio
                  </Button>
                )}
                {raffleInitialized && (
                  <Button onClick={handleFinishRaffleSession}>
                    Encerrar inscrições pro sorteio
                  </Button>
                )}
              </>
            )}
          </Container>
        </Paper>
      </Container>
    </Container>
  );
};

export default RaffleManagementPage;
