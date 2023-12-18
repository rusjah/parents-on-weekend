import React from 'react'
import RatingStars from './RatingStars'

function FullReviweCard({review}) {
  return (
    <div className="card w-full bg-orange-50 shadow-xl w-96 min-h-64">
        <div className="card-body">
            <div className='flex gap-4'>
                <figure className='w-12 h-12'>
                  { review.usersId && <img className='w-full h-full rounded-full' src={review.usersId.photo} alt="photo" />}
                </figure>
                <figcaption>
                    {review.usersId &&  <p className='font-bold text-yellow-995'>{review.usersId.fname} {review.usersId.lname}</p>}
                    <div className="rating">
                        <p className='mask mask-star-2 bg-orange-400 w-6 h-6'></p>
                        <RatingStars rating={review.rating} />
                    </div>
                </figcaption>
            </div>
            <div className="min-h-12">{review.content}</div>
        </div>
    </div>
  )
}

export default FullReviweCard