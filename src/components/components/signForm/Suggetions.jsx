import React from 'react'
import { useAppContext } from '../../../context/AppContext';
import PetsChekBox from '../PetsChekBox';
import {PETS, CHILDREN} from '../../../data/Data'


function Suggetions() {
  return (
    <div className='flex flex-col md:flex-row justify-center md:justify-between gap-12 border-orange-100 border-2 p-4'>
        <div className='grid grid-cols-2'>
            <h2 className='font-bold text-[1.5em] text-brawn-950 col-span-2'>I have/like pats</h2>
              {PETS.map((el, ind) =>  <div key={ind} className='mx-2 my-2'>
                 <PetsChekBox pet={el} type={'pets'} />
              </div>)}
        </div>
        <div className='grid grid-cols-2'>
            <h2 className='font-bold text-[1.5em] text-brawn-950 col-span-2'>I have/like children</h2>
              {CHILDREN.map((el, ind) =>  <div key={ind} className='mx-2 my-2 '>
                 <PetsChekBox pet={el} type={'child'} />
              </div>)}
        </div>
      </div> 
  )
}

export default Suggetions