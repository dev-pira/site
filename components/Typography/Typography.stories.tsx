import { ComponentMeta, ComponentStory } from "@storybook/react";
import Typography from "./Typography";

export default {
    title: 'Components/Typography',
    component: Typography
} as ComponentMeta<typeof Typography>

const Tempplate: ComponentStory<typeof Typography> = (args) => <Typography {...args} />

export const Default = {args: {variant: 'h1', children: 'Hello World'}}