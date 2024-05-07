import { AppBar, Box, Toolbar } from "@mui/material";
import { Image } from "../Image";
import NavbarLink from "../NavbarLink";

const Footer: React.FC = () => {
  const pages = [
    { label: "Sobre", link: "/" },
    { label: "Iniciativas", link: "#iniciativas" },
    { label: "Eventos", link: "/eventos" },
    { label: "Vagas", link: "/vagas" },
    { label: "Contato", link: "/contato" },
  ];
  const logoSize = { width: 185, height: 77 };
  return (
    <AppBar
      position="static"
      color="transparent"
      sx={{ display: "flex", alignItems: "center" }}
    >
      <Box
        sx={{
          margin: { xs: "32px 0px", sm: "0px" },
          flexWrap: "wrap",
          alignItems: { xs: "start", sm: "center" },
          gap: { xs: "20px", sm: "0px" },
          width: "1108px",
          display: "flex",
          flexDirection: { xs: "column", sm: "row" },
          maxWidth: "100vw",
          minHeight: "243px",
          px: "1.8rem",
        }}
      >
        <Box
          sx={{
            width: logoSize.width,
            height: logoSize.height,
            display: { sm: "none", md: "block" },
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
        <Toolbar
          sx={{
            flexGrow: 1,
            justifyContent: { xs: "start", sm: "center", md: "end" },
            padding: { xs: 0, sm: "1rem" },
          }}
        >
          <Box
            sx={{
              display: { xs: "flex", sm: "block" },
              alignItems: "start",
              paddingX: { xs: "0px", sm: "16px" },
              flexDirection: "column",
            }}
          >
            {pages.map((page) => (
              <NavbarLink key={page.label} page={page}></NavbarLink>
            ))}
          </Box>
        </Toolbar>
      </Box>
    </AppBar>
  );
};

export default Footer;
