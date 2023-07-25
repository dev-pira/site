import { ComponentMeta } from "@storybook/react";
import { events } from "../../stories/data/events";
import Members from "./Members";

export default {
  title: "Sections/Members",
  component: Members,
} as ComponentMeta<typeof Members>;

export const Default = {
  args: {
    events,
  },
};
