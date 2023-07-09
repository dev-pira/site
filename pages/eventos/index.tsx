import type { GetServerSideProps, InferGetServerSidePropsType, NextPage } from "next";
import React from "react";
import { Footer } from "../../components/Footer";
import { Initiatives } from "../../components/Initiatives";
import { Navbar } from "../../components/Navbar";
import { EventsIntro } from "../../components/EventsIntro";
import { EventsContent } from "../../components/EventsContent";
import { fetchEventsData } from "../../apis/cms";

const EventsPage: NextPage = ({eventsData}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
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
  )
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  try {
    const eventsData = await fetchEventsData()
    context.res.setHeader('Cache-Control', 'public, s-maxage=120, stale-while-revalidate=239')
    return {props:{eventsData}}
  } catch (error) {
    console.error(error)
  }
  return {notFound:true}
}

export default EventsPage;
