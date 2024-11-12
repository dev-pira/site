import { CoursePart } from "../models/course";
import { fetchGraphQl } from "./cms";

export async function fetchCoursesData(): Promise<CoursePart> {
  const query = `query {
    courseCollection {
      items {
        slug
        banner {
          url
        }
        title
      }
    }
  }`;
  const response = await fetchGraphQl(query);
  return response?.data?.courseCollection?.items;
}
