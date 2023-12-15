import React, { useEffect, useState } from 'react'
import data from '../../data.json'
import { useNavigate, useLocation } from 'react-router-dom';
import Modal from '../components/signForm/Modal';
import { useAppContext } from '../../context/AppContext';
import Backendless from 'backendless';
import {AVATAR,PETS, CHILDREN} from '../../data/Data'

function Profile({owner='me'}) {
  const navigate = useNavigate()
  
  // const registratedUser = location.state.currentUser;
  const { currentUser, getAge, getOptions, userId} = useAppContext()
  
  // const currentUser = getUser();

  console.log(currentUser, 'prof');
  

  const [modalStatus, setModalStatus] = useState(false)
  const [modalContent, setModalContent] = useState('')
  const [updatedUser, setUpdatedUser] = useState({})

  const age = currentUser?.birthday ? getAge(currentUser.birthday) : 1
  const pets = getOptions(currentUser?.optionsId).pets
  const children = getOptions(currentUser?.optionsId).children


  function editProfile(type) { 
    setModalContent(i => type)
    setModalStatus(i => true)
  }

  function onSaveChanges() {
    setModalStatus(i => false);
    setModalContent(i => '')
  }

  function onClose() {
    setModalStatus(i => false);
    setModalContent(i => '')
  }

  return (
    <div className='flex flex-col items-center bg-amber-50 w-[full] min-h-full p-6 bg-gradient-to-r from-green-50 to-orange-50 relative'>
        <div className=''><h1 className='font-bold text-[2em] text-green-700 font-marhey'>My Profile</h1></div>
     <div className='relative w-full md:w-[60%]  flex flex-col lg:flex-row gap-4 md:gap-20 justify-center items-center p-10 md:pt-14  bg-white border-4 border-gradient-to-r from-[#181818] via-[#eee] to-[#181818 '>
         { owner === 'me' && <p onClick={() => editProfile('base')} className='absolute top-3 right-3 md:right-10 font-bold text-green-900 text-[2em]'><ion-icon name="create-outline"></ion-icon></p> }
          {/* <p onClick={() => editProfile('main')} className='absolute top-3 right-3 md:right-10 font-bold text-green-900 text-[2em]'><ion-icon name="create-outline"></ion-icon></p> */}
          <figure className='w-64 md:w-96 h-48 md:h-64 pt-4 md:pt-0 relative shadow-lg shadow-black-800/40'>
            {/* <p className='bg-[white] opacity-8 w-8 h-8 flex justify-center items-center rounded-full absolute top-1 left-1'><ion-icon name="add-circle-outline"></ion-icon></p> */}
            <img className='w-full h-full' src={currentUser.photo} alt="photo" />
          </figure>
          <figcaption className='w-64 md:w-96 h-64 md:h-64 pt-4 md:pt-0 text-[1em] font-bold text-yellow-900 mt-[-4vh]'>
            <h2 className='font-bold text-[1.5em] text-lime-900 pb-4'>{currentUser?.fname} {currentUser?.lname}</h2> 
            <p><span className='text-green-950 decoration-solid'>Age:</span> {age > 18 ? age : '-//-'}, {currentUser?.gender}</p>
            <p><span className='text-green-950 decoration-solid'>Email:</span> {currentUser?.email}</p>
            <p><span className='text-green-950 decoration-solid'>Post number:</span> {currentUser?.postNumber}</p>
            <p><span className='text-green-950 decoration-solid'>Role:</span> {currentUser?.role === 'grand' ? 'grandparent' : 'parent'}</p>
            <p><span className='text-green-950 decoration-solid'>Phone:</span> {currentUser?.phone}</p>
            <p><span className='text-green-950 decoration-solid'>It is possible:</span> {currentUser?.state === 'go' ? 'to go to you' : 'to stay at home'}</p>
            <p><span className='text-green-950 decoration-solid'>I like:</span> {currentUser?.helpType === 'patsChildren' ? 'pets and children' : currentUser?.helpType === 'pets' ? 'pets' : 'children'}</p>
          </figcaption>
        </div>
        
        <div className='mt-10 flex justify-center gap-6 w-full md:w-[60%] px-2 md:px-0 pb-10 bg-white border-4 border-gradient-to-r from-[#181818] via-[#eee] to-[#181818] relative'>
        { owner === 'me' && <p onClick={() => editProfile('aboutMe')} className='absolute top-3 right-3 md:right-10 font-bold text-green-900 text-[2em]'><ion-icon name="create-outline"></ion-icon></p> }
      
          <div className=' w-full md:w-[60%] h-full flex flex-col gap-1 justify-center items-center pt-10  font-roboto font-[450] text-justify'>
            <h2 className='font-bold text-[1.5em] text-lime-900 self-start'>About me</h2>
            <p className='font-merhey text-[1rem]'>
              "{currentUser?.aboutMe}"
            </p>
          </div>
        </div>

        {<div className='mt-10 p-10 flex justify-center gap-6 w-full md:w-[60%] relative  bg-white border-4 border-gradient-to-r from-[#181818] via-[#eee] to-[#181818]'>
        { owner === 'me' && <p onClick={() => editProfile('video')} className='absolute top-3 right-3 md:right-10 font-bold text-green-900 text-[2em]'><ion-icon name="create-outline"></ion-icon></p> }

          <div className=' w-[60%] h-full flex flex-col gap-1 justify-center items-center pt-1 md:pt-10  font-roboto font-[450] text-justify'>
            <h2 className='font-bold text-[1.5em] text-lime-900'>My video</h2>
            {/* <p className='md:hidden block font-dancing text-[1.5rem]'>
               <iframe className='inline' width="200" height="200" src={currentUser?.video} title="Cat and Dog Friendship - Dog and Cat Pure Love #short" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
            </p>
            <p className='md:block hidden font-dancing text-[1.5rem]'>
              <iframe className='inline' width="600" height="300" src={currentUser?.video} title="Cat and Dog Friendship - Dog and Cat Pure Love #short" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
            </p> */}
            <p className='md:block hidden font-dancing text-[1.5rem]'>
                  {currentUser > 0 &&  <video src={currentUser.video} onClick={e => e.target.play()}></video>}
            </p>
          </div>
        </div>}

        <div className=' relative mt-10 w-full md:w-[60%] h-full flex flex-col gap-1 justify-center items-center p-10 font-roboto font-[450] text-justify bg-white border-4 border-gradient-to-r from-[#181818] via-[#eee] to-[#181818]'>
        { owner === 'me' && <p onClick={() => editProfile('options')} className='absolute top-3 right-3 md:right-10 font-bold text-green-900 text-[2em]'><ion-icon name="create-outline"></ion-icon></p> }
          
          <h2 className='font-bold text-[1.5em] text-lime-900 pb-4'>My options:</h2>
          <div className='w-full  flex flex-col lg:flex-row justify-between relative'>

            <div className='shadow-lg hover:shadow-green-500 md:hover:shadow-xl md:hover:shadow-lime-900 p-4'>
              <p className='text-[1.5rem] text-lime-800 pb-4' >Pets:</p>
                <div className='w-[24vw] flex flex-wrap gap-4 justify-between'>
                  {pets?.length > 0 && pets?.map((el, ind )=>
                    <p key={ind} className='flex gap-2 text-[1.3rem] justify-start items-center capitalize'><span className='font-bold text-[1.5em] text-green-900'><ion-icon name="checkmark-outline"></ion-icon></span> {el}</p>)}
                </div>
              </div>
            
              <div className='shadow-lg hover:shadow-green-500 md:hover:shadow-xl md:hover:shadow-orange-900 p-4'>
                <p className='text-[1.5rem] text-lime-800 flex flex-around pb-4' >Children:</p>
                <div className='w-[24vw] flex flex-wrap gap-4 justify-between'>
                    {children?.length > 0 && children?.map((el, ind) =>
                    <p key={ind} className='flex gap-2 text-[1.3rem] justify-start items-center capitalize'><span className='font-bold text-[1.5em] text-green-900'><ion-icon name="checkmark-outline"></ion-icon></span> {el}</p>)}
                </div>
              </div>


{console.log(updatedUser)}
            </div>
          </div>

        
        {modalStatus && <Modal modalContent={modalContent} onClose={onClose} onSaveChanges={onSaveChanges} setUpdatedUser={setUpdatedUser}/>}
          {/* <button onClick={() => navigate('/edit')} className='btn bg-yellow-900 text-yellow-200 absolute right-20 top-4 text-[4em] h-16 rounded-full'><ion-icon name="add-circle-outline"></ion-icon></button> */}
    </div>
  )
}

export default Profile