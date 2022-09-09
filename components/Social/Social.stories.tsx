import { ComponentMeta, ComponentStory } from "@storybook/react";
import Social from "./Social";

export default {
    title: 'Sections/Social',
    component: Social
} as ComponentMeta<typeof Social>

export const Default: ComponentStory<typeof Social> = () => <Social />