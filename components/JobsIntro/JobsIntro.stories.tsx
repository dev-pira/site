import { Meta, StoryObj } from "@storybook/react";
import JobsIntro from "./JobsIntro";

const meta: Meta<typeof JobsIntro> = {
  component: JobsIntro,
};

export default meta;
export const Default: StoryObj<typeof JobsIntro> = {
  args: {},
};
