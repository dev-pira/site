import { Box, Container, Grid } from "@mui/material";
import Image from "next/image";
import { Typography } from "../Typography";

const About: React.FC = () => {
  return (
    <Container id="sobre">
      <Grid
        container
        sx={{
          my:{
            xs: '36px',
            md: '88px' 
          },
          flexDirection: {
            xs: 'column-reverse',
            md: 'row'
          }
        }}
      >
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
                height: 277
              }}
              >
              <Image alt="Ilustração de uma troca de mensagens entre um grupo de 3 pessoas" src="/images/About.svg" width={451} height={277} />
            </Box>
          </Box>
        </Grid>
        <Grid item xs={12} md={6}>
          <Box sx={{
            height: '100%',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
          }}>
            <Typography variant="h3" sx={{mb: 1}}>Sobre o DEVPIRA</Typography>
            <Typography>
              Somos uma comunidade feita de &quot;pessoal do TI&quot; para
              &quot;pessoal do TI&quot;, desde programadores, POs, QAs, PMs,
              designers e até quem não trabalha na área, mas ama pessoas e
              tecnologia! Não temos fins lucrativos, nosso intuito é disseminar o
              conhecimento sobre tecnologia em Piracicaba, &quot;aonde o peixe
              pára&quot; mas a tecnologia avança! Mantenha-se atualizado com as
              práticas modernas de mercado e desperte nas pessoas o interesse
              sobre a área.
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};

export default About;
