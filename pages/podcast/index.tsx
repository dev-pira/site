import { NextPage } from "next";
import { Navbar } from "../../components/Navbar";
import { Footer } from "../../components/Footer";
import { Social } from "../../components/Social";
import { PodcastIntro } from "../../components/PodcastIntro";
import { PodcastContent } from "../../components/PodcastContent";

const PodcastPage: NextPage = () => {
  return (
    <>
      <Navbar />
      <PodcastIntro />
      <PodcastContent />
      <Social color="blue" />
      <Footer />
    </>
  );
};

export default PodcastPage;
