import { ComponentMeta, ComponentStory } from "@storybook/react";
import About from "./About";

export default {
    title: 'Sections/About',
    component: About
} as ComponentMeta<typeof About>

export const Default: ComponentStory<typeof About> = () => <About />