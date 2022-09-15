import { Box, Typography } from "@mui/material"
import Image from "next/image"
import { SocialButton } from "../SocialButton"

const Social: React.FC = () => {
    const defaultWidth = '1345px'
    return <Box sx={{display: 'flex', flexDirection: 'row', justifyContent: 'center', backgroundColor: '#00F4AB'}}>
        <Box sx={{display: 'flex', width: defaultWidth, alignItems: 'center', justifyContent: 'space-around', height: '367px'}}>
            <Box sx={{display: 'flex', width: '546px', flexDirection: 'column', gap: '24px'}}>
                <Typography variant="h3">Acompanhe nas redes sociais</Typography>
                <Box sx={{display: 'flex', flexDirection: 'row', gap: '8px'}}>
                    <SocialButton midia="facebook" href="https://www.facebook.com/DEVPIRA/">DEVPIRA</SocialButton>
                    <SocialButton midia="instagram" href="https://www.instagram.com/devpira_/">devpira</SocialButton>
                    <SocialButton midia="linkedin" href="https://linkedin.com/company/devpira">company/devpira</SocialButton>
                </Box>
            </Box>
            <Box sx={{width: '359px', height: '367px', display: 'flex', alignItems: 'flex-end'}}>
                <Image alt="" src="/images/Social.svg" width="359px" height="332px" />
            </Box>
        </Box>
    </Box>
}

export default Social