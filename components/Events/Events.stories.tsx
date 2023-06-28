import { ComponentMeta } from "@storybook/react";
import { events } from "../../stories/data/events";
import Events from "./Events";

export default {
  title: "Sections/Events",
  component: Events,
} as ComponentMeta<typeof Events>;

export const Default = {
  args: {
    events,
  },
};
