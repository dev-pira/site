import { Box } from "@mui/material"
import Image from "next/image"
import { EventCard } from "../EventCard"
import { Button } from "../Button"
import { Typography } from "../Typography"


const Events: React.FC = () => {
    const defaultWidth = '1345px'
    const events = [{
        description: 'Turpis fusce et, nisl, bibendum viverra pretium duis nulla euismod.',
        detailsLink: '/eventos/nome-do-evento',
        participateLink: 'https://www.meetup.com/pt-BR/devpira/',
        title: 'Nome do evento'
    },{
        description: 'Turpis fusce et, nisl, bibendum viverra pretium duis nulla euismod.',
        detailsLink: '/eventos/nome-do-evento',
        title: 'Nome do evento'
    },{
        description: 'Turpis fusce et, nisl, bibendum viverra pretium duis nulla euismod.',
        detailsLink: '/eventos/nome-do-evento',
        title: 'Nome do evento'
    },{
        description: 'Turpis fusce et, nisl, bibendum viverra pretium duis nulla euismod.',
        detailsLink: '/eventos/nome-do-evento',
        title: 'Nome do evento'
    }]
    return <Box sx={{display: 'flex', flexDirection: 'row', justifyContent: 'center', backgroundColor: '#212236;'}}>
        <Box sx={{display: 'flex', flexDirection: 'column', height: '957px', justifyContent: 'space-around'}}>
            {/* DESCRIPTION */}
            <Box sx={{display: 'flex', width: defaultWidth, alignItems: 'center', justifyContent: 'space-around', color: 'white'}}>
                <Image alt="" src="/images/Events.png" width="451px" height="277px" />
                <Box sx={{display: 'flex', width: '546px', flexDirection: 'column', gap: '24px'}}>
                <Typography variant="h3" color="contrast">Eventos</Typography>
                <Typography color="contrast">
                    Turpis fusce et, nisl, bibendum viverra pretium duis nulla euismod. 
                    Ac felis velit scelerisque consectetur in morbi odio. Egestas sit ultrices mi nulla consectetur egestas ac vivamus tortor. Enim nibh ut vitae tristique. 
                    Nam vulputate lectus massa consequat tristique et suspendisse lorem. Tempor accumsan pellentesque cursus at cum nunc dolor. 
                    Lacus mattis ultricies ut turpis lectus tortor elit tellus. Risus, in a dui platea sed a. Bibendum mauris vel, magna congue.
                </Typography>
                <Box>
                    <Button color="contrast" href="/eventos">Conhecer eventos</Button>
                </Box>
                </Box>
            </Box>
            {/* /DESCRIPTION */}
            {/* CARDS */}
            <Box sx={{display: 'flex', width: defaultWidth, flexDirection: 'row', justifyContent: 'center', alignItems: 'center', gap: '30px'}}>
                {events.map((eventData) => {
                    return <EventCard key={eventData.title} 
                        title={eventData.title}
                        description={eventData.description}
                        detailsLink={eventData.detailsLink}
                        participateLink={eventData.participateLink}
                        color='primary'
                        dateTime={new Date()} />
                })}
            </Box>
            {/* /CARDS */}
        </Box>
    </Box>
}

export default Events