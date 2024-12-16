import React from 'react'
import RatingStars from './RatingStars';

function ReviewCard({review}) {
  

    function starsGenerate(e) {
        // console.log(e.target);
    }
  return (
    <div className="card w-96 bg-orange-50 shadow-xl w-96 h-64">
        <div className="card-body">
            <div className='flex gap-4'>
                <figure className='w-12 h-12'>
                { review.usersId  &&  <img className='w-full h-full rounded-full' src={review.usersId.photo} alt="photo" />}
                </figure>
                <figcaption>
                {review.usersId &&   <p className='font-bold text-yellow-995'>{review.usersId.fname} {review.usersId.lname}</p>}
                    <div className="rating" onClick={starsGenerate}>
                        {review &&  <RatingStars rating={review.rating} />}
                    </div>
                </figcaption>
            </div>
            {review &&  <div className="h-32 overflow-hidden">{review.content}</div>}
        </div>
    </div>
  )
}

export default ReviewCard