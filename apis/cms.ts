async function fetchGraphQl(query: any) {

    const spaceId = process.env.CONTENTFUL_SPACE_ID
    const apiKey = process.env.CONTENTFUL_API_KEY
    const result = await fetch(`https://graphql.contentful.com/content/v1/spaces/${spaceId}`, {
        method: 'POST',
        headers : {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${apiKey}`
        },
        body: JSON.stringify({query})
    })
    const data = await result.json()
    return data
}

function eventsFrom(response:any) {
    return response?.data?.eventCollection?.items
}
export async function fetchEventsData() {
    const query = `query {
        eventCollection {
            items {
                key
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
    return response?.data?.eventCollection?.items[0]
}
export async function getEventData(key:string) {
    const query = `query {
        eventCollection(where:{key:"${key}"}, limit: 1){
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
                        name
                    }
                }
            }
        }
    }`
    const data = await fetchGraphQl(query)
    return eventFrom(data)
}

export async function fetchIndexData() {
    return await fetchEventsData();
}