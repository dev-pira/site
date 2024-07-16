import { Button } from "@mui/material";
import PictureCard, { Drop } from "../_PictureCard/PictureCard";
import { Member } from "../../../models/member";
import { Typography } from "../../Typography";

export type OrganizerCardProps = Pick<Member, "name" | "job" | "portraitUrl">;
const OrganizerCard: React.FC<OrganizerCardProps> = ({
  name,
  job,
  portraitUrl,
}: OrganizerCardProps) => {
  const upperContent = <Drop text="organizador" />;
  const lowerContent = (
    <>
      <Typography variant="h4" color="gradient_green">
        {name}
      </Typography>
      <Typography variant="body2" color="secondary">
        {job}
      </Typography>
      <Button>Entrar em contato</Button>
    </>
  );

  return (
    <PictureCard
      imageUrl={portraitUrl}
      upperContent={upperContent}
      lowerContent={lowerContent}
    />
  );
};

export default OrganizerCard;
