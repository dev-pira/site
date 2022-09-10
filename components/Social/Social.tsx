import { Facebook, Instagram, LinkedIn } from "@mui/icons-material"
import { Box, Button, Typography } from "@mui/material"
import Image from "next/image"

export interface SocialProps {
    color?: 'green' | 'blue'
}

const Social: React.FC<SocialProps> = ({color = 'green'}:SocialProps) => {
    const defaultWidth = '1345px'
    return <Box sx={{display: 'flex', flexDirection: 'row', justifyContent: 'center', backgroundColor: color === 'blue'? '#46A4FF':'#00F4AB'}}>
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
                <Button variant="contained" href="https://linkedin.com/company/devpira" disableElevation target="_blank">
                    <LinkedIn /> /company/devpira
                </Button>
                </Box>
            </Box>
            <Box sx={{width: '359px', height: '367px', display: 'flex', alignItems: 'flex-end'}}>
                <Image alt="" src="/images/Social.svg" width="359px" height="332px" />
            </Box>
        </Box>
    </Box>
}

export default Social