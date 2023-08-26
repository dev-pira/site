import { ParsedUrlQuery } from "querystring";
import { Event, EventPart } from "../models/event";
import { fetchGraphQl } from "./cms";

export async function fetchEventsNames(): Promise<
  { params: ParsedUrlQuery; locale?: string }[]
> {
  const query = `query {
    eventCollection {
      items {
        slug
      }
    }
  }`;
  const response = await fetchGraphQl(query);
  return response?.data?.eventCollection?.items.map(
    (item: { slug: string }) => {
      return { params: { eventname: item.slug } };
    }
  );
}

export async function fetchEventsData(): Promise<EventPart[]> {
  const query = `query {
          eventCollection {
              items {
                  slug
                  banner {
                      url
                  }
                  title
                  description
                  dateTime
                  subscriptionUrl
                  type
              }
          }
      }`;
  const response = await fetchGraphQl(query);
  return response?.data?.eventCollection?.items;
}

export async function getEventData(key: string): Promise<Event> {
  const query = `query {
          eventCollection(where:{slug:"${key}"}, limit: 1){
              items{
                  slug
                  banner {
                      url
                  }
                  title
                  description
                  dateTime
                  subscriptionUrl
                  longDescription {json}
                  location
                  otherInfo {json}
                  partnersCollection {
                      items {
                          category
                          logo{url}
                          name
                          websiteUrl
                      }
                  }
                  tracksCollection {
                      items {
                          sys {
                              id
                          }
                      }
                  }
                  videoUrl
                  galleryCollection {
                      items {
                          url
                      }
                  }
              }
          }
      }`;
  const response = await fetchGraphQl(query);
  const event = response?.data?.eventCollection?.items[0];
  if (event?.tracksCollection?.items) {
    event.tracksCollection = await Promise.all(
      event.tracksCollection.items.map(async (track: { sys: { id: string } }) =>
        getTrack(track.sys.id)
      )
    );
  }
  if (event?.galleryCollection?.items.length == 100) {
    const missingGalleryItems = await getGalleryItems(key, 100);
    event.galleryCollection.items =
      event.galleryCollection.items.concat(missingGalleryItems);
  }
  return {
    slug: event.slug,
    title: event.title,
    bannerUrl: event.banner?.url,
    description: event.description,
    longDescription: event.longDescription,
    dateTime: event.dateTime,
    location: event.location,
    otherInfo: event.otherInfo,
    subscriptionUrl: event.subscriptionUrl,
    partners: event.partnersCollection?.items?.map(
      (partner: {
        category: string;
        logo: { url: string };
        name: string;
        websiteUrl: string;
      }) => {
        return {
          category: partner.category,
          name: partner.name,
          link: partner.websiteUrl,
          logoUrl: partner.logo?.url,
        };
      }
    ),
    tracks: event.tracksCollection?.map(
      (track: {
        data: {
          eventTrack: {
            name?: string;
            talksCollection?: {
              items?: {
                title?: string;
                speaker?: {
                  name?: string;
                  job?: string;
                  company?: string;
                  portrait?: { url: string };
                };
              }[];
            };
          };
        };
      }) => {
        return {
          name: track.data.eventTrack.name,
          talks: track.data.eventTrack.talksCollection?.items?.map((talk) => {
            return {
              title: talk.title,
              speaker: {
                name: talk.speaker?.name,
                job: talk.speaker?.job,
                portraitUrl: talk.speaker?.portrait?.url,
              },
            };
          }),
        };
      }
    ),
    videoUrl: event.videoUrl,
    gallery: event.galleryCollection?.items?.map(
      (picture: { url: string }) => picture.url
    ),
  } as Event;
}

async function getTrack(id: string) {
  const query = `query {
          eventTrack (id: "${id}") {
              name
              talksCollection {
                  items {
                      title
                      speaker {
                          name
                          job
                          company
                          portrait {
                              url
                          }
                      }
                  }
              }
            }
          }`;
  return await fetchGraphQl(query);
}

async function getGalleryItems(slug: string, skip: number) {
  const stepsize = 100;
  const query = `query {
      eventCollection(where:{slug:"${slug}"}, limit: 1){
          items{
              galleryCollection(skip: ${skip}) {
                  items {
                      url
                  }
              }
          }
      }
  }`;
  const galleryItemsResult = await fetchGraphQl(query);
  let galleryItems =
    galleryItemsResult?.data?.eventCollection?.items[0].galleryCollection
      ?.items || [];
  if (galleryItems.length == stepsize) {
    galleryItems = galleryItems.concat(
      await getGalleryItems(slug, skip + stepsize)
    );
  }
  return galleryItems;
}
