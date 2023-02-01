import { Box, Grid, Link } from "@mui/material"
import { Button } from "../Button"
import { Typography } from "../Typography"

export interface PartnersProps {
    description: string
    partners?: {
        name: string
        logoUrl?: string
        link?: string
        category?: string
    }[]
}

const Partners: React.FC<PartnersProps> = ({description, partners}:PartnersProps) => {
    const defaultWidth = '1345px'
    let partnersBlock
     if (partners) {
        const categories = partners
            .map(p => p.category)
            .filter((value, index, self) => self.indexOf(value) === index)
        partnersBlock = <Box>
            {categories.map((category, index) => {
                const partnersInCategory = partners.filter(p => p.category === category)
                return (
                    <Box key={index}>
                        <Box sx={{padding: '8px'}}>
                            <Typography variant="h4">{category}</Typography>
                        </Box>
                        <Grid container sx={{display: 'flex', gap: '16px'}}>
                        {partnersInCategory.map((partner, index) => {
                            return (
                                <Link key={index} href={partner.link} target='_blank'>
                                    <Box sx={{background: `url("${partner.logoUrl}") no-repeat center center`, backgroundSize: 'contain', width: '171px', height: '78px'}}>
                                    </Box>
                                </Link>
                            )
                        })}
                        </Grid> 
                    </Box>
                )
            })}
        </Box>
    }
    return (

        <Box sx={{padding: '88px 0px', display:'flex',flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
            <Box sx={{width: defaultWidth, display: 'flex', gap: '110px'}}>
                <Box sx={{flex: 1, display: 'flex'}}>
                    <Grid container sx={{display: 'flex', gap: '16px'}}>
                        {partnersBlock}
                    </Grid>
                </Box>
                <Box sx={{flex: 1, display: 'flex', flexDirection: 'column', gap: '24px'}}>
                    <Typography variant="h3">Apoio</Typography>
                    <Typography>{description}</Typography>
                    <Box>
                        <Button href="mailto:contato@devpira.com.br">Apoiar o evento</Button>
                    </Box>
                </Box>
            </Box>
        </Box>
    )
}

export default Partners