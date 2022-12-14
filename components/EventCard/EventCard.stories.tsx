import { ComponentMeta, ComponentStory } from "@storybook/react";
import EventCard from "./EventCard";

export default {
    title: 'Components/EventCard',
    component: EventCard
} as ComponentMeta<typeof EventCard>

const Template: ComponentStory<typeof EventCard> = (args) => <EventCard {...args} />

export const Default = {args: {
    title: 'Nome do evento',
    description: 'Turpis fusce et, nisl, bibendum viverra pretium duis nulla euismod.',
    dateTime: new Date(),
    detailsLink: 'https://www.google.com',
    participateLink: 'https://www.google.com'
}}