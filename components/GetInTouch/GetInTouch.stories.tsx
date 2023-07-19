import { ComponentMeta, ComponentStory } from "@storybook/react";
import GetInTouch from "./GetInTouch";

export default {
  title: "Sections/GetInTouch",
  component: GetInTouch,
} as ComponentMeta<typeof GetInTouch>;

export const Default: ComponentStory<typeof GetInTouch> = () => <GetInTouch />;
