import { Box } from "@mui/material"
import Image from "next/image"
import { EventCard } from "../EventCard"
import { Button } from "../Button"
import { Typography } from "../Typography"

export interface EventsProps {
    events: {
        description?: string,
        detailsLink: string,
        participateLink?: string,
        title: string,
        type: 'Meetup' | 'Live' | 'Worshop'
    }[]
}

const Events: React.FC<EventsProps> = ({events}: EventsProps) => {
    const defaultWidth = '1345px'
    return <Box sx={{display: 'flex', flexDirection: 'row', justifyContent: 'center', backgroundColor: '#212236;'}}>
        <Box sx={{display: 'flex', flexDirection: 'column', height: '957px', justifyContent: 'space-around'}}>
            {/* DESCRIPTION */}
            <Box sx={{display: 'flex', width: defaultWidth, alignItems: 'center', justifyContent: 'space-around', color: 'white'}}>
                <Image alt="" src="/images/Events.png" width="451px" height="277px" />
                <Box sx={{display: 'flex', width: '546px', flexDirection: 'column', gap: '24px'}}>
                <Typography variant="h3" color="contrast">Eventos</Typography>
                <Typography color="contrast">
                  Os eventos sempre são organizados pelos voluntários. Contamos com a ajuda de parceiros locais que oferecem espaços e recursos para a realização.
                  Nos ajudam nos eventos instituções de ensino, empresas e entidades que têm a mesma vontade que o DEVPIRA de compartilhar conhecimento.
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
