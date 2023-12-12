import React, { useState } from 'react'
import PersonalData from './PersonalData'
import BaseData from './BaseData'
import LoginData from './LoginData'
import AdditionalData from './AdditionalData'
import AboutMe from './AboutMe'


function Modal({modalContent, onClose}) {
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

  return (
    <div className='z-10 fixed bg-amber-50 max-h-[60vh] top-[20vh] overflow-auto'>
        <div className='flex flex-col justify-center border-2 border-amber-800'>
          <h1 className='text-green-900 text-[2em] p-5'>Make change</h1>
           <div className={`${modalContent === 'base' ? 'flex' : 'none'}`}>
            <BaseData onChangeRole={setRole} onChangeHelpType={setHelpType} onChangePostNumber={setPostNumber} />
            <LoginData onChangeEmail={setEmail} onChangePassword={setPassword} onChangePhone={setPhone}/>
            <PersonalData onChangeFname={setFname} onChangeLname={setLname} onChangeGender={setGender} />
            <AdditionalData onChangeBirthDay={setBirthday} onChangePhoto={setPhoto} onChangeState={setState}/>
           </div>
           <div className={`${modalContent === 'aboutMe' ? 'flex' : 'none'}`}>
               <AboutMe onChangeAboutMe={setAboutMe}/>
           </div>
          <button className='w-12 h-12 bg-green-800 text-[white] m-4 self-end' onClick={onClose}>Ok</button>
        </div>

    </div>
  )
}

export default Modal