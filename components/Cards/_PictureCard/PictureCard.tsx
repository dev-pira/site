import { Box, Typography } from "@mui/material";

export interface PictureCardProps {
  imageUrl: string;
  upperContent: React.ReactNode;
  lowerContent: React.ReactNode;
}

const PictureCard: React.FC<PictureCardProps> = ({
  imageUrl,
  upperContent,
  lowerContent,
}: PictureCardProps) => {
  const cardSx = {
    width: "280px",
    height: "364px",
    borderRadius: "10px",
    boxShadow: "0px 4px 24px 0px rgba(30, 144, 255, 0.14)",
    backgroundColor: "gray",
    backgroundImage: `url('${imageUrl}')`,
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    backgroundSize: "cover",
    border: "1px solid rgba(33, 34, 54, 0.16)",
  };
  const contentSx = {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    height: "364px",
    background:
      "linear-gradient(180.06deg, rgba(33, 34, 54, 0.15) 0.05%, #212236 74.97%)",
    borderRadius: "0px 0px 10px 10px",
  };
  const upperContentSx = {
    display: "flex",
    height: "62px",
    padding: "16px",
    flexDirection: "row-reverse",
  };
  const lowerContentSx = {
    display: "flex",
    flexDirection: "column",
    height: "134px",
    padding: "16px",
    gap: "8px",
  };

  return (
    <Box sx={cardSx}>
      <Box sx={contentSx}>
        <Box sx={upperContentSx}>{upperContent}</Box>
        <Box sx={lowerContentSx}>{lowerContent}</Box>
      </Box>
    </Box>
  );
};

export interface DropProps {
  text: string;
}
export const Drop: React.FC<DropProps> = ({ text }: DropProps) => {
  const dropContainerSx = {
    display: "inline-flex",
    backgroundColor: "white",
    borderRadius: "35px",
    padding: "4px 10px 4px 10px",
    boxShadow: "0px 4px 24px 0px rgba(38, 50, 56, 0.44)s",
  };
  const dropTextSx = {
    fontFamily: "Inter",
    fontSize: "14px",
    fontWeight: 800,
    letterSpacing: "-0.055em",
    textAlign: "right",
    color: "rgba(38, 50, 56, 1)",
  };

  return (
    <Box sx={dropContainerSx}>
      <Typography sx={dropTextSx}>{text}</Typography>
    </Box>
  );
};

export default PictureCard;
