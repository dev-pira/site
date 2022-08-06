import { SxProps, Typography } from "@mui/material";
import React, { ElementType } from "react";
import { TextHeading } from "../../ts/TextHeading";
import Text, { TextProps } from "../Text/Text";

export interface TitleProps {
  children: React.ReactNode;
  heading?: TextHeading | undefined;
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
