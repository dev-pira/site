import { ComponentMeta } from "@storybook/react";
import SocialButton from "./SocialButton";

export default {
  title: "Components/SocialButton",
  component: SocialButton,
} as ComponentMeta<typeof SocialButton>;

export const Primary = { args: { children: "Hello World" } };
