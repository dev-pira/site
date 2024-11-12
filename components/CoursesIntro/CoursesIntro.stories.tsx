import { Meta, StoryObj } from "@storybook/react";
import CourseIntro from "./CoursesIntro";

const meta: Meta<typeof CourseIntro> = {
  component: CourseIntro,
};

export default meta;
export const Default: StoryObj<typeof CourseIntro> = {
  args: {},
};
