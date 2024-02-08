import { Meta, StoryObj } from "@storybook/react";
import Typography, { TypographyProps } from "./Typography";

const props: TypographyProps = {
  children: "Hello World",
};

const meta: Meta<typeof Typography> = {
  component: Typography,
};

export default meta;
export const Default: StoryObj<typeof Typography> = {
  args: props,
};
