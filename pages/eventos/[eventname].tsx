import {
  GetServerSideProps,
  InferGetServerSidePropsType,
  NextPage,
} from "next";
import { EventDetailContent } from "../../components/EventDetailContent";
import { EventDetailInfo } from "../../components/EventDetailInfo";
import { EventDetailIntro } from "../../components/EventDetailIntro";
import { Footer } from "../../components/Footer";
import { Navbar } from "../../components/Navbar";
import { Social } from "../../components/Social";
import { EventDetailGallery } from "../../components/EventDetailGallery";
import Partners from "../../components/Partners/Partners";
import { EventDetailVideo } from "../../components/EventDetailVideo";
import { getEventData } from "../../services/eventService";

const EventDetailPage: NextPage = ({
  eventData,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
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

export const getServerSideProps: GetServerSideProps = async (context) => {
  try {
    const { eventname } = context.query;
    const eventData = await getEventData(eventname as string);
    if (eventData) {
      context.res.setHeader(
        "Cache-Control",
        "public, s-maxage=120, stale-while-revalidate=239"
      );
      return { props: { eventData } };
    }
  } catch (error) {
    console.error(error);
  }
  return { notFound: true };
};

export default EventDetailPage;
