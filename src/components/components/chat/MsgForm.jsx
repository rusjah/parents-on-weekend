import React from 'react'
import { useAppContext } from '../../../context/AppContext'
import Backendless from 'backendless'
import { act } from 'react-dom/test-utils'


function MsgForm({setMsgList}) {

  const {activeChat, sendMsg, setNewMsg,setChatMessages, setActiveChat, msgLen, setMsgLen} = useAppContext()
  
    async function sendHandler(e) {
      console.log('msg length: ', msgLen);
      e.preventDefault()
      setNewMsg(i => false)
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
      setMsgLen(i => i+1)

      // const chanelName = [activeChat.parts[0].objectId.slice(0,21), 
      //                     activeChat.parts[0].objectId.slice(0,21)].sort().join()

      // await Backendless.Messaging.publish( chanelName, newMsg )
      // setChatMessages(i => [...i, newMsg])
      // setNewMsg(i => true)
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