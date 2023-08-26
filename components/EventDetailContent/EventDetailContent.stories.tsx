import { ComponentMeta } from "@storybook/react";
import EventDetailContent from "./EventDetailContent";

export default {
  title: "Sections/EventDetailContent",
  component: EventDetailContent,
} as ComponentMeta<typeof EventDetailContent>;

const now = new Date();

export const Default = {
  args: {
    tracks: [
      {
        name: "Tema da trilha A",
        talks: [
          {
            title: "Assunto de palestra muito interessante",
            speaker: "Fulano da Silva Carvalho",
            speakerJob: "Desenvolvedor na Ciclano",
            time: now,
          },
          {
            title: "Assunto de palestra muito interessante",
            speaker: "Fulano da Silva Carvalho",
            speakerJob: "Desenvolvedor na Ciclano",
            time: now,
          },
          {
            title: "Assunto de palestra muito interessante",
            speaker: "Fulano da Silva Carvalho",
            speakerJob: "Desenvolvedor na Ciclano",
            time: now,
          },
          {
            title: "Assunto de palestra muito interessante",
            speaker: "Fulano da Silva Carvalho",
            speakerJob: "Desenvolvedor na Ciclano",
            time: now,
          },
        ],
      },
      {
        name: "Tema da trilha B",
        talks: [
          {
            title: "Assunto de palestra muito interessante",
            speaker: "Fulano da Silva Carvalho",
            speakerJob: "Desenvolvedor na Ciclano",
            time: now,
          },
          {
            title: "Assunto de palestra muito interessante",
            speaker: "Fulano da Silva Carvalho",
            speakerJob: "Desenvolvedor na Ciclano",
            time: now,
          },
          {
            title: "Assunto de palestra muito interessante",
            speaker: "Fulano da Silva Carvalho",
            speakerJob: "Desenvolvedor na Ciclano",
            time: now,
          },
          {
            title: "Assunto de palestra muito interessante",
            speaker: "Fulano da Silva Carvalho",
            speakerJob: "Desenvolvedor na Ciclano",
            time: now,
          },
        ],
      },
    ],
  },
};
