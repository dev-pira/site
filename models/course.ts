import { RichContentRoot } from "./richcontent";

export interface Course {
  slug: string;
  title: string;
  banner?: { url?: string };
  description: string;
  longDescription: RichContentRoot;
  dateTime: Date;
  location: string;
  otherInfo: RichContentRoot;
  subscriptionUrl?: string;
  gallery?: string[];
  type?: string;
}

export type CoursePart = Pick<
  Course,
  "slug" | "title" | "banner" | "type" | "dateTime" | "description"
>;
