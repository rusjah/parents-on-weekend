import React from 'react'

function OneStepUsing({num, content}) {
  return (
    <div className='flex flex-col items-center '>
        <p className='p-4 bg-yellow-950 rounded-full text-white text-center font-bold'>{num}</p>
        <p className='line h-12 w-1  bg-yellow-950'></p>
        <p className='mask mask-decagon w-[15vw] h-48 bg-yellow-600 text-center p-8 pb-0 text-geen-200 tex-bold text-[1.5em] shadow-[0_0_0_60px_rgb(0,0,0, 0.8)] transition ease-in-out delay-150  hover:scale-110 hover:bg-yellow-800 hover:text-white duration-300 font-marhey flex justify-center items-center flex-col'>
            <span>{content}</span>   
            <br /> 
            {/* <span className='font-bold text-[2rem] '><ion-icon name="happy-outline"></ion-icon></span> */}
        </p>
    </div>
  )
}

export default OneStepUsing