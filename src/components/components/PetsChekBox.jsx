import React from 'react'

function PetsChekBox({pet, type, setPetsData}) {

  return (
    <label className={`font-bold  bg-lime-50 w-44 flex gap-3 items-center justify-between pl-2 flex-row p-2`}>
        <img className="mask mask-decagon w-12 h-12" src={pet.url} alt={pet.name} />
        <p>{pet.name}</p>
        <input type="checkbox" name={type} value={pet.name} className="checkbox checkbox-warning petsChild" />
    </label>
  )
}

export default PetsChekBox