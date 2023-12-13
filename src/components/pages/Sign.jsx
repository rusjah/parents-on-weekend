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


function Sign({setUsers, validationStaus, setvalidationStaus}) {
  const navigate = useNavigate()
  
  const [setUrl, setSetUrl] = useState()
  // const [birthday, setBirthday] = useState(new Date())

  const [role, setRole] = useState('')
  const [helpType, setHelpType] = useState('')
  const [postNumber, setPostNumber] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [phone, setPhone] = useState('')
  const [fname, setFname] = useState('')
  const [lname, setLname] = useState('')
  const [gender, setGender] = useState('')
  const [birthday, setBirthday] = useState(new Date())
  const [photo, setPhoto] = useState()
  const [state, setState] = useState('')
  const [aboutMe, setAboutMe] = useState('')
  

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

    const newUser = {
      id: 1,
      fname: fname,
      lname: lname,
      email: email,
      password: password,
      phone: phone,
      gender: gender,
      role: role,
      state: state,
      helpType: helpType,
      postNumber: postNumber,
      aboutMe: aboutMe,
      pets: pets,
      children: children,
      birthday: birthday,
      videoUrl: setUrl,
      photo: photo
    }
    
    // setUsers(i => [...i, newUser])
    setUsers(i => newUser)

    e.target.reset();

    console.log(newUser);
    setvalidationStaus(true)
    navigate('/profile')

  }

  // useEffect(() => {
  //   if (setvalidationStaus) {
  //     navigate('/profile')
  //   }
  // },[validationStaus])
  return (
    <div className='py-[10vh] w-full min-h-[66vh] flex flex-col items-center  bg-[#f0efeb]'>
     <h2 className='font-bold text-[2.5rem] text-green-900 pb-12'>Sign Up</h2>
    <form className='flex flex-col items-center md:text-[1.1em]' onSubmit={createUser}>

      <BaseData onChangeRole={setRole} onChangeHelpType={setHelpType} onChangePostNumber={setPostNumber} />
      <LoginData onChangeEmail={setEmail} onChangePassword={setPassword} onChangePhone={setPhone}/>
      <PersonalData onChangeFname={setFname} onChangeLname={setLname} onChangeGender={setGender} />
      <AdditionalData onChangeBirthDay={setBirthday} onChangePhoto={setPhoto} onChangeState={setState}/>
      <AboutMe onChangeAboutMe={setAboutMe}/>
      <Suggetions />
      
      <div className='flex flex-col gap-4 border-orange-100 border-2 p-4'>
        <h2 className='font-bold text-[1.5em] text-brawn-950'>Recourd Video</h2>
        <label className='font-bold  bg-lime-50 mx-2 flex gap-1 items-center justify-center pl-2 flex-col p-4'>       
          <Video  setSetUrl={setSetUrl}/>
          {console.log(setUrl)}
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