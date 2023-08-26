import { ComponentMeta } from "@storybook/react";
import Input from "./Input";

export default {
  title: "Components/Input",
  component: Input,
} as ComponentMeta<typeof Input>;

export const Default = {
  args: {
    id: "example",
    label: "A example label",
  },
};
