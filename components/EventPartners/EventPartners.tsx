import { Box, Grid } from "@mui/material"
import { Button } from "../Button"
import { Typography } from "../Typography"

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
                        {partner}
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
                    <Typography>A comunidade não tem fins lucrativos e conta com a energia das pessoas e a parceria de orgãos e instituições para realizar encontros como esse. Seja também um agente ativo desse ecossistema sendo um apoiador. Entre em contato!</Typography>
                    <Box>
                        <Button href="mailto:contato@devpira.com.br">Apoiar o evento</Button>
                    </Box>
                </Box>
            </Box>
        </Box>
    )
}

export default EventPartners