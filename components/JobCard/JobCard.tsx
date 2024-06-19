import { Job } from "../../models/job";
import { GenericCard } from "../GenericCard";

export type JobCardProps = Job;

const JobCard: React.FC<JobCardProps> = ({
  id,
  title,
  description,
  company,
  enrollmentUrl,
}: JobCardProps) => {
  return (
    <GenericCard
      id={id}
      title={title}
      emphasis={company}
      description={description}
      url={enrollmentUrl}
      buttonLabel={
        enrollmentUrl.startsWith("mailto")
          ? "Enviar e-mail"
          : "Detalhes da vaga"
      }
    />
  );
};

export default JobCard;
