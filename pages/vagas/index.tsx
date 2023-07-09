import { NextPage, GetStaticProps, InferGetStaticPropsType } from "next";
import React from "react";
import { Footer } from "../../components/Footer";
import { Navbar } from "../../components/Navbar";
import { JobsIntro } from "../../components/JobsIntro";
import { JobsContent } from "../../components/JobsContent";
import { fetchJobsData } from "../../apis/cms";

const JobsPage: NextPage = ({ jobsData }: InferGetStaticPropsType<typeof getStaticProps>) => {
  if (jobsData) {
    return (
      <>
        <Navbar />
        <JobsIntro />
        <JobsContent jobs={jobsData} />
        <Footer />
      </>
    );
  }
  return (
    <div>
      <p>Não tem dados aqui xP</p>
    </div>
  )
};

export const getStaticProps: GetStaticProps = async () => {
  try {
    const jobsData= await fetchJobsData()
    return { props: { jobsData },revalidate: 30 }
  } catch (error) {
    console.log(error)
  }
  return { notFound: true }
}

export default JobsPage;
