
import { Suspense } from "react";
import getVenues from "@/libs/getVenues";
import VenueCatalog from "@/components/VenueCatalog";
import LinearProgress from "@mui/material/LinearProgress";

export default function Venue() {
    const venues = getVenues(); 

    return (
        <div>
            <h1 className="text-3xl font-bold text-center mt-8">Select your venue</h1>
            <Suspense fallback={<p>Loading... <LinearProgress /></p>}>
                <VenueCatalog venuesJson={venues} /> 
            </Suspense>
        </div>
    );
}