import React, { useState } from 'react'
import Calendar from 'react-calendar'
import 'react-calendar/dist/Calendar.css';


function CalendarB({setnewUser,edit, setUpdatingData}) {
    const [date, setDate] = useState(new Date())

    function show(e) {
        // onChangeBirthDay(i => e)
        edit ? setUpdatingData(i => ({...i, birthday: e})) : setnewUser(i => ({...i, birthday: e}))

    }
    return (
        <div>
            <Calendar onClickDay={show} onChange={setDate} value={date}  defaultValue={date} />
        </div>
    )

}

export default CalendarB