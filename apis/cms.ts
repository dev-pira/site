async function fetchGraphQl(query: any) {
    return fetch(`asdasd`, {
        method: 'POST',
        headers : {
            'Content-Type': 'application/json',
            'API-KEY': ''
        },
        body: JSON.stringify(query)
    }).then((response) => response.json())
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