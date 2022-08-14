import { Button as MuiButton } from "@mui/material";
import React from "react";

export interface ButtonProps {
  text: string,
  disabled?: boolean,
  variant?: 'text' | 'outlined' | 'contained',
  color?: 'primary' | 'transparent' | 'feature' | 'contrast',
  onClick?: () => void
}

const Button: React.FC<ButtonProps> = ({text, disabled, variant, onClick}: ButtonProps) => {
  return (
    <MuiButton 
      disableElevation 
      variant={variant}
      onClick={onClick}
      disabled={disabled}
    >{text}</MuiButton>
  );
};

export default Button;
