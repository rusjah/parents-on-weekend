import React from 'react'
import { useNavigate } from 'react-router-dom'


function UserSmalCard({user}) {
    const navigate = useNavigate()

    //send as parametr user id
    function navigateToProfile() {
        navigate('/profile')
    }
  return (
    <div className='w-[80%]  bg-white-100 border-amber-900 border-2 rounded-[20px] p-6 flex flex-col'>
        <div className='flex gap-4'>
            <img className='w-12 h-12 rounded-full border-2 border-[white]' src={user.photo} alt="" />
            <div className='flex flex-col font-bold '>
                <span>{user.fname} {user.lname}</span>
                <span>{22} {user.gender}</span>
            </div>
        </div>
         <div className='h-[6vh] overflow-hidden'>{user.aboutMe}</div>
        <div className='justify-self-end self-end pr-10'>
            <button onClick={navigateToProfile} className='text-green-800 font-bold'>Mehr</button>
        </div>

    </div>
  )
}

export default UserSmalCard