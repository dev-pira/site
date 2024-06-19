import { GetStaticProps, InferGetStaticPropsType, NextPage } from "next";
import { Navbar } from "../../components/Navbar";
import { Footer } from "../../components/Footer";
import { Social } from "../../components/Social";
import { PodcastIntro } from "../../components/PodcastIntro";
import { PodcastContent } from "../../components/PodcastContent";
import { fetchPodcastEpisodesData } from "../../services/podcastService";

const PodcastPage: NextPage = ({
  episodesData,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <>
      <Navbar />
      <PodcastIntro />
      <PodcastContent episodes={episodesData} />
      <Social color="blue" />
      <Footer />
    </>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  try {
    const episodesData = await fetchPodcastEpisodesData();
    return { props: { episodesData }, revalidate: 120 };
  } catch (error) {
    console.error(error);
  }
  return { notFound: true };
};

export default PodcastPage;
