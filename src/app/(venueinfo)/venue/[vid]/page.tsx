
import Image from "next/image";
import getVenue from '@/libs/getVenue';
import Link from "next/link";

export default async function VenueDetail({params}: {params:{vid:string}}){


const venueDetail = await getVenue(params.vid);


    return(
        <div className="text-center p-5">
           <h1 className="text-3xl font-bold">{venueDetail.data.name}</h1>
            <div className="flex flex-row my-5">
                <Image src={venueDetail.data.picture}
                alt= 'veneu img'
                width={0} height={0} sizes ='100vw'
                className = 'rounded-lg w-[30%]'/>
                <div className="flex flex-col my-5 items-start">
                    <div className="text-md mx-5">Name: {venueDetail.data.name}</div>
                    <div className="text-md mx-5">Address: {venueDetail.data.address}</div>
                    <div className="text-md mx-5">District: {venueDetail.data.district}</div>
                    <div className="text-md mx-5">Postal Code: {venueDetail.data.postalcode}</div>
                    <div className="text-md mx-5">Tel: {venueDetail.data.tel}</div>
                    <div className="text-md mx-5">Daily Rate: {venueDetail.data.dailyrate}</div>
                    <Link href={`/booking?id=${venueDetail.data.id}&name=${venueDetail.data.name}`}>
                        <button className="p-3 px-6 m-4  rounded-lg  
                                bg-[#0D9488] text-white font-poppins text-xl shadow-lg 
                                hover:bg-[#0F766E] transition duration-300">
                            Make Reservation
                        </button>
                        
                    </Link>
                </div>
            </div>
            
        </div>
    )
}