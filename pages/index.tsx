import type { GetServerSideProps, InferGetServerSidePropsType, NextPage } from "next";
import { About } from "../components/About";
import { Events } from "../components/Events";
import { Footer } from "../components/Footer";
import { Initiatives } from "../components/Initiatives";
import { Intro } from "../components/Intro";
import { Navbar } from "../components/Navbar";
import { Social } from "../components/Social";
import Partners from "../components/Partners/Partners";
import { fetchIndexData } from "../apis/cms";
import { Partner } from "../models/model";

const HomePage: NextPage = ({ eventsData }: InferGetServerSidePropsType<typeof getServerSideProps>) => {

  const mockedPartners: Partner[] = [
    {
      name: 'não tenho logo 😊',
      link: 'https://example.com',
      category: 'Educação'
    },
    {
      name: 'Pecege',
      link: 'https://example.com',
      logoUrl: 'https://picsum.photos/120/80',
      category: 'Educação'
    },
    {
      name: 'não tenho link 😊',
      logoUrl: 'https://picsum.photos/90/90',
      category: 'Educação'
    },
    {
      name: 'AmBem Tech',
      link: 'https://example.com',
      logoUrl: 'https://picsum.photos/70/90',
      category: 'Indústria'
    },
    {
      name: 'não tenho categoria 😊',
      link: 'https://example.com',
      logoUrl: 'https://picsum.photos/90/200',
    },
  ]

  return (
    <div>
      <Navbar />
      <Intro />
      <About />
      <Initiatives />
      <Events events={eventsData} />
      <Partners description="A comunidade não tem fins lucrativos e conta com a energia das pessoas e a parceria de orgãos e instituições para levar formação, conhecimento e networking para todos. Seja também um agente ativo desse ecossistema sendo um apoiador. Entre em contato!" partners={mockedPartners} />
      <Social />
      <Footer />
    </div>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  try {
    const eventsData = await fetchIndexData()
    context.res.setHeader('Cache-Control', 'public, s-maxage=120, stale-while-revalidate=239')
    return { props: { eventsData } }
  } catch (error) {
    console.error(error)
  }
  return { notFound: true }
}

export default HomePage;
