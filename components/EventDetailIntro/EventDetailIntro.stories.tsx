import { ComponentMeta, ComponentStory } from "@storybook/react"
import EventDetailIntro from "./EventDetailIntro"

export default {
    title: 'Sections/EventDetailIntro',
    component: EventDetailIntro
} as ComponentMeta<typeof EventDetailIntro>

const Template: ComponentStory<typeof EventDetailIntro> = (args) => <EventDetailIntro {...args} />

export const Default = {
    args: {
        title: 'Evento em destaque',
        shortDescription: 'Turpis fusce et, nisl, bibendum viverra pretium duis nulla euismod. Ac felis velit scelerisque consectetur in morbi odio. Egestas sit ultrices mi nulla consectetur egestas ac vivamus tortor.',
    }
}