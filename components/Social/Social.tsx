import { Box, Container } from "@mui/material";
import Image from "next/legacy/image";
import { SocialButton } from "../SocialButton";
import { Typography } from "../Typography";

export interface SocialProps {
  color?: "green" | "blue";
}

const Social: React.FC<SocialProps> = ({ color = "green" }: SocialProps) => {
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
      <Container
        sx={{
          display: "flex",
          flexWrap: "wrap",
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
            <SocialButton midia="discord" href="https://discord.gg/hdRAFpg5">
              DEVPIRA
            </SocialButton>
            <SocialButton
              midia="facebook"
              href="https://www.facebook.com/DEVPIRA/"
            >
              DEVPIRA
            </SocialButton>
            <SocialButton midia="github" href="https://github.com/dev-pira">
              dev-pira
            </SocialButton>
            <SocialButton
              midia="instagram"
              href="https://www.instagram.com/devpira/"
            >
              devpira
            </SocialButton>
            <SocialButton
              midia="linkedin"
              href="https://linkedin.com/company/devpira"
            >
              company/devpira
            </SocialButton>
            <SocialButton
              midia="meetup"
              href="https://www.meetup.com/pt-BR/devpira/"
            >
              DEVPIRA
            </SocialButton>
            <SocialButton
              midia="slack"
              href="https://app.slack.com/client/TMYA8HQ65"
            >
              DEVPIRA
            </SocialButton>
            <SocialButton
              midia="telegram"
              href="https://t.me/joinchat/CY8l7Ro28yIZN-GSoAiIFQ"
            >
              DEVPIRA
            </SocialButton>
            <SocialButton
              midia="youtube"
              href="https://www.youtube.com/@DEVPIRA"
            >
              DEVPIRA
            </SocialButton>
            <SocialButton
              midia="whatsapp"
              href="https://chat.whatsapp.com/EkL1sHqrIvY0DIGjGYMqej"
            >
              DEVPIRA
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
          <Image alt="" src="/images/Social.svg" width={359} height={332} />
        </Box>
      </Container>
    </Box>
  );
};

export default Social;
