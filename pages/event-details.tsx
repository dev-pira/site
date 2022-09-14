import { Box, Grid, Typography } from "@mui/material";
import { NextPage } from "next";
import { Button } from "../components";
import { Footer } from "../components/Footer";
import { Navbar } from "../components/Navbar";
import { Social } from "../components/Social";

const EventDetail: NextPage = () => {

    const defaultWidth = '1345px'
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
            <Box sx={{background:'linear-gradient(85.31deg, #C3DEFA 0%, #04FFB4 75.32%)', height: '560px', display:'flex',flexDirection: 'row', justifyContent: 'center'}}>
                <Box sx={{width: defaultWidth, display: 'flex'}}>
                    <Box sx={{width: '544px', display: 'flex', flexDirection: 'column', gap: '24px', justifyContent: 'center'}}>
                        <Box>
                            <Typography>Eventos/Meetups</Typography>
                            <Typography variant="h2">Evento em destaque</Typography>
                        </Box>
                        <Typography>Turpis fusce et, nisl, bibendum viverra pretium duis nulla euismod. Ac felis velit scelerisque consectetur in morbi odio. Egestas sit ultrices mi nulla consectetur egestas ac vivamus tortor.</Typography>
                        <Box sx={{display: 'flex', gap: '8px'}}>
                            <Button variant="contained" text="Inscriva-se" />
                            <Button variant="contained" text="Detalhes" />
                        </Box>
                    </Box>
                </Box>
            </Box>
            <Box sx={{height: '637px', display:'flex',flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
                <Box sx={{width: defaultWidth, display: 'flex', gap: '110px'}}>
                    {/* SOBRE */}
                    <Box sx={{flex: 1, display: 'flex', flexDirection: 'column', gap: '24px'}}>
                        <Typography variant="h3">Sobre o evento</Typography>
                        <Typography>Turpis fusce et, nisl, bibendum viverra pretium duis nulla euismod. Ac felis velit scelerisque consectetur in morbi odio. Egestas sit ultrices mi nulla consectetur egestas ac vivamus tortor. Enim nibh ut vitae tristique. Nam vulputate lectus massa consequat tristique et suspendisse lorem. Tempor accumsan pellentesque cursus at cum nunc dolor. Lacus mattis ultricies ut turpis lectus tortor elit tellus. Risus, in a dui platea sed a. Bibendum mauris vel, magna congue.
Enim nibh ut vitae tristique. Nam vulputate lectus massa consequat tristique et suspendisse lorem. Tempor accumsan pellentesque cursus at cum nunc dolor. Lacus mattis ultricies ut turpis lectus tortor elit tellus. Risus, in a dui platea sed a. Bibendum mauris vel, magna congue.</Typography>
                    </Box>
                    {/* /SOBRE */}
                    {/* PARTICIPE */}
                    <Box sx={{flex: .85, display: 'flex', flexDirection: 'column', gap: '32px'}}>
                        <Typography variant="h3">Participe</Typography>
                        <Box sx={{display: 'flex', flexDirection: 'column', gap: '8px'}}>
                            <Typography variant="h4" sx={{color: '#E63462'}}>Data e horário</Typography>
                            <Typography>{new Date().toString()}</Typography>
                        </Box>
                        <Box sx={{display: 'flex', flexDirection: 'column', gap: '8px'}}>
                            <Typography variant="h4" sx={{color: '#E63462'}}>Local</Typography>
                            <Typography>Somewhere</Typography>
                        </Box>
                        <Box sx={{display: 'flex', flexDirection: 'column', gap: '8px'}}>
                            <Typography variant="h4" sx={{color: '#E63462'}}>Outras informações</Typography>
                            <Typography>Turpis fusce et, nisl, bibendum viverra pretium duis nulla euismod. Ac felis velit scelerisque consectetur in morbi odio.</Typography>
                        </Box>
                    </Box>
                    {/* /PARTICIPE */}
                </Box>
            </Box>
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
            <Box sx={{height: '442px', display:'flex',flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
                <Box sx={{width: defaultWidth, display: 'flex', gap: '110px'}}>
                    <Box sx={{flex: 1, display: 'flex'}}>
                        <Grid container sx={{display: 'flex', gap: '16px'}}>
                            {apoiadores.map((key) => {
                                return (
                                    <Box key={key} sx={{background: '#f1f3f5', border: '1px solid #c0c0c0', width: '171px', height: '78px', display: 'flex', justifyContent: 'center', alignItems: 'center', color: 'rgba(179,180,211,.2)'}}>
                                        {`Apoiador ${key}`}
                                    </Box>
                                )
                            })}
                        </Grid>
                    </Box>
                    <Box sx={{flex: 1, display: 'flex', flexDirection: 'column', gap: '24px'}}>
                        <Typography variant="h3">Apoio</Typography>
                        <Typography>Turpis fusce et, nisl, bibendum viverra pretium duis nulla euismod. Ac felis velit scelerisque consectetur in morbi odio. Egestas sit ultrices mi nulla consectetur egestas ac vivamus tortor. Enim nibh ut vitae tristique.</Typography>
                        <Box>
                            <Button variant="contained" text="Apoiar o evento" />
                        </Box>
                    </Box>
                </Box>
            </Box>
            <Social color="blue" />
            <Footer />
        </div>
    )
}

export default EventDetail