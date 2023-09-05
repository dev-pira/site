import * as React from "react";
import MenuIcon from "@mui/icons-material/Menu";
import { Image } from "../Image";
import NavbarLink from "../NavbarLink";
import {
  AppBar,
  Box,
  Link,
  Toolbar,
  IconButton,
  Menu,
  Container,
  Grid,
  MenuItem,
} from "@mui/material";

const pages = [
  { label: "Sobre", link: "/" },
  { label: "Iniciativas", link: "#iniciativas" },
  { label: "Eventos", link: "/eventos" },
  { label: "Vagas", link: "/vagas" },
];
const logoSize = { width: "185px", height: "77px" };

function Navbar() {
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
    null
  );

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar
      position="static"
      color="transparent"
      sx={{
        boxShadow: "none",
        py: {
          xs: "10px",
          md: "28px",
        },
      }}
    >
      <Container>
        <Toolbar disableGutters>
          <Grid container>
            {/* MOBILE */}
            <Grid
              item
              xs={10}
              sm={9}
              sx={{
                display: { xs: "flex", md: "none" },
                flex: 1,
                justifyContent: "start",
              }}
            >
              <Link
                href="/"
                title="DEVPIRA"
                sx={{
                  width: logoSize.width,
                  height: logoSize.height,
                }}
              >
                <Image
                  src="/images/Logo.svg"
                  alt="DEVPIRA"
                  layout="responsive"
                  width={logoSize.width}
                  height={logoSize.height}
                />
              </Link>
            </Grid>
            <Grid
              item
              xs={2}
              sm={3}
              sx={{
                display: { xs: "flex", md: "none" },
                justifyContent: "end",
              }}
            >
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="inherit"
              >
                <MenuIcon />
              </IconButton>

              <Menu
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "right",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{
                  display: { xs: "flex", md: "none" },
                  flexDirection: "column",
                }}
              >
                {pages.map((page) => (
                  <MenuItem key={page.link} onClick={handleCloseNavMenu}>
                    <NavbarLink page={page} />
                  </MenuItem>
                ))}
              </Menu>
            </Grid>
            {/* END MOBILE */}
            {/* DESKTOP */}
            <Grid item md={3}>
              <Link
                href="/"
                title="DEVPIRA"
                sx={{
                  display: { xs: "none", md: "block" },
                  width: logoSize.width,
                  height: logoSize.height,
                }}
              >
                <Image
                  src="/images/Logo.svg"
                  alt="DEVPIRA"
                  layout="responsive"
                  width={logoSize.width}
                  height={logoSize.height}
                />
              </Link>
            </Grid>
            <Grid item md>
              <Toolbar
                disableGutters
                sx={{
                  flexGrow: 1,
                  justifyContent: "flex-end",
                  display: { xs: "none", md: "flex" },
                }}
              >
                <Box sx={{ display: "flex", flexWrap: "wrap" }}>
                  {pages.map((page) => (
                    <NavbarLink
                      key={page.label}
                      page={page}
                      onClick={handleCloseNavMenu}
                    />
                  ))}
                </Box>
              </Toolbar>
            </Grid>
            {/* END DESKTOP */}
          </Grid>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default Navbar;
