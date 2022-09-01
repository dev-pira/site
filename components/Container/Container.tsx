import { Container as MuiContainer, SxProps, Theme } from "@mui/material";
import React from "react";

interface BoxProps {
  children?: React.ReactNode;
}

const Container: React.FC<BoxProps> = ({ children }: BoxProps) => {
  return <MuiContainer>{children}</MuiContainer>;
};

export default Container;
