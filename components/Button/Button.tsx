import { Button as MuiButton, SxProps } from "@mui/material";
import React from "react";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  disabled?: boolean;
  expanded?: boolean;
  variant?: "text" | "contained";
  color?: "primary" | "transparent" | "feature" | "contrast";
  borderStyle?: "normal" | "rounded";
  startIcon?: React.ReactNode;
  onClick?: () => void;
  href?: string;
}

const Button: React.FC<ButtonProps> = ({
  children,
  color = "primary",
  borderStyle = "normal",
  disabled,
  expanded,
  href,
  startIcon,
  variant = "contained",
  onClick,
  ...props
}: ButtonProps) => {
  let backgroundColor = "#212236";
  let foregroundColor = "white";
  let border = "1px solid rgba(33,34,54,.3)";

  if (variant === "contained") {
    switch (color) {
      case "feature":
        backgroundColor = "#E63462";
        break;
      case "contrast":
        backgroundColor = "white";
        foregroundColor = "#212236";
        break;
      case "transparent":
        backgroundColor = "transparent";
        border = "1px solid white";
        break;
    }
  } else {
    backgroundColor = "transparent";
    border = "0";
    foregroundColor = "#212236";
  }

  const sx: SxProps = {
    textTransform: "none",
    backgroundColor: backgroundColor,
    color: foregroundColor,
    border: border,
    borderRadius: borderStyle === "rounded" ? 30 : 1,
  };
  if (expanded) {
    sx.flex = 1;
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
      {...props}
    >
      {children}
    </MuiButton>
  );
};

export default Button;
