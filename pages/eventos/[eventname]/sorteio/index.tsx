import { Box, Container } from "@mui/material";
import { NextPage } from "next";
import { Typography } from "../../../../components/Typography";
import { useRouter } from "next/router";
import { useAuth } from "../../../../context/authContext";
import { Button } from "../../../../components";
import { User } from "firebase/auth";
import { addDoc, collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../../../../services/firebase";
import { useEffect, useState } from "react";

const RafflePage: NextPage = () => {
  const router = useRouter();
  const eventName = router.query.eventname as string;
  const { user, logOut, logIn } = useAuth();
  const [eventActive, setEventActive] = useState(false);

  useEffect(() => {
    eventExistsAndIsActive().then((result) => {
      setEventActive(result);
      if (eventActive && user) registerRaffleParticipant(user);
    });
  }, [user, eventActive]);

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
      console.log(email);

      const q = query(
        raffleParticipantsCollection,
        where("email", "==", email),
      );
      const r = await getDocs(q);
      return !r.empty;
    };

    if (await participantAlreadyOnRaffle()) {
      console.log("Usuário já está participando do sorteio");
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
    <Container>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          marginTop: "30px",
          flexDirection: "column",
        }}
      >
        <Typography variant="h1">Sorteio do evento {eventName}</Typography>
        <hr />
        {eventActive ? (
          <>
            {user ? (
              <>
                <Typography>
                  Parabéns, você já está participando do sorteio.
                </Typography>
                <Typography>
                  Você pode desconectar se quiser. Sua participação no sorteio
                  continuará ativa.
                </Typography>
                <Button onClick={handleLogOut}>Desconectar</Button>
              </>
            ) : (
              <Button onClick={handleLogIn}>Entrar com Google</Button>
            )}
          </>
        ) : (
          <Typography>Sorteio para o evento não está ativo</Typography>
        )}
      </Box>
    </Container>
  );
};

export default RafflePage;
