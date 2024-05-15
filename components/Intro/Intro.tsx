import { Box, Container, Grid } from "@mui/material";
import Image from "next/legacy/image";
import { Button } from "../Button";
import { Typography } from "../Typography";
import { sendGAEvent } from "@next/third-parties/google";

const Intro: React.FC = () => {
  return (
    <Container id="intro">
      <Grid
        container
        sx={{
          mt: {
            xs: "48px",
            md: "92px",
          },
          mb: {
            xs: "48px",
            md: "148px",
          },
          flexDirection: {
            xs: "column",
            md: "row",
          },
        }}
      >
        <Grid item xs={12} md={6}>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: "24px",
            }}
          >
            <Box>
              <Typography
                variant={"h1"}
                sx={{ fontSize: { xs: "3.5rem", sm: "4.25rem" } }}
              >
                Comunidade que
                <Typography variant="introSpan" color="gradient_green">
                  {" "}
                  conecta pessoas{" "}
                </Typography>
                e tecnologia
              </Typography>
              <Typography sx={{ pt: 2 }}>
                Participe da comunidade que está transformando a vida das
                pessoas de Piracicaba e região.
              </Typography>
            </Box>
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                gap: "8px",
              }}
            >
              <Button
                href="#sobre"
                onClick={() =>
                  sendGAEvent({
                    event: "Clicou em botão na Intro",
                    value: "Sobre",
                  })
                }
              >
                Saiba mais
              </Button>
              <Button
                color="contrast"
                href="/eventos"
                onClick={() =>
                  sendGAEvent({
                    event: "Clicou em botão na seção Intro da Main",
                    value: "Eventos",
                  })
                }
              >
                Eventos
              </Button>
            </Box>
          </Box>
        </Grid>
        <Grid item xs={12} md={6}>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              p: 2,
            }}
          >
            <Box
              sx={{
                width: 623,
                height: { xs: "340px", sm: "510px" },
              }}
            >
              <Image
                alt="Ilustração de uma pessoa usando óculos e fones de ouvido, sentada perante um computador"
                src="/images/Intro.svg"
                width={623}
                height={510}
              />
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Intro;
