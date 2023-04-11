import { Box, Container, Grid } from "@mui/material";
import Image from "next/image";
import { Button } from "../Button";
import { Typography } from "../Typography";

const Intro: React.FC = () => {
  return (
    <Container>
      <Grid container>
        <Grid item xs={12} md={8}>
          <Box
            sx={{
              display: "flex",
              width: { xs: "100vw", sm: "100vw", md: "50%", lg: "50%" },
              flexDirection: {
                xs: 'column',
              },
              gap: "24px",
              mt: {
                xs: 1,
                md: 10
              },
              mb: {
                xs: '48px',
                md: '148px'
              },
              ml: {
                md: '118px'
              },
              position: 'relative',
              zIndex: 0
            }}
          >
            <Box>
              <Typography variant={"h1"} >
                Comunidade que
                <Typography variant="introSpan" color="gradient_green">
                  {" "}
                  conecta pessoas{" "}
                </Typography>
                e tecnologia
              </Typography>
              <Typography sx={{pt: 2}}>
                Participe da comunidade que está transformando a vida das pessoas de
                Piracicaba e região.
              </Typography>
            </Box>
            <Box sx={{
              display: "flex",
              flexDirection: "row",
              gap: "8px"
            }}>
              <Button href="#sobre">Saiba mais</Button>
              <Button color="contrast" href="/eventos">
                Eventos
              </Button>
            </Box>
          </Box>
        </Grid>
        <Grid item xs={12} md={4} sx={{
            display: 'flex',
            justifyContent: {
              xs: 'center',
              md: 'end'
            },
            minHeight: {
              xs: '156px',
              md: 'initial'
            },
            alignItems: 'center',
            position: 'relative'
          }}
        >
          <Box
            sx={{
              width: { xs: "90vw", sm: "90vw", md: "633px", lg: "633px" },
              position: 'absolute',
              zIndex: -1
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
