import { ComponentMeta, ComponentStory } from "@storybook/react";
import EventDetailVideo from "./EventDetailVideo";

export default {
    title: 'Sections/EventDetailVideo',
    component: EventDetailVideo
} as ComponentMeta<typeof EventDetailVideo>

const Template: ComponentStory<typeof EventDetailVideo> = (args) => <EventDetailVideo {...args} />

export const Default = {args: {
    videoUrl: 'https://www.youtube.com/embed/yIyi1lKlpJw'
}}