import { NextPage, InferGetServerSidePropsType, GetServerSideProps } from "next";
import React from "react";
import { Footer } from "../../components/Footer";
import { Navbar } from "../../components/Navbar";
import { JobsIntro } from "../../components/JobsIntro";
import { JobsContent } from "../../components/JobsContent";
import { fetchJobsData } from "../../apis/cms";
import {SearchBar} from "../../components/SearchBar";

const JobsPage: NextPage = ({ jobsData }: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  if (jobsData) {
    return (
      <div>
        <Navbar />
        <JobsIntro />
        <SearchBar placeholder="Procure por empresas, perfis, tecnologias, localidades ..." />
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
  const query = context.query.pesquisa as string
  try {
    const jobsData = await fetchJobsData(query)
    context.res.setHeader('Cache-Control', 'public, s-maxage=120, stale-while-revalidate=239')
    return { props: { jobsData } }
  } catch (error) {
    console.log(error)
  }
  return { notFound: true }
}

export default JobsPage;
