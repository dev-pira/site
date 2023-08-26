import { ComponentMeta } from "@storybook/react";
import EventDetailVideo from "./EventDetailVideo";

export default {
  title: "Sections/EventDetailVideo",
  component: EventDetailVideo,
} as ComponentMeta<typeof EventDetailVideo>;

export const Default = {
  args: {
    videoUrl: "https://www.youtube.com/embed/yIyi1lKlpJw",
  },
};
