import React, { useEffect, useState } from 'react'
import CalendarB from '../components/CalendarB'
import PetsChekBox from '../components/PetsChekBox'
import data from '../../data.json'
import Video from '../components/video/Video'
import { useNavigate } from 'react-router-dom'
import BaseDate from '../components/signForm/BaseData'
import BaseData from '../components/signForm/BaseData'
import LoginData from '../components/signForm/LoginData'
import PersonalData from '../components/signForm/PersonalData'
import AdditionalData from '../components/signForm/AdditionalData'
import AboutMe from '../components/signForm/AboutMe'


function Sign({setUsers, validationStaus, setvalidationStaus}) {
  const navigate = useNavigate()

  const pets = data.options.patsType;
  const children = data.options.childrenYears;
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
  

  const [petsData, setPetsData] = useState({
    dog: false
  })

  

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
    
    setUsers(i => [...i, newUser])

    e.target.reset();

    // setvalidationStaus(true)
    // navigate('/profile')

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

      <div className='flex flex-col md:flex-row justify-center md:justify-between gap-10 border-orange-100 border-2 p-4'>
        <div className='flex flex-col gap-4'>
            <h2 className='font-bold text-[1.5em] text-brawn-950'>I have/like pats</h2>
            <div className='flex'>
              <PetsChekBox pet={pets[0]} type={'pets'}  setPetsData={setPetsData} />
              <PetsChekBox pet={pets[1]} type={'pets'} />
            </div>
            <div className='flex'>
              <PetsChekBox pet={pets[2]} type={'pets'}  />
              <PetsChekBox pet={pets[3]} type={'pets'}  />
            </div>
            <div className='flex'>
              <PetsChekBox pet={pets[4]} type={'pets'}  />
              <PetsChekBox pet={pets[5]} type={'pets'}  />
            </div>
            <div className='flex'>
              <PetsChekBox pet={pets[6]} type={'pets'}  />
              <PetsChekBox pet={pets[7]} type={'pets'}  />
            </div> 
        </div>

        <div className='flex flex-col gap-4'>
            <h2 className='font-bold text-[1.5em] text-brawn-950'>I have/like children:</h2>
            <div className='flex'>
              <PetsChekBox pet={children[0]} type={'child'} />
              <PetsChekBox pet={children[1]} type={'child'} />
            </div>
            <div className='flex'>
              <PetsChekBox pet={children[2]} type={'child'} />
              <PetsChekBox pet={children[3]} type={'child'} />
            </div>
            <div className='flex'>
              <PetsChekBox pet={children[4]} type={'child'} />
            </div>
        </div>
      </div> 
      
      <div className='flex flex-col gap-4 border-orange-100 border-2 p-4'>
        <h2 className='font-bold text-[1.5em] text-brawn-950'>Recourd Video</h2>
        <label className='font-bold  bg-lime-50 mx-2 flex gap-1 items-center justify-center pl-2 flex-col p-4'>       
          <Video setSetUrl={setSetUrl}/>
        </label>
      </div>

      <div className='flex justify-center gap-4 border-orange-100 border-2 p-4'>
        <button type='submit' className='btn bg-yellow-900 text-yellow-200 text-[1.2em]'>Sign up</button>
      </div>
    </form>
    {console.log(petsData)}
   </div>
  )
}

export default Sign