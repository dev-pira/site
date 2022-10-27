import { ComponentMeta, ComponentStory } from "@storybook/react";
import Intro from "./Intro";

export default {
    title: 'Sections/Intro',
    component: Intro
} as ComponentMeta<typeof Intro>

export const Default: ComponentStory<typeof Intro> = () => <Intro />