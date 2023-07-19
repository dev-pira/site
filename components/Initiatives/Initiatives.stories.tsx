import { ComponentMeta, ComponentStory } from "@storybook/react";
import Initiatives from "./Initiatives";

export default {
  title: "Sections/Initiatives",
  component: Initiatives,
} as ComponentMeta<typeof Initiatives>;

export const Default: ComponentStory<typeof Initiatives> = () => (
  <Initiatives />
);
