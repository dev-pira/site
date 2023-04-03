import { Box, Container, Grid } from "@mui/material";
import Image from "next/image";
import { Button } from "../Button";
import { Typography } from "../Typography";

const Intro: React.FC = () => {
  return (
    <Container>
      <Grid container>
        <Grid item md={6}>
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
        </Grid>
        <Grid item xs={12} md={6} sx={{
            display: 'flex',
            justifyContent: {
              xs: 'center',
              md: 'end'
            }
          }}
        >
          <Box
            sx={{
              maxWidth: { xs: "90vw", sm: "90vw", md: "633px", lg: "633px" },
            }}
          >
            <Image alt="Ilustração de uma pessoa usando óculos e fones de ouvido, sentada perante um computador" src="/images/Intro.svg" width={623} height={510} />
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Intro;
