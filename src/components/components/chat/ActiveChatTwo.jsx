import React, { useEffect, useState } from 'react'
import Message from './Message'
import data from '../../../data.json'
import { useAppContext } from '../../../context/AppContext'
import Backendless from 'backendless'

function ActivChat({aktiveChat, myId}) {
  const {activeChat, chatMessages } = useAppContext()
  const [userId, setUserId] = useState()
  // console.log(aktiveChat, 'activechat');
    // const msgs = data.msgList;
    // const activeMsgList = msgs.filter(el => el.chatId === aktiveChat.chatId)
    // activeMsgList.sort((a, b) => {
    //   return  new Date(b.date) - new Date(a.date)
    // })

    async function getUserId() {
      const user = (await Backendless.UserService.getCurrentUser())
      setUserId(i => user.objectId)
    }

    useEffect( ()=> {
      console.log(chatMessages, 'messages');
      getUserId()
    },[])
    
  return (
    <div className=' overflow-scroll h-[80%]'>
      {/* <p>{activeChat && activeChat.name}</p>
      <p>{chatMessages && console.log(chatMessages[0].senderId.objectId)}</p> */}
        {chatMessages.length > 0 && chatMessages.map((el, ind) => {
          if(userId === el.senderId.objectId) {
            // {console.log("ffffff", el)}
            return <Message key={ind} msgType={'end'} content={el}/>
          } else {
            // {console.log("elelel", el)}
            return  <Message key={ind} msgType={'start'} content = {el}/>
          }
        })}
        {/* {chatMessages.length === 0  && <p></p>} */}
        
    </div>
  )
}

export default ActivChat