import React from 'react'
import { useAppContext } from '../../../context/AppContext';
import PetsChekBox from '../PetsChekBox';
import {PETS, CHILDREN} from '../../../data/Data'


function Suggetions({setUpdatingData, edit}) {
  return (
    <div className='flex flex-col w-full md:w-[71%] lg:flex-row justify-start md:justify-between gap-12  border-orange-100 border-2 p-4'>
        <div className='grid md:grid-cols-2'>
            <h2 className='font-bold text-[1.5em] text-brawn-950 col-span-2'>I have/like pats</h2>
              {PETS.map((el, ind) =>  <div key={ind} className='mx-2 my-2 col-span-2 md:col-span-1'>
                 <PetsChekBox pet={el} type={'pets'} setUpdatingData={setUpdatingData}/>
              </div>)}
        </div>
        <div className='grid grid-cols-2'>
            <h2 className='font-bold text-[1.5em] text-brawn-950 col-span-2'>I have/like children</h2>
              {CHILDREN.map((el, ind) =>  <div key={ind} className='mx-2 my-2 col-span-2 md:col-span-1 '>
                 <PetsChekBox pet={el} type={'child'} setUpdatingData={setUpdatingData} edit={edit}/>
              </div>)}
        </div>
      </div> 
  )
}

export default Suggetions