import { Meta, StoryObj } from "@storybook/react";
import EventDetailInfo, { EventDetailInfoProps } from "./EventDetailInfo";
import { RichContentRoot } from "../../models/richcontent";

const longDescriptionContent: RichContentRoot = {
  json: {
    nodeType: "document",
    content: [
      {
        nodeType: "paragraph",
        content: [
          {
            nodeType: "text",
            value: "Esse é a descrição do nosso ",
          },
          {
            nodeType: "text",
            value: "evento",
            marks: [
              {
                type: "bold",
              },
            ],
          },
          {
            nodeType: "text",
            value: "!",
          },
        ],
      },
    ],
  },
};

const props: EventDetailInfoProps = {
  dateTime: new Date(),
  location: "Piracicaba, SP",
  longDescription: longDescriptionContent,
};

const meta: Meta<typeof EventDetailInfo> = {
  component: EventDetailInfo,
};

export default meta;
export const Default: StoryObj<typeof EventDetailInfo> = {
  args: props,
};
