import { ComponentMeta, ComponentStory } from "@storybook/react";
import JobsFilter from "./JobsFilter";

export default {
  title: "Sections/JobsFilter",
  component: JobsFilter,
} as ComponentMeta<typeof JobsFilter>;

export const Default: ComponentStory<typeof JobsFilter> = () => <JobsFilter />;
