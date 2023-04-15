import { AppBar, Box, Toolbar } from "@mui/material";
import { Button } from "../Button";
import { Image } from "../Image";

const Footer: React.FC = () => {
  const items = [
    { label: "Sobre", link: "/" },
    { label: "Iniciativas", link: "#iniciativas" },
    { label: "Eventos", link: "/eventos" },
    { label: "Vagas", link: "/vagas" }
  ];
  const logoSize = { width: "185px", height: "77px" };
  return (
    <AppBar
      position="static"
      color="transparent"
      sx={{ display: "flex", alignItems: "center" }}
    >
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          flexDirection: "row",
          alignItems: "center",
          width: "1108px",
          maxWidth: "100vw",
          minHeight: "243px",
          px: "1.8rem",
        }}
      >
        {/* <Typography>DEVPIRA</Typography> */}
        <Box sx={{ width: logoSize.width, height: logoSize.height }}>
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
