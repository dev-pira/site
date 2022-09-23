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
    const types = events
        .map((e) => e.type)
        .filter((value, index, self) => self.indexOf(value) === index)
    return (
        <Box sx={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
                {types.map((type, index) => {
                    const eventsOfType = events.filter((e) => e.type === type)
                    const missingBoxes = []
                    for (let i = 0; i < 4 - eventsOfType.length; i++) { missingBoxes.push(i) }
                    return (
                        <Box key={index} sx={{width: defaultWidth, display: 'flex', flexDirection: 'column' , padding: '56px 0', gap: '24px'}}>
                            <Typography variant="h3">{type}</Typography>
                            <Box sx={{width: defaultWidth, display: 'flex', flexDirection: 'row', justifyContent: 'space-evenly', gap: '16px'}}>
                                {eventsOfType.map((eventData, index) => {
                                    return <EventCard key={index} 
                                        title={eventData.title}
                                        description={eventData.description}
                                        detailsLink={eventData.detailsLink}
                                        participateLink={eventData.participateLink}
                                        color='contrast'
                                        shadowed
                                        dateTime={new Date()} />
                                })}
                                {missingBoxes.map((index) => {
                                    console.log('rendering missing box')
                                    return <Box key={index} sx={{flex: 1}}>&nbsp;</Box>
                                })}
                            </Box>
                        </Box>
                    )
                })}
        </Box>
    )
}

export default EventsContent