import React, { useState } from 'react'
import PersonalData from './PersonalData'
import BaseData from './BaseData'
import LoginData from './LoginData'
import AdditionalData from './AdditionalData'
import AboutMe from './AboutMe'
import Video from '../video/Video'
import Record from '../video/Record'
import Suggetions from './Suggetions'


function Modal({modalContent, onClose, onSaveChanges, setUpdatedUser}) {
  
  return (
    <div className='z-10 fixed bg-amber-50 w-[90vw] md:w-[60vw] max-h-[86vh] top-[12vh] overflow-auto'>
        <div className='flex flex-col justify-center border-2 border-amber-800'>
          <h1 className='text-green-900 text-[2em] p-5'>Make change</h1>
           <div className={`${modalContent === 'base' ? 'flex' : 'hidden'} flex flex-col`}>
           
            <BaseData setnewUser={setUpdatedUser}  edit={true}/>
            <LoginData setnewUser={setUpdatedUser}  edit={true}/>
            <PersonalData setnewUser={setUpdatedUser}  edit={true}/>
            <AdditionalData setnewUser={setUpdatedUser} edit={true}/>
           </div>
           <div className={`${modalContent === 'aboutMe' ? 'flex' : 'hidden'}`}>
               <AboutMe setnewUser={setUpdatedUser}/>
           </div>
           <div className={`${modalContent === 'video' ? 'flex' : 'hidden'} flex flex-col items-center`}>
                  <iframe className='inline pb-4' width="600" height="300" src="https://www.youtube.com/embed/oa2jNw2JW_s" title="Cat and Dog Friendship - Dog and Cat Pure Love #short" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                  <Record  setnewUser={setUpdatedUser} edit={true}/>
           </div>
           <div className={`${modalContent === 'options' ? 'flex' : 'hidden'}`}>
               <Suggetions setnewUser={setUpdatedUser}  edit={true}/>
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