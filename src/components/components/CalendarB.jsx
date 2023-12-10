import React, { useState } from 'react'
import Calendar from 'react-calendar'
import 'react-calendar/dist/Calendar.css';


function CalendarB(e) {
    const [date, setDate] = useState(new Date())

    function show(e) {
        console.log(e);
    }
    return (
        <div>
            <Calendar onClickDay={show} onChange={setDate} value={date}  defaultValue={date} />
        </div>
    )

}

export default CalendarB