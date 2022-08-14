import { ComponentMeta, ComponentStory } from "@storybook/react";
import Button from "./Button";

export default {
    title: 'Components/Button',
    component: Button
} as ComponentMeta<typeof Button>

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />

export const Primary = {args: {text: 'Hello World'}}

export const Secondary = {args:{text: 'Hello World'}}