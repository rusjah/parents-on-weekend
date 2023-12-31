import React from 'react'
import data from '../../../data.json'

function SmallChatCard({chatElem, setAktiveChat}) {
    const msg = data.msgList.find(el => el.msgId === chatElem.msgId)
    const myId = data.myId;
    const userId = myId === msg.senderId ? msg.recieverId : msg.senderId;
    const user = data.users.find(el => el.id === userId)

  return (
    <div onClick={(e) => setAktiveChat(chatElem) } className="card-body border-2 border-yellow-100 rounded-full max-h-16 py-2">
        <div className='flex max-h-full gap-4'>
            <figure className='w-8 h-8'>
                <img className='w-full h-full rounded-full' src={user.photo} alt="photo" />
            </figure>
            <figcaption>
                <p className='font-bold text-yellow-995'>{user.fname} {user.lname}</p>
                <p className="w-16 md:w-22 truncate">{msg.msg}</p>
            </figcaption>
        </div>
    </div>
  )
}

export default SmallChatCard 