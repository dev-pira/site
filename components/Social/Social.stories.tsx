import { Meta, StoryObj } from "@storybook/react";
import Social from "./Social";

const meta: Meta<typeof Social> = {
  component: Social,
};

export default meta;
export const Default: StoryObj<typeof Social> = {
  args: {},
};
