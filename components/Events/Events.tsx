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
        type: 'Meetup' | 'Live' | 'Worshop',
        dateTime: Date
    }[]
}

const Events: React.FC<EventsProps> = ({events}: EventsProps) => {
    const defaultWidth = '1345px'
    const missingBoxes = []
    for (let i = 0; i < 4 - events.length; i++) { missingBoxes.push(i) }
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
                {events.map((eventData, index) => {
                    return <EventCard key={index} 
                        {... eventData}
                        color='primary' />
                })}
                {missingBoxes.map((index) => {
                    console.log('rendering missing box')
                    return <Box key={index} sx={{flex: 1}}>&nbsp;</Box>
                })}
            </Box>
            {/* /CARDS */}
        </Box>
    </Box>
}

export default Events
