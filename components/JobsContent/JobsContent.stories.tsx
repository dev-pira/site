import { ComponentMeta } from "@storybook/react";
import { events } from "../../stories/data/events";
import JobsContent from "./JobsContent";

export default {
  title: "Sections/JobsContent",
  component: JobsContent,
} as ComponentMeta<typeof JobsContent>;

export const Default = {
  args: {
    events,
  },
};
