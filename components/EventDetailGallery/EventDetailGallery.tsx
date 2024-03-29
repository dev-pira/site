/* eslint-disable @next/next/no-img-element */
import { Box, Container, ImageList, ImageListItem } from "@mui/material";
import { Typography } from "../Typography";
import { Event } from "../../models/event";

export type EventDetailGalleryProps = Pick<Event, "gallery">;

const EventDetailGallery: React.FC<EventDetailGalleryProps> = ({
  gallery,
}: EventDetailGalleryProps) => {
  if (gallery?.length) {
    return (
      <Box
        sx={{
          padding: "88px 0px",
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Container>
          <Typography variant="h3">Galeria</Typography>
          <ImageList cols={4} gap={8} variant="masonry">
            {gallery.map((imageUrl) => (
              <ImageListItem key={imageUrl}>
                <img
                  src={`${imageUrl}`}
                  srcSet={`${imageUrl}`}
                  alt={imageUrl}
                  loading="lazy"
                />
              </ImageListItem>
            ))}
          </ImageList>
        </Container>
      </Box>
    );
  } else return <Box></Box>;
};

export default EventDetailGallery;
