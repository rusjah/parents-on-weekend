import React, { useState } from 'react'
import PersonalData from './PersonalData'
import BaseData from './BaseData'
import LoginData from './LoginData'
import AdditionalData from './AdditionalData'
import AboutMe from './AboutMe'
import Video from '../video/Video'
import Record from '../video/Record'


function Modal({modalContent, onClose, onSaveChanges}) {
  
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

  const [video, setVideo] = useState()



  return (
    <div className='z-10 fixed bg-amber-50  w-[60vw] max-h-[86vh] top-[12vh] overflow-auto'>
        <div className='flex flex-col justify-center border-2 border-amber-800'>
          <h1 className='text-green-900 text-[2em] p-5'>Make change</h1>
           <div className={`${modalContent === 'base' ? 'flex' : 'hidden'} flex flex-col`}>
           
            <BaseData onChangeRole={setRole} onChangeHelpType={setHelpType} onChangePostNumber={setPostNumber} />
            <LoginData onChangeEmail={setEmail} onChangePassword={setPassword} onChangePhone={setPhone}/>
            <PersonalData onChangeFname={setFname} onChangeLname={setLname} onChangeGender={setGender} />
            <AdditionalData onChangeBirthDay={setBirthday} onChangePhoto={setPhoto} onChangeState={setState}/>
           </div>
           <div className={`${modalContent === 'aboutMe' ? 'flex' : 'hidden'}`}>
               <AboutMe onChangeAboutMe={setAboutMe} workState='edit'/>
           </div>
           <div className={`${modalContent === 'video' ? 'flex' : 'hidden'} flex flex-col items-center`}>
                  <iframe className='inline pb-4' width="600" height="300" src="https://www.youtube.com/embed/oa2jNw2JW_s" title="Cat and Dog Friendship - Dog and Cat Pure Love #short" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                  <Record  setSetUrl={setVideo}/>
           </div>
          <div className='flex justify-end w-full'>
            <button className='w-16 h-12 bg-green-800 text-[white] m-4 rounded-[4px]' onClick={onSaveChanges}>Ok</button>
            <button className='w-16 h-12 bg-green-800 text-[white] m-4 rounded-[4px]' onClick={onClose}>Censel</button>
          </div>
        </div>
    </div>
  )
}

export default Modal