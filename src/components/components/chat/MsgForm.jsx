import React from 'react'
import { useAppContext } from '../../../context/AppContext'


function MsgForm({setMsgList}) {
  const {activeChat, sendMsg} = useAppContext()
  
    function sendHandler(e) {
      e.preventDefault()
      const msg = e.target.newMsg.value;
      const newMsg = {
        sendDate: new Date(),
        msg: msg,
        status: "send"                   
      }
      e.target.newMsg.value = ''
      sendMsg(newMsg)

      // setMsgList(i => [...i, newMsg])
    }
    
  return (
    <div className='w-[100%]'> 
        <form action="" className='w-[90%] md:w-[100%] relative' onSubmit={sendHandler}>
            <input type="text"name='newMsg' placeholder="Write message" className="input input-bordered input-warning h-[5vh] w-[100%]" />
            <button type='submit'className='absolute right-1 text-green-800 text-[2em]' ><ion-icon name="send-outline"></ion-icon></button>
        </form>
    </div>
  )
}

export default MsgForm