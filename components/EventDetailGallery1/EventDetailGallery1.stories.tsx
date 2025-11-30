import { Meta, StoryObj } from "@storybook/react";
import EventDetailGallery, {
  EventDetailGalleryProps,
} from "./EventDetailGallery1";

const props: EventDetailGalleryProps = {
  gallery1: Array(20)
    .fill([
      "https://anamariabraga.globo.com/wp-content/uploads/2019/07/pao-de-batata-com-requeijao-caseiro.jpg",
      "https://images.aws.nestle.recipes/original/d453bab37da45b2f0ee7ee625485d212_img_1437.jpg",
      "https://www.mebrasi.com.br/wp-content/uploads/2020/12/pao-de-batata-mortadela.jpg",
      "https://togocongelados.com.br/wp-content/uploads/2022/05/pao-de-batata-togo.jpg",
    ])
    .flat()
    .sort(() => Math.random() - 0.5),
};

const meta: Meta<typeof EventDetailGallery> = {
  component: EventDetailGallery,
};

export default meta;
export const Default: StoryObj<typeof EventDetailGallery> = {
  args: props,
};
