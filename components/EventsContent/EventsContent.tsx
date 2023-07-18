import { Box } from "@mui/material";
import { EventCard } from "../EventCard";
import { Typography } from "../Typography";
import { EventPart } from "../../models/event";

export interface EventsContentProps {
  events: EventPart[];
}

const EventsContent: React.FC<EventsContentProps> = ({
  events,
}: EventsContentProps) => {
  const defaultWidth = "1345px";
  const types = events
    .map((e) => e.type)
    .filter((value, index, self) => self.indexOf(value) === index);
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {types.map((type) => {
        const eventsOfType = events
          .filter((e) => e.type === type)
          .sort((a, b) => {
            if (a.dateTime < b.dateTime) return 1;
            if (a.dateTime > b.dateTime) return -1;
            return 0;
          })
          .slice(0, 4);
        const missingBoxes = [];
        for (let i = 0; i < 4 - eventsOfType.length; i++) {
          missingBoxes.push(i);
        }
        return (
          <Box
            key={type}
            sx={{
              width: defaultWidth,
              display: "flex",
              flexDirection: "column",
              padding: "56px 0",
              gap: "24px",
            }}
          >
            <Typography variant="h3">{type}</Typography>
            <Box
              sx={{
                width: defaultWidth,
                display: "flex",
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center",
                gap: "16px",
              }}
            >
              {eventsOfType.map((eventData) => {
                return (
                  <EventCard
                    key={eventData.slug}
                    {...eventData}
                    color="contrast"
                    shadowed
                  />
                );
              })}
              {missingBoxes.map((index) => {
                return (
                  <Box key={index} sx={{ flex: 1 }}>
                    &nbsp;
                  </Box>
                );
              })}
            </Box>
          </Box>
        );
      })}
    </Box>
  );
};

export default EventsContent;
