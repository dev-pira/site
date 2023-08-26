import type { GetStaticProps, InferGetStaticPropsType, NextPage } from "next";
import React from "react";
import { Footer } from "../../components/Footer";
import { Initiatives } from "../../components/Initiatives";
import { Navbar } from "../../components/Navbar";
import { EventsIntro } from "../../components/EventsIntro";
import { EventsContent } from "../../components/EventsContent";
import { fetchEventsData } from "../../services/eventService";

const EventsPage: NextPage = ({
  eventsData,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  if (eventsData) {
    return (
      <>
        <Navbar />
        <EventsIntro />
        <EventsContent events={eventsData} />
        <Initiatives />
        <Footer />
      </>
    );
  }
  return (
    <div>
      <p>Não tem dados aqui xP</p>
    </div>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  try {
    const eventsData = await fetchEventsData();
    return { props: { eventsData }, revalidate: 120 };
  } catch (error) {
    console.error(error);
  }
  return { notFound: true };
};

export default EventsPage;
