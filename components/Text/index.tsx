import { SxProps, Typography } from "@mui/material";
import React, { ElementType } from "react";

type FontSize = string | undefined;

export interface TextProps {
  children: React.ReactNode;
  component?: ElementType | undefined;
  variant?: string;
  color?: string | undefined;
  block?: Boolean | undefined;
  size?: FontSize;
}

const getFontSize = (size: FontSize): FontSize => {
  if (!size) return undefined;
  if (size === "small") return "11px";
  if (size === "normal") return "16px";
  if (size === "big") return "25px";

  return undefined;
};

const Text: React.FC<TextProps> = ({
  children,
  component = "p",
  variant = "body1",
  color = undefined,
  block = undefined,
  size = undefined,
}: TextProps) => {
  const sx: SxProps = {
    display: block && "block",
    color,
    fontSize: getFontSize(size),
  };

  return (
    <Typography component={component} variant={variant} sx={sx}>
      {children}
    </Typography>
  );
};

export default Text;
