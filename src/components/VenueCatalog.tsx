import Link from "next/link";
import Card from "./Card";
import { VenueJson, VenueItem } from "../../interface"; // Import the correct interfaces

export default async function VenueCatalog({ venuesJson }: { venuesJson: Promise<VenueJson> }) {
    const venueJsonReady = await venuesJson;
    return (
        <div>
                <h2 className="text-lg text-center">
                    Explore {venueJsonReady.count} fabulous venues in our venue catalog
                </h2>

               


            <div className="flex flex-row flex-wrap p-10">
            {venueJsonReady.data.map((venue: VenueItem) => (
                <div key={venue.id || venue._id} className="w-1/5s max-w-[350px]"> 
                    <Link href={`/venue/${venue.id || venue._id}`} className="block p-5">
                        <Card 
                            venueName={venue.name} 
                            imgSrc={venue.picture} 
            
                        />
                    </Link>
                </div>
            ))}
        </div>
        </div>
    );
}
