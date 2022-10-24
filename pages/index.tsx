import type { GetServerSideProps, InferGetServerSidePropsType, NextPage } from "next";
import { About } from "../components/About";
import { Events } from "../components/Events";
import { Footer } from "../components/Footer";
import { Initiatives } from "../components/Initiatives";
import { Intro } from "../components/Intro";
import { Navbar } from "../components/Navbar";
import { Social } from "../components/Social";
import { Event } from "../models/model";
import { readFile } from "fs/promises"
import { join } from "path"

const Home: NextPage = ({eventsData}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  return (
    <div>
      <Navbar />
      <Intro />
      <About />
      <Initiatives />
      <Events events={eventsData} />
      <Social />
      <Footer />
    </div>
  );
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

export default Home;
