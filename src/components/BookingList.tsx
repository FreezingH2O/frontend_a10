'use client'
import { useAppSelector , AppDispatch} from "@/redux/store"
import { useDispatch, UseDispatch } from "react-redux"
import { removeBooking } from "@/redux/features/bookSlice"

export default function BookingList(){
    const  veneuItem = useAppSelector((state)=>state.bookSlice.bookItems)
    const dispatch = useDispatch<AppDispatch>()

    return (
        <>
        { veneuItem.length===0
        ?<div className="flex justify-center m-4 text-3xl">No Venue Booking</div>:
            veneuItem.map((BookingItem)=>(
                <div className="bg-slate-200 rounded p-5 m-2" 
                key={`${BookingItem.venue}-${BookingItem.bookDate}`}>
                    <div className="text-2xl">Name: {BookingItem.nameLastname}</div>
                    <div className="text-2xl">PhoneNumber: {BookingItem.tel}</div>
                    <div className="text-2xl">Venue: {BookingItem.venue}</div>
                    <div className="text-2xl">Date: {BookingItem.bookDate}</div>
                    <button className="block rounded-md bg-red-600 hover:bg-red:600 p-2 mt-2 text-white font-bold"
                    onClick={()=>dispatch(removeBooking(BookingItem))}>Remove</button>

                </div>
            ))
        }
        </>
    )
}