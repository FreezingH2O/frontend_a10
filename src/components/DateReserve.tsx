'use client';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { Dayjs } from 'dayjs';
import { useState } from 'react';


export default function DateReserve({onDateChange}:{onDateChange:Function}) {
    const [date, setDate] = useState<Dayjs | null>(null); 

    return (
        <div className='bg-state-100 rounded-lg w-fit px-10 flex justify-center'>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DatePicker 
            value={date}
            onChange={(newValue)=>{setDate(newValue);
                onDateChange(newValue)
            }}/>
        </LocalizationProvider>

        </div>
    );
}

