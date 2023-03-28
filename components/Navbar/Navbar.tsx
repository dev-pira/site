import { AppBar, Box, Toolbar } from "@mui/material";
import { Button } from "../Button";
import { Image } from "../Image";

const Navbar: React.FC = () => {
  const logoSize = { width: "145px", height: "60px" };
  const items = [
    { label: "Sobre", link: "/" },
    { label: "Iniciativas", link: "#iniciativas" },
    { label: "Eventos", link: "/eventos" },
  ];
  return (
    <AppBar
      position="static"
      color="transparent"
      sx={{
        boxShadow: "none",
        px: "1.8rem",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          flexDirection: "row",
          alignItems: "center",
          maxWidth: "100vw",
          height: "100px",
        }}
      >
        <Box sx={{ width: logoSize.width, height: logoSize.height }}>
          <Image
            src="/images/Logo.svg"
            alt="DEVPIRA"
            layout="responsive"
            width={logoSize.width}
            height={logoSize.height}
          />
        </Box>
        <Toolbar sx={{ flexGrow: 1, justifyContent: "flex-end" }}>
          <Box>
            {items.map((item) => (
              <Button variant="text" key={item.label} href={item.link}>
                {item.label}
              </Button>
            ))}
          </Box>
        </Toolbar>
        {/* <Button variant="contained">Call to Action</Button> */}
      </Box>
    </AppBar>
  );
};

export default Navbar;
