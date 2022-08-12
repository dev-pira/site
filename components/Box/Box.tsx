import { Box as MuiBox, SxProps, Theme } from "@mui/material";
import React from "react";

interface BoxProps {
  sx?: SxProps<Theme>;
  children?: React.ReactNode;
}

const Box: React.FC<BoxProps> = ({ sx, children }: BoxProps) => {
  return <MuiBox sx={sx}>{children}</MuiBox>;
};

export default Box;
