import React, { useEffect, useState } from 'react'

function RatingStars({rating}) {
    const [starsList, setStarsList] = useState([])
    useEffect(() => {
        setStarsList(i => [])
        for (let i = 0; i < rating; i++) {
            setStarsList(i =>[...i, 1])
        }
    },[]) 

  return (
    <div className="rating">
       {starsList.map((el, id) => <p key={id} className='mask mask-star-2 bg-orange-400 w-6 h-6'></p>)}
    </div>
  )
}

export default RatingStars