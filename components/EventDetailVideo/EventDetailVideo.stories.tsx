import { Meta, StoryObj } from "@storybook/react";
import EventDetailVideo, { EventDetailVideoProps } from "./EventDetailVideo";

const props: EventDetailVideoProps = {
  videoUrl: "https://www.youtube.com/embed/yIyi1lKlpJw",
};

const meta: Meta<typeof EventDetailVideo> = {
  component: EventDetailVideo,
};

export default meta;
export const Default: StoryObj<typeof EventDetailVideo> = {
  args: props,
};
