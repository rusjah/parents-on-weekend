import React from 'react'
import AddReviw from '../components/AddReviw'
import FullReviweCard from '../components/FullReviweCard'

function Reviews() {
  const user =  {
    fname: 'Edward',
    lname: "Ksija",
    photo: "https://pivotalmist.backendless.app/api/files/photos/users/father.jpg",
    reviw: 'I had a fantastic experience using "Grandparents on weekend". The interface is user-friendly, offering a wide range of services/products. Excellent customer service and a smooth transaction process. Highly recommended!',
    rating: 5
}

  return (
    <div className='flex flex-col justify-center items-center '>
       <h2 className='font-bold text-[2rem] text-green-900 pb-4'>All Reviws</h2>
      <AddReviw />
      <div className='flex flex-col gap-8 p-12'>
        <FullReviweCard user={user} />
        <FullReviweCard user={user} />
        <FullReviweCard user={user} />
      </div>
    </div>
  )
}

export default Reviews