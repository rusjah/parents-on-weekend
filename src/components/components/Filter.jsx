import React, { useState } from 'react'
import PetsChekBox from './PetsChekBox'
import OneFilterOption from './OneFilterOption'

function Filter() {
  const [filtersProperty, setfiltersProperty] = useState(
    {
      pets: {
        dog: false,
        cat: false,
        bird: false,
        fish: false,
        hamster: false,
        rabbit: false,
        reptilien: false
      },
      child: {
        baby: false,
        threeTofive: false,
        sixToNine: false,
        tenToTwelve: false,
        more: false
      }
     }
  )

  function filterHandler(filterProp, checking) {
    setfiltersProperty({...filtersProperty, pets: {...filtersProperty.pets, [`${filterProp}`]: checking}})
  }

  return (
      <div className="collapse bg-base-200 w-[80%]">
        <input type="checkbox" className="peer" /> 
        <div className="collapse-title bg-lime-59  peer-checked:bg-[white] ">
        <h1 className='font-bold text-green-900 pb-4'>Add some filters:</h1>
        </div>
        <div className="collapse-content bg-lime-100 flex flex-col md:flex-row flex-wrap w-full justify-around  p-4 peer-checked:bg-[whilte] p"> 

        <div className='w-[48%] pb-4 md:pb-0'>
          <h1 className='font-bold text-green-900 pb-4'>Pets:</h1>
          <div className='w-full flex flex-wrap gap-4 '>
            {Object.keys(filtersProperty.pets).map((key) => (
              <div key={key} className=''>
                  {console.log(key)}
                <OneFilterOption type={'pets'} valueName={`${key}`} filterHandler={filterHandler}/>
              </div>
            ))}
          </div>
        </div>


         <div className='w-[48%]'>
            <h1 className='font-bold text-green-900 pb-4'>Children:</h1>
            <div className='w-full flex flex-wrap gap-4'>
              {console.log(filtersProperty)}
              {Object.keys(filtersProperty.child).map((key) => (
                <div key={key} className=''>
                  <OneFilterOption type={'pets'} valueName={`${key}`  }/>
                </div>
              ))}
            </div>
         </div>
        </div>
      </div>
  )
}

export default Filter
