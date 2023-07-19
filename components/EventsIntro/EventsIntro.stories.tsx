import { ComponentMeta, ComponentStory } from "@storybook/react";
import EventsIntro from "./EventsIntro";

export default {
  title: "Sections/EventsIntro",
  component: EventsIntro,
} as ComponentMeta<typeof EventsIntro>;

export const Default: ComponentStory<typeof EventsIntro> = () => (
  <EventsIntro />
);
