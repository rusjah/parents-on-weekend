import React from 'react'

function SmallChatCard({chat}) {
   
  return (
    <div>
        <div className="card-body border-2 border-yellow-100">
            <div className='flex gap-4'>
                <figure className='w-8 h-8'>
                    <img className='w-full h-full rounded-full' src={chat.chatPhoto} alt="photo" />
                </figure>
                <figcaption>
                    <p className='font-bold text-yellow-995'>{chat.chatName}</p>
                </figcaption>
            </div>
            <div className="h-6 overflow-hidden truncate">"{chat.chatMsg}</div>
        </div>
    </div>
  )
}

export default SmallChatCard