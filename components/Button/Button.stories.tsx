import { ComponentMeta } from "@storybook/react";
import Button from "./Button";

export default {
  title: "Components/Button",
  component: Button,
} as ComponentMeta<typeof Button>;

export const Primary = { args: { text: "Hello World" } };
