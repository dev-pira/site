import { ComponentMeta, ComponentStory } from "@storybook/react";
import { events } from "../../stories/data/events";
import JobsContent from "./JobsContent";

export default {
    title: 'Sections/JobsContent',
    component: JobsContent
} as ComponentMeta<typeof JobsContent>

const Template: ComponentStory<typeof JobsContent> = (args) => <JobsContent {...args} />

export const Default = {
    args: {
        events
    }
}