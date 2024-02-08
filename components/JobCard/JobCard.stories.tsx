import { Meta, StoryObj } from "@storybook/react";
import JobCard, { JobCardProps } from "./JobCard";

const props: JobCardProps = {
  title: "Nome da vaga",
  description:
    "Turpis fusce et, nisl, bibendum viverra pretium duis nulla euismod.",
  id: "1",
  enrollmentUrl: "https://google.com",
  location: "Remoto",
};

const meta: Meta<typeof JobCard> = {
  component: JobCard,
};

export default meta;
export const Default: StoryObj<typeof JobCard> = {
  args: props,
};
