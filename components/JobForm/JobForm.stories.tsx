import { ComponentMeta, ComponentStory } from "@storybook/react";
import JobForm from "./JobForm";

export default {
    title: 'Secstions/JobForm',
    component: JobForm
} as ComponentMeta<typeof JobForm>

const Template: ComponentStory<typeof JobForm> = (args) => <JobForm { ...args} />

export const Default ={ args: {}}