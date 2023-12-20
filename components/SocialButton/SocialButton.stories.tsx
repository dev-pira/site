import { Meta, StoryObj } from "@storybook/react";
import SocialButton, { SocialButtonProps } from "./SocialButton";

const props: SocialButtonProps = {
  children: "Hello World",
  href: "http://google.com",
  midia: "instagram",
};

const meta: Meta<typeof SocialButton> = {
  component: SocialButton,
};

export default meta;
export const Default: StoryObj<typeof SocialButton> = {
  args: props,
};
