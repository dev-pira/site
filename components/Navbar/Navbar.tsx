import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import { Image } from "../Image";
import NavbarLink from '../NavbarLink';

const pages = [
  { label: "Sobre", link: "/" },
  { label: "Iniciativas", link: "#iniciativas" },
  { label: "Eventos", link: "/eventos" },
];
const logoSize = { width: "145px", height: "60px" };

function Navbar() {
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);

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
           xs: '10px',
           md: '28px'
        }
      }}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          {/* MOBILE */}
          <Box sx={{
            display: { xs: 'block', md: 'none' },
            width: logoSize.width,
            height: logoSize.height
          }}>
            <Image
              src="/images/Logo.svg"
              alt="DEVPIRA"
              layout="responsive"
              width={logoSize.width}
              height={logoSize.height}
            />
          </Box>
          
          <Box sx={{display: { xs: 'flex', md: 'none' } }}>
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
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {pages.map((page, index) => (
                <Button
                  variant='text'
                  key={index}
                  onClick={handleCloseNavMenu}
                  href={page.link}
                  sx={{ my: 2, color: 'white', display: 'block' }}
                >
                  {page.label}
                </Button>
              ))}
            </Menu>
          </Box>
          {/* END MOBILE */}

          {/* DESKTOP */}
          <Box sx={{
            display: { xs: 'none', md: 'block' },
            width: logoSize.width,
            height: logoSize.height
          }}>
            <Image
              src="/images/Logo.svg"
              alt="DEVPIRA"
              layout="responsive"
              width={logoSize.width}
              height={logoSize.height}
            />
          </Box>
          <Toolbar sx={{
            flexGrow: 1,
            justifyContent: "flex-end",
            display: { xs: 'none', md: 'flex' },
          }}>
            <Box>
              {pages.map((page) => (
                <NavbarLink key={page.label} page={page} onClick={handleCloseNavMenu} />
              ))}
            </Box>
          </Toolbar>
          {/* END DESKTOP */}

          <Button variant="contained">Call to Action</Button>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default Navbar;