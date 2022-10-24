import type { GetServerSideProps, InferGetServerSidePropsType, NextPage } from "next";
import React from "react";
import { Footer } from "../../components/Footer";
import { Initiatives } from "../../components/Initiatives";
import { Navbar } from "../../components/Navbar";
import { EventsIntro } from "../../components/EventsIntro";
import { EventsContent } from "../../components/EventsContent";
import { Event } from "../../models/model";
import { readFile } from "fs/promises"
import { join } from "path"

const Event: NextPage = ({eventsData}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  if (eventsData) {
    return (
      <div>
        <Navbar />
        <EventsIntro />
        <EventsContent events={eventsData} />
        <Initiatives />
        <Footer />
      </div>
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
    const filePath = join(process.cwd(),'pages', 'eventos', 'data.json')
    const dataString = (await readFile(filePath)).toString()
    const eventsData: Event[] = JSON.parse(dataString)
    context.res.setHeader('Cache-Control', 'public, s-maxage=120, stale-while-revalidate=239')
    return {props:{eventsData}}
  } catch (error) {
    console.log(error)
  }
  return {notFound:true}
}

export default Event;
