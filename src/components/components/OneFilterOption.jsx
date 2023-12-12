import React from 'react'

function OneFilterOption({type, valueName, filterHandler}) {
  return (
    <label className={`font-bold  bg-lime-50 w-44 flex gap-3 items-center justify-between pl-2 flex-row p-2`}>
        <p>{valueName}</p>
        <input onChange={(e) => filterHandler(valueName, e.target.checked)} type="checkbox" name={type} value={valueName} className="checkbox checkbox-warning petsChild" />
    </label>
  )
}

export default OneFilterOption