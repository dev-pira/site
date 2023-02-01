import { GetServerSideProps, InferGetServerSidePropsType, NextPage } from "next";
import { EventDetailContent } from "../../components/EventDetailContent";
import { EventDetailInfo } from "../../components/EventDetailInfo";
import { EventDetailIntro } from "../../components/EventDetailIntro";
import { Footer } from "../../components/Footer";
import { Navbar } from "../../components/Navbar";
import { Social } from "../../components/Social";
import { Event } from "../../models/model";
import { readFile } from "fs/promises"
import { join } from "path"
import Partners from "../../components/Partners/Partners";

const EventDetailPage: NextPage = ({eventData}: InferGetServerSidePropsType<typeof getServerSideProps>) => {

    if (eventData) {
        eventData.dateTime = new Date(eventData.dateTime)
        return (
            <div>
                <Navbar />
                <EventDetailIntro {...eventData} />
                <EventDetailInfo {...eventData} />
                <EventDetailContent {...eventData} />
                <Partners {...eventData} description="A comunidade não tem fins lucrativos e conta com a energia das pessoas e a parceria de orgãos e instituições para realizar encontros como esse. Seja também um agente ativo desse ecossistema sendo um apoiador. Entre em contato!" />
                <Social color="blue" />
                <Footer />
            </div>
        )
    }
    return (
        <div>
            <p>Não tem dados aqui xP</p>
        </div>
    )
}

export const getServerSideProps: GetServerSideProps = async (context) => {
    try {
        const {eventname} = context.query
        const filePath = join(process.cwd(),'pages', 'eventos', 'data.json')
        const dataString = (await readFile(filePath)).toString()
        let data: Event[] = JSON.parse(dataString)
        const filteredData = data.filter(e => e.key === eventname)
        if (filteredData.length) {
            context.res.setHeader('Cache-Control', 'public, s-maxage=120, stale-while-revalidate=239')
            return {props:{eventData: filteredData[0]}}
        }
    }
    catch(error) {
        console.log(error)
    }
    return {notFound: true}
}

export default EventDetailPage