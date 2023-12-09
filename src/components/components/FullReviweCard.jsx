import React from 'react'
import RatingStars from './RatingStars'

function FullReviweCard({user}) {
  return (
    <div className="card w-full bg-orange-50 shadow-xl w-96 min-h-64">
        <div className="card-body">
            <div className='flex gap-4'>
                <figure className='w-12 h-12'>
                    <img className='w-full h-full rounded-full' src={user.photo} alt="photo" />
                </figure>
                <figcaption>
                    <p className='font-bold text-yellow-995'>{user.fname} {user.lname}</p>
                    <div className="rating">
                        <p className='mask mask-star-2 bg-orange-400 w-6 h-6'></p>
                        <RatingStars rating={user.rating} />
                    </div>
                </figcaption>
            </div>
            <div className="min-h-12">"{user.review}" I had a fantastic experience using "Grandparents on weekend". The interface is user-friendly, offering a wide range of services/products. Excellent customer service and a smooth transaction process. Highly recommended!'I had a fantastic experience using "Grandparents on weekend". The interface is user-friendly, offering a wide range of services/products. Excellent customer service and a smooth transaction process. Highly recommended!'</div>
        </div>
    </div>
  )
}

export default FullReviweCard