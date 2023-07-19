import { Box } from "@mui/material";
import { EventCard } from "../EventCard";

export interface EventsProps {
  events: {
    slug: string;
    description?: string;
    detailsLink: string;
    participateLink?: string;
    title: string;
    type: "Meetup" | "Live" | "Worshop";
    dateTime: Date;
  }[];
}

const Members: React.FC<EventsProps> = ({ events }: EventsProps) => {
  let limitedEvents = events;
  limitedEvents.sort((a, b) => {
    if (a.dateTime < b.dateTime) return 1;
    if (a.dateTime > b.dateTime) return -1;
    return 0;
  });
  limitedEvents = limitedEvents.slice(0, 4);
  const missingBoxes = [];
  for (let i = 0; i < 4 - limitedEvents.length; i++) {
    missingBoxes.push(i);
  }
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        backgroundColor: "#212236;",
        maxWidth: "100vw",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          maxWidth: "100vw",
          rowGap: "2.5rem",
          minHeight: "957px",
          py: "1.8rem",
          px: "1.8rem",
          justifyContent: "space-around",
        }}
      >
        {/* CARDS */}
        <Box
          sx={{
            display: "flex",
            maxWidth: "100vw",
            flexWrap: "wrap",
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            gap: "30px",
          }}
        >
          {limitedEvents.map((eventData, index) => {
            return <EventCard key={index} {...eventData} color="primary" />;
          })}
          {missingBoxes.map((index) => {
            return (
              <Box key={index} sx={{ flex: 1 }}>
                &nbsp;
              </Box>
            );
          })}
        </Box>
        {/* /CARDS */}
      </Box>
    </Box>
  );
};

export default Members;
