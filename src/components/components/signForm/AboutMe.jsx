import React from 'react'

function AboutMe({onChangeAboutMe, workState}) {
  return (
 
        <div className='flex flex-col gap-4 border-orange-100 border-2 p-4 w-[100%]'>
            <h2 className='font-bold text-[1.5em] text-brawn-950'>About me</h2>
            <label className='font-bold  bg-lime-50 mx-2 h-48 flex gap-1 items-center justify-center pl-2 flex-col p-4'>       
            <textarea onChange={(e) => onChangeAboutMe(e.target.value)}  name='aboutMe' className="textarea textarea-warning w-full h-full " placeholder="About me"></textarea>
            </label>
        </div>
   
  )
}

export default AboutMe