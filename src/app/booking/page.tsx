"use client";

import { useSearchParams } from "next/navigation";
import { TextField, Select, MenuItem, FormLabel } from "@mui/material";
import DateReserve from '@/components/DateReserve';
import { useState } from "react";
import dayjs, { Dayjs } from "dayjs";
import { useDispatch } from "react-redux";
import { AppDispatch } from "@/redux/store";
import { BookingItem } from "../../../interface";
import { addBooking } from "@/redux/features/bookSlice";

export default function Booking() {
    const dispatch = useDispatch<AppDispatch>();


    const [date, setDate] = useState<Dayjs | null>(null);
    const [name, setName] = useState<string>("");
    const [tel, setTel] = useState<string>("");
    const [venue, setVenue] = useState<string>("");


    const makeBooking = () => {
        if (!name || !tel || !venue || !date) {
            alert("Please fill in all fields before booking.");
            return;
        }

        const item: BookingItem = {
            nameLastname: name,
            tel: tel,
            venue: venue,
            bookDate: dayjs(date).format("YYYY/MM/DD"),
        };

        dispatch(addBooking(item));
        alert("You booked the venue successfully!");
        console.log(item);
    };

    return (
        <div className="flex flex-col">
            <div className="flex flex-col h-screen gap-8 w-1/4 mx-auto mt-10">
                <h2 className="text-4xl font-bold">Booking {name} venue</h2>

       
                <TextField
                    id="name"
                    name="Name-Lastname"
                    label="Name-Lastname"
                    variant="standard"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />


                <TextField
                    id="contact"
                    name="Contact-Number"
                    label="Contact-Number"
                    variant="standard"
                    required
                    value={tel}
                    onChange={(e) => setTel(e.target.value)}
                />


                <div className="flex flex-row justify-center gap-6 items-center">
                    <FormLabel htmlFor="venue">Select Venue</FormLabel>
                    <Select
                        id="venue"
                        value={venue}
                        onChange={(e) => setVenue(e.target.value)}
                    >
                        <MenuItem value="Bloom">The Bloom Pavilion</MenuItem>
                        <MenuItem value="Spark">Spark Space</MenuItem>
                        <MenuItem value="GrandTable">The Grand Table</MenuItem>
                    </Select>
                </div>

   
                <DateReserve onDateChange={(value: Dayjs) => setDate(value)} />

 
                <button
                    onClick={makeBooking}
                    className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-6 rounded-lg shadow-md transition-all duration-300"
                >
                    Book Venue
                </button>
            </div>
        </div>
    );
}
