import { Button } from "@mui/material"
import FacebookIcon from '@mui/icons-material/Facebook'
import InstagramIcon from '@mui/icons-material/Instagram'
import LinkedInIcon from '@mui/icons-material/LinkedIn'

export interface SocialButtonProps {
    text: string,
    disabled?: boolean,
    midia: 'facebook' | 'linkedin' | 'instagram',
    onClick?: () => void
}

const SocialButton: React.FC<SocialButtonProps> = ({midia, text, onClick}: SocialButtonProps) => {
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
            onClick={onClick}>/{text}</Button>
    )
}

export default SocialButton