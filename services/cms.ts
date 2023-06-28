import { fetchMockedGraphQl } from "./mock";

const spaceId = process.env.CONTENTFUL_SPACE_ID;
const apiKey = process.env.CONTENTFUL_API_KEY;
const environment = process.env.CONTENTFUL_ENVIRONMENT;
const cma_token = process.env.CONTENTFUL_CMA_TOKEN;

export const fetchGraphQl =
  spaceId && apiKey ? fetchActualGraphQl : fetchMockedGraphQl;

async function fetchActualGraphQl(query: string) {
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
  return data;
}

export async function callEntriesApi(
  method: string,
  entryType: string,
  body: string
) {
  const url = `https://api.contentful.com/spaces/${spaceId}/environments/${environment}/entries`;
  const headers = {
    "Content-Type": "application/vnd.contentful.management.v1+json",
    "X-Contentful-Content-Type": entryType,
    Authorization: `Bearer ${cma_token}`,
  };
  const result = await fetch(url, { method, headers, body });
  return result;
}
