import { Box, Grid } from "@mui/material"
import { Job } from "../../models/model"
import { Typography } from "../Typography"
import { JobCard } from "../JobCard"

interface JobsContentSectionProps {
    location: string
    jobs: Job[]
}

const JobsContentSection: React.FC<JobsContentSectionProps> = ({location, jobs}: JobsContentSectionProps) => {
    const defaultWidth = '1345px'

    const missingBoxes = []
    for (let i = 0; i < 4 - jobs.length; i++) { missingBoxes.push(i) }

    return (
        <Box key={location} sx={{ width: defaultWidth, display: 'flex', flexDirection: 'column', padding: '56px 0', gap: '24px' }}>
            <Typography variant="h3">{location}</Typography>
            <Grid sx={{ width: defaultWidth, display: 'flex', flexDirection: 'row', justifyContent: 'space-evenly', alignItems: 'center' }} container>
                {jobs.map(jobData => {
                    return <JobCard key={jobData.id} {...jobData} />
                })}
                {missingBoxes.map((index) => {
                    return <Box key={index} sx={{ flex: 1 }}>&nbsp;</Box>
                })}
            </Grid>
        </Box>
    )
}

export default JobsContentSection