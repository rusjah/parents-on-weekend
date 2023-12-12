import React from 'react'

function Filter() {
  return (
      <div className="collapse bg-base-200">
        <input type="checkbox" className="peer" /> 
        <div className="collapse-title bg-lime-59  peer-checked:bg-[white] ">
          Click me to show/hide content
        </div>
        <div className="collapse-content bg-lime-100  peer-checked:bg-[whilte] p"> 
            <div></div>
        </div>
      </div>
  )
}

export default Filter