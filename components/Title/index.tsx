import { SxProps, Typography } from "@mui/material";
import React, { ElementType } from "react";
import { Heading } from "../../ts/Heading";
import Text, { TextProps } from "../Text";

export interface TitleProps {
  children: React.ReactNode;
  heading?: Heading | undefined;
}

const Title: React.FC<TitleProps & TextProps> = ({
  children,
  heading = "h6",
  ...textProps
}: TitleProps & TextProps) => {
  return (
    <Text variant={heading} component={heading} {...textProps}>
      {children}
    </Text>
  );
};

export default Title;
