import { Box } from "@mui/material";

///Should fit
/// JobCard ✅
/// PodcastEpisodeCard
/// BlogPostCart
/// EventCard ✅
/// AlternateEventCard ✅
export interface ContentCardProps {
  bannerUrl?: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary";
}
const ContentCard: React.FC<ContentCardProps> = ({
  bannerUrl,
  children,
  variant = "primary",
}: ContentCardProps) => {
  const height = bannerUrl ? "364px" : "229px";
  const gap = bannerUrl ? "8px" : "16px";
  const backgroundColor =
    variant == "secondary" ? "rgba(43, 44, 62, 1)" : "white";
  const boxShadow =
    variant == "secondary"
      ? "none"
      : "0px 4px 24px 0px rgba(30, 144, 255, 0.14)";

  return (
    <Box
      sx={{
        width: "280px",
        borderRadius: "10px",
        height,
        boxShadow,
        backgroundColor,
      }}
    >
      {bannerUrl ? (
        <Box
          sx={{
            height: "159px",
            backgroundImage: `url('${bannerUrl}')`,
            borderRadius: "10px 10px 0px 0px",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            backgroundSize: "cover",
          }}
        ></Box>
      ) : (
        <></>
      )}
      <Box
        id="card-content"
        sx={{
          display: "flex",
          padding: "24px",
          gap,
          flexDirection: "column",
        }}
      >
        {children}
      </Box>
    </Box>
  );
};

export default ContentCard;
