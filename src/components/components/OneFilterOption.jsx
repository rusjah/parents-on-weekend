import React from 'react'
import { useAppContext } from '../../context/AppContext'

function OneFilterOption({type, valueName, filterHandler}) {
  const {togleFilter} = useAppContext()

  function filterHandler(e) {
    const obj = {
      name: e.target.value,
      status: e.target.checked
    }
    togleFilter(obj)
  }
  return (
    <label className={`font-bold  bg-lime-50 w-44 flex gap-3 items-center justify-between pl-2 flex-row p-2`}>
        <p>{valueName}</p>
        <input onChange={(e) => filterHandler(e)} type="checkbox" name={type} value={valueName} className="checkbox checkbox-warning petsChild" />
    </label>
  )
}

export default OneFilterOption