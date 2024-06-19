import { PodcastEpisode } from "../../models/podcast";
import { GenericCard } from "../GenericCard";

export type PodcastCardProps = PodcastEpisode;

const PodcastCard: React.FC<PodcastCardProps> = ({
  id,
  title,
  description,
  link,
}: PodcastCardProps) => {
  return (
    <GenericCard
      id={id}
      title={title}
      description={description}
      url={link}
      buttonLabel="Ouvir no Spotify"
    />
  );
};

export default PodcastCard;
