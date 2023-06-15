import { ComponentMeta, ComponentStory } from "@storybook/react";
import { events } from "../../stories/data/events";
import Members from "./Members";

export default {
    title: 'Sections/Members',
    component: Members
} as ComponentMeta<typeof Members>

const Template: ComponentStory<typeof Members> = (args) => <Members {...args} />

export const Default = {
    args: {
        events
    }
}