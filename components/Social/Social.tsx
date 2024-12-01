import { Box, Container } from "@mui/material";
import Image from "next/legacy/image";
import { SocialButton } from "../SocialButton";
import { Typography } from "../Typography";

export interface SocialProps {
  color?: "green" | "blue";
}

const Social: React.FC<SocialProps> = ({ color = "green" }: SocialProps) => {
  const buttons: {
    label: string;
    link: string;
    midia:
      | "discord"
      | "facebook"
      | "github"
      | "instagram"
      | "linkedin"
      | "meetup"
      | "slack"
      | "telegram"
      | "youtube"
      | "whatsapp";
  }[] = [
    { midia: "discord", link: "https://discord.gg/hdRAFpg5", label: "DEVPIRA" },
    {
      midia: "facebook",
      link: "https://www.facebook.com/DEVPIRA/",
      label: "DEVPIRA",
    },
    { midia: "github", link: "https://github.com/dev-pira", label: "dev-pira" },
    {
      midia: "instagram",
      link: "https://www.instagram.com/devpira",
      label: "DEVPIRA",
    },
    {
      midia: "linkedin",
      link: "https://linkedin.com/company/devpira",
      label: "DEVPIRA",
    },
    {
      midia: "meetup",
      link: "https://www.meetup.com/pt-BR/devpira/",
      label: "DEVPIRA",
    },
    {
      midia: "slack",
      link: "https://app.slack.com/client/TMYA8HQ65",
      label: "DEVPIRA",
    },
    {
      midia: "telegram",
      link: "https://t.me/joinchat/CY8l7Ro28yIZN-GSoAiIFQ",
      label: "DEVPIRA",
    },
    {
      midia: "youtube",
      link: "https://www.youtube.com/@DEVPIRA",
      label: "DEVPIRA",
    },
    {
      midia: "whatsapp",
      link: "https://chat.whatsapp.com/J5VHhOcwhdY2vCXOj6nQKb",
      label: "DEVPIRA",
    },
  ];

  return (
    <Box
      data-scroll-wrapper
      sx={{
        display: "flex",
        flexDirection: { xs: "column", md: "row" },
        justifyContent: "center",
        backgroundColor: color === "blue" ? "#46A4FF" : "#00F4AB",
        px: { xs: 0, sm: "1.8rem" },
      }}
    >
      <Container
        sx={{
          display: "flex",
          flexWrap: "wrap",
          alignItems: "center",
          justifyContent: {
            xs: "center",
            sm: "center",
            md: "space-around",
            lg: "space-around",
          },
          minHeight: "367px",
        }}
      >
        <Box
          sx={{
            display: "flex",
            maxWidth: "546px",
            padding: { xs: "40px 0 20px 0", sm: "40px 10px 20px 20px" },
            flexDirection: "column",
            gap: "24px",
          }}
        >
          <Typography variant="h3">Acompanhe nas redes sociais</Typography>

          <Box
            sx={{
              display: "flex",
              flexWrap: "wrap",
              flexDirection: { xs: "column", md: "row" },
              gap: { xs: "16px", sm: "8px" },
            }}
          >
            {buttons.map((button) => (
              <SocialButton
                key={button.midia}
                midia={button.midia}
                href={button.link}
              >
                {button.label}
              </SocialButton>
            ))}
          </Box>
        </Box>
        <Box
          sx={{
            width: "359px",
            height: "367px",
            display: "flex",
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
