import PictureCard, { Drop } from "../_PictureCard/PictureCard";
import { Talk } from "../../../models/track";
import { Typography } from "../../Typography";

export type TalkCardProps = Pick<Talk, "title" | "time" | "speaker">;
const TalkCard: React.FC<TalkCardProps> = ({
  title,
  time,
  speaker,
}: TalkCardProps) => {
  const format = (time: Date) => {
    return `${time.getHours().toString().padStart(2, "0")}h${time
      .getMinutes()
      .toString()
      .padStart(2, "0")}`;
  };

  const upperContent = time ? <Drop text={format(time)} /> : <></>;
  const lowerContent = (
    <>
      <Typography variant="h4" color="gradient_green">
        {title}
      </Typography>
      <Typography variant="h5" color="secondary">
        {speaker.name}
      </Typography>
      <Typography variant="body2" color="secondary">
        {speaker.job}
      </Typography>
    </>
  );

  return (
    <PictureCard
      imageUrl={speaker.portraitUrl}
      upperContent={upperContent}
      lowerContent={lowerContent}
    />
  );
};

export default TalkCard;
