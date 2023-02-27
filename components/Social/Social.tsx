import { Box } from "@mui/material";
import Image from "next/image";
import { SocialButton } from "../SocialButton";
import { Typography } from "../Typography";

export interface SocialProps {
  color?: "green" | "blue";
}

const Social: React.FC<SocialProps> = ({ color = "green" }: SocialProps) => {
  const defaultWidth = "1345px";
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "row",
        maxWidth: "100vw",
        justifyContent: "center",
        backgroundColor: color === "blue" ? "#46A4FF" : "#00F4AB",
        px: "1.8rem",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          width: defaultWidth,
          maxWidth: "100%",
          alignItems: "center",
          justifyContent: {
            xs: "center",
            sm: "center",
            md: "space-around",
            lg: "space-around",
          },
          height: "367px",
        }}
      >
        <Box
          sx={{
            display: "flex",
            maxWidth: "546px",
            px: "10px",
            flexDirection: "column",
            gap: "24px",
          }}
        >
          <Typography variant="h3">Acompanhe nas redes sociais</Typography>
          <Box
            sx={{
              display: "flex",
              flexWrap: "wrap",
              flexDirection: "row",
              gap: "8px",
            }}
          >
            <SocialButton
              midia="facebook"
              href="https://www.facebook.com/DEVPIRA/"
            >
              DEVPIRA
            </SocialButton>
            <SocialButton
              midia="instagram"
              href="https://www.instagram.com/devpira_/"
            >
              devpira
            </SocialButton>
            <SocialButton
              midia="linkedin"
              href="https://linkedin.com/company/devpira"
            >
              company/devpira
            </SocialButton>
          </Box>
        </Box>
        <Box
          sx={{
            width: "359px",
            height: "367px",
            display: { xs: "none", sm: "none", md: "flex", lg: "flex" },
            alignItems: "flex-end",
          }}
        >
          <Image alt="" src="/images/Social.svg" width="359px" height="332px" />
        </Box>
      </Box>
    </Box>
  );
};

export default Social;
