import { Box, Container } from "@mui/material";
import { NextPage } from "next";
import { Typography } from "../../../../components/Typography";
import { useRouter } from "next/router";
import { useAuth } from "../../../../context/authContext";
import { Button } from "../../../../components";
import { User } from "firebase/auth";
import { addDoc, collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../../../../services/firebase";

const RafflePage: NextPage = () => {
  const router = useRouter();
  const eventName = router.query.eventname as string;
  const { user, logOut, logIn } = useAuth();

  const handleLogIn = async () => {
    const userData = await logIn();
    await registerRaffleParticipant(userData?.user);
  };

  const registerRaffleParticipant = async (user: User | undefined) => {
    const email = user?.email;

    // Verificar se o Sorteio existe e esta ativo

    const raffleParticipantsCollection = collection(
      db,
      "raffle",
      eventName,
      "participants"
    );
    // Verificar se o usuário já está registrado
    const participantAlreadyOnRaffle = async () => {
      const q = query(
        raffleParticipantsCollection,
        where("email", "==", email)
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
      </Box>
    </Container>
  );
};

export default RafflePage;
