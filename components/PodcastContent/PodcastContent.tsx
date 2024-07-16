import { Box, Container } from "@mui/material";
import { PodcastEpisode } from "../../models/podcast";
import { PodcastCard } from "../PodcastCard";

export interface PodcastContentProps {
  episodes: PodcastEpisode[];
}

const PodcastContent: React.FC<PodcastContentProps> = ({
  episodes,
}: PodcastContentProps) => {
  return (
    <Container
      data-scroll-wrapper
      sx={{
        display: "flex",
        flexDirection: "column",
        padding: "56px 0",
        gap: "24px",
      }}
    >
      <Box
        data-scroll-wrapper
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "flex-start",
            alignItems: "start",
            flexWrap: "wrap",
            gap: {
              sx: "40px",
              sm: "16px",
            },
            rowGap: "40px !important",
          }}
        >
          {episodes.map((episode) => {
            return <PodcastCard key={episode.id} {...episode} />;
          })}
        </Box>
      </Box>
    </Container>
  );
};

export default PodcastContent;
