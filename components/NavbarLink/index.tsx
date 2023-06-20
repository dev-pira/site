import { LinkProps, Link, SxProps} from "@mui/material";
import React from "react";

export interface NavbarLinkProps extends LinkProps {
  page: { label: string, link: string },
  
}

const NavbarLink: React.FC<NavbarLinkProps> = ({page, ...props}: NavbarLinkProps) => {
  let sx: SxProps = {
    color: '#6F718D',
    mx: '16px',
    my: '12px'
  }
  
  return (
    <Link href={page.link} underline="hover" sx={sx} {...props}>
        {page.label}
    </Link>
  );
};

export default NavbarLink;
