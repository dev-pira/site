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
      data-scroll-wrapper
      key={location}
      sx={{
        display: "flex",
        flexDirection: "column",
        padding: "56px 0",
        gap: "24px",
      }}
    >
      <Typography variant="h3" sx={{ px: { xs: "16px", sm: 0 } }}>
        {location}
      </Typography>
      <Grid
        sx={{
          display: "flex",
          flexDirection: { xs: "column", sm: "row" },
          justifyContent: "space-evenly",
          alignItems: "center",
          gap: { xs: "28px", sm: "0" },
        }}
        container
      >
        {jobs.map((jobData) => {
          return <JobCard key={jobData.id} {...jobData} />;
        })}
        {missingBoxes.map((index) => {
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
