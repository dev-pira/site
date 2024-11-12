import { sendGAEvent } from "@next/third-parties/google";
import { CoursePart } from "../../models/course";
import { EventCardProps } from "../EventCard/EventCard";
import { Button } from "../Button";
import { Box, Grid, SxProps } from "@mui/material";
import { Typography } from "../Typography";

type CardProps = {
  color: "primary" | "contrast";
  shadowed?: boolean;
};

export type CourseCardProps = CoursePart & CardProps;

const CourseCard: React.FC<CourseCardProps> = ({
  color,
  shadowed,
  slug,
  title,
  banner,
  description,
  dateTime,
  subscriptionUrl,
}: EventCardProps) => {
  const splittedDescription = description?.split(" ");
  const trimmedDescription = splittedDescription
    ? splittedDescription?.slice(0, 20)
    : [];
  let formattedDescription = trimmedDescription?.join(" ");
  if (trimmedDescription.length >= 20) {
    formattedDescription += "...";
  }

  if (!(dateTime instanceof Date)) {
    dateTime = new Date(dateTime);
  }

  let participateNode;
  if (subscriptionUrl && dateTime > new Date()) {
    participateNode = (
      <Button
        href={subscriptionUrl}
        color={color === "primary" ? "contrast" : "primary"}
        onClick={() =>
          sendGAEvent({
            envet: "Clicou no botão Participar no Cartão de Curso",
            value: slug,
          })
        }
      >
        Participar
      </Button>
    );
  }
  let formatedDateTime = `${dateTime.getDate()}/${
    dateTime.getMonth() + 1
  }/${dateTime.getFullYear()}`;
  if (dateTime.getHours() || dateTime.getMinutes()) {
    formatedDateTime += ` às ${dateTime.getHours()}h${dateTime
      .getMinutes()
      .toString()
      .padStart(2, "0")}`;
  }

  let cardBackgroundColor = "#2B2C3E";
  let cardImageBackground = "linear-gradient(180deg, #00BE85 0%, #1E90FF 100%)";

  if (color === "contrast") {
    cardBackgroundColor = "white";
    cardImageBackground = "#F1F3F5";
  }

  if (banner?.url) {
    cardImageBackground = `url("${banner.url}")`;
  }

  const cardsx: SxProps = {
    borderRadius: "10px",
    maxHeight: "500px",
    background: cardBackgroundColor,
    display: "flex",
    flexDirection: "column",
    height: "100%",
  };

  if (shadowed) {
    cardsx.boxShadow = "0px 4px 24px rgba(30, 144, 255, .14)";
  }

  const textColor = color === "primary" ? "contrast" : "primary";

  let bannerPlaceHolder;
  if (!banner?.url) {
    bannerPlaceHolder = (
      <Typography color="transparent" centered>
        Imagem do banner do evento
      </Typography>
    );
  }

  return (
    <Grid
      data-scroll-wrapper
      item
      xs={12}
      md={6}
      lg={3}
      sx={{
        display: "flex",

        margin: "0 auto",
        flexDirection: "column",
        width: { xs: "90%", sm: "255px" },
        height: "451px !important",
      }}
    >
      <Box key={slug} sx={cardsx}>
        <Box
          sx={{
            height: "159px",
            background: `${cardImageBackground} no-repeat center`,
            backgroundSize: "cover",
            borderTopLeftRadius: "10px",
            borderTopRightRadius: "10px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            padding: "12px",
          }}
        >
          {bannerPlaceHolder}
        </Box>
        <Box
          sx={{
            display: "flex",
            padding: "24px",
            flexDirection: "column",
            gap: "8px",
            flex: 1,
          }}
        >
          <Box
            sx={{
              flexGrow: 1,
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              gap: { xs: "12px", sm: "0px" },
            }}
          >
            <Typography
              sx={{
                fontFamily: "Inter",
                fontSize: "20px",
                fontStyle: "normal",
                fontWeight: 700,
                letterSpacing: "1.1px",
              }}
              color={textColor}
            >
              {title}
            </Typography>
            <Typography
              fontSize={"0.875rem"}
              color={textColor}
              sx={{
                display: "-webkit-box",
                overflow: "hidden",
                WebkitBoxOrient: "vertical",
                WebkitLineClamp: 3,
              }}
            >
              {formattedDescription}
            </Typography>
            <Typography fontSize={"0.875rem"} color={textColor}>
              {formatedDateTime}
            </Typography>
          </Box>

          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              gap: "8px",
            }}
          >
            {participateNode}
            <Button
              href={`eventos/${slug}`}
              expanded
              color={color}
              onClick={() =>
                sendGAEvent({
                  event: "Clicou no botão Mais no Cartão de Evento",
                  value: slug,
                })
              }
            >
              Mais
            </Button>
          </Box>
        </Box>
      </Box>
    </Grid>
  );
};

export default CourseCard;
