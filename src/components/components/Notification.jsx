import React from 'react'

function Notification({notification}) {
  return (
    // <img className="mask mask-circle" src="https://daisyui.com/images/stock/photo-1567653418876-5bb0e566e1c2.jpg" />
    // <p className={notification ? 'block absolute bg-green-800 w-[-10px] h-[10px] rounded-full' : ''}></p>
    // <p className={notification ? 'block absolute left-4 top-1 rounded w-[10px] h-[10px] bg-green-800' : 'hidden'}></p>
    <div className={notification ?  `block absolute bg-green-800 rounded-full w-[10px] h-[10px] md:w-[4px] md:h-[4px] pl-0 left-5 top-1 md:left-6` : `hidden`}></div>
  )
}

export default Notification