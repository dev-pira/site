import { ComponentMeta, ComponentStory } from "@storybook/react"
import Partners from "./Partners"

export default {
    title: 'Sections/Partners',
    component: Partners
} as ComponentMeta<typeof Partners>

const Template: ComponentStory<typeof Partners> = (args) => <Partners {...args} />

export const Default = {
    args: {
        partners: ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I']
    }
}