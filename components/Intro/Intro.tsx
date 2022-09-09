import { Box, Button, Typography } from "@mui/material"
import Image from "next/image"

const Intro: React.FC = () => {
    const defaultWidth = '1345px'
    return <Box sx={{display: 'flex', flexDirection: 'row', justifyContent: 'center'}}>
        <Box sx={{display: 'flex', width: defaultWidth, alignItems: 'center', justifyContent: 'space-around', height: '700px'}}>
            <Box sx={{display: 'flex', width: '546px', flexDirection: 'column', gap: '24px'}}>
                <Typography variant="h2">Comunidade que conecta pessoas e tecnologia</Typography>
                <Typography>Participe da comunidade que está transformando a vida das pessoas de Piracicaba e região.</Typography>
                <Box sx={{display: 'flex', flexDirection: 'row', gap: '8px'}}>
                <Button variant="contained">Saiba mais</Button>
                <Button variant="contained">Eventos</Button>
                </Box>
            </Box>
            <Image alt="" src="/images/Intro.svg" width="633px" height="520px" />
        </Box>
    </Box>
}

export default Intro