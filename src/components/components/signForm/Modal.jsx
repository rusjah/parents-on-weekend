import React, { useState } from 'react'
import PersonalData from './PersonalData'
import BaseData from './BaseData'
import LoginData from './LoginData'
import AdditionalData from './AdditionalData'
import AboutMe from './AboutMe'
import Video from '../video/Video'
import Record from '../video/Record'
import Suggetions from './Suggetions'
import { useAppContext } from '../../../context/AppContext'


function Modal() {
 const {editModalContent, closeEditModal, currentUser, toglePlay, videoRef, updateUser} = useAppContext()
 const [updatingData, setUpdatingData] = useState({})


 const children = []
 const pets = []
 function suggeshenHendler(e) {
  for(let i = 0; i < e.target.pets.length; i++) {
    const checkedPet = e.target.pets[i];
    if (checkedPet.checked) {
      pets.push(checkedPet.value)
    }
  }

  for(let i = 0; i < e.target.child.length; i++) {
    const checkedCild = e.target.child[i];
    if (checkedCild.checked) {
      children.push(checkedCild.value)
    }
  }

 }
  
  return (
    <div className='z-10 fixed bg-amber-50 w-[90vw] md:w-[60vw] max-h-[86vh] top-[12vh] overflow-auto'>
        <div className='flex flex-col justify-center border-2 border-amber-800'>
          <h1 className='text-green-900 text-[2em] p-5'>Make change</h1>
           <div className={`${editModalContent === 'base' ? 'flex' : 'hidden'} flex flex-col`}>          
            <BaseData  edit={true} setUpdatingData={setUpdatingData}/>
            <LoginData  edit={true} setUpdatingData={setUpdatingData}/>
            <PersonalData  edit={true} setUpdatingData={setUpdatingData}/>
            <LoginData edit={true} setUpdatingData={setUpdatingData} />
            <AdditionalData edit={true} setUpdatingData={setUpdatingData}/>
           </div>
           <div className={`${editModalContent === 'aboutMe' ? 'flex flex-col' : 'hidden'}`}>
            <form action="">
               <AboutMe setUpdatingData={setUpdatingData} edit={true}/>
            </form>
           </div>
           <div className={`${editModalContent === 'video' ? 'flex' : 'hidden'} flex flex-col items-center`}>
                <div>
                    <video ref={videoRef} controls width={300} height={200}>
                      <source src={`${currentUser.video}`}/>  
                      </video>
                    <button onClick={toglePlay} className='w-12 h-12 rounted-full bg-green-50' ></button>
                </div>
               <Record  edit={true} setUpdatingData={setUpdatingData}/>
           </div>
              
           <div className={`${editModalContent === 'options' ? 'flex' : 'hidden'}`}>
            <form action="">
            </form>
               <Suggetions  edit={true} />
           </div>

          <div className='flex justify-end w-full'>
            <button onClick={() => updateUser(updatingData,  {pets:pets, children:children})} className='w-16 h-12 bg-green-800 text-[white] m-4 rounded-[4px]' >Ok</button>
            <button onClick={() => closeEditModal()} className='w-16 h-12 bg-green-800 text-[white] m-4 rounded-[4px]'>Censel</button>
          </div>
        </div>
    </div>
  )
}

export default Modal