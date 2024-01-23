import React, { useEffect, useRef, useState } from 'react'
import Message from './Message'
import { useAppContext } from '../../../context/AppContext'
import Backendless from 'backendless'

function ActivChat(newMsg) {
  const {activeChat} = useAppContext()
  const [userId, setUserId] = useState()

  const containerRef = useRef(null);
  
  async function getUserId() {
    const user = (await Backendless.UserService.getCurrentUser())
    setUserId(i => user.objectId)
  }

  const scrollToBottom = () => {
    // if (newMsg.length) {
    //   containerRef.current?.scrollIntoView({
    //     behavior: "smooth",
    //     block: "end",
    //   });
    // }
    if (containerRef) {
      containerRef.current.addEventListener('DOMNodeInserted', event => {
        const { currentTarget: target } = event;
        target.scroll({ top: target.scrollHeight, behavior: 'smooth' });
      });
    }
  };


  useEffect( ()=> {
    getUserId()
    // scrollToBottom()
  },[])


  useEffect(() => {
    scrollToBottom();
   
  }, [newMsg]);
    
  return (
    <div ref={containerRef} className=' overflow-scroll h-[80%]' id='chat-room'>
        {activeChat && newMsg.newMsg.length > 0 && newMsg.newMsg.map((el, ind) => {
          if(userId === el.senderId) {
            return <Message key={ind} msgType={'end'} content={el}/>
          } else {
            return  <Message key={ind} msgType={'start'} content = {el}/>
          }
        })}
        {newMsg.newMsg.length === 0  && <p className='p-2 font-bold text-lg'>Choose chat to start talking</p>}
    </div>
  )
}

export default ActivChat