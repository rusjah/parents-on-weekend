import React from 'react'

function MsgForm({setChatsList}) {
    function sendMsg(e) {
      e.preventDefault()
      const newMsg = {
        sgId: "220",
        senderId: "1",
        recieverId: "2",
        date: "Mar 12 2012 10:00:00 AM",
        chatId: "999",
        msg: "New message in this chat"                       
        
      }

      console.log(newMsg);
    }
    
  return (
    <div className='w-[100%]'> 
        <form action="" className='w-[90%] md:w-[100%] relative' onSubmit={sendMsg}>
            <textarea name='newMsg' className="textarea textarea-warning h-[5vh] w-[100%] " placeholder="Write message"></textarea>
            <button type='submit'className='absolute right-1 text-green-800 text-[2em]' ><ion-icon name="send-outline"></ion-icon></button>
        </form>
    </div>
  )
}

export default MsgForm