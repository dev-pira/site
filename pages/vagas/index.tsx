import type { GetServerSideProps, InferGetServerSidePropsType, NextPage } from "next";
import React from "react";
import { Footer } from "../../components/Footer";
import { Navbar } from "../../components/Navbar";
import { JobsIntro } from "../../components/JobsIntro";
// import { JobsFilter } from "../../components/JobsFilter";
import { JobsContent } from "../../components/JobsContent";
import { fetchVancanciesData } from "../../apis/cms";

const EventsPage: NextPage = ({ jobsData }: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  if (jobsData) {
    return (
      <div>
        <Navbar />
        <JobsIntro />
        {/* <JobsFilter /> */}
        <JobsContent jobs={jobsData} />
        <Footer />
      </div>
    );
  }
  return (
    <div>
      <p>Não tem dados aqui xP</p>
    </div>
  )
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  try {
    const jobsData = await fetchVancanciesData()
    context.res.setHeader('Cache-Control', 'public, s-maxage=120, stale-while-revalidate=239')
    return { props: { jobsData } }
  } catch (error) {
    console.log(error)
  }
  return { notFound: true }
}

export default EventsPage;
