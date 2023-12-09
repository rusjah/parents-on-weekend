import React from 'react'
import AddReviw from '../components/AddReviw'

function Reviews() {
  return (
    <div className='flex flex-col justify-center items-center '>
       <h2 className='font-bold text-[2rem] text-green-900 pb-4'>All Reviws</h2>
      <AddReviw />
      
    </div>
  )
}

export default Reviews