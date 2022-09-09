import FacebookIcon from '@mui/icons-material/Facebook'
import InstagramIcon from '@mui/icons-material/Instagram'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import { Button } from '@mui/material'

export interface SocialButtonProps {
    children: React.ReactNode,
    disabled?: boolean,
    midia: 'facebook' | 'linkedin' | 'instagram',
    href: string
}

const SocialButton: React.FC<SocialButtonProps> = ({children, midia, href}: SocialButtonProps) => {
    let startIcon: React.ReactNode
    switch (midia) {
        case 'facebook':
            startIcon = <FacebookIcon />
            break
        case 'instagram':
            startIcon = <InstagramIcon />
            break
        case 'linkedin':
            startIcon = <LinkedInIcon />
            break
    }
    return (
        <Button
            variant="contained"
            startIcon={startIcon}
            sx={{backgroundColor: 'white', color: '#212236'}}
            href={href}
            target='_blank'>/{children}</Button>
    )
}

export default SocialButton