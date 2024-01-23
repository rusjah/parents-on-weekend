import React, { useEffect, useState } from 'react'
import MsgForm from '../components/chat/MsgForm'
import SmallChatCard from '../components/chat/SmallChatCard'
import ActivChat from '../components/chat/ActivChat'
import data from '../../data.json'
import AktiveChatTwo from '../components/chat/ActiveChatTwo'
import { useAppContext } from '../../context/AppContext'
import Backendless from 'backendless'
import { act } from 'react-dom/test-utils'


 function Chat() {
  const { chats }  = useAppContext()
  const [newMsg, setNewMsg] = useState([])


  const [lastOfMsg, setLastOfMsg] = useState()


  async function getLastMsg (msgId) {
    const lastChatsMsg = await Backendless.Data.of ('messages').findLast ({
      relations: ['chat'],
      where: "objectId = '" + msgId + "'",
    });
    setLastOfMsg (i => lastChatsMsg.msg);
  }

 
  useEffect(()=>{
    const subscription = Backendless.Data.of('messages').rt();
    Backendless.Data.of('chanels').rt();

    subscription.addCreateListener((newMessage) => {
      console.log('recieve new msg', newMessage );
      console.log('after recieving all msgs', newMsg)
      const addingMsg = {
        msg: newMessage.msg,
        senderId: newMessage.ownerId
      }
      setNewMsg(i => [...i, addingMsg])
      getLastMsg(newMessage.objectId)
      
    });

      return () => {
        subscription.removeCreateListener();
      };
  },[])

  return (
    <div className='min-h-[66vh] bg-yellow-50 py-20 flex justify-center'>
      <div className='flex flex-col w-[80%] h-[66vh] border-orange-900 border-4 rounded-[20px]'>

        <header className='bg-yellow-900 h-[10%] text-yellow-400 pl-6 font-bold text-[1.5rem] flex gap-4'>
          Chat 
        </header>
        <div className='flex w-full h-[90%] flex flex-col md:flex-row items-center'>
          <div className='w-full md:w-[25%] h-[25%] md:h-full bg-[#fffcf7] p-4 overflow-auto flex flex-col gap-4'>
            {chats && chats.map((chat, ind) => (
              <SmallChatCard key={ind} chat={chat} setNewMsg={setNewMsg} lastOfMsg={lastOfMsg} getLastMsg={getLastMsg} setLastOfMsg={setLastOfMsg}/>
            ))}
          </div>
          
          <div className='w-full md:w-[75%] h-[80%] md:h-full bg-[#e4f0d0] p-2 relative'> 
              <AktiveChatTwo newMsg={newMsg}/> 
             <div className='absolute bottom-2 w-[98%]'>
              <MsgForm />
            </div>
          </div> 

        </div>
      </div>

    </div>
  )
}

export default Chat