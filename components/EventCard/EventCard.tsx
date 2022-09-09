import { Box, Button, Typography } from "@mui/material"
import { Key } from "react"

export interface EventCardProps {
    key?: Key,
    title: string,
    description?: string,
    dateTime: Date,
    detailsLink: string,
    participateLink?: string
}

const EventCard: React.FC<EventCardProps> = ({
    dateTime, 
    description, 
    detailsLink, 
    key, 
    participateLink, 
    title
}: EventCardProps) => {
    let descriptionNode
    if (description) {
        descriptionNode = <Typography>{description}</Typography>
    }
    let participateNode
    if (participateLink) {
        participateNode = <Button variant="contained" href={participateLink}>Participar</Button>
    }
    let formatedDateTime = `${dateTime.getDate()}/${dateTime.getMonth()+1}/${dateTime.getFullYear()}`
    if (dateTime.getHours() || dateTime.getMinutes()) {
        formatedDateTime += ` às ${dateTime.getHours()}h${dateTime.getMinutes().toString().padStart(2, '0')}`
    }

    return (<Box key={key} sx={{width: '255px', borderRadius: '10px', background: '#2B2C3E'}}>
        <Box sx={{height: '159px', background: 'linear-gradient(180deg, #00BE85 0%, #1E90FF 100%)', borderTopLeftRadius: '10px', borderTopRightRadius: '10px'}}>Image do banner do evento</Box>
        <Box sx={{display: 'flex', padding: '24px', flexDirection: 'column', gap: '8px', color: 'white'}}>
            <Typography variant="h4">{title}</Typography>
            {descriptionNode}
            <Typography>{formatedDateTime}</Typography>
            <Box sx={{display: 'flex', flexDirection: 'row', gap: '8px'}}>
                {participateNode}
                <Button variant="contained" href={detailsLink}>Mais</Button>
            </Box>
        </Box>
    </Box>)
}

export default EventCard