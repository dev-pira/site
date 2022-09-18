import { Box, SxProps, Typography } from "@mui/material"
import { Key } from "react"
import { Button } from "../Button"

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
    let participateNode
    if (participateLink) {
        participateNode = <Button href={participateLink}>Participar</Button>
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

    const cardsx: SxProps = {width: '255px', borderRadius: '10px', background: cardBackgroundColor}
    if (shadowed) {
        cardsx.boxShadow = '0px 4px 24px rgba(30, 144, 255, .14)'
    }

    return (
        <Box key={key} sx={cardsx}>
            <Box sx={{height: '159px', background: cardImageBackgroundColor, borderTopLeftRadius: '10px', borderTopRightRadius: '10px', display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '12px'}}>
                <Typography sx={{color: 'rgba(33,34,54,.2)', fontSize: '24px', textAlign: 'center'}}>Imagem do banner do evento</Typography>
            </Box>
            <Box sx={{display: 'flex', padding: '24px', flexDirection: 'column', gap: '8px'}}>
                <Typography variant="h4" sx={{color: cardTitleColor}}>{title}</Typography>
                <Typography sx={{color: cardDescriptionColor}}>{description}</Typography>
                <Typography sx={{color: cardDateColor}}>{formatedDateTime}</Typography>
                <Box sx={{display: 'flex', flexDirection: 'row', gap: '8px'}}>
                    {participateNode}
                    <Button color="contrast" href={detailsLink} expanded>Mais</Button>
                </Box>
            </Box>
        </Box>)
}

export default EventCard