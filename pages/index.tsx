import { Facebook, Instagram, LinkedIn } from "@mui/icons-material";
import { AppBar, Button, Toolbar } from "@mui/material";
import { Box } from "@mui/system";
import type { NextPage } from "next";
import React from "react";
import { Text } from "../components";

const Home: NextPage = () => {

  const items = ['Sobre', 'Iniciativas', 'Eventos'];

  return (
    <div>
      <AppBar position="static">
        <Toolbar>
          <Box sx={{display:'block'}}>
            {items.map(item => (<Button key={item} sx={{color: '#fff'}}>{item}</Button>))}
          </Box>
        </Toolbar>
      </AppBar>
      <div>banner</div>
      <div>sobre</div>
      <div>iniciativas</div>
      <div>eventos</div>
      {/* <div>vagas</div> */}
      {/* <div>parceiros</div> */}
      <Box>
        <Text>Acompanhe nas redes sociais</Text>
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
      <div>rodapé</div>
    </div>
  );
};

export default Home;
