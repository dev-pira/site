import { Meta, StoryObj } from "@storybook/react";
import { RichContentRoot } from "../../models/richcontent";
import RichContent from "./RichContent";

const props: RichContentRoot = {
  json: {
    nodeType: "document",
    content: [
      {
        nodeType: "paragraph",
        content: [
          {
            nodeType: "text",
            value: "Aqui vai um texto ",
          },
          {
            nodeType: "text",
            value: "evento",
            marks: [
              {
                type: "negrito",
              },
            ],
          },
          {
            nodeType: "text",
            value: " ...",
          },
        ],
      },
    ],
  },
};

const meta: Meta<typeof RichContent> = {
  component: RichContent,
};

export default meta;
export const Default: StoryObj<typeof RichContent> = {
  args: { content: props },
};
