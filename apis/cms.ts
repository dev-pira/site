import { Vacancy } from "../models/model"

async function fetchGraphQl(query: any) {

    const spaceId = process.env.CONTENTFUL_SPACE_ID
    const apiKey = process.env.CONTENTFUL_API_KEY
    const result = await fetch(`https://graphql.contentful.com/content/v1/spaces/${spaceId}`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${apiKey}`
        },
        body: JSON.stringify({ query })
    })
    const data = await result.json()
    return data
}

export async function fetchIndexData() {
    return await fetchEventsData();
}

function eventsFrom(response: any) {
    return response?.data?.eventCollection?.items
}
export async function fetchEventsData() {
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
    }`
    const data = await fetchGraphQl(query)
    return eventsFrom(data)
}

function eventFrom(response: any) {
    let event = response
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
                logoUrl: partner.logo?.url
            }
        }),
        tracks: event.tracks,
        videoUrl: event.videoUrl,
        gallery: event.galleryCollection?.items?.map((picture:any) => picture.url)
    }
    return event
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
    }`
    const response = await fetchGraphQl(query)
    const event = response?.data?.eventCollection?.items[0]
    if (event) {
        if (event.tracksCollection?.items) {
            event.tracks = []
            for (const track of event.tracksCollection.items) {
                event.tracks.push(await getTrack(track.sys.id))
            }
        }
    }
    return eventFrom(event)
}

function trackFrom(response: any) {
    let track = response?.data?.eventTrack
    track = {
        name: track.name,
        talks: track.talksCollection?.items?.map((talk:any) => talk)
    }
    return track
}
async function getTrack(id: string) {
    const query  = `query {
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
    }`
    const response = await fetchGraphQl(query)
    return trackFrom(response)
}

interface CreateVacancyRequest {
    ["Titulo da vaga"]: string
    ["Descrição"]?: string
    ["Empresa"]?: string
    ["Detalhes"]?: string
    ["Cidade"]?: string
    ["Link para inscrição"]?: string
    ["Habilidades desejadas"]?: string
}
export async function createVacancy(data: CreateVacancyRequest) {
    const spaceId = process.env.CONTENTFUL_SPACE_ID
    const environment = process.env.CONTENTFUL_ENVIRONMENT
    const cma_token = process.env.CONTENTFUL_CMA_TOKEN
    const contentType = 'application/vnd.contentful.management.v1+json'
    const entryType = 'vacancy'
    const url = `https://api.contentful.com/spaces/${spaceId}/environments/${environment}/entries`
    const headers = {
        'Content-Type': contentType,
        'X-Contentful-Content-Type': entryType,
        'Authorization': `Bearer ${cma_token}`
    }
    const bodyObj = {
        "fields": {
            "title": {
                "en-US": data["Titulo da vaga"]
            },
            "description": {
                "en-US": data.Descrição
            },
            "company": {
                "en-US": data.Empresa
            },
            "details": {
                "en-US": {
                    "nodeType": "document",
                    "data":{},
                    "content": [
                        {
                            "nodeType": "paragraph",
                            "data":{},
                            "content": [
                                {
                                    "nodeType":"text",
                                    "data":{},
                                    "marks":[],
                                    "value": data.Detalhes
                                }
                            ]
                        }
                    ]
                }
            },
            "enrollmentUrl": {
                "en-US": data["Link para inscrição"]
            },
            "desirableSkills": {
                "en-US": data["Habilidades desejadas"]? data["Habilidades desejadas"].split(",") : []
            }
        }
    }
    const body = JSON.stringify(bodyObj)
    const result = await fetch(url, {method: 'POST', headers, body})
    return result
}

function vacanciesFrom(response: any): Vacancy[] {
    return response?.data?.vacancyCollection?.items.map((vancacy: any) => {
        return {
            id: vancacy.sys.id,
            title: vancacy.title,
            company: vancacy.company,
            description: vancacy.description,
            location: vancacy.location
        }
    })
}
export async function fetchVancanciesData(): Promise<Vacancy[]> {
    const query = `query {
        vacancyCollection {
            items {
                description
                company
                title
                location
                sys {
                    id
                }
            }
        }
    }`
    const data = await fetchGraphQl(query)
    return vacanciesFrom(data)
}