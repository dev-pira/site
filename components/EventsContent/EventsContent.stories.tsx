import { Meta, StoryObj } from "@storybook/react";
import EventsContent, { EventsContentProps } from "./EventsContent";

const props: EventsContentProps = {
  events: [
    {
      dateTime: new Date(),
      description: "The event description",
      slug: "a-event",
      title: "The Event",
    },
    {
      dateTime: new Date(),
      description: "The event description",
      slug: "a-event",
      title: "The Event",
    },
    {
      dateTime: new Date(),
      description: "The event description",
      slug: "a-event",
      title: "The Event",
    },
    {
      dateTime: new Date(),
      description: "The event description",
      slug: "a-event",
      title: "The Event",
    },
  ],
};

const meta: Meta<typeof EventsContent> = {
  component: EventsContent,
};

export default meta;
export const Default: StoryObj<typeof EventsContent> = {
  args: props,
};
