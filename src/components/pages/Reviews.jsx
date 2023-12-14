import React, { useState } from 'react'
import AddReviw from '../components/AddReviw'
import FullReviweCard from '../components/FullReviweCard'

function Reviews() {
  const user =  {
    userId: 123,
    fname: 'Edward',
    lname: "Ksija",
    photo: "https://ik.imagekit.io/gdvzxjp5x/parentsOnWeekend/photos/users/father.jpg",
    review: 'I had a fantastic experience using "Grandparents on weekend". The interface is user-friendly, offering a wide range of services/products. Excellent customer service and a smooth transaction process. Highly recommended!',
    rating: 5
}

  const [reviews, setReviews] = useState([user, user, user])

  return (
    <div className='flex flex-col justify-center items-center '>
       <h2 className='font-bold text-[2rem] text-green-900 pb-4'>All Reviws</h2>
      <AddReviw setReviews={setReviews}/>
      <div className='flex flex-col gap-8 p-12'>
        {reviews.map((el, ind) => <FullReviweCard key={ind} user={el} />)}
      </div>
    </div>
  )
}

export default Reviews