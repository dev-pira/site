import { Box, Grid, Typography } from "@mui/material"
import { Button } from "../Button"

export interface EventPartnersProps {
    partners?: string[]
}

const EventPartners: React.FC<EventPartnersProps> = ({partners}:EventPartnersProps) => {
    const defaultWidth = '1345px'
    let partnersBlock
    if (partners) {
        partnersBlock = <Grid container sx={{display: 'flex', gap: '16px'}}>
            {partners.map((partner, index) => {
                return (
                    <Box key={index} sx={{background: '#f1f3f5', border: '1px solid #c0c0c0', width: '171px', height: '78px', display: 'flex', justifyContent: 'center', alignItems: 'center', color: 'rgba(179,180,211,.2)'}}>
                        {`Apoiador ${partner}`}
                    </Box>
                )
            })}
        </Grid>
    }
    return (

        <Box sx={{height: '442px', display:'flex',flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
            <Box sx={{width: defaultWidth, display: 'flex', gap: '110px'}}>
                <Box sx={{flex: 1, display: 'flex'}}>
                    <Grid container sx={{display: 'flex', gap: '16px'}}>
                        {partnersBlock}
                    </Grid>
                </Box>
                <Box sx={{flex: 1, display: 'flex', flexDirection: 'column', gap: '24px'}}>
                    <Typography variant="h3">Apoio</Typography>
                    <Typography>Turpis fusce et, nisl, bibendum viverra pretium duis nulla euismod. Ac felis velit scelerisque consectetur in morbi odio. Egestas sit ultrices mi nulla consectetur egestas ac vivamus tortor. Enim nibh ut vitae tristique.</Typography>
                    <Box>
                        <Button>Apoiar o evento</Button>
                    </Box>
                </Box>
            </Box>
        </Box>
    )
}

export default EventPartners