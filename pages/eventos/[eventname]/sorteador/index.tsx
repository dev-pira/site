import { Box, Container } from "@mui/material";
import { NextPage } from "next";
import { Button } from "../../../../components";
import { Typography } from "../../../../components/Typography";
import { useAuth } from "../../../../context/authContext";
import { doc, setDoc, updateDoc } from "firebase/firestore";
import { db } from "../../../../services/firebase";
import { useRouter } from "next/router";
import { useState } from "react";
import QRCode from "react-qr-code";

const RaffleManagementPage: NextPage = () => {
  const router = useRouter();
  const eventName = router.query.eventname as string;
  const { user, logOut, logIn } = useAuth();
  const [raffleInitialized, setRaffleInitialized] = useState(false);

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
  };

  const handleFinishRaffleSession = async () => {
    const raffleSessionDoc = doc(db, "raffle", eventName);
    await updateDoc(raffleSessionDoc, { active: false });
    setRaffleInitialized(false);
  };

  return (
    <Container>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          marginTop: "30px",
          flexDirection: "column",
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
            <Button disabled={!raffleInitialized}>Sortear</Button>
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
          </>
        ) : (
          <Button onClick={handleLogIn}>Entrar</Button>
        )}
      </Box>
    </Container>
  );
};

export default RaffleManagementPage;
