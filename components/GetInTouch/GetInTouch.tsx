import { Box, Container, Grid } from "@mui/material";
import Image from "next/image";
import { Typography } from "../Typography";
import Link from "next/link";
import { Button } from "../Button";

const GetInTouch: React.FC = () => {
  return (
    <Container>
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
            justifyContent: 'space-between',
            py: '5rem'
          }}>
            <Typography variant="h3">Fale com a
              <Typography variant="span" color="gradient_blue"> comunidade</Typography>
            </Typography>

            <Typography>
              A comunidade DEVPIRA é formada por voluntários e está
              aberta para a sua participação! Além disso sempre procuramos parceiros
              para realizar os nossos eventos!
            </Typography>

            <Typography variant="h4" color="gradient_blue"><Link href={'mailto:contato@devpira.com.br'} title={'contato@devpira.com.br'}>contato@devpira.com.br</Link></Typography>
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
                height: 397,
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                py: '5rem'
              }}
            >
              <Typography variant="h4">Envie sua mensagem</Typography>
              <Typography variant="h5">email</Typography>
              <Typography variant="h5">whatsapp</Typography>
              <Typography variant="h5">mensagem</Typography>
              <div>
                <Button variant="contained">Enviar</Button>
              </div>

            </Box>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};

export default GetInTouch;
