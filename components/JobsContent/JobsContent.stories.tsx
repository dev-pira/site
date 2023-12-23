import { Meta, StoryObj } from "@storybook/react";
import JobsContent, { JobsContentProps } from "./JobsContent";
import { Job } from "../../models/job";
import { LoremIpsum } from "lorem-ipsum";

const random = function (min: number, max: number): number {
  return Math.random() * (max - min) + min;
};
const lorem = new LoremIpsum({
  sentencesPerParagraph: { max: 8, min: 4 },
  wordsPerSentence: { max: 16, min: 4 },
});
const locations: ("Piracicaba" | "Remoto" | "Outro")[] = [
  "Outro",
  "Piracicaba",
  "Remoto",
];
const jobs: Job[] = [];
for (const location of locations) {
  const len = random(4, 7);
  for (let index = 0; index < len; index++) {
    jobs.push({
      description: lorem.generateSentences(1),
      enrollmentUrl: "https://google.com",
      id: index.toString(),
      location,
      title: lorem.generateWords(4),
    });
  }
}

const props: JobsContentProps = { jobs };

const meta: Meta<typeof JobsContent> = {
  component: JobsContent,
};

export default meta;
export const Default: StoryObj<typeof JobsContent> = {
  args: props,
};
