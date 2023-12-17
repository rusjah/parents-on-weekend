import React, { useEffect, useState } from 'react'
import AddReviw from '../components/AddReviw'
import FullReviweCard from '../components/FullReviweCard'
import { useAppContext } from '../../context/AppContext'

function Reviews() {

  const {reviews, getAllReviws} = useAppContext()

  useEffect(() => {
    getAllReviws()
  }, [])
  return (
    <div className='flex flex-col justify-center items-center px-20'>
       <h2 className='font-bold text-[2rem] text-green-900 pb-4'>All Reviws</h2>
      <AddReviw />
      <div className='flex flex-col gap-8 p-12'>
        {reviews.length > 0 && reviews.map((el, ind) => <FullReviweCard key={ind} review={el} />  )}
      </div>
    </div>
  )
}

export default Reviews