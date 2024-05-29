import { PodcastEpisode } from "../../models/podcast";
import { PodcastCard } from "../PodcastCard";

const PodcastContent: React.FC = () => {
  const episodes: PodcastEpisode[] = [
    {
      title: "Episode 1",
      description: "Description 1",
      link: "https://google.com",
      publishDate: new Date(),
      duration: 60,
      id: "1",
    },
    {
      title: "Episode 2",
      description: "Description 2",
      link: "https://google.com",
      publishDate: new Date(),
      duration: 60,
      id: "2",
    },
    {
      title: "Episode 3",
      description: "Description 3",
      link: "https://google.com",
      publishDate: new Date(),
      duration: 60,
      id: "3",
    },
    {
      title: "Episode 4",
      description: "Description 4",
      link: "https://google.com",
      publishDate: new Date(),
      duration: 60,
      id: "4",
    },
  ];

  return (
    <>
      {episodes.map((episode) => {
        return <PodcastCard key={episode.id} {...episode} />;
      })}
    </>
  );
};

export default PodcastContent;
