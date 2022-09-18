import type { NextPage } from "next";
import React from "react";
import { Footer } from "../components/Footer";
import { Initiatives } from "../components/Initiatives";
import { Navbar } from "../components/Navbar";
import { Box } from "../components/Box";
import { Typography } from "@mui/material";
import { EventCard } from "../components/EventCard";

const Event: NextPage = () => {
  const defaultWidth = '1345px'
  const events = [{
      description: 'Turpis fusce et, nisl, bibendum viverra pretium duis nulla euismod.',
      detailsLink: 'https://www.google.com',
      participateLink: 'https://www.google.com',
      title: 'Nome do evento'
  },{
      description: 'Turpis fusce et, nisl, bibendum viverra pretium duis nulla euismod.',
      detailsLink: 'https://www.google.com',
      title: 'Nome do evento'
  },{
      description: 'Turpis fusce et, nisl, bibendum viverra pretium duis nulla euismod.',
      detailsLink: 'https://www.google.com',
      title: 'Nome do evento'
  },{
      description: 'Turpis fusce et, nisl, bibendum viverra pretium duis nulla euismod.',
      detailsLink: 'https://www.google.com',
      title: 'Nome do evento'
  }]
  return (
    <div>
      <Navbar />
      <Box sx={{ display: "flex", flexDirection: "row", justifyContent: "center", backgroundColor: "#3f4052;"}}>
        <Box sx={{width: defaultWidth, display: 'flex', height: '560px', alignItems: 'center'}}>
          <Typography variant="h2" sx={{color: 'white', width:'546px'}}>Eventos da <span style={{background: 'linear-gradient(233.62deg, #c4c4c4 27.61%, #e63462 27.62%, #1e90ff 100%)', backgroundClip: 'text', color: 'transparent'}}>comunidade</span></Typography>
        </Box>
      </Box>
      <Box sx={{display: 'flex', justifyContent: 'center'}}>
        <Box sx={{width: defaultWidth, display: 'flex', flexDirection: 'column', padding: '56px 0', gap: '24px'}}>
          <Typography variant="h3">Meetups</Typography>
          <Box sx={{display: 'flex', flexDirection: 'row', gap: '16px'}}>
            {events.map((eventData) => {
                return <EventCard key={eventData.title} 
                    title={eventData.title}
                    description={eventData.description}
                    detailsLink={eventData.detailsLink}
                    participateLink={eventData.participateLink}
                    color='contrast'
                    shadowed
                    dateTime={new Date()} />
            })}
          </Box>
        </Box>
      </Box>
      <Initiatives />
      <Footer />
    </div>
  );
};

export default Event;
