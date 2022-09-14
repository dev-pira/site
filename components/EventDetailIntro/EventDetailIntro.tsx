import { Box, Typography } from "@mui/material"
import { Button } from "../Button"

export interface EventDetailIntroProps {
    title: string
    shortDescription: string
}

const EventDetailIntro: React.FC<EventDetailIntroProps> = ({shortDescription, title}:EventDetailIntroProps) => {
    const defaultWidth = '1345px'
    return (
        <Box sx={{background:'linear-gradient(85.31deg, #C3DEFA 0%, #04FFB4 75.32%)', height: '560px', display:'flex',flexDirection: 'row', justifyContent: 'center'}}>
            <Box sx={{width: defaultWidth, display: 'flex'}}>
                <Box sx={{width: '544px', display: 'flex', flexDirection: 'column', gap: '24px', justifyContent: 'center'}}>
                    <Box>
                        <Typography>Eventos/Meetups</Typography>
                        <Typography variant="h2">{title}</Typography>
                    </Box>
                    <Typography>{shortDescription}</Typography>
                    <Box sx={{display: 'flex', gap: '8px'}}>
                        <Button variant="contained" text="Inscriva-se" />
                        <Button variant="contained" text="Detalhes" />
                    </Box>
                </Box>
            </Box>
        </Box>
    )
}

export default EventDetailIntro