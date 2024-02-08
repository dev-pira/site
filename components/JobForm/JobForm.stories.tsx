import { Meta, StoryObj } from "@storybook/react";
import JobForm from "./JobForm";

const meta: Meta<typeof JobForm> = {
  component: JobForm,
};

export default meta;
export const Default: StoryObj<typeof JobForm> = {
  args: {},
};
