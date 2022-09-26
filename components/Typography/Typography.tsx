import { Typography as MuiTypography } from "@mui/material"

export interface TypographyProps {
    variant?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
    children?: React.ReactNode
}

const Typography: React.FC<TypographyProps> = ({children, variant}:TypographyProps) => {
    return <MuiTypography variant={variant}>{children}</MuiTypography>
}

export default Typography