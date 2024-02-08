import { Meta, StoryObj } from "@storybook/react";
import EventDetailIntro, { EventDetailIntroProps } from "./EventDetailIntro";

const props: EventDetailIntroProps = {
  title: "Evento em destaque",
  description:
    "Turpis fusce et, nisl, bibendum viverra pretium duis nulla euismod. Ac felis velit scelerisque consectetur in morbi odio. Egestas sit ultrices mi nulla consectetur egestas ac vivamus tortor.",
  dateTime: new Date(),
};

const meta: Meta<typeof EventDetailIntro> = {
  component: EventDetailIntro,
};

export default meta;
export const Default: StoryObj<typeof EventDetailIntro> = {
  args: props,
};
