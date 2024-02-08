import { Meta, StoryObj } from "@storybook/react";
import EventsIntro from "./EventsIntro";

const meta: Meta<typeof EventsIntro> = {
  component: EventsIntro,
};

export default meta;
export const Default: StoryObj<typeof EventsIntro> = {
  args: {},
};
