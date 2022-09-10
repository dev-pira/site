import { Box, Grid, Typography } from "@mui/material";
import { NextPage } from "next";
import { Button } from "../components";
import { Footer } from "../components/Footer";
import { Navbar } from "../components/Navbar";
import { Social } from "../components/Social";

const EventDetail: NextPage = () => {
    const defaultWidth = '1345px'
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
            <div>Trilhas/Speakers</div>
            <Box>
                <Box>
                    <Box>
                        <Grid container>
                            {apoiadores.map((key) => {
                                return (
                                    <Box key={key} sx={{background: 'grey'}}>{`Apoiador ${key}`}</Box>
                                )
                            })}
                        </Grid>
                    </Box>
                    <Box>
                        <Typography>Apoio</Typography>
                        <Typography>Turpis fusce et, nisl, bibendum viverra pretium duis nulla euismod. Ac felis velit scelerisque consectetur in morbi odio. Egestas sit ultrices mi nulla consectetur egestas ac vivamus tortor. Enim nibh ut vitae tristique.</Typography>
                        <Button variant="contained" text="Apoiar o evento" />
                    </Box>
                </Box>
            </Box>
            <Social color="blue" />
            <Footer />
        </div>
    )
}

export default EventDetail