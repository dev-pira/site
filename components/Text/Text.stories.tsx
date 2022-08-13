import { ComponentMeta, ComponentStory } from "@storybook/react"
import { Text } from ".."

export default {
    title: 'Components/Text',
    component: Text,
} as ComponentMeta<typeof Text>

const Template: ComponentStory<typeof Text> = (args) => <Text {...args} />

export const Default = Template.bind({});
Default.args = {
    children: 'Hello World',
}