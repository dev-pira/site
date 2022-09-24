import type { NextPage } from "next";
import React from "react";
import { Footer } from "../../components/Footer";
import { Initiatives } from "../../components/Initiatives";
import { Navbar } from "../../components/Navbar";
import { EventsIntro } from "../../components/EventsIntro";
import { EventsContent } from "../../components/EventsContent";

const Event: NextPage = () => {
  const events = [
    {
      description:
        "Turpis fusce et, nisl, bibendum viverra pretium duis nulla euismod.",
      detailsLink: "/eventos/nome-do-evento",
      participateLink: "https://www.meetup.com/pt-BR/devpira/",
      title: "Nome do evento",
      type: "Meetup",
    },
    {
      description:
        "Turpis fusce et, nisl, bibendum viverra pretium duis nulla euismod.",
      detailsLink: "/eventos/nome-do-evento",
      title: "Nome do evento",
      type: "Meetup",
    },
    {
      description:
        "Turpis fusce et, nisl, bibendum viverra pretium duis nulla euismod.",
      detailsLink: "/eventos/nome-do-evento",
      title: "Nome do evento",
      type: "Meetup",
    },
    {
      description:
        "Turpis fusce et, nisl, bibendum viverra pretium duis nulla euismod.",
      detailsLink: "/eventos/nome-do-evento",
      title: "Nome do evento",
      type: "Meetup",
    },
    {
      description:
        "Turpis fusce et, nisl, bibendum viverra pretium duis nulla euismod.",
      detailsLink: "/eventos/nome-do-evento",
      title: "Nome do evento",
      type: 'Live',
    },
  ];
  return (
    <div>
      <Navbar />
      <EventsIntro />
      <EventsContent events={events} />
      <Initiatives />
      <Footer />
    </div>
  );
};

export default Event;
