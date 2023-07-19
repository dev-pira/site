import { Partner } from "./partner";
import { RichContentRoot } from "./richcontent";
import { Track } from "./track";

export interface Event extends EventPart {
  slug: string;
  title: string;
  bannerUrl: string;
  description: string;
  longDescription: RichContentRoot;
  dateTime: Date;
  location: string;
  otherInfo?: RichContentRoot;
  subscriptionUrl?: string;
  partners?: Partner[];
  tracks?: Track[];
  subscribeLink?: string;
  videoUrl?: string;
  gallery?: string[];
  type?: "Meetup" | "Live" | "Worshop";
}

export type EventPart = Pick<
  Event,
  "slug" | "description" | "subscriptionUrl" | "title" | "type" | "dateTime"
>;
