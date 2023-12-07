import { Box, Container, Grid } from "@mui/material";
import { Job } from "../../models/job";
import { Typography } from "../Typography";
import { JobCard } from "../JobCard";

interface JobsContentSectionProps {
  location: string;
  jobs: Job[];
}

const JobsContentSection: React.FC<JobsContentSectionProps> = ({
  location,
  jobs,
}: JobsContentSectionProps) => {
  const missingBoxes = [];
  for (let i = 0; i < 4 - jobs.length; i++) {
    missingBoxes.push(i);
  }

  return (
    <Container
      key={location}
      sx={{
        display: "flex",
        flexDirection: "column",
        padding: "56px 0",
        gap: "24px",
      }}
    >
      <Typography variant="h3">{location}</Typography>
      <Grid
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-evenly",
          alignItems: "center",
        }}
        container
      >
        {jobs.map((jobData) => {
          return <JobCard key={jobData.id} {...jobData} />;
        })}
        {missingBoxes.map((index) => {
          console.log("rendering missing box");
          return (
            <Box key={index} sx={{ flex: 1 }}>
              &nbsp;
            </Box>
          );
        })}
      </Grid>
    </Container>
  );
};

export default JobsContentSection;
