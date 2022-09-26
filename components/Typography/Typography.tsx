import { SxProps, Typography as MuiTypography } from "@mui/material"
import { Theme } from "@mui/system"

export interface TypographyProps {
    variant?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'body1' 
    children?: React.ReactNode
    color?: 'primary' | 'contrast' | 'transparent'
    bigger?: boolean
    smaller?: boolean
}

const Typography: React.FC<TypographyProps> = ({bigger, color = 'primary', children, smaller, variant = 'body1'}:TypographyProps) => {
    let sx:SxProps<Theme> = {}
    if (color === 'transparent') {
        sx = {color: 'rgba(33,34,54,.2)', fontSize: '24px', textAlign: 'center'}
    } else {
    switch (variant) {
            case 'body1':
                let fontSize = 16
                if (bigger) fontSize = 18
                else if (bigger) fontSize = 14
                sx = {
                    fontFamily: "'Roboto', sans-serif;",
                    fontStyle: 'normal',
                    fontWeight: '400',
                    fontSize: `${fontSize}px`,
                    lineHeight: '160%',
                    color: color == 'contrast' ? 'white' : '#66677d'
                }
                break;
            case 'h2':
                sx = {
                    fontFamily: "'Inter', sans-serif;",
                    fontWeight: '800',
                    fontStyle: 'normal',
                    fontSize: '68px',
                    lineHeight: '100%',
                    color: color == 'contrast' ? 'white' : '#212236'
                }
                break;
            case 'h3':
                sx = {
                    fontFamily: "'Inter', sans-serif;",
                    fontWeight: '700',
                    fontStyle: 'normal',
                    fontSize: '48px',
                    lineHeight: '100%',
                    color: color == 'contrast' ? 'white' : '#212236'
                }
                break;
            case 'h4':
                sx = {
                    fontFamily: "'Inter', sans-serif;",
                    fontWeight: '700',
                    fontStyle: 'normal',
                    fontSize: '20px',
                    lineHeight: '100%',
                    color: color == 'contrast' ? 'white' : '#212236'
                }
                break;
        }
    }
    
    return <MuiTypography variant={variant} sx={sx}>{children}</MuiTypography>
}

export default Typography