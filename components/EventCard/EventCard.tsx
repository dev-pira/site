import { Box, SxProps } from "@mui/material"
import { Key } from "react"
import { Button } from "../Button"
import { Typography } from "../Typography"

export interface EventCardProps {
    color: 'primary' | 'contrast'
    image?: React.ReactNode
    key?: Key,
    title: string,
    description?: string,
    dateTime: Date,
    detailsLink: string,
    participateLink?: string,
    shadowed?: boolean
}

const EventCard: React.FC<EventCardProps> = ({
    color = 'primary',
    dateTime, 
    description, 
    detailsLink, 
    image, 
    key, 
    participateLink, 
    title,
    shadowed
}: EventCardProps) => {
    if (!(dateTime instanceof Date)) {
        dateTime = new Date(dateTime)
    }
    let participateNode
    if (participateLink) {
        participateNode = <Button href={participateLink} color={color === 'primary' ? 'contrast': 'primary'}>Participar</Button>
    }
    let formatedDateTime = `${dateTime.getDate()}/${dateTime.getMonth()+1}/${dateTime.getFullYear()}`
    if (dateTime.getHours() || dateTime.getMinutes()) {
        formatedDateTime += ` às ${dateTime.getHours()}h${dateTime.getMinutes().toString().padStart(2, '0')}`
    }

    let cardBackgroundColor = '#2B2C3E'
    let cardImageBackgroundColor = 'linear-gradient(180deg, #00BE85 0%, #1E90FF 100%)'

    if (color === 'contrast') {
        cardBackgroundColor = 'white'
        cardImageBackgroundColor = '#F1F3F5'
    }

    const cardsx: SxProps = {width: '255px', borderRadius: '10px', background: cardBackgroundColor, flex: 1}
    if (shadowed) {
        cardsx.boxShadow = '0px 4px 24px rgba(30, 144, 255, .14)'
    }

    const textColor = color === 'primary' ? 'contrast': 'primary'

    return (
        <Box key={key} sx={cardsx}>
            <Box sx={{height: '159px', background: cardImageBackgroundColor, borderTopLeftRadius: '10px', borderTopRightRadius: '10px', display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '12px'}}>
                <Typography variant="h4" color="transparent" centered>Imagem do banner do evento</Typography>
            </Box>
            <Box sx={{display: 'flex', padding: '24px', flexDirection: 'column', gap: '8px'}}>
                <Typography variant="h4" color={textColor}>{title}</Typography>
                <Typography color={textColor} smaller>{description}</Typography>
                <Typography color={textColor} smaller>{formatedDateTime}</Typography>
                <Box sx={{display: 'flex', flexDirection: 'row', gap: '8px'}}>
                    {participateNode}
                    <Button href={detailsLink} expanded color={color}>Mais</Button>
                </Box>
            </Box>
        </Box>)
}

export default EventCard