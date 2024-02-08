import { Meta, StoryObj } from "@storybook/react";
import Members from "./Members";

const meta: Meta<typeof Members> = {
  component: Members,
};

export default meta;
export const Default: StoryObj<typeof Members> = {
  args: {},
};
