import { Box, ImageList, ImageListItem } from "@mui/material"
import Image from "next/image"
import { Typography } from "../Typography"

export interface EventDetailGalleryProps {
    gallery?: string[]
}

const EventDetailGallery: React.FC<EventDetailGalleryProps> = ({gallery}:EventDetailGalleryProps) => {
    const defaultWidth = '1345px'
    if (gallery) {
        return <Box sx={{padding: '88px 0px', display:'flex',flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
            <Box sx={{width: defaultWidth}}>
            <Typography variant="h3">Galeria</Typography>
            <ImageList cols={4} gap={8} variant="masonry">
                {gallery.map((imageUrl) => (
                    <ImageListItem key={imageUrl}>
                        <img
        src={`${imageUrl}?w=248&fit=crop&auto=format`}
        srcSet={`${imageUrl}?w=248&fit=crop&auto=format&dpr=2 2x`}
        alt={imageUrl}
        loading="lazy"
      />
                    </ImageListItem>
                ))}
            </ImageList>
            </Box>
            
        </Box>
    }
    return <Box></Box>
}

export default EventDetailGallery