import { Box } from "@mui/material"
import { Typography } from "../Typography"

const EventsIntro: React.FC = () => {
    const defaultWidth = '1345px'
    const defaultHeight = '560px'
    return (
        <Box sx={{ display: "flex", flexDirection: "row", justifyContent: "center", backgroundColor: "#3f4052;"}}>
            <Box sx={{width: defaultWidth, display: 'flex', height: defaultHeight, alignItems: 'center'}}>
                <Box sx={{width: '546px'}}>
                    <Typography variant="h1" color="contrast">
                        Eventos da <Typography variant="introSpan" color="gradient_red"> comunidade</Typography>
                    </Typography>
                </Box>
                <Box sx={{display: 'flex', width: '740px'}}>
                    <Box sx={{background:'url("/images/EventHeader/Background.svg")', width: '740px', height: defaultHeight}}>
                        <Box sx={{background:'url("/images/EventHeader/Rocket.svg")', width: '625px', height: defaultHeight}}></Box>
                    </Box>
                </Box>
            </Box>
        </Box>
    )
}

export default EventsIntro