import { Meta, StoryObj } from "@storybook/react";
import Initiatives from "./Initiatives";

const meta: Meta<typeof Initiatives> = {
  component: Initiatives,
};

export default meta;
export const Default: StoryObj<typeof Initiatives> = {
  args: {},
};
