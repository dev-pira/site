import { Meta, StoryObj } from "@storybook/react";
import EventDetailInfo, { EventDetailInfoProps } from "./EventDetailInfo";
import { RichContent } from "../RichContent";

const meta: Meta<typeof EventDetailInfo> = {
  component: EventDetailInfo,
};

export default meta;

type Story = StoryObj<typeof EventDetailInfo>;

const props: EventDetailInfoProps = {
  dateTime: new Date(),
  location: "Piracicaba, SP",
  longDescription: "",
};

export const Default: Story = {
  args: props,
};
