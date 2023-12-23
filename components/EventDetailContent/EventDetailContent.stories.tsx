import { Meta, StoryObj } from "@storybook/react";
import EventDetailContent, {
  EventDetailContentProps,
} from "./EventDetailContent";
import { LoremIpsum } from "lorem-ipsum";
import { Track } from "../../models/track";

const now = new Date();
const random = function (min: number, max: number): number {
  return Math.random() * (max - min) + min;
};
const lorem = new LoremIpsum({
  sentencesPerParagraph: { max: 8, min: 4 },
  wordsPerSentence: { max: 16, min: 4 },
});
const trackNames = [
  lorem.generateWords(3),
  lorem.generateWords(2),
  lorem.generateWords(4),
];
const props: EventDetailContentProps = {
  tracks: [],
};
for (const track of trackNames) {
  const len = random(5, 9);
  const res: Track = { name: track, talks: [] };
  for (let index = 0; index < len; index++) {
    res.talks.push({
      title: lorem.generateWords(4),
      speaker: {
        name: lorem.generateWords(3),
        portraitUrl: "",
        job: lorem.generateWords(4),
      },
      time: now,
    });
  }
  props.tracks?.push(res);
}

const meta: Meta<typeof EventDetailContent> = {
  component: EventDetailContent,
};

export default meta;
export const Default: StoryObj<typeof EventDetailContent> = {
  args: props,
};
