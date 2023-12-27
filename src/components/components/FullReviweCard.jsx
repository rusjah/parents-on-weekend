import React, { useEffect } from 'react'
import RatingStars from './RatingStars'
import { useAppContext } from '../../context/AppContext'


function FullReviweCard({review}) {

  const {deleteReview,currentUser} = useAppContext()

  useEffect(() => {
    console.log(currentUser, 'user');
    console.log(review, 'review');

  },[])

  return (
    <div className="card w-full bg-orange-50 shadow-xl w-96 min-h-64 relative">
        <div className="card-body">
            <div className='flex gap-4'>
                {currentUser.objectId === review.ownerId && <p onClick={() => {deleteReview(review)}} className='absolute font-bold right-10 top-10 cursor-pointer'>X</p>}

                <figure className='w-12 h-12'>
                  { review.usersId  && <img className='w-full h-full rounded-full' src={review.usersId.photo} alt="photo" />}
                </figure>
                <figcaption>
                    {review.usersId &&  <p className='font-bold text-yellow-995'>{review.usersId.fname} {review.usersId.lname}</p>}
                    <div className="rating">
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