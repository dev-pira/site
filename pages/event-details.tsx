import { Box, Typography } from "@mui/material";
import { NextPage } from "next";
import { EventDetailContent } from "../components/EventDetailContent";
import { EventDetailInfo } from "../components/EventDetailInfo";
import { EventDetailIntro } from "../components/EventDetailIntro";
import { EventPartners } from "../components/EventPartners";
import { Footer } from "../components/Footer";
import { Navbar } from "../components/Navbar";
import { Social } from "../components/Social";

const EventDetail: NextPage = () => {
    const now = new Date()
    const eventDetail = {
        title: 'Evento em destaque',
        shortDescription: 'Turpis fusce et, nisl, bibendum viverra pretium duis nulla euismod. Ac felis velit scelerisque consectetur in morbi odio. Egestas sit ultrices mi nulla consectetur egestas ac vivamus tortor.',
        description: `Turpis fusce et, nisl, bibendum viverra pretium duis nulla euismod. Ac felis velit scelerisque consectetur in morbi odio. Egestas sit ultrices mi nulla consectetur egestas ac vivamus tortor. Enim nibh ut vitae tristique. Nam vulputate lectus massa consequat tristique et suspendisse lorem. Tempor accumsan pellentesque cursus at cum nunc dolor. Lacus mattis ultricies ut turpis lectus tortor elit tellus. Risus, in a dui platea sed a. Bibendum mauris vel, magna congue.
        Enim nibh ut vitae tristique. Nam vulputate lectus massa consequat tristique et suspendisse lorem. Tempor accumsan pellentesque cursus at cum nunc dolor. Lacus mattis ultricies ut turpis lectus tortor elit tellus. Risus, in a dui platea sed a. Bibendum mauris vel, magna congue.`,
        dateTime: new Date(),
        place: 'Somewhere',
        otherInfo: 'Turpis fusce et, nisl, bibendum viverra pretium duis nulla euismod. Ac felis velit scelerisque consectetur in morbi odio.',
        partners: ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I'],
        tracks: [{
            name: 'Tema da trilha A',
            talks: [
                {title: 'Assunto de palestra muito interessante', speaker: 'Fulano da Silva Carvalho', speakerJob: 'Desenvolvedor na Ciclano', time: now},
                {title: 'Assunto de palestra muito interessante', speaker: 'Fulano da Silva Carvalho', speakerJob: 'Desenvolvedor na Ciclano', time: now},
                {title: 'Assunto de palestra muito interessante', speaker: 'Fulano da Silva Carvalho', speakerJob: 'Desenvolvedor na Ciclano', time: now},
                {title: 'Assunto de palestra muito interessante', speaker: 'Fulano da Silva Carvalho', speakerJob: 'Desenvolvedor na Ciclano', time: now},
            ]
        }]
    }
    return (
        <div>
            <Navbar />
            <EventDetailIntro {...eventDetail} />
            <EventDetailInfo {...eventDetail} />
            <EventDetailContent {...eventDetail} />
            <EventPartners {...eventDetail} />
            <Social color="blue" />
            <Footer />
        </div>
    )
}

export default EventDetail