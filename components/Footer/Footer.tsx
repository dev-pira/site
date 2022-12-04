import { AppBar, Box, Toolbar } from "@mui/material";
import { Button } from "../Button";
import { Image } from "../Image";

const Footer: React.FC = () => {
  const items = [
    { label: "Sobre", link: "/" },
    { label: "Iniciativas", link: "#iniciativas" },
    { label: "Eventos", link: "/eventos" },
  ];
  const logoSize = { width: "185px", height: "77px" };
  return (
    <AppBar
      position="static"
      color="transparent"
      sx={{ display: "flex", alignItems: "center", maxWidth: "100%" }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          maxWidth: "1108px",
          flexWrap: "wrap",
          height: "243px",
        }}
      >
        {/* <Typography>DEVPIRA</Typography> */}
        <Box
          sx={{
            width: logoSize.width,
            height: logoSize.height,
            display: "none",
          }}
        >
          <Image
            src="/images/Logo.svg"
            alt="DEVPIRA"
            layout="responsive"
            width={logoSize.width}
            height={logoSize.height}
          />
        </Box>
        <Toolbar sx={{ flexGrow: 1, justifyContent: "end" }}>
          <Box>
            {items.map((item) => (
              <Button variant="text" key={item.label} href={item.link}>
                {item.label}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </Box>
    </AppBar>
  );
};

export default Footer;
