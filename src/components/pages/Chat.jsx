import React, { useEffect, useState } from 'react'
import MsgForm from '../components/chat/MsgForm'
import SmallChatCard from '../components/chat/SmallChatCard'
import ActivChat from '../components/chat/ActivChat'
import data from '../../data.json'


function Chat() {
  // const users = data.users
  const myId = data.myId
  // const msgList = data.msgList

  const [users, setUuers] = useState(data.users)
  const [msgList, setMsgList] = useState(data.msgList)

  const [chatsList, setChatsList] = useState([])
  const [aktiveChat, setAktiveChat] = useState([])
  const [aktiveUser, setaktiveUser] = useState({})


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
            } else {
              const newChat = {
                chatId: msg.chatId,
                chatContent: [msg]
              }
              updateChat.push(newChat)
            }
          })
      setChatsList(i => updateChat)
      setAktiveChat(i => updateChat[0].chatContent)
      // const actUsr =  users.find(el => el.userId === updateChat[0].chatContent.recieverId)
      // setaktiveUser(i => actUsr)
  }

  function setActiveUser() {
    if (aktiveChat.length > 0) {
      const actUsr =  users.find(el => el.userId === aktiveChat[0].recieverId)
      setaktiveUser(i => actUsr)
    }
  }


  function aktiveteChatFunc(e) {
//  
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

useEffect(() => {
  setActiveUser()
},[aktiveUser])


  return (
    <div className='min-h-[66vh] bg-yellow-50 py-20 flex justify-center'>
      <div className='flex flex-col w-[80%] h-[66vh] border-orange-900 border-4 rounded-[20px]'>

        <header className='bg-yellow-900 h-[10%] text-yellow-400 pl-6 font-bold text-[1.5rem] flex gap-4'>
          <img className='w-8 h-8 rounded-full' src={aktiveUser.photo} alt="" />
          <p>{aktiveUser.fname}</p>
        </header>
        <div className='flex w-full h-[90%] flex flex-col md:flex-row items-center'>
          <div className='w-full md:w-[20%] h-full bg-[#fffcf7] p-4 overflow-auto flex flex-col gap-4'>
            {chatsList.map((chatElem, ind) =>  
                <SmallChatCard key={ind} aktiveteChatFunc={aktiveteChatFunc} msgId={chatElem.chatContent[0].msgId} />
            )}
          </div>
          
          <div className='w-full md:w-[80%] h-[80%] md:h-full bg-[#e4f0d0] p-2 relative'> 
            {aktiveChat.length > 0}<ActivChat myId={myId} content={aktiveChat}/>
             <div className='absolute bottom-2 w-[98%]'>
              <MsgForm setChatsList={setChatsList} />
            </div>
          </div> 

        </div>
      </div>

    </div>
  )
}

export default Chat