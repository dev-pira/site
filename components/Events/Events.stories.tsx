import { ComponentMeta, ComponentStory } from "@storybook/react";
import { events } from "../../stories/data/events";
import Events from "./Events";

export default {
    title: 'Sections/Events',
    component: Events
} as ComponentMeta<typeof Events>

const Template: ComponentStory<typeof Events> = (args) => <Events {... args} />

export const Default = {
    args: {
        events
    }
}