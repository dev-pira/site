import type { NextPage } from "next";
import React from "react";
import { Footer } from "../../components/Footer";
import { Initiatives } from "../../components/Initiatives";
import { Navbar } from "../../components/Navbar";
<<<<<<< HEAD
import { Box } from "../../components/Box";
import { EventCard } from "../../components/EventCard";

const Event: NextPage = () => {
  const defaultWidth = "1345px";
  const events = [
    {
      description:
        "Turpis fusce et, nisl, bibendum viverra pretium duis nulla euismod.",
      detailsLink: "https://www.google.com",
      participateLink: "https://www.google.com",
      title: "Nome do evento",
    },
    {
      description:
        "Turpis fusce et, nisl, bibendum viverra pretium duis nulla euismod.",
      detailsLink: "https://www.google.com",
      title: "Nome do evento",
    },
    {
      description:
        "Turpis fusce et, nisl, bibendum viverra pretium duis nulla euismod.",
      detailsLink: "https://www.google.com",
      title: "Nome do evento",
    },
    {
      description:
        "Turpis fusce et, nisl, bibendum viverra pretium duis nulla euismod.",
      detailsLink: "https://www.google.com",
      title: "Nome do evento",
    },
  ];
  return (
    <div>
      <Navbar />
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          backgroundColor: "#212236;",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flex: "none",
            height: "560px",
          }}
        ></Box>
      </Box>

      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          backgroundColor: "",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "",
            height: "550px",
            justifyContent: "space-around",
          }}
        >
          <Box
            sx={{
              display: "flex",
              width: defaultWidth,
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
              gap: "24px",
            }}
          >
            {events.map((eventData) => {
              return (
                <EventCard
                  key={eventData.title}
                  title={eventData.title}
                  description={eventData.description}
                  detailsLink={eventData.detailsLink}
                  participateLink={eventData.participateLink}
                  color="contrast"
                  dateTime={new Date()}
                />
              );
            })}
          </Box>
        </Box>
      </Box>
=======
import { EventsIntro } from "../../components/EventsIntro";
import { EventsContent } from "../../components/EventsContent";

const Event: NextPage = () => {
  const events = [{
      description: 'Turpis fusce et, nisl, bibendum viverra pretium duis nulla euismod.',
      detailsLink: 'https://www.google.com',
      participateLink: 'https://www.google.com',
      title: 'Nome do evento',
      type: 'Meetup'
  },{
      description: 'Turpis fusce et, nisl, bibendum viverra pretium duis nulla euismod.',
      detailsLink: 'https://www.google.com',
      title: 'Nome do evento',
      type: 'Meetup'
  },{
      description: 'Turpis fusce et, nisl, bibendum viverra pretium duis nulla euismod.',
      detailsLink: 'https://www.google.com',
      title: 'Nome do evento',
      type: 'Meetup'
  },{
      description: 'Turpis fusce et, nisl, bibendum viverra pretium duis nulla euismod.',
      detailsLink: 'https://www.google.com',
      title: 'Nome do evento',
      type: 'Meetup'
  }]
  return (
    <div>
      <Navbar />
      <EventsIntro />
      <EventsContent events={events} />
>>>>>>> b20937c6dcf98822fcd1e0c8c4e2bfa4e90104ea
      <Initiatives />
      <Footer />
    </div>
  );
};

export default Event;
