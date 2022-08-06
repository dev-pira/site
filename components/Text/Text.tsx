import { SxProps, Typography } from "@mui/material";
import React, { ElementType } from "react";

import { TextVariant } from "../../ts";

type FontSize = string | undefined;

export interface TextProps {
  children: React.ReactNode;
  component?: ElementType | undefined;
  variant?: TextVariant;
  color?: string | undefined;
  block?: Boolean | undefined;
  italic?: Boolean | undefined;
  weight?: number | undefined;
  size?: FontSize;
}

const getFontSize = (size: FontSize): FontSize => {
  if (!size) return undefined;
  if (size === "small") return "11px";
  if (size === "normal") return "16px";
  if (size === "big") return "25px";

  return size;
};

const Text: React.FC<TextProps> = ({
  children,
  component = "div",
  variant = "body1",
  color = undefined,
  block = undefined,
  italic = undefined,
  weight = undefined,
  size = undefined,
}: TextProps) => {
  const sx: SxProps = {
    display: block ? "block" : "inline",
    color,
    fontSize: getFontSize(size),
    fontWeight: weight,
    fontStyle: italic ? "italic" : "",
  };

  return (
    <Typography component={component} variant={variant} sx={sx}>
      {children}
    </Typography>
  );
};

export default Text;
