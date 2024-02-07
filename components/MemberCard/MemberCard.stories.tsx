import { Meta, StoryObj } from "@storybook/react";
import MemberCard from "./MemberCard";

const meta: Meta<typeof MemberCard> = {
  component: MemberCard,
};

export default meta;
export const Default: StoryObj<typeof MemberCard> = {
  args: {},
};
