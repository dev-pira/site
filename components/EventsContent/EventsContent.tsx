import { Box, Typography } from "@mui/material"
import { EventCard } from "../EventCard"

export interface EventsContentProps {
    events: {
        description?: string,
        detailsLink: string,
        participateLink?: string,
        title: string,
        type: 'Meetup' | 'Live' | 'Worshop'
    }[]
}

const EventsContent: React.FC<EventsContentProps> = ({events}: EventsContentProps) => {
    const defaultWidth = '1345px'
    return (
        <Box sx={{display: 'flex', justifyContent: 'center'}}>
            <Box sx={{width: defaultWidth, display: 'flex', flexDirection: 'column', padding: '56px 0', gap: '24px'}}>
                <Typography variant="h3">Meetups</Typography>
                <Box sx={{display: 'flex', flexDirection: 'row', gap: '16px'}}>
                    {events.map((eventData, index) => {
                        return <EventCard key={index} 
                            title={eventData.title}
                            description={eventData.description}
                            detailsLink={eventData.detailsLink}
                            participateLink={eventData.participateLink}
                            color='contrast'
                            shadowed
                            dateTime={new Date()} />
                    })}
                </Box>
            </Box>
        </Box>
    )
}

export default EventsContent