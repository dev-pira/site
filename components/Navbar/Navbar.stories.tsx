import { Meta, StoryObj } from "@storybook/react";
import Navbar from "./Navbar";

const meta: Meta<typeof Navbar> = {
  component: Navbar,
};

export default meta;
export const Default: StoryObj<typeof Navbar> = {
  args: {},
};
