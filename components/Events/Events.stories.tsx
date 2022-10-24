import { ComponentMeta, ComponentStory } from "@storybook/react";
import Events from "./Events";

export default {
    title: 'Sections/Events',
    component: Events
} as ComponentMeta<typeof Events>

const Template: ComponentStory<typeof Events> = (args) => <Events {... args} />

const events = [{
    description: 'Turpis fusce et, nisl, bibendum viverra pretium duis nulla euismod.',
    detailsLink: 'https://www.google.com',
    participateLink: 'https://www.google.com',
    title: 'Nome do evento',
    type: 'Meetup'
},{
    description: 'Turpis fusce et, nisl, bibendum viverra pretium duis nulla euismod.',
    detailsLink: 'https://www.google.com',
    title: 'Nome do evento',
    type: 'Meetup'
},{
    description: 'Turpis fusce et, nisl, bibendum viverra pretium duis nulla euismod.',
    detailsLink: 'https://www.google.com',
    title: 'Nome do evento',
    type: 'Meetup'
},{
    description: 'Turpis fusce et, nisl, bibendum viverra pretium duis nulla euismod.',
    detailsLink: 'https://www.google.com',
    title: 'Nome do evento',
    type: 'Meetup'
},{
    description: 'Turpis fusce et, nisl, bibendum viverra pretium duis nulla euismod.',
    detailsLink: 'https://www.google.com',
    participateLink: 'https://www.google.com',
    title: 'Nome do evento',
    type: 'Live'
},{
    description: 'Turpis fusce et, nisl, bibendum viverra pretium duis nulla euismod.',
    detailsLink: 'https://www.google.com',
    title: 'Nome do evento',
    type: 'Live'
},{
    description: 'Turpis fusce et, nisl, bibendum viverra pretium duis nulla euismod.',
    detailsLink: 'https://www.google.com',
    title: 'Nome do evento',
    type: 'Live'
},{
    description: 'Turpis fusce et, nisl, bibendum viverra pretium duis nulla euismod.',
    detailsLink: 'https://www.google.com',
    title: 'Nome do evento',
    type: 'Live'
}]

export const Default = {
    args: {
        events
    }
}