import React, { useEffect, useState } from 'react'
import PetsChekBox from './PetsChekBox'
import OneFilterOption from './OneFilterOption'
import {FILTERPROPERTY} from '../../data/Data'
import { useAppContext } from '../../context/AppContext'

function Filter() {
  const {filterUsers} = useAppContext()
  const [filtersProperty, setfiltersProperty] = useState({})

  function filterHandler(filterProp, checking) {
    
    setfiltersProperty(i => ({...i,
      [filterProp]: checking}))
  }

  useEffect(()=> {
  }, [] )


  return (
      <div className="collapse bg-base-200 w-[80%] md:w-[70%]">
        <input type="checkbox" className="peer" /> 
        <div className="collapse-title bg-lime-59  peer-checked:bg-[white] ">
        <h1 className='font-bold text-green-900 pb-4 text-[1.5em]'>Add some filters:</h1>
        </div>
        <div className="collapse-content bg-lime-100 flex flex-col md:flex-row flex-wrap w-full justify-around  p-4 peer-checked:bg-[whilte] p"> 

        <div className='w-[48%] pb-4 md:pb-0'>
          <h1 className='font-bold text-green-900 pb-4'>Pets:</h1>
          <div className='w-full flex flex-wrap gap-4 '>
            {Object.keys(FILTERPROPERTY.pets).map((key) => (
              <div key={key} className=''>
                <OneFilterOption type={'pets'} valueName={`${key}`} filterHandler={filterHandler}/>
              </div>
            ))}
          </div>
        </div>


         <div className='w-[48%]'>
            <h1 className='font-bold text-green-900 pb-4'>Children:</h1>
            <div className='w-full flex flex-wrap gap-4'>
              {Object.keys(FILTERPROPERTY.child).map((key) => (
                <div key={key} className=''>
                  <OneFilterOption type={'child'} valueName={`${key}`} filterHandler={filterHandler}/>
                </div>
              ))}
            </div>
         </div>
        </div>
      </div>
  )
}

export default Filter
