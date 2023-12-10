import React from 'react'
import data from '../../data.json'

function Profile() {
  const user = data.users[0]
  
  return (
    <div className='flex flex-col items-center bg-green-50 w-full min-h-full p-4'>
        <h1 className='font-bold text-[2em] text-green-700 font-dancing'>My Profile</h1>
        <div className='w-full h-full '>
          <figure>
            {console.log('')}
          </figure>
        </div>
    </div>
  )
}

export default Profile