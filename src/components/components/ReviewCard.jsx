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
                    <img className='w-full h-full rounded-full' src={review.usersId.photo} alt="photo" />
                </figure>
                <figcaption>
                    <p className='font-bold text-yellow-995'>{review.usersId.fname} {review.usersId.lname}</p>
                    <div className="rating" onClick={starsGenerate}>
                        <p className='mask mask-star-2 bg-orange-400 w-6 h-6'></p>
                        <RatingStars rating={review.rating} />
                    </div>
                </figcaption>
            </div>
            <div className="h-32 overflow-hidden">"{review.content}" I had a fantastic experience using "Grandparents on weekend". The interface is user-friendly, offering a wide range of services/products. Excellent customer service and a smooth transaction process. Highly recommended!'I had a fantastic experience using "Grandparents on weekend". The interface is user-friendly, offering a wide range of services/products. Excellent customer service and a smooth transaction process. Highly recommended!'</div>
        </div>
    </div>
  )
}

export default ReviewCard