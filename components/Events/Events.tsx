import { Box, Container, Grid } from "@mui/material";
import Image from "next/image";
import { EventCard } from "../EventCard";
import { Button } from "../Button";
import { Typography } from "../Typography";

export interface EventsProps {
  events: {
    slug: string
    description?: string
    detailsLink: string
    participateLink?: string
    title: string
    type: "Meetup" | "Live" | "Worshop"
    dateTime: Date
  }[]
}

const Events: React.FC<EventsProps> = ({ events }: EventsProps) => {
  let limitedEvents = events;
  limitedEvents.sort((a, b) => {
    if (a.dateTime < b.dateTime) return 1;
    if (a.dateTime > b.dateTime) return -1;
    return 0;
  });
  limitedEvents = limitedEvents.slice(0, 4);
  return (
    <Box 
      sx={{
        backgroundColor: '#212236',
      }}
    >
    <Container>
      <Grid
        container
        sx={{
          pt:{
            xs: '36px',
            md: '88px' 
          },
          pb:{
            xs: '36px',
            md: '48px' 
          },
          flexDirection: {
            xs: 'column',
            md: 'row'
          }
        }}>
        <Grid item xs={12} md={6}>
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              p: 2
            }}
          >
            <Box
              sx={{
                width: 346,
                height: 276,
              }}
            >
              <Image alt="Foto de uma das palestras realizadas pela comunidade" src="/images/Events.png" width={346} height={276} objectFit="cover" />
            </Box>
          </Box>
        </Grid>
        <Grid item xs={12} md={6}>
          <Box
            sx={{
              display: "flex",
              flexDirection: 'column',
              gap: "24px",
            }}
          >
            <Box>
              <Typography variant="h3" color="contrast">
                Eventos
              </Typography>
              <Typography color="contrast">
                Os eventos sempre são organizados pelos voluntários. Contamos com
                a ajuda de parceiros locais que oferecem espaços e recursos para a
                realização. Nos ajudam nos eventos instituções de ensino, empresas
                e entidades que têm a mesma vontade que o DEVPIRA de compartilhar
                conhecimento.
              </Typography>
            </Box>
            <Box sx={{
              display: "flex",
              flexDirection: "row",
              gap: "8px"
            }}>
              <Button color="contrast" href="/eventos">
                Conhecer eventos
              </Button>
            </Box>
          </Box>
        </Grid>
        <Grid item columns={12}></Grid>
          {/* CARDS */}
          <Box
            sx={{
              display: "flex",
              maxWidth: "100vw",
              flexWrap: "wrap",
              flexDirection: "row",
              alignItems: "center",
              gap: "30px",
            }}
          >
            {limitedEvents.map((eventData, index) => {
              return <EventCard key={index} {...eventData} color="primary" />;
            })}
          </Box>
          {/* /CARDS */}
      </Grid>
    </Container>
  </Box>
  );
};

export default Events;
