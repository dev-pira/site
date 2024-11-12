import { GetStaticProps, InferGetStaticPropsType, NextPage } from "next";
import { fetchCoursesData } from "../../services/courseService";
import { Navbar } from "../../components/Navbar";
import { Footer } from "../../components/Footer";
import { CoursesIntro } from "../../components/CoursesIntro";

const CoursesPage: NextPage = ({
  coursesData,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  if (coursesData) {
    return (
      <>
        <Navbar />
        <CoursesIntro />
        <CoursesContent courses={coursesData} />
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

export const getStaticProps: GetStaticProps = async () => {
  try {
    const coursesData = await fetchCoursesData();
    return { props: { coursesData }, revalidate: 120 };
  } catch (error) {
    console.error(error);
  }
  return { notFound: true };
};

export default CoursesPage;
