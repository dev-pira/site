import type {
  GetServerSideProps,
  InferGetServerSidePropsType,
  NextPage,
} from "next";
import { About } from "../components/About";
import { Events } from "../components/Events";
import { Footer } from "../components/Footer";
import { Initiatives } from "../components/Initiatives";
import { Jobs } from "../components/Jobs";
import { Intro } from "../components/Intro";
import { Navbar } from "../components/Navbar";
import { Social } from "../components/Social";
import Partners from "../components/Partners/Partners";
import { fetchIndexData } from "../services/indexService";

const HomePage: NextPage = ({
  eventsData,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  return (
    <>
      <Navbar />
      <Intro />
      <About />
      <Initiatives />
      <Events events={eventsData} />
      <Jobs />
      <Partners description="A comunidade não tem fins lucrativos e conta com a energia das pessoas e a parceria de orgãos e instituições para levar formação, conhecimento e networking para todos. Seja também um agente ativo desse ecossistema sendo um apoiador. Entre em contato!" />
      <Social />
      <Footer />
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  try {
    const eventsData = await fetchIndexData();
    context.res.setHeader(
      "Cache-Control",
      "public, s-maxage=120, stale-while-revalidate=239",
    );
    return { props: { eventsData } };
  } catch (error) {
    console.error(error);
  }
  return { notFound: true };
};

export default HomePage;
