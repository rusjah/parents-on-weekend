import React, { useEffect, useState } from 'react'
import MsgForm from '../components/chat/MsgForm'
import SmallChatCard from '../components/chat/SmallChatCard'
import ActivChat from '../components/chat/ActivChat'
import data from '../../data.json'


function Chat() {
  const users = data.users
  const myId = data.myId
  const msgList = data.msgList

  const [chatsList, setChatsList] = useState([])
  const [aktiveChat, setAktiveChat] = useState()


  function getUsersChats () {
      const userMsgList = msgList.filter(el => el.senderId === myId || el.recieverId === myId)
      const updateChat = [...chatsList]
     
      userMsgList.forEach(msg => {
            const ind = updateChat.findIndex(chl => chl.chatId === msg.chatId)
            if (ind !== -1 ) {
              if (updateChat[ind].chatContent.findIndex(f => f.msgId === msg.msgId) === -1) {
                updateChat[ind] = {
                  ...updateChat[ind],   
                  chatContent: [...updateChat[ind].chatContent, msg]
                }
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
          })
      setChatsList(i => updateChat)
  }


  function sortDateChatsList() {
    chatsList.forEach(el => {
      el.chatContent.sort((a,b) => {
        return  new Date(b.date) - new Date(a.date)
      })
    })
  }

useEffect(() => {
  setChatsList(i => []) ;
  getUsersChats()
  sortDateChatsList()
},[])

  return (
    <div onClick={getUsersChats} className='min-h-[66vh] bg-yellow-50 py-20 flex justify-center'>
      <div className='flex flex-col w-[80%] h-[60vh] border-orange-900 border-4 rounded-[20px]'>
        <header className='bg-yellow-900 h-[5vh] text-yellow-400 pl-6 font-bold text-[1.5rem]'><p>Chat</p></header>
        <div className='flex w-full h-full'>
          <div className='w-[25%] h-[90%] bg-[#fffcf7] p-4 overflow-auto flex flex-col gap-4'>
            {console.log(chatsList)}
            {chatsList.map((chatElem, ind) =>  
                <SmallChatCard key={ind} msgId={chatElem.chatContent[0].msgId} />
            )}
          </div>
          
          <div className='w-[75%] bg-[#e4f0d0] p-2 relative overflow-auto'>
            
            <ActivChat content={chatsList.chatContent}/>
          {/*    <div className='absolute bottom-2 w-[98%]'>
              <MsgForm setChatsList={setChatsList} />
            </div>*/}
          </div> 

        </div>
      </div>

    </div>
  )
}

export default Chat