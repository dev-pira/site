import { Box } from "@mui/material"
import { Button } from "../Button"
import { Typography } from "../Typography"

export interface EventDetailIntroProps {
    title: string
    description: string
    subscribeLink?: string
}

const EventDetailIntro: React.FC<EventDetailIntroProps> = ({description, subscribeLink, title}:EventDetailIntroProps) => {
    const defaultWidth = '1345px'
    let subscribeButton
    if (subscribeLink) {
        subscribeButton = <Button color="feature" href={subscribeLink}>Inscreva-se</Button>
    }
    return (
        <Box sx={{background:'linear-gradient(85.31deg, #C3DEFA 0%, #04FFB4 75.32%)', height: '560px', display:'flex',flexDirection: 'row', justifyContent: 'center'}}>
            <Box sx={{width: defaultWidth, display: 'flex'}}>
                <Box sx={{width: '544px', display: 'flex', flexDirection: 'column', gap: '24px', justifyContent: 'center'}}>
                    <Box>
                        <Typography>Eventos/Meetups</Typography>
                        <Typography variant="h2">{title}</Typography>
                    </Box>
                    <Typography>{description}</Typography>
                    <Box sx={{display: 'flex', gap: '8px'}}>
                        {subscribeButton}
                        <Button color="transparent" href="#sobre">Detalhes</Button>
                    </Box>
                </Box>
            </Box>
        </Box>
    )
}

export default EventDetailIntro