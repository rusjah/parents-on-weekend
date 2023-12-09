import React from 'react'

function MsgForm({setChatsList}) {
    function sendMsg(e) {
      e.preventDefault()
      const newMsg = {
        chatPhoto: 'https://pivotalmist.backendless.app/api/files/photos/users/grandmother.jpg',
        chatName: 'Innes Markus',
        chatMsg: e.target.newMsg.value
      }
      console.log(newMsg);
    }
    
  return (
    <div className='w-[100%]'> 
        <form action="" className='w-[100%] relative' onSubmit={sendMsg}>
            <textarea name='newMsg' className="textarea textarea-warning h-[5vh] w-[100%] " placeholder="Write message"></textarea>
            <button type='submit'className='absolute right-1 text-green-800 text-[2em]' ><ion-icon name="send-outline"></ion-icon></button>
        </form>
    </div>
  )
}

export default MsgForm