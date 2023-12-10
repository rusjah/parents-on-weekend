import React from 'react'

function PetsChekBox({pat}) {
  return (
    <label className={`font-bold  bg-lime-50 w-44 flex gap-3 items-center justify-between pl-2 flex-row p-2`}>
        {console.log(pat)}
        <img className="mask mask-decagon w-12 h-12" src={pat.url} alt={pat.name} />
        <p>{pat.name}</p>
        <input type="checkbox" name={[pat.name]}  className="checkbox checkbox-warning" />
    </label>
  )
}

export default PetsChekBox