import React from 'react'
import { useAppContext } from '../../../context/AppContext'

function AboutMe({setnewUser, edit}) {
  const {currentUser} = useAppContext()
  const defaultValue = (edit && currentUser?.aboutMe) && currentUser.aboutMe ? currentUser.aboutMe : ''
  return (
 
        <div className='flex flex-col gap-4 border-orange-100 border-2 p-4 w-[100%]'>
            <h2 className='font-bold text-[1.5em] text-brawn-950'>About me</h2>
            <label className='font-bold  bg-lime-50 mx-2 h-48 flex gap-1 items-center justify-center pl-2 flex-col p-4'>       
            <textarea onChange={(e) => setnewUser(i => ({...i, aboutMe: e.target.value}))} defaultValue={defaultValue}  name='aboutMe' className="textarea textarea-warning w-full h-full " placeholder="About me"></textarea>
            </label>
        </div>
   
  )
}

export default AboutMe