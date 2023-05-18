import { NextPage } from "next";
import { Navbar } from "../../components/Navbar";
import { Footer } from "../../components/Footer";
import { JobsIntro } from "../../components/JobsIntro";
import { JobForm } from "../../components/JobForm";

const NewJobPage: NextPage = () => {
    return (
        <div>
            <Navbar />
            <JobsIntro />
            <JobForm />
            <Footer />
        </div>
    )
}

export default NewJobPage