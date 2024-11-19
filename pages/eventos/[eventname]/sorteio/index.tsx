import { Box, Container, Button } from "@mui/material";
import { NextPage } from "next";
import { Typography } from "../../../../components/Typography";
import { useRouter } from "next/router";
import { useAuth } from "../../../../context/authContext";
import { User } from "firebase/auth";
import { addDoc, collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../../../../services/firebase";
// import { useEffect, useState } from "react";
import { useEffect } from "react";

import * as S from "../../../../styles/sorteioStyles";

const RafflePage: NextPage = () => {
  const router = useRouter();
  const eventName = router.query.eventname as string;
  const { user, logOut, logIn } = useAuth();
  const eventActive = true;
  // const [eventActive, setEventActive] = useState(false);

  // useEffect(() => {
  //   eventExistsAndIsActive().then((result) => {
  //     setEventActive(result);
  //     if (eventActive && user) registerRaffleParticipant(user);
  //   });
  // }, [user, eventActive]);

  useEffect(() => {
    eventExistsAndIsActive().then(() => {
      if (user) registerRaffleParticipant(user);
    });
  }, [user]);

  const eventExistsAndIsActive = async () => {
    const raffleCollection = collection(db, "raffle");
    const q = query(
      raffleCollection,
      where("eventName", "==", eventName),
      where("active", "==", true),
    );
    const r = await getDocs(q);
    return !r.empty;
  };

  const registerRaffleParticipant = async (user: User | undefined) => {
    const email = user?.email;

    const raffleParticipantsCollection = collection(
      db,
      "raffle",
      eventName,
      "participants",
    );
    // Verificar se o usuário já está registrado
    const participantAlreadyOnRaffle = async () => {
      const q = query(
        raffleParticipantsCollection,
        where("email", "==", email),
      );
      const r = await getDocs(q);
      return !r.empty;
    };

    if (await participantAlreadyOnRaffle()) {
      return;
    }

    // Registrar participante no sorteio
    const raffleParticipant = {
      name: user?.displayName,
      email,
    };
    await addDoc(raffleParticipantsCollection, raffleParticipant);
  };

  const handleLogIn = async () => await logIn();

  const handleLogOut = async () => await logOut();

  return (
    <Container sx={S.container}>
      <Box sx={S.mainContent}>
        <Typography
          variant={"h1"}
          sx={{
            fontSize: "2rem",
            textAlign: "center",
          }}
        >
          Sorteio do evento
          <Typography
            variant="introSpan"
            color="gradient_green"
            sx={{ fontSize: "2rem", display: "inline-block", width: "100%" }}
          >
            {eventName}
          </Typography>
        </Typography>
        {eventActive && (
          <>
            {user && (
              <>
                <Typography>
                  Parabéns, você já está participando do sorteio!
                </Typography>
                <Typography>
                  Você pode desconectar se quiser. Sua participação no sorteio
                  continuará ativa.
                </Typography>
              </>
            )}
          </>
        )}
        {!eventActive && (
          <Typography>Sorteio para o evento não está ativo</Typography>
        )}
      </Box>
      {eventActive && (
        <>
          <Box sx={S.footerContent}>
            {user && (
              <Button onClick={handleLogOut} sx={S.button}>
                Desconectar
              </Button>
            )}
            {!user && (
              <Button onClick={handleLogIn} sx={S.button}>
                Entrar com Google
              </Button>
            )}
          </Box>
        </>
      )}
    </Container>
  );
};

export default RafflePage;
