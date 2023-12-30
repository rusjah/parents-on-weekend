import React, { useEffect } from 'react'
import data from '../../../data.json'
import { useAppContext } from '../../../context/AppContext';

function SmallChatCard({chat}) {
    // const {chatBrief, chatBriefOponent, getChatBrieefOpponent} = useAppContext()

    // const user = getChatBrieefOpponent()
    
    // function activate (e) {
    //     console.log(chatBriefOponent);
    // }

    useEffect(() => {
        console.log('chat from smal chat card', chat);
    },[])

  return (
    <div className="card-body border-2 border-yellow-100 rounded-full max-h-16 py-2">
        {/* {chatBriefOponent && <div className='flex max-h-full gap-4'>
            <figure className='w-8 h-8'>
                <img className='w-full h-full rounded-full' src={user.photo} alt="photo" />
            </figure>
            <figcaption>
                <p className='font-bold text-yellow-995'>{user.fname} {user.lname}</p>
                <p className="w-16 md:w-22 truncate">{}</p>
            </figcaption>
        </div>} */}
    </div>
  )
}

export default SmallChatCard 