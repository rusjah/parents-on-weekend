import React, { useEffect, useState } from 'react'
import Message from './Message'
import data from '../../../data.json'
import { useAppContext } from '../../../context/AppContext'
import Backendless from 'backendless'

function ActivChat(flagMsg) {
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



  // useEffect(() => {
    
  //   const subscription = Backendless.Data.of('messages').rt();
  //   Backendless.Data.of('chanels').rt();

  //   subscription.addCreateListener(async (newMessage) => {
  //     console.log('recieve new msg', newMessage );
  //     console.log('recieve new  and chatmsg',  chatMessages);
  //     const newMsg =   await Backendless.Data.of ('messages').find ({
  //       relations: ['recieverId', 'senderId', 'chat'],
  //       where: "chat.name = '" + activeCha.name + "'",
  //       sortBy: 'created ASC',
  //     });
  //     console.log("newMessage", newMsg[newMsg.length - 1]);
  //     console.log("newMessageFromCall", newMessage);
    
  //     // setChatMessages (i => [...i, newMsg]);
  //     // getChatMsg(activeChat)
  //     // setMessages((prevMessages) => [...prevMessages, newMessage]);
  //     // chatMessages(i => [i, ...newMessage])
  //   });

  //   return () => {
  //     subscription.removeCreateListener();
  //   };
  // }, []);
    
  return (
    <div className=' overflow-scroll h-[80%]'>
        {chatMessages.length > 0 && chatMessages.map((el, ind) => {
        {/* {messages.length > 0 && messages.map((el, ind) => { */}
          if(userId === el.senderId.objectId) {
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
  )
}

export default ActivChat