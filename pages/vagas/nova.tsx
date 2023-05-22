import { NextPage } from "next";
import { Navbar } from "../../components/Navbar";
import { Footer } from "../../components/Footer";
import { JobsIntro } from "../../components/JobsIntro";
import { JobForm } from "../../components/JobForm";
import { createJob } from "../../apis/cms";

const NewJobPage: NextPage = () => {
    return (
        <div>
            <Navbar />
            <JobsIntro />
            <JobForm action={async(data) => {
                const result = await createJob(data)
            }} />
            <Footer />
        </div>
    )
}

export default NewJobPage