import {
  GetStaticPaths,
  GetStaticProps,
  InferGetStaticPropsType,
  NextPage,
} from "next";
import { EventDetailContent } from "../../components/EventDetailContent";
import { EventDetailInfo } from "../../components/EventDetailInfo";
import { EventDetailIntro } from "../../components/EventDetailIntro";
import { Footer } from "../../components/Footer";
import { Navbar } from "../../components/Navbar";
import { Social } from "../../components/Social";
import { EventDetailGallery } from "../../components/EventDetailGallery";
import { EventDetailGallery1 } from "../../components/EventDetailGallery1";
import Partners from "../../components/Partners/Partners";
import { EventDetailVideo } from "../../components/EventDetailVideo";
import { fetchEventsNames, getEventData } from "../../services/eventService";
import { ParsedUrlQuery } from "querystring";

const EventDetailPage: NextPage = ({
  eventData,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  if (eventData) {
    eventData.dateTime = new Date(eventData.dateTime);
    return (
      <>
        <Navbar />
        <EventDetailIntro {...eventData} />
        <EventDetailInfo {...eventData} />
        <EventDetailContent {...eventData} />
        <EventDetailVideo {...eventData} />
        <EventDetailGallery {...eventData} />
        <EventDetailGallery1 {...eventData} />
        <Partners
          {...eventData}
          description="A comunidade não tem fins lucrativos e conta com a energia das pessoas e a parceria de orgãos e instituições para realizar encontros como esse. Seja também um agente ativo desse ecossistema sendo um apoiador. Entre em contato!"
        />
        <Social color="blue" />
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

export const getStaticPaths: GetStaticPaths = async () => {
  let paths: { params: ParsedUrlQuery; locale?: string }[] = [];
  try {
    paths = await fetchEventsNames();
  } catch (error) {
    console.error(error);
  }
  return {
    paths,
    fallback: "blocking",
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  try {
    const eventData = await getEventData(params?.eventname as string);
    return { props: { eventData }, revalidate: 120 };
  } catch (error) {
    console.error(error);
  }
  return { notFound: true };
};

export default EventDetailPage;
