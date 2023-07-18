import { ComponentMeta } from "@storybook/react";
import RichContent from "./RichContent";

export default {
  title: "Components/RichContent",
  component: RichContent,
} as ComponentMeta<typeof RichContent>;

export const Default = {
  args: {
    content: {
      json: {
        nodeType: "document",
        content: [
          {
            nodeType: "paragraph",
            content: [
              {
                nodeType: "text",
                value: "Atenção pras  as boas práticas para uso de um ",
              },
              {
                nodeType: "text",
                value: "co-working",
                marks: [
                  {
                    type: "bold",
                  },
                ],
              },
              {
                nodeType: "text",
                value: ":",
              },
            ],
          },
        ],
      },
    },
  },
};
