import { Box, Button } from "@mui/material";
import ContentCard from "../_ContentCard/Content";
import { Event } from "../../../models/event";
import { Typography } from "../../Typography";

export type EventCardProps = Pick<
  Event,
  "title" | "description" | "dateTime" | "banner"
> & { variant?: "primary" | "secondary" };
const EventCard: React.FC<EventCardProps> = ({
  title,
  description,
  dateTime,
  banner,
  variant = "primary",
}: EventCardProps) => {
  const format = (dateTime: Date) => {
    const day = dateTime.getDate().toString().padStart(2, "0");
    const month = (dateTime.getMonth() + 1).toString().padStart(2, "0");
    const year = dateTime.getFullYear();
    const hour = dateTime.getHours().toString().padStart(2, "0");
    const minutes = dateTime.getMinutes().toString().padStart(2, "0");
    return `${day}/${month}/${year} às ${hour}h${minutes}`;
  };

  const color = variant == "secondary" ? "secondary" : "primary";

  return (
    <ContentCard bannerUrl={banner?.url} variant={variant}>
      <Typography variant="h4" color={color}>
        {title}
      </Typography>
      <Typography
        variant="body1"
        color={color}
        fontSize="small"
        fontWeight="light"
      >
        {description}
      </Typography>
      <Typography variant="body2" color={color} fontSize="small">
        {format(dateTime)}
      </Typography>
      <Box sx={{ display: "flex", gap: "8px" }}>
        <Button>Participar</Button>
        <Button>Mais</Button>
      </Box>
    </ContentCard>
  );
};

export default EventCard;
