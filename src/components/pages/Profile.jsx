import React, { useState } from 'react'
import data from '../../data.json'
import { useNavigate } from 'react-router-dom';
import Modal from '../components/signForm/Modal';

function Profile({}) {
  const navigate = useNavigate()
  const [modalStatus, setModalStatus] = useState(false)
  const [modalContent, setModalContent] = useState('')
  
  const user = data.users[0]
  const photo = user.photo;


  const getAge = (date) => {
    const subDate =  new Date() -  new Date(date);
    const years = 365 * 24 * 60 * 60 * 1000;
    return Math.floor(subDate / years)
  }
  const age = getAge(user.birthday)


  function editProfile(type) {  
    setModalContent(i => type)
    setModalStatus(i => true)
  }

  function onClose() {
    setModalStatus(i => false);
  }
  
  return (
    <div className='flex flex-col items-center bg-amber-50 w-[full] min-h-full p-6 bg-gradient-to-r from-green-50 to-orange-50 relative'>
        <div className=''><h1 className='font-bold text-[2em] text-green-700 font-marhey'>My Profile</h1></div>
        <div className='relative w-full md:w-[60%]  flex flex-col md:flex-row gap-4 md:gap-20 justify-center items-center p-10 bg-white border-4 border-gradient-to-r from-[#181818] via-[#eee] to-[#181818 '>
          <p onClick={() => editProfile('main')} className='absolute top-3 right-3 md:right-10 font-bold text-green-900 text-[2em]'><ion-icon name="create-outline"></ion-icon></p>
          {/* <p onClick={() => editProfile('main')} className='absolute top-3 right-3 md:right-10 font-bold text-green-900 text-[2em]'><ion-icon name="create-outline"></ion-icon></p> */}
          {/* {modalStatus && <Modal modalContent={modalContent} onClose={onClose} />} */}
          <figure className='w-64 md:w-96 h-48 md:h-64 pt-4 md:pt-0 relative shadow-lg shadow-black-800/40'>
            {/* <p className='bg-[white] opacity-8 w-8 h-8 flex justify-center items-center rounded-full absolute top-1 left-1'><ion-icon name="add-circle-outline"></ion-icon></p> */}
            <img className='w-full h-full' src={photo} alt="photo" />
          </figure>
          <figcaption className='w-64 md:w-96 h-64 md:h-64 pt-4 md:pt-0 text-[1em] font-bold text-yellow-900 mt-[-4vh]'>
            <h2 className='font-bold text-[1.5em] text-lime-900 pb-4'>{user.fname} {user.lname}</h2> 
            <p><span className='text-green-950 decoration-solid'>Age:</span> {age}, {user.gender}</p>
            <p><span className='text-green-950 decoration-solid'>Email:</span> {user.email}</p>
            <p><span className='text-green-950 decoration-solid'>Post number:</span> {user.postNumber}</p>
            <p><span className='text-green-950 decoration-solid'>Role:</span> {user.role === 'grand' ? 'grandparent' : 'parent'}</p>
            <p><span className='text-green-950 decoration-solid'>Phone:</span> {user.phone}</p>
            <p><span className='text-green-950 decoration-solid'>It is possible:</span> {user.state === 'go' ? 'to go to you' : 'to stay at home'}</p>
            <p><span className='text-green-950 decoration-solid'>I like:</span> {user.helpType === 'patsChildren' ? 'pets and children' : user.helpType === 'pets' ? 'pets' : 'children'}</p>
          </figcaption>
        </div>
        
        <div className='mt-10 flex justify-center gap-6 w-full md:w-[60%] px-2 md:px-0 pb-10 bg-white border-4 border-gradient-to-r from-[#181818] via-[#eee] to-[#181818] relative'>
          <p className='absolute top-3 right-3 md:right-10 font-bold text-green-900 text-[2em]'><ion-icon name="create-outline"></ion-icon></p>
      
          <div className=' w-full md:w-[60%] h-full flex flex-col gap-1 justify-center items-center pt-10  font-roboto font-[450] text-justify'>
            <h2 className='font-bold text-[1.5em] text-lime-900 self-start'>About me</h2>
            <p className='font-merhey text-[1rem]'>
              "{user.aboutMe}"
            </p>
          </div>
        </div>
       
        {true && <div className='mt-10 p-10 flex justify-center gap-6 w-full md:w-[60%] relative  bg-white border-4 border-gradient-to-r from-[#181818] via-[#eee] to-[#181818]'>
        <p onClick={() => editProfile('video')} className='absolute top-3 right-3 md:right-10 font-bold text-green-900 text-[2em]'><ion-icon name="create-outline"></ion-icon></p>

          <div className=' w-[60%] h-full flex flex-col gap-1 justify-center items-center pt-1 md:pt-10  font-roboto font-[450] text-justify'>
            <h2 className='font-bold text-[1.5em] text-lime-900'>My video</h2>
            <p className='md:hidden block font-dancing text-[1.5rem]'>
               <iframe className='inline' width="200" height="200" src="https://www.youtube.com/embed/oa2jNw2JW_s" title="Cat and Dog Friendship - Dog and Cat Pure Love #short" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
            </p>
            <p className='md:block hidden font-dancing text-[1.5rem]'>
               <iframe className='inline' width="600" height="300" src="https://www.youtube.com/embed/oa2jNw2JW_s" title="Cat and Dog Friendship - Dog and Cat Pure Love #short" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
            </p>
          </div>
        </div>}

        <div className=' relative mt-10 w-full md:w-[60%] h-full flex flex-col gap-1 justify-center items-center p-10 font-roboto font-[450] text-justify bg-white border-4 border-gradient-to-r from-[#181818] via-[#eee] to-[#181818]'>
        <p onClick={() => editProfile('options')} className='absolute top-3 right-3 md:right-10 font-bold text-green-900 text-[2em]'><ion-icon name="create-outline"></ion-icon></p>
          
          <h2 className='font-bold text-[1.5em] text-lime-900 pb-4'>My options:</h2>
          <div className='w-full  flex flex-col md:flex-row justify-between relative'>

            <div className='shadow-lg hover:shadow-green-500 md:hover:shadow-xl md:hover:shadow-lime-900 p-4'>
              <p className='text-[1.5rem] text-lime-800 pb-4' >Pets:</p>
              <div className='w-[24vw] flex flex-wrap gap-4 justify-between'>
                {user.pets.length > 0 && user.pets.map((el, ind )=>
                  <p key={ind} className='flex gap-2 text-[1.3rem] justify-start items-center capitalize'><span className='font-bold text-[1.5em] text-green-900'><ion-icon name="checkmark-outline"></ion-icon></span> {el}</p>)}
              </div>
            </div>
          
            <div className='shadow-lg hover:shadow-green-500 md:hover:shadow-xl md:hover:shadow-orange-900 p-4'>
              <p className='text-[1.5rem] text-lime-800 flex flex-around pb-4' >Children:</p>
              <div className='w-[24vw] flex flex-wrap gap-4 justify-between'>
                  {user.children.length > 0 && user.children.map((el, ind) =>
                  <p key={ind} className='flex gap-2 text-[1.3rem] justify-start items-center capitalize'><span className='font-bold text-[1.5em] text-green-900'><ion-icon name="checkmark-outline"></ion-icon></span> {el}</p>)}
              </div>
            </div>

          </div>
        </div>
          {/* <button onClick={() => navigate('/edit')} className='btn bg-yellow-900 text-yellow-200 absolute right-20 top-4 text-[4em] h-16 rounded-full'><ion-icon name="add-circle-outline"></ion-icon></button> */}
    </div>
  )
}

export default Profile