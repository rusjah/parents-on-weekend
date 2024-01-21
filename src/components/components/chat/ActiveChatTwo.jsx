import React, { useEffect, useState } from 'react'
import Message from './Message'
import data from '../../../data.json'
import { useAppContext } from '../../../context/AppContext'
import Backendless from 'backendless'

function ActivChat(newMsg) {
  const {activeChat, getChatMsg, chatMessages} = useAppContext()
  const [userId, setUserId] = useState()
  const [activeMsgs, setActiveMsgs] = useState([])

  const [messages, setMessages] = useState(chatMessages)
  
  async function getUserId() {
    const user = (await Backendless.UserService.getCurrentUser())
    setUserId(i => user.objectId)
  }

  useEffect( ()=> {
    getUserId()
    // setActiveMsgs(i => chatMessages)
  },[])


    
  return (
    <div className=' overflow-scroll h-[80%]'>
      {activeChat && console.log('active chat from chat room', newMsg.newMsg)}
        {newMsg.newMsg.length > 0 && newMsg.newMsg.map((el, ind) => {
        {/* {messages.length > 0 && messages.map((el, ind) => { */}
          if(userId === el.senderId) {
            // {console.log("ffffff", el)}
            return <Message key={ind} msgType={'end'} content={el}/>
          } else {
            // {console.log("elelel", el)}
            return  <Message key={ind} msgType={'start'} content = {el}/>
          }
        })}
        {chatMessages.length === 0  && <p className='p-2 font-bold text-lg'>Choose chat to start talking</p>}
        {/* {messages.length === 0  && <p className='p-2 font-bold text-lg'>Choose chat to start talking</p>} */}
        
    </div>
    // <div className=' overflow-scroll h-[80%]'>
    //     {chatMessages.length > 0 && chatMessages.map((el, ind) => {
    //     {/* {messages.length > 0 && messages.map((el, ind) => { */}
    //     {activeChat && console.log('active chat from chat room', newMsg)}
    //       if(userId === el.senderId.objectId) {
    //         // {console.log("ffffff", el)}
    //         return <Message key={ind} msgType={'end'} content={el}/>
    //       } else {
    //         // {console.log("elelel", el)}
    //         return  <Message key={ind} msgType={'start'} content = {el}/>
    //       }
    //     })}
    //     {chatMessages.length === 0  && <p className='p-2 font-bold text-lg'>Choose chat to start talking</p>}
    //     {/* {messages.length === 0  && <p className='p-2 font-bold text-lg'>Choose chat to start talking</p>} */}
        
    // </div>
  )
}

export default ActivChat