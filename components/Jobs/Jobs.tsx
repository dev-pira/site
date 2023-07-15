import { Box, Container, Grid } from "@mui/material";
import Image from "next/image";
import { Button } from "../Button";
import { Typography } from "../Typography";

const Jobs: React.FC = () => {
  return (
    <Container id="iniciativas">
      <Grid
        container
        sx={{
          my: {
            xs: '36px',
            md: '88px'
          },
          flexDirection: {
            xs: 'column',
            md: 'row'
          }
        }}
      >
        <Grid item xs={12} md={6}>
          <Box sx={{
            height: '100%',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
          }}>
            <Typography variant="h3" sx={{ mb: 1 }}>Vagas de emprego</Typography>
            <Typography>
              Aqui você encontra as vagas de empregos compartilhadas por toda a comunidade.
              Um espaço para você encontrar uma nova oportunidade ou oferecer uma chance a quem procura!
            </Typography>
            <Box>
              <Button href="/vagas">
                Acessar Vagas
              </Button>
            </Box>
          </Box>
        </Grid>
        <Grid item xs={12} md={6}>
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              p: 2
            }}
          >
            <Box
              sx={{
                width: 451,
                height: 397
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
