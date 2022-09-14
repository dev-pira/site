import { ComponentMeta, ComponentStory } from "@storybook/react";
import EventPartners from "./EventPartners";

export default {
    title: 'Sections/EventPartners',
    component: EventPartners
} as ComponentMeta<typeof EventPartners>

const Template: ComponentStory<typeof EventPartners> = (args) => <EventPartners {...args} />

export const Default = {
    args: {
        partners: ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I']
    }
}