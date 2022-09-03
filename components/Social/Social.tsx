import { Facebook, Instagram, LinkedIn } from "@mui/icons-material"
import { Box, Button, Typography } from "@mui/material"

const Social: React.FC = () => {
    const defaultWidth = '1345px'
    return <Box sx={{display: 'flex', flexDirection: 'row', justifyContent: 'center', backgroundColor: '#00F4AB'}}>
        <Box sx={{display: 'flex', width: defaultWidth, alignItems: 'center', justifyContent: 'space-around', height: '367px'}}>
        <Box sx={{display: 'flex', width: '546px', flexDirection: 'column', gap: '24px'}}>
            <Typography variant="h3">Acompanhe nas redes sociais</Typography>
            <Box sx={{display: 'flex', flexDirection: 'row', gap: '8px'}}>
            <Button variant="contained" href="https://www.facebook.com/DEVPIRA/" disableElevation target="_blank">
                <Facebook /> /DEVPIRA
            </Button>
            <Button variant="contained" href="https://www.instagram.com/devpira_/" disableElevation target="_blank">
                <Instagram /> /devpira_
            </Button>
            <Button variant="contained" href="http://linkedin.com/company/devpira" disableElevation target="_blank">
                <LinkedIn /> /company/devpira
            </Button>
            </Box>
        </Box>
        <Box sx={{backgroundColor: '#090', width: '451px', height: '367px'}}>Imagem Bacana</Box>
        </Box>
    </Box>
}

export default Social