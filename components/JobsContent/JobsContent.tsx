import { Box, Grid } from "@mui/material"
import { JobCard } from "../JobCard"
import { Typography } from "../Typography"
import { trace } from "console"

export interface JobsContentProps {
    jobs: {
        description: string,
        detailsLink: string,
        participateLink?: string,
        title: string,
        city: string,
        dateTime: Date
    }[]
}

const JobsContent: React.FC<JobsContentProps> = ({ jobs }: JobsContentProps) => {
    const defaultWidth = '1345px'
    const types = jobs
        .map((e) => e.city)
        .filter((value, index, self) => self.indexOf(value) === index)
    return (
        <Grid sx={{ display: 'flex', flexWrap: 'wrap', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }} container>

            {types.map((city, index) => {
                const eventsOfType = jobs
                    .filter((e) => e.city === city)
                    .sort((a, b) => {
                        if (a.dateTime < b.dateTime) return 1
                        if (a.dateTime > b.dateTime) return -1
                        return 0
                    })
                //.slice(0, 4)
                const missingBoxes = []
                for (let i = 0; i < 4 - eventsOfType.length; i++) { missingBoxes.push(i) }
                return (
                    <Box key={index} sx={{ width: defaultWidth, display: 'flex', flexDirection: 'column', padding: '56px 0', gap: '24px' }}>
                        <Typography variant="h3">{city}</Typography>
                        <Grid sx={{ width: defaultWidth, display: 'flex', flexDirection: 'row', justifyContent: 'space-evenly', alignItems: 'center' }} container>
                            {eventsOfType.map((eventData, index) => {
                                return <JobCard key={index}
                                    {...eventData}
                                    color='contrast'
                                    shadowed />
                            })}
                            {missingBoxes.map((index) => {
                                console.log('rendering missing box')
                                return <Box key={index} sx={{ flex: 1 }}>&nbsp;</Box>
                            })}
                        </Grid>
                    </Box>
                )
            })}

        </Grid>

    )
}

export default JobsContent