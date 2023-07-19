import type { GetStaticProps, InferGetStaticPropsType, NextPage } from "next";
import { Navbar } from "../../components/Navbar";
import { GetInTouch } from "../../components/GetInTouch";
import { Members } from "../../components/Members";
import { Social } from "../../components/Social";
import { Footer } from "../../components/Footer";
import { fetchMembersData } from "../../services/contactService";

const ContactPage: NextPage = ({
  members,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <div>
      <Navbar />
      <GetInTouch />
      <Members members={members} />
      <Social />
      <Footer />
    </div>
  );
};

export const getStaticProps: GetStaticProps = () => {
  try {
    const members = fetchMembersData();
    return { props: { members }, revalidate: 120 };
  } catch (error) {
    console.error(error);
  }
  return { notFound: true };
};

export default ContactPage;
