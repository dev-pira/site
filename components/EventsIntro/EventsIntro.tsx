import { Box, Container } from "@mui/material";
import { Typography } from "../Typography";

const EventsIntro: React.FC = () => {
  const defaultHeight = "560px";
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        backgroundColor: "#3f4052;",
      }}
    >
      <Container
        sx={{
          display: "flex",
          height: { xs: "320px", sm: defaultHeight },
          alignItems: "center",
        }}
      >
        <Box sx={{ width: "546px", textAlign: "center" }}>
          <Typography
            variant="h1"
            color="contrast"
            sx={{ fontSize: { xs: "3.5rem ", sm: "4.25rem" } }}
          >
            Eventos da{" "}
            <Typography
              variant="introSpan"
              color="gradient_red"
              sx={{ fontSize: { xs: "3.5rem ", sm: "4.25rem" } }}
            >
              {" "}
              comunidade
            </Typography>
          </Typography>
        </Box>
        <Box
          sx={{
            width: "740px",

            display: { xs: "none", sm: "flex" },
          }}
        >
          <Box
            sx={{
              background: 'url("/images/EventHeader/Background.svg")',
              width: "740px",
              height: defaultHeight,
            }}
          >
            <Box
              sx={{
                background: 'url("/images/EventHeader/Rocket.svg")',
                width: "625px",
                height: defaultHeight,
              }}
            ></Box>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default EventsIntro;
