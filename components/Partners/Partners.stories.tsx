import { ComponentMeta } from "@storybook/react";
import Partners from "./Partners";

export default {
  title: "Sections/Partners",
  component: Partners,
} as ComponentMeta<typeof Partners>;

export const Default = {
  args: {
    partners: ["A", "B", "C", "D", "E", "F", "G", "H", "I"],
  },
};
