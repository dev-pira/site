import { Box, Container } from "@mui/material";
import { EventCard } from "../EventCard";
import { Typography } from "../Typography";
import { EventPart } from "../../models/event";

export interface EventsContentProps {
  events: EventPart[];
}

const EventsContent: React.FC<EventsContentProps> = ({
  events,
}: EventsContentProps) => {
  const types = events
    .map((e) => e.type)
    .filter((value, index, self) => self.indexOf(value) === index);
  const partnerEventsIndex = events.findIndex((e) =>
    e.type?.toLocaleLowerCase().includes("parceiro"),
  );
  if (partnerEventsIndex > -1) {
    const partnerEventsType = types[partnerEventsIndex];
    types.splice(partnerEventsIndex, 1);
    types.push(partnerEventsType);
  }

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
          });
        const missingBoxes = [];
        for (let i = 0; i < 4 - eventsOfType.length; i++) {
          missingBoxes.push(i);
        }
        return (
          <Container
            key={type}
            sx={{
              display: "flex",
              flexDirection: "column",
              padding: "56px 0",
              gap: "24px",
            }}
          >
            <Typography
              variant="h3"
              sx={{ paddingX: { xs: "16px", sm: "0" }, mb: "12px" }}
            >
              {type}
            </Typography>
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "flex-start",
                alignItems: "start",
                flexWrap: "wrap",
                gap: { xs: "40px", sm: "16px" },
                rowGap: "40px !important",
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
          </Container>
        );
      })}
    </Box>
  );
};

export default EventsContent;
