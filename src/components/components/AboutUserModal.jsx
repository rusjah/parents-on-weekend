import React from 'react'
import { useAppContext } from '../../context/AppContext'
import { useNavigate } from 'react-router-dom'
import Backendless from 'backendless'

function AboutUserModal() {
    const navigate = useNavigate()
    const {closeUserModal, usersModalContent, getAge, getOptions, toglePlay, videoRef, setRecieverID} = useAppContext()
    const age = usersModalContent.birthday ? getAge(usersModalContent.birthday) : 1
    const pets = getOptions(usersModalContent.optionsId).pets
    const children = getOptions(usersModalContent.optionsId).children

   async function goToChat() {
    try {
      Backendless.Data.of('chanels').rt();
      const user = await Backendless.UserService.getCurrentUser ();
      const chatsName = [user.objectId.slice(0,21), usersModalContent.objectId.slice(0, 21)].join(',');
      const chat = { name: chatsName }
      const addingChat = await Backendless.Data.of('chanels').save(chat)

   
      const chatUrl = {objectId: addingChat.objectId};
      const senderRel = {objectId: user.objectId};
      const reciverRel = {objectId: usersModalContent.objectId}

      const relation = await Backendless.Data
        .of ('chanels')
        .addRelation (chatUrl, 'parts', [senderRel, reciverRel]);

    } catch(e) {
      console.log('from about users modal', e)
    }
    
        // setRecieverID(i => usersModalContent.objectId)
        closeUserModal()
        navigate('/chat')
    }


  return (
    <div className='z-10 fixed bg-amber-50 w-[80vw]  max-h-[86vh] top-[12vh] overflow-auto flex flex-col items-center'>
        <div className='flex flex-col items-center w-full  border-2 border-amber-800'>
          <h1 className='text-amber-900 text-[2em] p-5 font-bold'>{usersModalContent.fname} {usersModalContent.lname}</h1>
            <figure className='w-64 md:w-96 h-48 md:h-64 pt-4 md:pt-0 relative shadow-lg shadow-black-800/40'>
                <img className='w-full h-full' src={usersModalContent.photo} alt="photo" />
            </figure>
            <figcaption className='w-64 md:w-96 h-64 md:h-64 pt-4 md:pt-0 text-[1em] font-bold text-yellow-900 pt-[4vh]'>
                <p><span className='text-green-950 decoration-solid'>Age:</span> {age > 18 ? age : '-//-'}, {usersModalContent.gender}</p>
                <p><span className='text-green-950 decoration-solid'>Email:</span> {usersModalContent.email}</p>
                <p><span className='text-green-950 decoration-solid'>Post number:</span> {usersModalContent.postNumber}</p>
                <p><span className='text-green-950 decoration-solid'>Phone:</span> {usersModalContent?.phone}</p>
                <p><span className='text-green-950 decoration-solid'>It is possible:</span> {usersModalContent.state === 'go' ? 'to go to you' : 'to stay at home'}</p>
                <p><span className='text-green-950 decoration-solid'>I like:</span> {usersModalContent.helpType === 'patsChildren' ? 'pets and children' : usersModalContent?.helpType === 'pets' ? 'pets' : 'children'}</p>
          </figcaption> 

          <div className=' w-64 md:w-96  h-full justify-center font-roboto font-[450] text-justify'>
            <p className='font-merhey text-[1rem]'>
              "{usersModalContent.aboutMe}"
            </p>
          </div>

          <div className=' w-[60%] h-full flex flex-col gap-1 justify-center items-center pt-10  font-roboto font-[450] text-justify'>
            <video ref={videoRef} controls width={500} height={200}>
                <source src={`${usersModalContent.video}`}/>  
            </video>
            <button onClick={toglePlay} className='w-12 h-12 rounted-full bg-green-50' ></button>
          </div>

         <div className='flex'>
         <div className='shadow-lg hover:shadow-green-500 md:hover:shadow-xl md:hover:shadow-lime-900 p-4'>
            <p className='text-[1.5rem] text-lime-800 pb-4' >Pets:</p>
            <div className='w-[24vw] flex flex-wrap gap-4 justify-between'>
                {pets && pets.map((el, ind )=>
                <p key={ind} className='capitalize'><span className='font-bold text-[1.5em] text-green-900'><ion-icon name="checkmark-outline"></ion-icon></span> {el}</p>)}
            </div>
          </div>

          <div className='shadow-lg hover:shadow-green-500 md:hover:shadow-xl md:hover:shadow-orange-900 p-4'>
            <p className='text-[1.5rem] text-lime-800 flex flex-around pb-4' >Children:</p>
            <div className='w-[24vw] flex flex-wrap gap-4 justify-between'>
                {children && children.map((el, ind) =>
                <p key={ind} className='capitalize'><span className='font-bold text-[1.5em] text-green-900'><ion-icon name="checkmark-outline"></ion-icon></span> {el}</p>)}
            </div>
          </div>
         </div>

        </div>
        
        <div className='p-4 flex justify-around w-full'> 
            <p onClick={goToChat} className='w-20 border-bgreen-800 border-2 text-center'>chat</p>
            <p onClick={closeUserModal} className='w-20 border-bgreen-800 border-2 text-center'>close</p>
        </div>
    </div>
  )
}

export default AboutUserModal