import { Box, SxProps, Grid } from "@mui/material"
import { Key } from "react"
import { Button } from "../Button"
import { Typography } from "../Typography"

export interface JobCardProps {
    color: 'primary' | 'contrast'
    dateTime: Date,
    description: string,
    detailsLink: string,
    key?: Key,
    subscribeLink?: string,
    title: string,
    shadowed?: boolean
}

const JobCard: React.FC<JobCardProps> = ({
    color = 'primary',
    dateTime,
    description,
    detailsLink,
    key,
    subscribeLink,
    title,
    shadowed
}: JobCardProps) => {
    if (!(dateTime instanceof Date)) {
        dateTime = new Date(dateTime)
    }
    let participateNode
    if (subscribeLink && dateTime > new Date()) {
        participateNode = <Button href={subscribeLink} color={color === 'primary' ? 'contrast' : 'primary'}>Participar</Button>
    }
    let formatedDateTime = `${dateTime.getDate()}/${dateTime.getMonth() + 1}/${dateTime.getFullYear()}`
    if (dateTime.getHours() || dateTime.getMinutes()) {
        formatedDateTime += ` às ${dateTime.getHours()}h${dateTime.getMinutes().toString().padStart(2, '0')}`
    }

    let cardBackgroundColor = '#2B2C3E'
    let cardImageBackground = 'linear-gradient(180deg, #00BE85 0%, #1E90FF 100%)'

    if (color === 'contrast') {
        cardBackgroundColor = 'white'
        cardImageBackground = '#F1F3F5'
    }

    const cardsx: SxProps = { width: '255px', height: '243px', borderRadius: '10px', background: cardBackgroundColor, flex: 1 }
    if (shadowed) {
        cardsx.boxShadow = '0px 4px 24px rgba(30, 144, 255, .14)'
    }

    const textColor = color === 'primary' ? 'contrast' : 'primary';

    return (
        <Grid key={key} sx={cardsx} item xs={12} md={3}>
            <Box sx={{ display: 'flex', padding: '24px', flexDirection: 'column', gap: '8px' }}>
                <Typography variant="h4" color={textColor}>{title}</Typography>
                <Typography color={textColor} smaller>{description.substring(0, 144)}</Typography>
                <Typography variant='h6' color="gradient_blue" >Empresa Ciclano</Typography>
                <Box sx={{ display: 'flex', flexDirection: 'row', gap: '8px' }}>
                    {participateNode}
                    <Button href={detailsLink} expanded color={color}>Detalhes da vaga</Button>
                </Box>
            </Box>
        </Grid>)
}

export default JobCard