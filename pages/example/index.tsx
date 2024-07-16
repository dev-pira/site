import type { NextPage } from "next";
import { Box, Button as MuiButton, Container, Typography } from "@mui/material";
import { EventCard, JobCard, OrganizerCard, TalkCard } from "../../components";
import { Talk } from "../../models/track";
import { Member } from "../../models/member";
import { Event } from "../../models/event";
import { Job } from "../../models/job";

const ExamplePage: NextPage = () => {
  const talk: Talk = {
    title: "Assunto de Palestra Muito Interessante",
    time: new Date(),
    speaker: {
      portraitUrl:
        "https://images.ctfassets.net/8bifjooqblg7/3XNrnJvOWLelS6alFtMQwb/85619bbb6c4a8a69a655a889d18d4fe2/Murilo.jpeg",
      name: "Fulano da Silva Carvalho",
      job: "Desenvolvedora na Ciclano",
    },
  };
  const member: Member = {
    name: "Fulano da Silva Carvalho",
    job: "Desenvolvedora na Ciclano",
    portraitUrl:
      "https://images.ctfassets.net/8bifjooqblg7/3XNrnJvOWLelS6alFtMQwb/85619bbb6c4a8a69a655a889d18d4fe2/Murilo.jpeg",
    profileUrl: "https://google.com",
  };
  const event: Event = {
    title: "Nome do evento",
    description:
      "Turpis fusce et, nisl, bibendum viverra pretium duis nulla euismod.",
    dateTime: new Date(),
    banner: {
      url: "https://images.ctfassets.net/8bifjooqblg7/5jRqMzbBMYS5D6YUQ5kqWN/a3b5c6d66d19255bd2ca7ddf1b2563d6/Design_sem_nome__4_.png",
    },
  };
  const job: Job = {
    title: "UI/UX Designer",
    description:
      "Turpis fusce et, nisl, bibendum viverra pretium duis nulla euismod.",
    company: "Empresa Ciclano",
  };

  return (
    <Container>
      <Typography variant="h1">Hello</Typography>
      <Typography>Examples of cards</Typography>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          gap: "20px",
          flexWrap: "wrap",
          justifyContent: "center",
        }}
      >
        <JobCard {...job} />
        <EventCard {...event} />
        <EventCard {...event} variant="secondary" />
        <TalkCard {...talk} />
        <OrganizerCard {...member} />
      </Box>
    </Container>
  );
};

export default ExamplePage;

const BannerCard: React.FC = () => {
  const color = "rgba(33, 34, 54, 1)";
  const lineHeight = "22.4px";
  const titleText = {
    fontFamily: "Inter",
    fontSize: "20px",
    fontWeight: 700,
    lineHeight,
    letterSpacing: "-0.055em",
    color,
  };
  const descriptionText = {
    fontFamily: "Roboto",
    fontSize: "14px",
    fontWeight: 400,
    lineHeight,
    color: "rgba(102, 103, 125, 1)",
  };
  const infoText = {
    ...descriptionText,
    fontWeight: 500,
    color,
  };

  return (
    <Box
      sx={{
        width: "280px",
        height: "364px",
        borderRadius: "10px",
        boxShadow: "0px 4px 24px 0px rgba(30, 144, 255, 0.14)",
      }}
    >
      <Box
        sx={{
          height: "159px",
          backgroundImage:
            "url('https://images.ctfassets.net/8bifjooqblg7/5jRqMzbBMYS5D6YUQ5kqWN/a3b5c6d66d19255bd2ca7ddf1b2563d6/Design_sem_nome__4_.png')",
          borderRadius: "10px 10px 0px 0px",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
      ></Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          padding: "24px",
          gap: "8px",
        }}
      >
        <Typography sx={titleText}>Nome do Evento</Typography>
        <Typography sx={descriptionText}>
          Turpis fusce et, nisl, bibendum viverra pretium duis nulla euismod.
        </Typography>
        <Typography sx={infoText}>10/12/2020 às 18h00</Typography>
        <Box sx={{ display: "flex", gap: "8px" }}>
          <Button>Participar</Button>
          <Button variant="secondary">Mais</Button>
        </Box>
      </Box>
    </Box>
  );
};

const PictureCard: React.FC = () => {
  const dropText = {
    fontFamily: "Inter",
    fontSize: "14px",
    fontWeight: 800,
    letterSpacing: "-0.055em",
    textAlign: "right",
    color: "rgba(38, 50, 56, 1)",
  };
  const titleText = {
    fontFamily: "Inter",
    fontSize: "20px",
    fontWeight: 800,
    lineHeight: "24.2px",
    letterSpacing: "-0.055em",
    color: "transparent",
    background: "linear-gradient(225.5deg, #04FFB4 9.38%, #57ACFF 95.68%)",
    backgroundClip: "text",
  };
  const speakerNameText = {
    fontFamily: "Inter",
    fontSize: "16px",
    fontWeight: 700,
    lineHeight: "19.36px",
    letterSpacing: "-0.055em",
    color: "white",
  };
  const speakerNameJob = {
    fontFamily: "Roboto",
    fontSize: "12px",
    fontWeight: 400,
    lineHeight: "19.2px",
    color: "white",
  };

  return (
    <Box
      sx={{
        width: "280px",
        height: "364px",
        borderRadius: "10px",
        boxShadow: "0px 4px 24px 0px rgba(30, 144, 255, 0.14)",
        backgroundColor: "gray",
        backgroundImage:
          "url('https://images.ctfassets.net/8bifjooqblg7/3XNrnJvOWLelS6alFtMQwb/85619bbb6c4a8a69a655a889d18d4fe2/Murilo.jpeg')",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundSize: "cover",
        border: "1px solid rgba(33, 34, 54, 0.16)",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          height: "364px",
          background:
            "linear-gradient(180.06deg, rgba(33, 34, 54, 0.15) 0.05%, #212236 74.97%)",
          borderRadius: "0px 0px 10px 10px",
        }}
      >
        <Box
          sx={{
            display: "flex",
            height: "62px",
            padding: "16px",
            flexDirection: "row-reverse",
          }}
        >
          <Box
            sx={{
              display: "inline-flex",
              backgroundColor: "white",
              borderRadius: "35px",
              padding: "4px 10px 4px 10px",
              boxShadow: "0px 4px 24px 0px rgba(38, 50, 56, 0.44)s",
            }}
          >
            <Typography sx={dropText}>8h00</Typography>
          </Box>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            height: "134px",
            padding: "16px",
            gap: "8px",
          }}
        >
          <Typography sx={titleText}>
            Assunto de Palestra Muito Interessante
          </Typography>
          <Typography sx={speakerNameText}>Fulano da Silva Carvalho</Typography>
          <Typography sx={speakerNameJob}>Desenvolvedora na Ciclano</Typography>
        </Box>
      </Box>
    </Box>
  );
};

const ContentCard: React.FC = () => {
  const titleText = {
    fontFamily: "Inter",
    fontSize: "20px",
    fontWeight: 700,
    lineHeight: "24.2px",
    letterSpacing: "-0.055em",
    color: "rgba(33, 34, 54, 1)",
  };

  const descriptionText = {
    fontFamily: "Roboto",
    fontSize: "14px",
    fontWeight: 400,
    lineHeight: "22.4px",
    color: "rgba(102, 103, 125, 1)",
  };

  const companyText = {
    ...descriptionText,
    fontWeight: 500,
    background: "linear-gradient(89.97deg, #E63462 1.47%, #1E90FF 53.63%)",
    color: "transparent",
    backgroundClip: "text",
  };

  return (
    <Box
      sx={{
        width: "280px",
        borderRadius: "10px",
        height: "229px",
        boxShadow: "0px 4px 24px 0px rgba(30, 144, 255, 0.14)",
      }}
    >
      <Box
        sx={{
          display: "flex",
          padding: "24px",
          gap: "16px",
          flexDirection: "column",
        }}
      >
        <Typography sx={titleText}>UI/UX Designer</Typography>
        <Typography sx={descriptionText}>
          Turpis fusce et, nisl, bibendum viverra pretium duis nulla euismod.
        </Typography>
        <Typography sx={companyText}>Empresa Ciclano</Typography>
        <Button variant="secondary">Detalhe da Vaga</Button>
      </Box>
    </Box>
  );
};

interface ButtonProps {
  children: React.ReactNode;
  variant?: "primary" | "secondary";
}
const Button: React.FC<ButtonProps> = ({
  children,
  variant = "primary",
}: ButtonProps) => {
  const secondary = variant == "secondary";
  return (
    <MuiButton
      fullWidth
      sx={{
        background: secondary ? "transparent" : "rgba(33, 34, 54, 1)",
        borderRadius: "3,65px",
        padding: "7,31px 14,61px 7,31px 14,61px",
        border: secondary ? "1px solid rgba(33, 34, 54, 0.3)" : "none",
        "&:hover": {
          background: secondary ? "transparent" : "#32225B",
        },
      }}
    >
      <Typography
        sx={{
          fontFamily: "Roboto",
          fontSize: "9,74px",
          fontWeight: 700,
          lineHeight: "11,42px",
          color: secondary ? "rgba(33, 34, 54, 1)" : "white",
          textTransform: "none",
        }}
      >
        {children}
      </Typography>
    </MuiButton>
  );
};
