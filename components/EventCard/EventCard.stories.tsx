import { Meta, StoryObj } from "@storybook/react";
import EventCard, { EventCardProps } from "./EventCard";

const meta: Meta<typeof EventCard> = {
  component: EventCard,
};

export default meta;

type Story = StoryObj<typeof EventCard>;

const props: EventCardProps = {
  color: "primary",
  dateTime: new Date(),
  slug: "sample-event",
  title: "Sample Event",
  description: "Lorem ipsum",
};

export const Default: Story = {
  args: props,
};
