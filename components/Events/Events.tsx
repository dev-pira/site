import { Box, Container, Grid } from "@mui/material";
import Image from "next/legacy/image";
import { EventCard } from "../EventCard";
import { Button } from "../Button";
import { Typography } from "../Typography";
import { EventDetailsPart } from "../../models/event";
import { sendGAEvent } from "@next/third-parties/google";

export type EventsProps = {
  events: EventDetailsPart[];
};

const Events: React.FC<EventsProps> = ({ events }: EventsProps) => {
  let latestEvents = events;
  latestEvents.sort((a, b) => {
    if (a.dateTime < b.dateTime) return 1;
    if (a.dateTime > b.dateTime) return -1;
    return 0;
  });
  latestEvents = latestEvents.slice(0, 4);

  return (
    <Box
      sx={{
        backgroundColor: "#212236",
      }}
    >
      <Container>
        <Grid
          container
          sx={{
            pt: {
              xs: "36px",
              md: "88px",
            },
            pb: {
              xs: "52px",
              md: "48px",
            },
            flexDirection: {
              xs: "column",
              md: "row",
            },
            alignItems: "center",
          }}
        >
          <Grid item xs={12} md={6}>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                p: 2,
              }}
            >
              <Box
                sx={{
                  width: 500,
                  height: 340,
                }}
              >
                <Image
                  alt="Foto de uma das palestras realizadas pela comunidade"
                  src="/images/Events.png"
                  width={500}
                  height={340}
                  objectFit="cover"
                />
              </Box>
            </Box>
          </Grid>
          <Grid item xs={12} md={6}>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: "24px",
              }}
            >
              <Box>
                <Typography variant="h3" color="contrast" sx={{ mb: 3 }}>
                  Eventos
                </Typography>
                <Typography color="contrast">
                  Os eventos sempre são organizados pelos voluntários. Contamos
                  com a ajuda de parceiros locais que oferecem espaços e
                  recursos para a realização. Nos ajudam nos eventos instituções
                  de ensino, empresas e entidades que têm a mesma vontade que o
                  DEVPIRA de compartilhar conhecimento.
                </Typography>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  gap: "8px",
                }}
              >
                <Button
                  color="contrast"
                  href="/eventos"
                  onClick={() =>
                    sendGAEvent({
                      event: "Clicou em botão na seção Eventos da Main",
                      value: "Eventos",
                    })
                  }
                >
                  Conhecer eventos
                </Button>
              </Box>
            </Box>
          </Grid>
          {/* CARDS */}
          <Grid
            container
            wrap="nowrap"
            spacing={"30px"}
            mt={"80px"}
            sx={{
              flexDirection: {
                xs: "column",
                md: "row",
              },
              width: { xs: "100%", sm: "calc(100% + 30px)" },
            }}
          >
            {latestEvents.map((eventData) => {
              return (
                <EventCard
                  key={eventData.slug}
                  {...eventData}
                  color="primary"
                />
              );
            })}
          </Grid>
          {/* /CARDS */}
        </Grid>
      </Container>
    </Box>
  );
};

export default Events;
