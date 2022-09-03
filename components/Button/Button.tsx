import { Button as MuiButton } from "@mui/material";
import React from "react";

export interface ButtonProps {
  text: string,
  disabled?: boolean,
  variant?: 'text' | 'outlined' | 'contained',
  color?: 'primary' | 'transparent' | 'feature' | 'contrast',
  startIcon?: React.ReactNode,
  onClick?: () => void
}

const Button: React.FC<ButtonProps> = ({text, disabled, startIcon, variant, onClick}: ButtonProps) => {
  return (
    <MuiButton 
      disableElevation 
      variant={variant}
      startIcon={startIcon}
      onClick={onClick}
      disabled={disabled}
    >{text}</MuiButton>
  );
};

export default Button;
