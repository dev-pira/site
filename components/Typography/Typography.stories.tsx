import { ComponentMeta } from "@storybook/react";
import Typography from "./Typography";

export default {
  title: "Components/Typography",
  component: Typography,
} as ComponentMeta<typeof Typography>;

export const Default = { args: { variant: "h1", children: "Hello World" } };
