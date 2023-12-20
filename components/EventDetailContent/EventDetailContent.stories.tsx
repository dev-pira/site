import { Meta, StoryObj } from "@storybook/react";
import EventDetailContent, {
  EventDetailContentProps,
} from "./EventDetailContent";

const meta: Meta<typeof EventDetailContent> = {
  component: EventDetailContent,
};

export default meta;

type Story = StoryObj<typeof EventDetailContent>;

const now = new Date();

const props: EventDetailContentProps = {
  tracks: [
    {
      name: "Tema da trilha A",
      talks: [
        {
          title: "Assunto de palestra muito interessante",
          speaker: {
            name: "Fulano da Silva Carvalho",
            portraitUrl: "",
            job: "Desenvolvedor na Ciclano",
          },
          time: now,
        },
        {
          title: "Assunto de palestra muito interessante",
          speaker: {
            name: "Fulano da Silva Carvalho",
            portraitUrl: "",
            job: "Desenvolvedor na Ciclano",
          },
          time: now,
        },
        {
          title: "Assunto de palestra muito interessante",
          speaker: {
            name: "Fulano da Silva Carvalho",
            portraitUrl: "",
            job: "Desenvolvedor na Ciclano",
          },
          time: now,
        },
        {
          title: "Assunto de palestra muito interessante",
          speaker: {
            name: "Fulano da Silva Carvalho",
            portraitUrl: "",
            job: "Desenvolvedor na Ciclano",
          },
          time: now,
        },
      ],
    },
    {
      name: "Tema da trilha B",
      talks: [
        {
          title: "Assunto de palestra muito interessante",
          speaker: {
            name: "Fulano da Silva Carvalho",
            portraitUrl: "",
            job: "Desenvolvedor na Ciclano",
          },
          time: now,
        },
        {
          title: "Assunto de palestra muito interessante",
          speaker: {
            name: "Fulano da Silva Carvalho",
            portraitUrl: "",
            job: "Desenvolvedor na Ciclano",
          },
          time: now,
        },
        {
          title: "Assunto de palestra muito interessante",
          speaker: {
            name: "Fulano da Silva Carvalho",
            portraitUrl: "",
            job: "Desenvolvedor na Ciclano",
          },
          time: now,
        },
        {
          title: "Assunto de palestra muito interessante",
          speaker: {
            name: "Fulano da Silva Carvalho",
            portraitUrl: "",
            job: "Desenvolvedor na Ciclano",
          },
          time: now,
        },
      ],
    },
  ],
};

export const Default: Story = {
  args: props,
};
