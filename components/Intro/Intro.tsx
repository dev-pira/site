import { Box } from "@mui/material";
import Image from "next/image";
import { Button } from "../Button";
import { Typography } from "../Typography";

const Intro: React.FC = () => {
  const defaultWidth = "1345px";
  return (
    <Box
      sx={{ display: "flex", flexDirection: "row", justifyContent: "center" }}
    >
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap-reverse",
          maxWidth: "100vw",
          width: defaultWidth,
          alignItems: "center",
          justifyContent: "space-around",
          py: "1.8rem",
          px: "1.8rem",
        }}
      >
        <Box
          sx={{
            display: "flex",
            maxWidth: "100vw",
            width: { xs: "100vw", sm: "100vw", md: "50%", lg: "50%" },
            flexDirection: "column",
            gap: "24px",
          }}
        >
          <Typography variant={"h2"}>
            Comunidade que
            <Typography variant="span" color="gradient_green">
              {" "}
              conecta pessoas{" "}
            </Typography>
            e tecnologia
          </Typography>
          <Typography bigger>
            Participe da comunidade que está transformando a vida das pessoas de
            Piracicaba e região.
          </Typography>
          <Box sx={{ display: "flex", flexDirection: "row", gap: "8px" }}>
            <Button href="#sobre">Saiba mais</Button>
            <Button color="contrast" href="/eventos">
              Eventos
            </Button>
          </Box>
        </Box>
        <Box
          sx={{
            display: "flex",
            width: { xs: "90vw", sm: "90vw", md: "633px", lg: "633px" },
          }}
        >
          <Image alt="" src="/images/Intro.svg" width="623px" height="510px" />
        </Box>
      </Box>
    </Box>
  );
};

export default Intro;
