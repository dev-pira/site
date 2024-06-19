import { PodcastEpisode } from "../../models/podcast";
import { PodcastCard } from "../PodcastCard";

export interface PodcastContentProps {
  episodes: PodcastEpisode[];
}

const PodcastContent: React.FC<PodcastContentProps> = ({
  episodes,
}: PodcastContentProps) => {
  return (
    <>
      {episodes.map((episode) => {
        return <PodcastCard key={episode.id} {...episode} />;
      })}
    </>
  );
};

export default PodcastContent;
