import type {
  GetServerSideProps,
  InferGetServerSidePropsType,
  NextPage,
} from "next";
import { Navbar } from "../../components/Navbar";
import { GetInTouch } from "../../components/GetInTouch";
import { Members } from "../../components/Members";
import { Social } from "../../components/Social";
import { Footer } from "../../components/Footer";
import { fetchIndexData } from "../../services/indexService";

const HomePage: NextPage = ({
  eventsData,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  return (
    <div>
      <Navbar />
      <GetInTouch />
      <Members events={eventsData} />
      <Social />
      <Footer />
    </div>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  try {
    const eventsData = await fetchIndexData();
    context.res.setHeader(
      "Cache-Control",
      "public, s-maxage=120, stale-while-revalidate=239"
    );
    return { props: { eventsData } };
  } catch (error) {
    console.error(error);
  }
  return { notFound: true };
};

export default HomePage;
