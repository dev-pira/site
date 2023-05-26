import { NextPage } from "next";
import { Navbar } from "../../components/Navbar";
import { Footer } from "../../components/Footer";
import { JobsIntro } from "../../components/JobsIntro";
import { JobForm } from "../../components/JobForm";
import { CreateJobRequest } from "../../models/model";

const NewJobPage: NextPage = () => {

    const action= async (data: CreateJobRequest) => {
        const url = '/api/jobs'
        const headers = {'Content-Type': 'application/json'}
        const body = JSON.stringify(data)
        const result = await fetch(url, {method: 'POST', headers, body})
        console.log(result)
    }

    return (
        <div>
            <Navbar />
            <JobsIntro />
            <JobForm action={action} />
            <Footer />
        </div>
    )
}

export default NewJobPage