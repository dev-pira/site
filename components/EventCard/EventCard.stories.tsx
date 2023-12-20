import { Meta, StoryObj } from "@storybook/react";
import EventCard, { EventCardProps } from "./EventCard";

const props: EventCardProps = {
  color: "primary",
  dateTime: new Date(),
  slug: "sample-event",
  title: "Sample Event",
  description: "Lorem ipsum",
};

const meta: Meta<typeof EventCard> = {
  component: EventCard,
};

export default meta;
export const Default: StoryObj<typeof EventCard> = {
  args: props,
};
