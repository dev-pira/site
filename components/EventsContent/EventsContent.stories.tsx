import { ComponentMeta, ComponentStory } from "@storybook/react";
import { events } from "../../stories/data/events";
import EventsContent from "./EventsContent";

export default {
    title: 'Sections/EventsContent',
    component: EventsContent
} as ComponentMeta<typeof EventsContent>

const Template: ComponentStory<typeof EventsContent> = (args) => <EventsContent {...args} />

export const Default = {
    args: {
        events
    }
}