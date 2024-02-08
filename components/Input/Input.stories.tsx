import { Meta, StoryObj } from "@storybook/react";
import Input, { InputProps } from "./Input";

const meta: Meta<typeof Input> = {
  component: Input,
  argTypes: {
    id: {
      type: "string",
      description: "Define a identificação única do Campo",
    },
    label: {
      type: "string",
      description: "Define a etiqueta do Campo",
    },
  },
};

export default meta;

type Story = StoryObj<typeof Input>;

const props: InputProps = {
  id: "Id",
  label: "Label",
};

export const Default: Story = {
  args: props,
};
