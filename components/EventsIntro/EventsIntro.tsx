import { Box } from "@mui/material"
import { Typography } from "../Typography"

const EventsIntro: React.FC = () => {
    const defaultWidth = '1345px'
    return (
        <Box sx={{ display: "flex", flexDirection: "row", justifyContent: "center", backgroundColor: "#3f4052;"}}>
            <Box sx={{width: defaultWidth, display: 'flex', height: '560px', alignItems: 'center'}}>
            <Typography variant="h2" color="contrast">
                Eventos da
                <Typography variant="span" color="gradient_red"> comunidade</Typography>
            </Typography>
            </Box>
        </Box>
    )
}

export default EventsIntro