import React, { useEffect, useState } from 'react'
import MsgForm from '../components/chat/MsgForm'
import SmallChatCard from '../components/chat/SmallChatCard'
import ActivChat from '../components/chat/ActivChat'


function Chat() {
  const myId = 1

  const msgList = [
    {
      msgId: 124,
      senderId: 1,
      recieverId: 2,
      date: new Date(),
      chatId: 999,
      msg: 'Hi, my name is Mark and I have 2 pets and I would be happy, if you could help me with them on Sunday'
    },
    {
      msgId: 123,
      senderId: 2,
      recieverId: 1,
      date: new Date(),
      chatId: 999,
      msg: 'Hi, I glad hear you. But this weekend I have some stuff, that I must finished'
    },
    {
      msgId: 134,
      senderId: 1,
      recieverId: 8,
      date: new Date(),
      chatId: 888,
      msg: 'Some Ice Creem?'
    },
    {
      msgId: 133,
      senderId: 8,
      recieverId: 1,
      date: new Date(),
      chatId: 888,
      msg: 'No...'
    },
    {
      msgId: 125,
      senderId: 2,
      recieverId: 1,
      date: new Date(),
      chatId: 999,
      msg: 'I hope meet you next week...'
    },
    {
      msgId: 125,
      senderId: 5,
      recieverId: 6,
      date: new Date(),
      chatId: 988,
      msg: 'Hi, I am Anna. And I need your help'
    }
  ]

  const [chatsList, setChatsList] = useState([])


  function getUsersChats () {
      const userMsgList = msgList.filter(el => el.senderId === myId || el.recieverId === myId)
      const updateChat = [...chatsList]
     
      userMsgList.forEach(msg => {
            const ind = updateChat.findIndex(chl => chl.chatId === msg.chatId)
            if (ind !== -1) {
              updateChat[ind] = {
                ...updateChat[ind],   
                chatContent: [...updateChat[ind].chatContent, msg]
              }
              // setChatsList(i => updateChat)
            } else {
              const newChat = {
                chatId: msg.chatId,
                chatContent: [msg]
              }
              updateChat.push(newChat)
              // setChatsList(i => [...i, newChat])
            }
            console.log(updateChat);
          })

      setChatsList(i => updateChat)

  }

useEffect(() => {
  setChatsList(i => []) ;
  getUsersChats()
},[])
  return (
    <div onClick={getUsersChats} className='min-h-[66vh] bg-yellow-50 py-20 flex justify-center'>
      <div className='flex flex-col w-[80%] h-[60vh] border-orange-900 border-4 rounded-[20px]'>
        <header className='bg-yellow-900 h-[5vh] text-yellow-400 pl-6 font-bold text-[1.5rem]'><p>Chat</p></header>
        <div className='flex w-full h-full'>
          <div className='w-[25%] h-[90%] bg-[#fffcf7] p-4 overflow-auto flex flex-col gap-4'>
            {/* {console.log(getUsersChats())} */}
            {console.log()}
            {chatsList.map((chatElem, ind) =>  <SmallChatCard key={ind} chat={chatElem} />)}
          </div>

         {/*  <div className='w-[75%] bg-[#e4f0d0] p-2 relative overflow-auto'>
            
            <ActivChat />
            <div className='absolute bottom-2 w-[98%]'>
              <MsgForm setChatsList={setChatsList} />
            </div>
          </div> */}

        </div>
      </div>

    </div>
  )
}

export default Chat