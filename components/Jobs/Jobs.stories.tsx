import { Meta, StoryObj } from "@storybook/react";
import Jobs from "./Jobs";

const meta: Meta<typeof Jobs> = {
  component: Jobs,
};

export default meta;
export const Default: StoryObj<typeof Jobs> = {
  args: {},
};
