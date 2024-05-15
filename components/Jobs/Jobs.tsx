import { Box, Container, Grid } from "@mui/material";
import Image from "next/legacy/image";
import { Button } from "../Button";
import { Typography } from "../Typography";
import { sendGAEvent } from "@next/third-parties/google";

const Jobs: React.FC = () => {
  return (
    <Container id="iniciativas">
      <Grid
        container
        sx={{
          my: {
            xs: "36px",
            md: "88px",
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
              height: "100%",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              gap: { xs: "4px", sm: "20px" },
            }}
          >
            <Typography variant="h3" sx={{ mb: { xs: 4, sm: 1 } }}>
              Vagas de emprego
            </Typography>
            <Typography>
              Aqui você encontra as vagas de empregos compartilhadas por toda a
              comunidade. Um espaço para você encontrar uma nova oportunidade ou
              oferecer uma chance a quem procura!
            </Typography>
            <Box
              sx={{
                mt: { xs: "24px", sm: 0 },
              }}
            >
              <Button
                href="/vagas"
                onClick={() =>
                  sendGAEvent({
                    event: "Clicou no botão na seção Vagas da Main",
                    value: "Vagas",
                  })
                }
              >
                Acessar Vagas
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
              mt: { xs: "32px", sm: 0 },
            }}
          >
            <Box
              sx={{
                width: 451,
                height: { xs: "340px", sm: "auto" },
              }}
            >
              <Image
                alt="Garota com capa e maleta executiva na mao em posicao de quem vai voar"
                src="/images/JobsHeader/Fly.svg"
                width={451}
                height={397}
              />
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Jobs;
