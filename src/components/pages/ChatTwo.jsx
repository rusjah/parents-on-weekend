import React, { useEffect, useState } from 'react'
import MsgForm from '../components/chat/MsgForm'
import SmallChatCard from '../components/chat/SmallChatCard'
import ActivChat from '../components/chat/ActivChat'
import data from '../../data.json'
import AktiveChatTwo from '../components/chat/ActiveChatTwo'
import { useAppContext } from '../../context/AppContext'


function Chat() {
  // const {getChats, chats} = useAppContext()
  const {getChatsList, chats}  = useAppContext()

    useEffect(() => {
      getChatsList()
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
              <SmallChatCard key={ind} chat={chat} />
            ))}
          </div>
          
          <div className='w-full md:w-[75%] h-[80%] md:h-full bg-[#e4f0d0] p-2 relative'> 
              <AktiveChatTwo /> 
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