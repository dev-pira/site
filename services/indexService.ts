import { fetchEventsData } from "./eventService";

export async function fetchIndexData() {
  return await fetchEventsData();
}
