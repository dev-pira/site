import { ComponentMeta, ComponentStory } from "@storybook/react";
import SocialButton from "./SocialButton";

export default {
    title: 'Components/SocialButton',
    component: SocialButton
} as ComponentMeta<typeof SocialButton>

const Template: ComponentStory<typeof SocialButton> = (args) => <SocialButton {...args} />

export const Primary = {args: {children: 'Hello World'}}
