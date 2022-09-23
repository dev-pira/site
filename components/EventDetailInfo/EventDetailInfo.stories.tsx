import { ComponentMeta, ComponentStory } from "@storybook/react"
import EventDetailInfo from "./EventDetailInfo"

export default {
    title: 'Sections/EventDetailInfo',
    component: EventDetailInfo
} as ComponentMeta<typeof EventDetailInfo>

const Template: ComponentStory<typeof EventDetailInfo> = (args) => <EventDetailInfo {...args} />

export const Default = {
    args: {
        description: `Turpis fusce et, nisl, bibendum viverra pretium duis nulla euismod. Ac felis velit scelerisque consectetur in morbi odio. Egestas sit ultrices mi nulla consectetur egestas ac vivamus tortor. Enim nibh ut vitae tristique. Nam vulputate lectus massa consequat tristique et suspendisse lorem. Tempor accumsan pellentesque cursus at cum nunc dolor. Lacus mattis ultricies ut turpis lectus tortor elit tellus. Risus, in a dui platea sed a. Bibendum mauris vel, magna congue.
        Enim nibh ut vitae tristique. Nam vulputate lectus massa consequat tristique et suspendisse lorem. Tempor accumsan pellentesque cursus at cum nunc dolor. Lacus mattis ultricies ut turpis lectus tortor elit tellus. Risus, in a dui platea sed a. Bibendum mauris vel, magna congue.`,
        dateTime: new Date(),
        place: 'Somewhere',
        otherInfo: 'Turpis fusce et, nisl, bibendum viverra pretium duis nulla euismod. Ac felis velit scelerisque consectetur in morbi odio.',
    }
}