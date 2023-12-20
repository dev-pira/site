import { Meta, StoryObj } from "@storybook/react";
import JobsContent, { JobsContentProps } from "./JobsContent";

const props: JobsContentProps = {
  jobs: [
    {
      description: "A job description",
      enrollmentUrl: "https://google.com",
      id: "1",
      location: "Remoto",
      title: "Job title",
    },
    {
      description: "A job description",
      enrollmentUrl: "https://google.com",
      id: "1",
      location: "Remoto",
      title: "Job title",
    },
    {
      description: "A job description",
      enrollmentUrl: "https://google.com",
      id: "1",
      location: "Remoto",
      title: "Job title",
    },
    {
      description: "A job description",
      enrollmentUrl: "https://google.com",
      id: "1",
      location: "Remoto",
      title: "Job title",
    },
    {
      description: "A job description",
      enrollmentUrl: "https://google.com",
      id: "1",
      location: "Remoto",
      title: "Job title",
    },

    {
      description: "A job description",
      enrollmentUrl: "https://google.com",
      id: "1",
      location: "Piracicaba",
      title: "Job title",
    },
    {
      description: "A job description",
      enrollmentUrl: "https://google.com",
      id: "1",
      location: "Piracicaba",
      title: "Job title",
    },
    {
      description: "A job description",
      enrollmentUrl: "https://google.com",
      id: "1",
      location: "Piracicaba",
      title: "Job title",
    },
    {
      description: "A job description",
      enrollmentUrl: "https://google.com",
      id: "1",
      location: "Piracicaba",
      title: "Job title",
    },
    {
      description: "A job description",
      enrollmentUrl: "https://google.com",
      id: "1",
      location: "Piracicaba",
      title: "Job title",
    },
    {
      description: "A job description",
      enrollmentUrl: "https://google.com",
      id: "1",
      location: "Piracicaba",
      title: "Job title",
    },
    {
      description: "A job description",
      enrollmentUrl: "https://google.com",
      id: "1",
      location: "Piracicaba",
      title: "Job title",
    },

    {
      description: "A job description",
      enrollmentUrl: "https://google.com",
      id: "1",
      location: "Outro",
      title: "Job title",
    },
    {
      description: "A job description",
      enrollmentUrl: "https://google.com",
      id: "1",
      location: "Outro",
      title: "Job title",
    },
    {
      description: "A job description",
      enrollmentUrl: "https://google.com",
      id: "1",
      location: "Outro",
      title: "Job title",
    },
    {
      description: "A job description",
      enrollmentUrl: "https://google.com",
      id: "1",
      location: "Outro",
      title: "Job title",
    },
    {
      description: "A job description",
      enrollmentUrl: "https://google.com",
      id: "1",
      location: "Outro",
      title: "Job title",
    },
    {
      description: "A job description",
      enrollmentUrl: "https://google.com",
      id: "1",
      location: "Outro",
      title: "Job title",
    },
    {
      description: "A job description",
      enrollmentUrl: "https://google.com",
      id: "1",
      location: "Outro",
      title: "Job title",
    },
    {
      description: "A job description",
      enrollmentUrl: "https://google.com",
      id: "1",
      location: "Outro",
      title: "Job title",
    },
  ],
};

const meta: Meta<typeof JobsContent> = {
  component: JobsContent,
};

export default meta;
export const Default: StoryObj<typeof JobsContent> = {
  args: props,
};
