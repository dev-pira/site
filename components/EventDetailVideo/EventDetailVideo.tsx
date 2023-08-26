import { Box } from "@mui/material";
import { Typography } from "../Typography";
import { Event } from "../../models/event";

export type EventDetailVideoProps = Pick<Event, "videoUrl">;

const EventDetailVideo: React.FC<EventDetailVideoProps> = ({
  videoUrl,
}: EventDetailVideoProps) => {
  if (videoUrl) {
    const defaultWidth = "1345px";
    return (
      <Box
        sx={{
          padding: "88px 0px",
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "#00F4AB",
        }}
      >
        <Box sx={{ width: defaultWidth }}>
          <Typography variant="h3">Video</Typography>
          <Box
            sx={{ margin: "16px 0", display: "flex", justifyContent: "center" }}
          >
            <iframe
              style={{ border: 0 }}
              width="700"
              height="394"
              src={videoUrl}
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
          </Box>
        </Box>
      </Box>
    );
  } else return <Box></Box>;
};

export default EventDetailVideo;
