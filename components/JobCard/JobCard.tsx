import { Box, SxProps, Grid } from "@mui/material"
import { Button } from "../Button"
import { Typography } from "../Typography"
import { Vacancy } from "../../models/model"

export interface JobCardProps extends Vacancy{}

const JobCard: React.FC<JobCardProps> = ({
    id,
    title,
    description,
    company
}: JobCardProps) => {
    let cardBackgroundColor = 'white'

    const cardsx: SxProps = { width: '255px', height: '243px', borderRadius: '10px', background: cardBackgroundColor, flex: 1 }
        cardsx.boxShadow = '0px 4px 24px rgba(30, 144, 255, .14)'

    const companyElement = company? <Typography variant='h6' color="gradient_blue" >{company}</Typography> : null

    return (
        <Grid key={id} sx={cardsx} item xs={12} md={3}>
            <Box sx={{ display: 'flex', padding: '24px', flexDirection: 'column', gap: '8px' }}>
                <Typography variant="h4" color='primary'>{title}</Typography>
                <Typography color='primary' smaller>{description.substring(0, 144)}</Typography>
                {companyElement}
                <Button href={`vagas/${id}`} expanded color='primary'>Detalhes da vaga</Button>
            </Box>
        </Grid>)
}

export default JobCard