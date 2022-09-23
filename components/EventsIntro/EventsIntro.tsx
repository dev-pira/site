import { Box, Typography } from "@mui/material"

const EventsIntro: React.FC = () => {
    const defaultWidth = '1345px'
    return (
        <Box sx={{ display: "flex", flexDirection: "row", justifyContent: "center", backgroundColor: "#3f4052;"}}>
            <Box sx={{width: defaultWidth, display: 'flex', height: '560px', alignItems: 'center'}}>
            <Typography variant="h2" sx={{color: 'white', width:'546px'}}>Eventos da <span style={{background: 'linear-gradient(233.62deg, #c4c4c4 27.61%, #e63462 27.62%, #1e90ff 100%)', backgroundClip: 'text', color: 'transparent'}}>comunidade</span></Typography>
            </Box>
        </Box>
    )
}

export default EventsIntro