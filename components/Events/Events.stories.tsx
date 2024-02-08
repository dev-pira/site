import { Meta, StoryObj } from "@storybook/react";
import Events, { EventsProps } from "./Events";

const props: EventsProps = {
  events: [
    {
      dateTime: new Date(),
      description: "The event description",
      slug: "an-event",
      title: "An Event",
    },
    {
      dateTime: new Date(),
      description: "The event description",
      slug: "an-event",
      title: "An Event",
    },
    {
      dateTime: new Date(),
      description: "The event description",
      slug: "an-event",
      title: "An Event",
    },
  ],
};

const meta: Meta<typeof Events> = {
  component: Events,
};

export default meta;
export const Default: StoryObj<typeof Events> = {
  args: props,
};
