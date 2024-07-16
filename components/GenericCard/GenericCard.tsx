import { Box, Grid, Link, SxProps } from "@mui/material";
import { Typography } from "../Typography";
import { Button } from "../Button";

export interface GenericCardProps {
  id: string;
  title: string;
  description: string;
  emphasis?: string;
  url: string;
  buttonLabel: string;
}

const GenericCard: React.FC<GenericCardProps> = ({
  id,
  title,
  description,
  emphasis,
  url,
  buttonLabel,
}: GenericCardProps) => {
  const cardBackgroundColor = "white";

  const cardsx: SxProps = {
    width: { xs: "90%", sm: "255px" },
    minHeight: "282px",
    borderRadius: "10px",
    background: cardBackgroundColor,
    flex: 1,
  };
  cardsx.boxShadow = "0px 4px 24px rgba(30, 144, 255, .14)";

  const companyElement = emphasis ? (
    <Typography variant="h6" color="gradient_blue">
      {emphasis}
    </Typography>
  ) : null;

  return (
    <Grid data-scroll-wrapper key={id} sx={cardsx} item xs={12} md={3}>
      <Box
        sx={{
          display: "flex",
          paddingX: "24px",
          paddingY: "12px",
          minHeight: "282px",
          flexDirection: "column",
          justifyContent: "space-between",
        }}
      >
        <Typography variant="h4" color="primary">
          {title}
        </Typography>
        <Typography color="primary" fontSize={"0.875rem"}>
          {description.substring(0, 144)}
        </Typography>
        {companyElement}
        <Link href={url} target="_blank" rel="noreferrer">
          <Button expanded color="primary">
            {buttonLabel}
          </Button>
        </Link>
      </Box>
    </Grid>
  );
};

export default GenericCard;
