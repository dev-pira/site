import { Box, Container } from "@mui/material";
import { Button } from "../Button";
import { Typography } from "../Typography";
import { Event } from "../../models/event";

export type EventDetailIntroProps = Pick<
  Event,
  "title" | "description" | "subscriptionUrl" | "dateTime"
>;

const EventDetailIntro: React.FC<EventDetailIntroProps> = ({
  dateTime,
  description,
  subscriptionUrl,
  title,
}: EventDetailIntroProps) => {
  let subscribeButton;
  if (!(dateTime instanceof Date)) {
    dateTime = new Date(dateTime);
  }

  if (subscriptionUrl && dateTime > new Date()) {
    subscribeButton = (
      <Button color="feature" href={subscriptionUrl}>
        Inscreva-se
      </Button>
    );
  }
  return (
    <Box
      sx={{
        background: "linear-gradient(85.31deg, #C3DEFA 0%, #04FFB4 75.32%)",
        height: "560px",
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
      }}
    >
      <Container sx={{ display: "flex" }}>
        <Box
          sx={{
            width: "544px",
            display: "flex",
            flexDirection: "column",
            gap: "24px",
            justifyContent: "center",
          }}
        >
          <Box>
            <Typography>Eventos/Meetups</Typography>
            <Typography variant="h2">{title}</Typography>
          </Box>
          <Typography>{description}</Typography>
          <Box sx={{ display: "flex", gap: "8px" }}>
            {subscribeButton}
            <Button color="transparent" href="#sobre">
              Detalhes
            </Button>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default EventDetailIntro;
