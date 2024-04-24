import { Box, Container } from "@mui/material";
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

    // 4. tirar o indice da coleção
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

    // 5. marcar como sorteado no db
  };

  return (
    <Container>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          marginTop: "30px",
          flexDirection: "column",
          gap: "5px",
        }}
      >
        <Typography variant="h1">Sorteador do evento {eventName}</Typography>
        <hr />
        {user ? (
          <>
            <Button onClick={handleLogOut}>Sair</Button>
            <Button
              onClick={handleInitRaffleSession}
              disabled={raffleInitialized}
            >
              Iniciar sessão de sorteio
            </Button>
            <Button
              onClick={handleFinishRaffleSession}
              disabled={!raffleInitialized}
            >
              Encerrar inscrições pro sorteio
            </Button>
            <Button disabled={raffleInitialized} onClick={handleRaffle}>
              Sortear
            </Button>
            <hr />
            {raffleInitialized ? (
              <>
                <QRCode
                  size={256}
                  value={`devpira.com.br/eventos/${eventName}/sorteio`}
                ></QRCode>
              </>
            ) : (
              <></>
            )}
            {drawnParticipant ? (
              <Typography variant="h3">{drawnParticipant.name}</Typography>
            ) : (
              <></>
            )}
          </>
        ) : (
          <Button onClick={handleLogIn}>Entrar</Button>
        )}
      </Box>
    </Container>
  );
};

export default RaffleManagementPage;
