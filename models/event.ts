import { Partner } from "./partner";
import { Track } from "./track";

export interface Event extends EventPart {
  key: string;
  title: string;
  shortDescription: string;
  dateTime: Date;
  place: string;
  otherInfo?: string;
  partners?: Partner[];
  tracks?: Track[];
}

export interface EventPart {
  slug: string;
  description?: string;
  detailsLink: string;
  participateLink?: string;
  type: "Meetup" | "Live" | "Worshop";
  dateTime: Date;
}
