import { Box, Container, Grid } from "@mui/material";
import Image from "next/image";
import { Typography } from "../Typography";

const Initiatives: React.FC = () => {
  return (
    <Container id="iniciativas">
      <Grid
        container
        sx={{
          my:{
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
            <Typography variant="h3" sx={{mb: 1}}>Iniciativas</Typography>
            <Typography>
              Mas o que fazemos para contribuir para o desenvolvimento das pessoas
              através da tecnologia? Realizamos eventos, encontros, lives,
              podcasts e muitos outros conteúdos gratuitamente com o único
              objetivo de disseminar o conhecimento sobre diversas áreas da
              tecnologia e pessoas.
            </Typography>
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
                alt="Três imagens sobrepostas de algumas das iniciativas da comunidade, nesse caso: DEVPIRA Festival, DEVPIRA Multicast e Youtube do DEVPIRA"
                src="/images/Initiatives.png"
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

export default Initiatives;
