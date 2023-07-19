import { ComponentMeta, ComponentStory } from "@storybook/react";
import JobsIntro from "./JobsIntro";

export default {
  title: "Sections/JobsIntro",
  component: JobsIntro,
} as ComponentMeta<typeof JobsIntro>;

export const Default: ComponentStory<typeof JobsIntro> = () => <JobsIntro />;
