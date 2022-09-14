import { Box, Grid, Typography } from "@mui/material";
import { NextPage } from "next";
import { Button } from "../components";
import { EventDetailInfo } from "../components/EventDetailInfo";
import { EventDetailIntro } from "../components/EventDetailIntro";
import { EventPartners } from "../components/EventPartners";
import { Footer } from "../components/Footer";
import { Navbar } from "../components/Navbar";
import { Social } from "../components/Social";

const EventDetail: NextPage = () => {

    const defaultWidth = '1345px'
    const eventDetail = {
        title: 'Evento em destaque',
        shortDescription: 'Turpis fusce et, nisl, bibendum viverra pretium duis nulla euismod. Ac felis velit scelerisque consectetur in morbi odio. Egestas sit ultrices mi nulla consectetur egestas ac vivamus tortor.',
        description: `Turpis fusce et, nisl, bibendum viverra pretium duis nulla euismod. Ac felis velit scelerisque consectetur in morbi odio. Egestas sit ultrices mi nulla consectetur egestas ac vivamus tortor. Enim nibh ut vitae tristique. Nam vulputate lectus massa consequat tristique et suspendisse lorem. Tempor accumsan pellentesque cursus at cum nunc dolor. Lacus mattis ultricies ut turpis lectus tortor elit tellus. Risus, in a dui platea sed a. Bibendum mauris vel, magna congue.
        Enim nibh ut vitae tristique. Nam vulputate lectus massa consequat tristique et suspendisse lorem. Tempor accumsan pellentesque cursus at cum nunc dolor. Lacus mattis ultricies ut turpis lectus tortor elit tellus. Risus, in a dui platea sed a. Bibendum mauris vel, magna congue.`,
        dateTime: new Date(),
        place: 'Somewhere',
        otherInfo: 'Turpis fusce et, nisl, bibendum viverra pretium duis nulla euismod. Ac felis velit scelerisque consectetur in morbi odio.',
        partners: ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I']
    }
    const now = new Date()
    const trilhas = [{
        name: 'Tema da trilha',
        talks: [
            {title: 'Assunto de palestra muito interessante', speaker: 'Fulano da Silva Carvalho', speakerJob: 'Desenvolvedor na Ciclano', time: now},
            {title: 'Assunto de palestra muito interessante', speaker: 'Fulano da Silva Carvalho', speakerJob: 'Desenvolvedor na Ciclano', time: now},
            {title: 'Assunto de palestra muito interessante', speaker: 'Fulano da Silva Carvalho', speakerJob: 'Desenvolvedor na Ciclano', time: now},
            {title: 'Assunto de palestra muito interessante', speaker: 'Fulano da Silva Carvalho', speakerJob: 'Desenvolvedor na Ciclano', time: now},
        ]
    }]
    const apoiadores = [1,2,3,4,5,6,7,8,9]
    return (
        <div>
            <Navbar />
            <EventDetailIntro {...eventDetail} />
            <EventDetailInfo {...eventDetail} />
            <Box sx={{height: '688px', display:'flex',flexDirection: 'row', justifyContent: 'center', alignItems: 'center', background: '#212236'}}>
                <Box sx={{width: defaultWidth, display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: '24px'}}>
                    <Typography variant="h3" sx={{color: 'white'}}>Conteúdo</Typography>
                    {trilhas.map((trilha) => {
                        return (
                        <Box key={trilha.name} sx={{width: defaultWidth, display: 'flex', flexDirection: 'column', gap: '24px'}}>
                            <Box sx={{display: 'flex', flexDirection: 'row', alignItems: 'center'}}>
                                <Typography variant="h4" sx={{color: '#04FFB4', flex: 1}}>{trilha.name}</Typography>
                                <Box sx={{flex: 3, height: 0, border: '1px dashed #04FFB4'}}></Box>
                            </Box>
                            <Box sx={{display: 'flex', gap: '36px'}}>
                                {trilha.talks.map((talk) => {
                                    const talkTime = `${talk.time.getHours().toString().padStart(2, '0')}h${talk.time.getMinutes().toString().padStart(2, '0')}`
                                    return (
                                        <Box key={talk.title} sx={{background: 'white', borderRadius: '10px'}}>
                                            <Box sx={{background: 'linear-gradient(180.06deg, rgba(33, 34, 54, 0.15) 0.05%, #212236 74.97%)', color: 'white', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', height: '362px', width: '254px'}}>
                                                <Box sx={{display: 'flex', flexDirection: 'row', justifyContent: 'flex-end', padding: '16px'}}>
                                                    <Box>{talkTime}</Box>
                                                </Box>
                                                <Box sx={{display: 'flex', flexDirection: 'column', gap: '8px', padding: '16px'}}>
                                                    <Typography variant="h4" sx={{fontSize: '20px', background: 'linear-gradient(225.5deg, #04FFB4 9.38%, #57ACFF 95.68%)', backgroundClip: 'text', color: 'transparent'}}>
                                                        {talk.title}
                                                    </Typography>
                                                    <Typography variant="h5" sx={{fontSize: '16px'}}>{talk.speaker}</Typography>
                                                    <Typography>{talk.speakerJob}</Typography>
                                                </Box>
                                            </Box>
                                        </Box>
                                    )
                                })}
                            </Box>
                        </Box>)
                    })}
                </Box>
            </Box>
            <EventPartners {...eventDetail} />
            <Social color="blue" />
            <Footer />
        </div>
    )
}

export default EventDetail