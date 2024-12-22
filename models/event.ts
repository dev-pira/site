import { Partner } from "./partner";
import { RichContentRoot } from "./richcontent";
import { Track } from "./track";

export interface Event {
  slug: string;
  title: string;
  banner?: { url?: string };
  description: string;
  longDescription: RichContentRoot;
  dateTime: Date;
  location: string;
  otherInfo?: RichContentRoot;
  subscriptionUrl?: string;
  partners?: Partner[];
  tracks?: Track[];
  videoUrl?: string;
  gallery?: string[];
  gallery1?: string[];
  type?: string;
}

export type EventPart = Pick<
  Event,
  "slug" | "description" | "subscriptionUrl" | "title" | "type" | "dateTime"
>;

export type EventDetailsPart = Pick<
  Event,
  "banner" | "slug" | "title" | "description" | "dateTime" | "subscriptionUrl"
>;
