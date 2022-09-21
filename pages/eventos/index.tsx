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
      detailsLink: "https://www.google.com",
      participateLink: "https://www.google.com",
      title: "Nome do evento",
      type: "Meetup",
    },
    {
      description:
        "Turpis fusce et, nisl, bibendum viverra pretium duis nulla euismod.",
      detailsLink: "https://www.google.com",
      title: "Nome do evento",
      type: "Meetup",
    },
    {
      description:
        "Turpis fusce et, nisl, bibendum viverra pretium duis nulla euismod.",
      detailsLink: "https://www.google.com",
      title: "Nome do evento",
      type: "Meetup",
    },
    {
      description:
        "Turpis fusce et, nisl, bibendum viverra pretium duis nulla euismod.",
      detailsLink: "https://www.google.com",
      title: "Nome do evento",
      type: "Meetup",
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
