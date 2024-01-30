import { Meta, StoryObj } from "@storybook/react";
import Image, { ImageProps } from "./Image";

const props: ImageProps = {
  src: "https://santhatela.com.br/wp-content/uploads/2017/06/van-gogh-noite-estrelada-d.jpg",
  alt: "Noite Estrelada - van Gogh",
  layout: "fixed",
  width: 648,
  height: 518,
};

const meta: Meta<typeof Image> = {
  component: Image,
};

export default meta;
export const Default: StoryObj<typeof Image> = {
  args: props,
};
