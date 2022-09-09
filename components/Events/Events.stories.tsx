import { ComponentMeta, ComponentStory } from "@storybook/react";
import Events from "./Events";

export default {
    title: 'Sections/Events',
    component: Events
} as ComponentMeta<typeof Events>

export const Default: ComponentStory<typeof Events> = () => <Events />