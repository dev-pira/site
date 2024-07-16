import { Button } from "@mui/material";
import { Job } from "../../../models/job";
import ContentCard from "../_ContentCard/Content";
import { Typography } from "../../Typography";

export type JobCardProps = Pick<Job, "title" | "description" | "company">;
const JobCard: React.FC<JobCardProps> = ({
  title,
  description,
  company,
}: JobCardProps) => {
  return (
    <ContentCard>
      <Typography variant="h3">{title}</Typography>
      <Typography variant="body1" fontWeight="light" fontSize="small">
        {description}
      </Typography>
      <Typography variant="body1" color="gradient_blue">
        {company}
      </Typography>
      <Button>Detalhes da vaga</Button>
    </ContentCard>
  );
};

export default JobCard;
