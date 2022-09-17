import type { NextPage } from "next";
import { About } from "../components/About";
import { Events } from "../components/Events";
import { Footer } from "../components/Footer";
import { Initiatives } from "../components/Initiatives";
import { Intro } from "../components/Intro";
import { Navbar } from "../components/Navbar";
import { Social } from "../components/Social";

const Home: NextPage = () => {
  return (
    <div>
      <Navbar />
      <Intro />
      <About />
      <Initiatives />
      <Events />
      <Social />
      <Footer />
    </div>
  );
};

export default Home;
