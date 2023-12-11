import React from 'react'
import Message from './Message'
import data from '../../../data.json'

function ActivChat({aktiveChat, myId}) {
  console.log(aktiveChat, 'activechat');
    const msgs = data.msgList;
    const activeMsgList = msgs.filter(el => el.chatId === aktiveChat.chatId)
    activeMsgList.sort((a, b) => {
      return  new Date(b.date) - new Date(a.date)
    })
    
  return (
    <div className=' overflow-scroll h-[80%]'>
        {activeMsgList.map((el, ind) => {
          if(myId === el.senderId) {
            {console.log("ffffff", el)}
            return <Message key={ind} msgType={'end'} content={el}/>
          } else {
            {console.log("elelel", el)}
            return  <Message key={ind} msgType={'start'} content = {el}/>
          }
        })}
        
    </div>
  )
}

export default ActivChat