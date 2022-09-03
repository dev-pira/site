import { Facebook, Instagram, LinkedIn } from "@mui/icons-material";
import { AppBar, Button, Toolbar, Typography } from "@mui/material";
import { Box } from "@mui/system";
import type { NextPage } from "next";
import React from "react";

const Home: NextPage = () => {

  const items = ['Sobre', 'Iniciativas', 'Eventos']
  const defaultWidth = '1345px'

  const cards = [1,2,3,4]

  return (
    <div>
      <AppBar position="static" sx={{display: 'flex', alignItems: 'center'}}>
        <Box sx={{display: 'flex', flexDirection: 'row', alignItems: 'center', width: '1108px'}}>
          <Typography>DEVPIRA</Typography>
          <Toolbar sx={{flexGrow: 1, justifyContent: 'center'}}>
            <Box >
              {items.map(item => (<Button key={item} sx={{color: '#fff'}}>{item}</Button>))}
            </Box>
          </Toolbar>
          <Button variant="contained">Call to Action</Button>
        </Box>
      </AppBar>
      {/* INTRO */}
      <Box sx={{display: 'flex', flexDirection: 'row', justifyContent: 'center'}}>
        <Box sx={{display: 'flex', width: defaultWidth, alignItems: 'center', justifyContent: 'space-around', height: '700px'}}>
          <Box sx={{display: 'flex', width: '546px', flexDirection: 'column', gap: '24px'}}>
            <Typography variant="h2">Comunidade que conecta pessoas e tecnologia</Typography>
            <Typography>Participe da comunidade que está transformando a vida das pessoas de Piracicaba e região.</Typography>
            <Box sx={{display: 'flex', flexDirection: 'row', gap: '8px'}}>
              <Button variant="contained">Saiba mais</Button>
              <Button variant="contained">Eventos</Button>
            </Box>
          </Box>
          <Box sx={{width: '633px', height: '520px', backgroundColor: '#900'}}>Imagem bacana</Box>
        </Box>
      </Box>
      {/* /INTRO */}
      {/* SOBRE */}
      <Box sx={{display: 'flex', flexDirection: 'row', justifyContent: 'center'}}>
        <Box sx={{display: 'flex', width: defaultWidth, alignItems: 'center', justifyContent: 'space-around', height: '453px'}}>
          <Box sx={{backgroundColor: '#090', width: '451px', height: '277px'}}>Imagem Bacana</Box>
          <Box sx={{display: 'flex', width: '546px', flexDirection: 'column', gap: '24px'}}>
            <Typography variant="h3">Sobre o DEVPIRA</Typography>
            <Typography>
              Turpis fusce et, nisl, bibendum viverra pretium duis nulla euismod. 
              Ac felis velit scelerisque consectetur in morbi odio. Egestas sit ultrices mi nulla consectetur egestas ac vivamus tortor. Enim nibh ut vitae tristique. 
              Nam vulputate lectus massa consequat tristique et suspendisse lorem. Tempor accumsan pellentesque cursus at cum nunc dolor. 
              Lacus mattis ultricies ut turpis lectus tortor elit tellus. Risus, in a dui platea sed a. Bibendum mauris vel, magna congue.
            </Typography>
          </Box>
        </Box>
      </Box>
      {/* /SOBRE */}
      {/* INICIATIVAS */}
      <Box sx={{display: 'flex', flexDirection: 'row', justifyContent: 'center', backgroundColor: '#F2F9FF'}}>
        <Box sx={{display: 'flex', width: defaultWidth, alignItems: 'center', justifyContent: 'space-around', height: '574px'}}>
          <Box sx={{display: 'flex', width: '546px', flexDirection: 'column', gap: '24px'}}>
            <Typography variant="h3">Iniciativas</Typography>
            <Typography>
              Turpis fusce et, nisl, bibendum viverra pretium duis nulla euismod. 
              Ac felis velit scelerisque consectetur in morbi odio. Egestas sit ultrices mi nulla consectetur egestas ac vivamus tortor. Enim nibh ut vitae tristique. 
              Nam vulputate lectus massa consequat tristique et suspendisse lorem. Tempor accumsan pellentesque cursus at cum nunc dolor. 
              Lacus mattis ultricies ut turpis lectus tortor elit tellus. Risus, in a dui platea sed a. Bibendum mauris vel, magna congue.
            </Typography>
          </Box>
          <Box sx={{backgroundColor: '#090', width: '451px', height: '277px'}}>Imagem Bacana</Box>
        </Box>
      </Box>
      {/* /INICIATIVAS */}
      {/* EVENTOS */}
      <Box sx={{display: 'flex', flexDirection: 'row', justifyContent: 'center', backgroundColor: '#212236;'}}>
        <Box sx={{display: 'flex', flexDirection: 'column', height: '957px', justifyContent: 'space-around'}}>
          {/* DESCRIPTION */}
          <Box sx={{display: 'flex', width: defaultWidth, alignItems: 'center', justifyContent: 'space-around', color: 'white'}}>
            <Box sx={{backgroundColor: '#090', width: '451px', height: '277px'}}>Imagem Bacana</Box>
            <Box sx={{display: 'flex', width: '546px', flexDirection: 'column', gap: '24px'}}>
              <Typography variant="h3">Eventos</Typography>
              <Typography>
                Turpis fusce et, nisl, bibendum viverra pretium duis nulla euismod. 
                Ac felis velit scelerisque consectetur in morbi odio. Egestas sit ultrices mi nulla consectetur egestas ac vivamus tortor. Enim nibh ut vitae tristique. 
                Nam vulputate lectus massa consequat tristique et suspendisse lorem. Tempor accumsan pellentesque cursus at cum nunc dolor. 
                Lacus mattis ultricies ut turpis lectus tortor elit tellus. Risus, in a dui platea sed a. Bibendum mauris vel, magna congue.
              </Typography>
              <Box>
                <Button variant="contained">Conhecer eventos</Button>
              </Box>
            </Box>
          </Box>
          {/* /DESCRIPTION */}
          {/* CARDS */}
          <Box sx={{display: 'flex', width: defaultWidth, flexDirection: 'row', justifyContent: 'center', alignItems: 'center', gap: '30px'}}>

            {cards.map((key) => {
              return <Box key={key} sx={{width: '255px', borderRadius: '10px', background: '#2B2C3E'}}>
                      <Box sx={{height: '159px', background: 'linear-gradient(180deg, #00BE85 0%, #1E90FF 100%)'}}>Image do banner do evento</Box>
                      <Box sx={{display: 'flex', padding: '24px', flexDirection: 'column', gap: '8px', color: 'white'}}>
                        <Typography variant="h4">Nome do evento</Typography>
                        <Typography>Turpis fusce et, nisl, bibendum viverra pretium duis nulla euismod.</Typography>
                        <Typography>10/12/2020 às 18h00</Typography>
                        <Box sx={{display: 'flex', flexDirection: 'row', gap: '8px'}}>
                          <Button variant="contained">Participar</Button>
                          <Button variant="contained">Mais</Button>
                        </Box>
                      </Box>
                    </Box>
            })}
            
          </Box>
          {/* /CARDS */}
        </Box>
      </Box>
      {/* /EVENTOS */}
      {/* <div>vagas</div> */}
      {/* <div>parceiros</div> */}
      {/* SOCIAL */}
      <Box sx={{display: 'flex', flexDirection: 'row', justifyContent: 'center', backgroundColor: '#00F4AB'}}>
        <Box sx={{display: 'flex', width: defaultWidth, alignItems: 'center', justifyContent: 'space-around', height: '367px'}}>
          <Box sx={{display: 'flex', width: '546px', flexDirection: 'column', gap: '24px'}}>
            <Typography variant="h3">Acompanhe nas redes sociais</Typography>
            <Box sx={{display: 'flex', flexDirection: 'row', gap: '8px'}}>
              <Button variant="contained" href="https://www.facebook.com/DEVPIRA/" disableElevation target="_blank">
                <Facebook /> /DEVPIRA
              </Button>
              <Button variant="contained" href="https://www.instagram.com/devpira_/" disableElevation target="_blank">
                <Instagram /> /devpira_
              </Button>
              <Button variant="contained" href="http://linkedin.com/company/devpira" disableElevation target="_blank">
                <LinkedIn /> /company/devpira
              </Button>
            </Box>
          </Box>
          <Box sx={{backgroundColor: '#090', width: '451px', height: '367px'}}>Imagem Bacana</Box>
        </Box>
      </Box>
      {/* /SOCIAL */}
      <div>rodapé</div>
    </div>
  );
};

export default Home;
