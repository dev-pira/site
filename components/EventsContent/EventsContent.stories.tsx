import { ComponentMeta } from "@storybook/react";
import { events } from "../../stories/data/events";
import EventsContent from "./EventsContent";

export default {
  title: "Sections/EventsContent",
  component: EventsContent,
} as ComponentMeta<typeof EventsContent>;

export const Default = {
  args: {
    events,
  },
};
