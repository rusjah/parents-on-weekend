import React, { useEffect, useState } from 'react'
import data from '../../data.json'
import Video from '../components/video/Video'
import { useNavigate } from 'react-router-dom'
import BaseDate from '../components/signForm/BaseData'
import BaseData from '../components/signForm/BaseData'
import LoginData from '../components/signForm/LoginData'
import PersonalData from '../components/signForm/PersonalData'
import AdditionalData from '../components/signForm/AdditionalData'
import AboutMe from '../components/signForm/AboutMe'

import { useAppContext } from '../../context/AppContext'
import Suggetions from '../components/signForm/Suggetions'


function Sign() {

  const {registration} = useAppContext()

  const [newUser, setnewUser] = useState({})

  function createUser(e) {
      e.preventDefault();

      const pets = []
      for(let i = 0; i < e.target.pets.length; i++) {
        const checkedPet = e.target.pets[i];
        if (checkedPet.checked) {
          pets.push(checkedPet.value)
        }
      }
    
      const children = []
      for(let i = 0; i < e.target.child.length; i++) {
        const checkedCild = e.target.child[i];
        if (checkedCild.checked) {
          children.push(checkedCild.value)
        }
      }

      registration(newUser)
      e.target.reset();
    }

  function handleChange(key, value) {
    setnewUser(userData => ({...userData, [key]: value}))
  }

  return (
    <div className='py-[10vh] w-full min-h-[66vh] flex flex-col items-center  bg-[#f0efeb]'>
     <h2 className='font-bold text-[2.5rem] text-green-900 pb-12'>Sign Up</h2>
    <form className='flex flex-col items-center md:text-[1.1em]' onSubmit={createUser}>

      <BaseData setnewUser={setnewUser} />
      <LoginData setnewUser={setnewUser}/>
      <PersonalData setnewUser={setnewUser} />
      <AdditionalData setnewUser={setnewUser}/>
      <AboutMe setnewUser={setnewUser}/>
      <Suggetions />
      <div className='flex flex-col gap-4 border-orange-100 border-2 p-4'>
        <h2 className='font-bold text-[1.5em] text-brawn-950'>Record Video</h2>
        <label className='font-bold  bg-lime-50 mx-2 flex gap-1 items-center justify-center pl-2 flex-col p-4'>       
          <Video  setnewUser={setnewUser}/>
        </label>
      </div>


      <div className='flex justify-center gap-4 border-orange-100 border-2 p-4'>
        <button type='submit' className='btn bg-yellow-900 text-yellow-200 text-[1.2em]'>Sign up</button>
      </div>
    </form>
   </div>
  )
}

export default Sign