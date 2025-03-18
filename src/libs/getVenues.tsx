import { VenueJson } from "../../interface";

export default async function getVenues(): Promise<VenueJson> {
  await new Promise(resolve => setTimeout(resolve, 300));

  const response = await fetch("https://a08-venue-explorer-backend.vercel.app/api/v1/venues");

  if (!response.ok) {
    throw new Error("Failed to fetch venues");
  }

  return response.json();
}
