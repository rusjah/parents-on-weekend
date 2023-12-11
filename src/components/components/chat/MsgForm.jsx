import React from 'react'

function MsgForm({setMsgList, aktiveChat}) {
    function sendMsg(e) {
      e.preventDefault()
      const newMsg = {
        sgId: "220",
        senderId: "1",
        recieverId: "2",
        date: "Mar 12 2012 10:00:00 AM",
        chatId: aktiveChat,
        msg: "New message in this chat",
        status: "send"                   
      }

      //add msg to msg

      // setMsgList(i => [...i, newMsg])
      // console.log(newMsg,'new message');
    }
    
  return (
    <div className='w-[100%]'> 
        <form action="" className='w-[90%] md:w-[100%] relative' onSubmit={sendMsg}>
            <input type="text"name='newMsg' placeholder="Write message" className="input input-bordered input-warning h-[5vh] w-[100%]" />
            <button type='submit'className='absolute right-1 text-green-800 text-[2em]' ><ion-icon name="send-outline"></ion-icon></button>
        </form>
    </div>
  )
}

export default MsgForm