import React from 'react'
import data from '../../../data.json'

function SmallChatCard({msgId, aktiveteChatFunc}) {
    const msg = data.msgList.find(el => el.msgId === msgId)
    const myId = data.myId;
    const userId = myId === msg.senderId ? msg.recieverId : msg.senderId;
    const user = data.users.find(el => el.userId === userId)

  return (
    <div onClick={aktiveteChatFunc} className="card-body border-2 border-yellow-100 rounded-full max-h-32">
        <div className='flex gap-4'>
            <figure className='w-8 h-8'>
                <img className='w-full h-full rounded-full' src={user.photo} alt="photo" />
            </figure>
            <figcaption>
                <p className='font-bold text-yellow-995'>{user.fname} {user.lname}</p>
            </figcaption>
        </div>
        <div className="h-6 overflow-hidden truncate">{msg.msg}</div>
    </div>
  )
}

export default SmallChatCard