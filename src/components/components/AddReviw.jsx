import React from 'react'
import { useAppContext } from '../../context/AppContext'

function AddReviw() {

    const {saveReview} = useAppContext()
    
    function sendReview(e) {
        e.preventDefault()
        const stars = Array.from(e.target.rating).find(radio => radio.checked);  
        const review = {
            content: e.target.newReviwe.value,
            rating: Number(stars.value)
        }
        e.target.newReviwe.value = ''

        saveReview(review)
    }

  return (
    <div>
        <div className="collapse bg-base-200">
            <input type="checkbox" className="peer" /> 
            <div className="w-[60vw] collapse-title bg-yellow-100 text-black font-bold peer-checked:bg-orange-50 peer-checked:text-black">
            Add new ToDo to my task
            </div>
            <div className=" w-[60vw] collapse-content bg-yellow-100 text-black peer-checked:bg-orange-50 peer-checked:text-black"> 
                
                <form action="" className='w-[100%] relative' onSubmit={sendReview}>
                <div className="rating">
                    <input type="radio" name="rating" value={1} className="mask mask-star-2 bg-orange-400" defaultChecked/>
                    <input type="radio" name="rating" value={2} className="mask mask-star-2 bg-orange-400" />
                    <input type="radio" name="rating" value={3} className="mask mask-star-2 bg-orange-400" />
                    <input type="radio" name="rating" value={4} className="mask mask-star-2 bg-orange-400" />
                    <input type="radio" name="rating" value={5} className="mask mask-star-2 bg-orange-400" />
                </div>
                    <textarea name='newReviwe' style={{scrollbarWidth: 'none'}} className="textarea textarea-warning h-[12vh] w-[100%] " placeholder="Write message"></textarea>
                    <button type='submit'className='absolute right-1 bottom-1 text-green-800 text-[2em]' ><ion-icon name="send-outline"></ion-icon></button>
                </form>
            </div>
        </div>

    </div>

  )
}

export default AddReviw

 