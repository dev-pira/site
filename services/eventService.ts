import { Event, EventPart } from "../models/event";
import { fetchGraphQl } from "./cms";

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
  if (event && event.tracksCollection?.items) {
    await Promise.all(
      event.tracksCollection.items.map((track: { sys: { id: string } }) =>
        getTrack(track.sys.id)
      )
    );
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
    tracks: [], //TODO:
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
          }
      }`;
  return await fetchGraphQl(query);
}
