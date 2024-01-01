import React, { useEffect, useState } from 'react'
import Message from './Message'
import data from '../../../data.json'
import { useAppContext } from '../../../context/AppContext'
import Backendless from 'backendless'

function ActivChat() {
  const {activeChat, chatMessages } = useAppContext()
  const [userId, setUserId] = useState()
  async function getUserId() {
    const user = (await Backendless.UserService.getCurrentUser())
    setUserId(i => user.objectId)
  }

    useEffect( ()=> {
      getUserId()
    },[])
    
  return (
    <div className=' overflow-scroll h-[80%]'>
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