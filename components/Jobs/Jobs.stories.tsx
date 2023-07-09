import { ComponentMeta, ComponentStory } from "@storybook/react"
import Jobs from "./Jobs"

export default {
    title: 'Sections/Jobs',
    component: Jobs
} as ComponentMeta<typeof Jobs>

export const Default: ComponentStory<typeof Jobs> = () => <Jobs />