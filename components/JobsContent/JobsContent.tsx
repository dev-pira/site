import { Grid } from "@mui/material"
import { Vacancy } from "../../models/model"
import { JobsContentSection } from "../JobsContentSection"

export interface JobsContentProps {
    jobs: Vacancy[]
}

const JobsContent: React.FC<JobsContentProps> = ({ jobs }: JobsContentProps) => {
    const types = jobs
        .map((e) => e.location)
        .filter((value, index, self) => self.indexOf(value) === index)
    return (
        <Grid sx={{ display: 'flex', flexWrap: 'wrap', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }} container>
            {types.map((location, index) => {
                const jobsOfLocation = jobs
                    .filter((e) => e.location === location)
                    return <JobsContentSection jobs={jobsOfLocation} location={location} key={location} />
            })}
        </Grid>
    )
}

export default JobsContent