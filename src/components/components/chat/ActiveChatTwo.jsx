import React, { useEffect, useRef, useState } from 'react'
import Message from './Message'
import { useAppContext } from '../../../context/AppContext'
import Backendless from 'backendless'

function ActivChat(newMsg) {
  const {activeChat} = useAppContext()
  const [userId, setUserId] = useState()

  const containerRef = useRef(null);
  
  async function getUserId() {
    try {
      const user = (await Backendless.UserService.getCurrentUser())
      setUserId(i => user.objectId)
    } catch(e) {
      console.log('gerUserId', e)
    }
    
  }

  const scrollToBottom = () => {
    if (containerRef?.current) {
      const targetNode = containerRef.current;
  
      // Create a MutationObserver instance
      const observer = new MutationObserver(() => {
        targetNode.scroll({ top: targetNode.scrollHeight, behavior: 'smooth' });
      });
  
      // Start observing the target node for child node changes
      observer.observe(targetNode, { childList: true });
  
      // Optional: Clean up the observer when it's no longer needed
      return () => observer.disconnect();
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