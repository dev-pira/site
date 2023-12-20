import { Meta, StoryObj } from "@storybook/react";
import EventDetailInfo, { EventDetailInfoProps } from "./EventDetailInfo";
import { RichContent } from "../RichContent";

const props: EventDetailInfoProps = {
  dateTime: new Date(),
  location: "Piracicaba, SP",
  longDescription: "",
};

const meta: Meta<typeof EventDetailInfo> = {
  component: EventDetailInfo,
};

export default meta;
export const Default: StoryObj<typeof EventDetailInfo> = {
  args: props,
};
