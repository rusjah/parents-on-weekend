import React, { useEffect, useState } from 'react'
import AddReviw from '../components/AddReviw'
import FullReviweCard from '../components/FullReviweCard'
import { useAppContext } from '../../context/AppContext'

function Reviews() {

  const {reviews, getAllReviws, filteredReviw, togleReview, filterReviw} = useAppContext()

  useEffect(() => {
    filterReviw()
    getAllReviws()
  }, [])
  return (
    <div className='flex flex-col justify-center items-center px-20 relative'>
      <p onClick={filterReviw} className={`cursor-pointer absolute top-36 right-4 md:right-12 md:top-32 lg:right-40 lg:top-32  text-[10px] md:text-[16px] p-2  border-2 border-yellow-800 ${togleReview ? ' bg-yellow-900' : ' bg-green-900'} text-[white] rounded-[20px]  font-bold `}>{togleReview ? 'My Reviews' : 'All Reviews'}</p>
       <h2 className='font-bold text-[2rem] text-green-900 pb-4'>All Reviws</h2>
      <AddReviw />
      <div className='flex flex-col gap-8 p-12'>
        {togleReview ?  reviews.length > 0 && reviews.reverse().map((el, ind) => <FullReviweCard key={ind} review={el} />  ) : filteredReviw.length > 0 && filteredReviw.map((el, ind) => <FullReviweCard key={ind} review={el} />) }
       
      </div>
    </div>
  )
}

export default Reviews