import React from 'react'

function Notification({notification}) {
  return (
    <div className={notification ?  `block absolute bg-green-800 rounded-full w-[10px] h-[10px] md:w-[4px] md:h-[4px] pl-0 left-5 top-1 md:left-6` : `hidden`}></div>
  )
}

export default Notification