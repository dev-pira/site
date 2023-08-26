import { ComponentMeta } from "@storybook/react";
import JobCard from "./JobCard";

export default {
  title: "Components/JobCard",
  component: JobCard,
} as ComponentMeta<typeof JobCard>;

export const Default = {
  args: {
    title: "Nome da vaga",
    description:
      "Turpis fusce et, nisl, bibendum viverra pretium duis nulla euismod.",
    dateTime: new Date(),
    detailsLink: "https://www.google.com",
    participateLink: "https://www.google.com",
  },
};
