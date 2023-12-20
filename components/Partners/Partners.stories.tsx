import { Meta, StoryObj } from "@storybook/react";
import Partners, { PartnersProps } from "./Partners";

const props: PartnersProps = {
  partners: [{ name: "A" }, { name: "B" }, { name: "C" }],
  description: "Lorem ipsum",
};

const meta: Meta<typeof Partners> = {
  component: Partners,
};

export default meta;
export const Default: StoryObj<typeof Partners> = {
  args: props,
};
