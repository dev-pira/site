import { Meta, StoryObj } from "@storybook/react";
import About from "./About";

const meta: Meta<typeof About> = {
  component: About,
};

export default meta;
export const Default: StoryObj<typeof About> = {
  args: {},
};
