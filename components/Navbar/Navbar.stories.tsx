import { ComponentMeta, ComponentStory } from "@storybook/react";
import Navbar from "./Navbar";

export default {
  title: "Components/Navbar",
  component: Navbar,
} as ComponentMeta<typeof Navbar>;

export const Default: ComponentStory<typeof Navbar> = () => <Navbar />;
