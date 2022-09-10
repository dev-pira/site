import { Box, Button, Typography } from "@mui/material"
import { Key } from "react"

export interface EventCardProps {
    color: 'primary' | 'contrast'
    image?: React.ReactNode
    key?: Key,
    title: string,
    description?: string,
    dateTime: Date,
    detailsLink: string,
    participateLink?: string
}

const EventCard: React.FC<EventCardProps> = ({
    color = 'primary',
    dateTime, 
    description, 
    detailsLink, 
    image, 
    key, 
    participateLink, 
    title
}: EventCardProps) => {
    let participateNode
    if (participateLink) {
        participateNode = <Button variant="contained" href={participateLink}>Participar</Button>
    }
    let formatedDateTime = `${dateTime.getDate()}/${dateTime.getMonth()+1}/${dateTime.getFullYear()}`
    if (dateTime.getHours() || dateTime.getMinutes()) {
        formatedDateTime += ` às ${dateTime.getHours()}h${dateTime.getMinutes().toString().padStart(2, '0')}`
    }

    let cardBackgroundColor = '#2B2C3E'
    let cardTitleColor = 'white', cardDescriptionColor = 'white', cardDateColor = 'white'
    let cardImageBackgroundColor = 'linear-gradient(180deg, #00BE85 0%, #1E90FF 100%)'

    if (color === 'contrast') {
        cardBackgroundColor = 'white'
        cardTitleColor = cardDateColor = '#212236'
        cardDescriptionColor = '#66677D'
        cardImageBackgroundColor = '#F1F3F5'
    }

    return (<Box key={key} sx={{width: '255px', borderRadius: '10px', background: cardBackgroundColor}}>
        <Box sx={{height: '159px', background: cardImageBackgroundColor, borderTopLeftRadius: '10px', borderTopRightRadius: '10px'}}>Image do banner do evento</Box>
        <Box sx={{display: 'flex', padding: '24px', flexDirection: 'column', gap: '8px'}}>
            <Typography variant="h4" sx={{color: cardTitleColor}}>{title}</Typography>
            <Typography sx={{color: cardDescriptionColor}}>{description}</Typography>
            <Typography sx={{color: cardDateColor}}>{formatedDateTime}</Typography>
            <Box sx={{display: 'flex', flexDirection: 'row', gap: '8px'}}>
                {participateNode}
                <Button variant="contained" href={detailsLink} sx={{flex: 1}}>Mais</Button>
            </Box>
        </Box>
    </Box>)
}

export default EventCard