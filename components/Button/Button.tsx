import { Button as MuiButton, SxProps } from "@mui/material";
import React from "react";

export interface ButtonProps {
  children: React.ReactNode,
  disabled?: boolean,
  expanded?: boolean,
  variant?: 'text' | 'contained',
  color?: 'primary' | 'transparent' | 'feature' | 'contrast',
  startIcon?: React.ReactNode,
  onClick?: () => void,
  href?: string,
}

const Button: React.FC<ButtonProps> = ({children, color = 'primary', disabled, expanded, href, startIcon, variant = 'contained', onClick}: ButtonProps) => {
  let backgroundColor = '#212236'
  let foregroundColor = 'white'
  let border = '1px solid rgba(33,34,54,.3)'

  if (variant === 'contained') {
    switch (color) {
      case 'feature':
        backgroundColor = '#E63462'
        break
      case 'contrast':
        backgroundColor = 'white'
        foregroundColor = '#212236'
        break
      case 'transparent':
        backgroundColor = 'transparent'
        border = '1px solid white'
        break
    }
  } else {
    backgroundColor = 'transparent'
    border = '0'
    foregroundColor = '#212236'
  }

  let sx: SxProps = {textTransform: 'none', backgroundColor: backgroundColor, color: foregroundColor, border: border}
  if (expanded) {
    sx.flex = 1
  }

  return (
    <MuiButton 
      disableElevation 
      variant={variant}
      startIcon={startIcon}
      onClick={onClick}
      disabled={disabled}
      href={href}
      sx={sx}
    >{children}</MuiButton>
  );
};

export default Button;
