import { Grid } from "@mui/material";
import { Job } from "../../models/job";
import { JobsContentSection } from "../JobsContentSection";

export interface JobsContentProps {
  jobs: Job[];
}

const JobsContent: React.FC<JobsContentProps> = ({
  jobs,
}: JobsContentProps) => {
  let locations = jobs.map((m) => m.location);
  locations = locations.filter((i, x) => locations.indexOf(i) == x);
  return (
    <Grid
      sx={{
        display: "flex",
        flexWrap: "wrap",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
      container
    >
      {locations.map((location) => {
        const jobsOfLocation = jobs.filter((e) => e.location === location);
        return (
          <JobsContentSection
            jobs={jobsOfLocation}
            location={location}
            key={location}
          />
        );
      })}
    </Grid>
  );
};

export default JobsContent;
