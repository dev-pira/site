import { Facebook, Instagram, LinkedIn } from "@mui/icons-material";
import { AppBar, Button, Toolbar, Typography } from "@mui/material";
import { Box } from "@mui/system";
import type { NextPage } from "next";
import React from "react";
import { About } from "../components/About";
import { Initiatives } from "../components/Initiatives";
import { Intro } from "../components/Intro";
import { Social } from "../components/Social";

const Home: NextPage = () => {

  const items = ['Sobre', 'Iniciativas', 'Eventos']
  const defaultWidth = '1345px'

  const cards = [1,2,3,4]

  return (
    <div>
      <AppBar position="static" color="transparent" sx={{display: 'flex', alignItems: 'center', boxShadow: 'none'}}>
        <Box sx={{display: 'flex', flexDirection: 'row', alignItems: 'center', width: '1108px'}}>
          <Typography>DEVPIRA</Typography>
          <Toolbar sx={{flexGrow: 1, justifyContent: 'center'}}>
            <Box >
              {items.map(item => (<Button key={item}>{item}</Button>))}
            </Box>
          </Toolbar>
          <Button variant="contained">Call to Action</Button>
        </Box>
      </AppBar>
      <Intro />
      <About />
      <Initiatives />
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
                      <Box sx={{height: '159px', background: 'linear-gradient(180deg, #00BE85 0%, #1E90FF 100%)', borderTopLeftRadius: '10px', borderTopRightRadius: '10px'}}>Image do banner do evento</Box>
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
      <Social />
      <AppBar position="static" color="transparent" sx={{display: 'flex', alignItems: 'center'}}>
        <Box sx={{display: 'flex', flexDirection: 'row', alignItems: 'center', width: '1108px'}}>
          <Typography>DEVPIRA</Typography>
          <Toolbar sx={{flexGrow: 1, justifyContent: 'end'}}>
            <Box >
              {items.map(item => (<Button key={item}>{item}</Button>))}
            </Box>
          </Toolbar>
        </Box>
      </AppBar>
    </div>
  );
};

export default Home;
