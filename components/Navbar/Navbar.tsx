import { AppBar, Box, Link, Toolbar } from "@mui/material";
import { Button } from "../Button";
import { Image } from "../Image";

const Navbar: React.FC = () => {
  const defaultWidth = "1345px";
  const logoSize = { width: "191px", height: "80px" };
  const items = [
    { label: "Sobre", link: "/" },
    { label: "Iniciativas", link: "#iniciativas" },
    { label: "Eventos", link: "/eventos" },
    { label: "Vagas", link: "/vagas" }
  ];
  return (
    <AppBar
      position="static"
      color="transparent"
      sx={{
        display: "flex",
        alignItems: "center",
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
          width: defaultWidth,
          maxWidth: "100vw",
          height: "100px",
        }}
      >
        <Link sx={{ marginLeft: '20px', width: logoSize.width, height: logoSize.height }} href="/">
          <Image
            src="/images/Logo.svg"
            alt="DEVPIRA"
            layout="responsive"
            width={logoSize.width}
            height={logoSize.height}
          />
        </Link>
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
