import React from 'react'
import { useAppContext } from '../../../context/AppContext'
import Backendless from 'backendless'


function MsgForm({setFlagMsg, flagMsg}) {

  const {activeChat, sendMsg} = useAppContext()
  
    async function sendHandler(e) {
      e.preventDefault()
      const msg = e.target.newMsg.value;
      const newMsg = {
        sendDate: new Date(),
        msg: msg,
        status: "send"  ,
        chat: activeChat.name                 
      }
      e.target.newMsg.value = ''
      
      const user = await Backendless.UserService.getCurrentUser()
      newMsg.chat = activeChat.name
      newMsg.recieverId = activeChat.parts.filter(el => el.objectId !== user.objectId)
      newMsg.senderId = user.objectId
      sendMsg(newMsg)
    }
    
  return (
    <div className='w-[100%]'> 
        <form action="" className='w-[90%] md:w-[100%] relative' onSubmit={sendHandler}>
          <input readOnly={activeChat ? false : true} type="text"name='newMsg' placeholder="Write message" className="input input-bordered input-warning h-[5vh] w-[100%]" />
            <button type='submit'className='absolute right-1 text-green-800 text-[2em]' ><ion-icon name="send-outline"></ion-icon></button>
        </form>
    </div>
  )
}

export default MsgForm