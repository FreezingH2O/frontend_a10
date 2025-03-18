"use client";
import Image from "next/image";
import Card from '@/components/Card';
import { useState } from "react";
import Link from "next/link";

export default function CardPanel() {

    const [ratings, setRatings] = useState(new Map([
        ["The Bloom Pavilion", 0],
        ["Spark Space", 0],
        ["The Grand Table", 0]
      ]));
    
      const [showing, setShowing] = useState(new Map([
        ["The Bloom Pavilion", true],
        ["Spark Space", true],
        ["The Grand Table", true]
      ]));


      const trueCount = Array.from(showing.values()).filter(value => value).length;

      const handleRatingChange = (venueName: string, newValue: number) => {
        setRatings(prevRatings => new Map(prevRatings).set(venueName, newValue));
        setShowing(prevShowing=> new Map(prevShowing).set(venueName,true));
      };

      const handleShowingChange = (venueName: string) => {
        setShowing(prevShowing=> new Map(prevShowing).set(venueName,false));
      };

const mockVenue =[
  {vid:'001',  venueName: "The Bloom Pavilion", imgSrc: "/img/bloom.jpg"},
  {vid:'002',  venueName: "Spark Space", imgSrc: "/img/sparkspace.jpg"},
  {vid:'003',  venueName: "The Grand Table", imgSrc: "/img/grandtable.jpg"},
]
  
  return (
    <div>
    
      <div className="flex flex-row flex-wrap gap-8 m-8 mx-[5vw] p-10">
        {
          mockVenue.map((venue)=>(

        <Link href={`/venue/${venue.vid}`} className="p-5 w-1/4 max-w-[350px]">
            <Card {...venue} rating={ratings.get(venue.venueName) ?? 0} onRatingChange={handleRatingChange} />
            </Link>
          ))
        }
   
      </div>

<div className="m-10">
      <h2 className="font-bold">Venue List with Ratings : {trueCount}</h2>
      {Array.from(showing.entries()).filter(([key, value]) => value).map(([key]) => (
        <h4 key={key} 
        onClick={() => handleShowingChange(key)}
        data-testid={key}
        >{key} : {ratings.get(key)}</h4> 
      ))}

    </div>
    </div>
  );
}

