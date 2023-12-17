import React from 'react'

function PetsChekBox({pet, type, setUpdatingData, edit}) {

  function changesHandle(e) {
    console.log('lalaal');
    console.log(e.target, 'e.target');
    console.log(e.target.value, 'e.target.value');
    console.log(e.target.checked, 'e.target.checked');
  }

  return (
   <>
   {edit ? (
    <label className={`font-bold  bg-lime-50 w-44 h-16 flex gap-3 items-center justify-between pl-2 flex-row p-2`}>
        <img className="mask mask-decagon w-12 h-12" src={pet.url} alt={pet.title} />
        <p>{pet.title}</p>
        <input onChange={console.log('i am here')} type="checkbox" name={type} value={pet.nameId} className="checkbox checkbox-warning petsChild" />
    </label>
   ) : (
    <label className={`font-bold  bg-lime-50 w-44 h-16 flex gap-3 items-center justify-between pl-2 flex-row p-2`}>
        <img className="mask mask-decagon w-12 h-12" src={pet.url} alt={pet.title} />
        <p>{pet.title}</p>
        <input type="checkbox" name={type} value={pet.nameId} className="checkbox checkbox-warning petsChild" />
    </label>
   )}
   </>
  )
}

export default PetsChekBox