import React from 'react'
import Record from './Record'

function Video({setUrl}) {
  return (
    <div className="collapse bg-base-200">
        <input type="checkbox" className="peer" /> 
        <div className="collapse-title bg-yellow-100 text-black font-bold peer-checked:bg-orange-50 peer-checked:text-black">
             Tell short about yourself
        </div>
        <div className="flex justify-center collapse-content bg-yellow-100 text-black peer-checked:bg-orange-50 peer-checked:text-black"> 
            <Record setUrl={setUrl}/>
        </div>
    </div>
  )
}

export default Video