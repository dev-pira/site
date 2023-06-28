
import { CreateJobRequest, Job } from "../models/job";

async function fetchGraphQl<T>(query: string): Promise<T> {
  const spaceId = process.env.CONTENTFUL_SPACE_ID;
  const apiKey = process.env.CONTENTFUL_API_KEY;
  const result = await fetch(
    `https://graphql.contentful.com/content/v1/spaces/${spaceId}`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${apiKey}`,
      },
      body: JSON.stringify({ query }),
    }
  );
  const data = await result.json();
  return <T>data;
}

export async function fetchIndexData() {
  return await fetchEventsData();
}

interface EventsDataResponse {
  data: {
    eventCollection: {
      items: {
        title: string;
      };
    };
  };
}

function eventsFrom(response: EventsDataResponse) {
  return response?.data?.eventCollection?.items;
}

export async function fetchEventsData(): adasdasdasd {
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
  const data = await fetchGraphQl<EventsDataResponse>(query);
  return eventsFrom(data);
}

function eventFrom(response: any) {
  const event = response;
  event = {
    title: event.title,
    bannerUrl: event.banner?.url,
    description: event.description,
    longDescription: event.longDescription,
    place: event.location,
    dateTime: event.dateTime,
    subscriptionUrl: event.subscriptionUrl,
    otherInfo: event.otherInfo,
    partners: event.partnersCollection?.items?.map((partner: any) => {
      return {
        category: partner.category,
        name: partner.name,
        link: partner.websiteUrl,
        logoUrl: partner.logo?.url,
      };
    }),
    tracks: event.tracks,
    videoUrl: event.videoUrl,
    gallery: event.galleryCollection?.items?.map((picture: any) => picture.url),
  };
  return event;
}

export async function getEventData(key: string) {
  const query = `query {
        eventCollection(where:{slug:"${key}"}, limit: 1){
            items{
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
  if (event) {
    if (event.tracksCollection?.items) {
      event.tracks = [];
      for (const track of event.tracksCollection.items) {
        event.tracks.push(await getTrack(track.sys.id));
      }
    }
  }
  return eventFrom(event);
}

function trackFrom(response: any) {
  let track = response?.data?.eventTrack;
  track = {
    name: track.name,
    talks: track.talksCollection?.items?.map((talk: any) => talk),
  };
  return track;
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
  const response = await fetchGraphQl(query);
  return trackFrom(response);
}

function formatEnrollmentUrl(enrollmentUrl: string) {
  let result = enrollmentUrl;
  if (result?.includes("@")) result = `mailto:${result}`;
  else if (!result?.startsWith("http://") || !result?.startsWith("https://"))
    result = `http://${result}`;
  return result;
}
function formatDetails(detail?: string) {
  let result = {};
  if (detail) {
    result = {
      "en-US": {
        nodeType: "document",
        data: {},
        content: [
          {
            nodeType: "paragraph",
            data: {},
            content: [
              {
                nodeType: "text",
                data: {},
                marks: [],
                value: detail,
              },
            ],
          },
        ],
      },
    };
  }
  return result;
}

export async function createJob(data: CreateJobRequest) {
  const spaceId = process.env.CONTENTFUL_SPACE_ID;
  const environment = process.env.CONTENTFUL_ENVIRONMENT;
  const cma_token = process.env.CONTENTFUL_CMA_TOKEN;
  const contentType = "application/vnd.contentful.management.v1+json";
  const entryType = "vacancy";
  const url = `https://api.contentful.com/spaces/${spaceId}/environments/${environment}/entries`;
  const headers = {
    "Content-Type": contentType,
    "X-Contentful-Content-Type": entryType,
    Authorization: `Bearer ${cma_token}`,
  };
  const bodyObj = {
    fields: {
      title: {
        "en-US": data.title,
      },
      description: {
        "en-US": data.description,
      },
      company: {
        "en-US": data.company,
      },
      details: formatDetails(data.details),
      enrollmentUrl: {
        "en-US": formatEnrollmentUrl(data.enrollmentUrl),
      },
      desirableSkills: {
        "en-US": data.desirableSkills ?? [],
      },
      location: {
        "en-US": data.location,
      },
    },
  };
  const body = JSON.stringify(bodyObj);
  const result = await fetch(url, { method: "POST", headers, body });
  return result;
}

function jobsFrom(response: any): Job[] {
  return response?.data?.vacancyCollection?.items.map((job: any) => {
    let jobLocation = "Outros";
    if (job.location) {
      switch (job.location.toLowerCase()) {
        case "piracicaba":
          jobLocation = "Piracicaba";
          break;
        case "remoto":
          jobLocation = "Remoto";
          break;
        default:
          break;
      }
    }
    return {
      id: job.sys.id,
      title: job.title,
      company: job.company,
      description: job.description,
      location: jobLocation,
      enrollmentUrl: job.enrollmentUrl,
    };
  });
}
export async function fetchJobsData(queryExpression?: string): Promise<Job[]> {
  queryExpression = queryExpression
    ? `(where: { 
        OR: [
          { title_contains : "${queryExpression}" },
          { description_contains: "${queryExpression}" },
          { company_contains: "${queryExpression}" },
          { location_contains: "${queryExpression}" }
        ]
    })`
    : "";
  const query = `query {
        vacancyCollection ${queryExpression} {
            items {
                description
                company
                title
                location
                enrollmentUrl
                sys {
                    id
                }
            }
        }
    }`;
  const data = await fetchGraphQl(query);
  return jobsFrom(data);
}
