import { Partner } from "./partner";
import { Track } from "./track";

export interface Event extends EventPart {
  slug: string;
  title: string;
  bannerUrl: string;
  description: string;
  longDescription: { json?: any };
  dateTime: Date;
  location: string;
  otherInfo?: { json?: any };
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
