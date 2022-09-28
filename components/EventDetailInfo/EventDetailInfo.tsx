import { Box } from "@mui/material"
import { Typography } from "../Typography"

export interface EventDetailInfoProps {
    description: string
    dateTime: Date
    place: string
    otherInfo?: string
}

const EventDetailInfo: React.FC<EventDetailInfoProps> = ({dateTime, description, place, otherInfo}: EventDetailInfoProps) => {
    const defaultWidth = '1345px'
    let formatedDateTime = `${dateTime.getDate()}/${dateTime.getMonth()+1}/${dateTime.getFullYear()}`
    if (dateTime.getHours() || dateTime.getMinutes()) {
        formatedDateTime += ` às ${dateTime.getHours()}h${dateTime.getMinutes().toString().padStart(2, '0')}`
    }
    let otherInfoBlock
    if (otherInfo) {
        otherInfoBlock = <Box sx={{display: 'flex', flexDirection: 'column', gap: '8px'}}>
            <Typography variant="h4" color="feature">Outras informações</Typography>
            <Typography>{otherInfo}</Typography>
        </Box>
    }
    return (
        <Box sx={{height: '637px', display:'flex',flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
            <Box sx={{width: defaultWidth, display: 'flex', gap: '110px'}}>
                {/* SOBRE */}
                <Box sx={{flex: 1, display: 'flex', flexDirection: 'column', gap: '24px'}}>
                    <Typography variant="h3">Sobre o evento</Typography>
                    <Typography>{description}</Typography>
                </Box>
                {/* /SOBRE */}
                {/* PARTICIPE */}
                <Box sx={{flex: .85, display: 'flex', flexDirection: 'column', gap: '32px'}}>
                    <Typography variant="h3">Participe</Typography>
                    <Box sx={{display: 'flex', flexDirection: 'column', gap: '8px'}}>
                        <Typography variant="h4" color="feature">Data e horário</Typography>
                        <Typography>{formatedDateTime}</Typography>
                    </Box>
                    <Box sx={{display: 'flex', flexDirection: 'column', gap: '8px'}}>
                        <Typography variant="h4" color="feature">Local</Typography>
                        <Typography>{place}</Typography>
                    </Box>
                    {otherInfoBlock}
                </Box>
                {/* /PARTICIPE */}
            </Box>
        </Box>
    )
}

export default EventDetailInfo