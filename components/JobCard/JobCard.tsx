import { Box, SxProps, Grid, Link } from "@mui/material";
import { Button } from "../Button";
import { Typography } from "../Typography";
import { Job } from "../../models/job";

export type JobCardProps = Job;

const JobCard: React.FC<JobCardProps> = ({
  id,
  title,
  description,
  company,
  enrollmentUrl,
}: JobCardProps) => {
  const cardBackgroundColor = "white";

  const cardsx: SxProps = {
    width: "255px",
    height: "243px",
    borderRadius: "10px",
    background: cardBackgroundColor,
    flex: 1,
  };
  cardsx.boxShadow = "0px 4px 24px rgba(30, 144, 255, .14)";

  const companyElement = company ? (
    <Typography variant="h6" color="gradient_blue">
      {company}
    </Typography>
  ) : null;

  return (
    <Grid key={id} sx={cardsx} item xs={12} md={3}>
      <Box
        sx={{
          display: "flex",
          padding: "24px",
          flexDirection: "column",
          gap: "8px",
        }}
      >
        <Typography variant="h4" color="primary">
          {title}
        </Typography>
        <Typography color="primary" fontSize={"0.875rem"}>
          {description.substring(0, 144)}
        </Typography>
        {companyElement}
        <Link href={enrollmentUrl} target="_blank" rel="noreferrer">
          <Button expanded color="primary">
            {enrollmentUrl.startsWith("mailto")
              ? "Enviar e-mail"
              : "Detalhes da vaga"}
          </Button>
        </Link>
      </Box>
    </Grid>
  );
};

export default JobCard;
