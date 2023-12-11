import React, { useEffect, useState } from 'react'
import MsgForm from '../components/chat/MsgForm'
import SmallChatCard from '../components/chat/SmallChatCard'
import ActivChat from '../components/chat/ActivChat'
import data from '../../data.json'
import AktiveChatTwo from '../components/chat/ActiveChatTwo'


function Chat() {
  // const users = data.users
  const myId = data.myId
  // const msgList = data.msgList

  const [users, setUuers] = useState(data.users)
  const [msgList, setMsgList] = useState(data.msgList)

  const [chatsList, setChatsList] = useState([])
  const [aktiveChat, setAktiveChat] = useState()
  // const [aktiveUser, setaktiveUser] = useState({})

  function sortMsgList() {
    msgList.sort((a, b) => {
        return  new Date(b.date) - new Date(a.date)
    })
  }


  function getUsersChats () {
      sortMsgList()
      const userMsgList = msgList.filter(el => el.senderId === myId || el.recieverId === myId)
      const updateChat = [...chatsList]
     
      userMsgList.forEach(msg => {
            const ind = updateChat.findIndex(chl => chl.chatId === msg.chatId)
            if (ind == -1) {
                let newChat = {
                    msgId: msg.msgId,
                    chatId: msg.chatId
                }
                console.log('i am here', newChat);
                updateChat.push(newChat)
            }
          })
      setChatsList(i => updateChat)
      setAktiveChat(i => updateChat[0])
      // const actUsr =  users.find(el => el.userId === updateChat[0].chatContent.recieverId)
      // setaktiveUser(i => actUsr)
  }

  // function setActiveUser() {
  //   if (aktiveChat) {
  //     const actUsr =  users.find(el => el.userId === aktiveChat[0].recieverId)
  //     setaktiveUser(i => actUsr)
  //   }
  // }

    useEffect(() => {
      sortMsgList()
      setChatsList(i => []) ;
      getUsersChats()

    },[])

// useEffect(() => {
//   setActiveUser()
// },[aktiveUser])


  return (
    <div className='min-h-[66vh] bg-yellow-50 py-20 flex justify-center'>
        {console.log(chatsList)}
      <div className='flex flex-col w-[80%] h-[66vh] border-orange-900 border-4 rounded-[20px]'>

        <header className='bg-yellow-900 h-[10%] text-yellow-400 pl-6 font-bold text-[1.5rem] flex gap-4'>
          {/* <img className='w-8 h-8 rounded-full' src={aktiveUser.photo} alt="" />
          <p>{aktiveUser.fname}</p> */}
          Chat
        </header>
        <div className='flex w-full h-[90%] flex flex-col md:flex-row items-center'>
          <div className='w-full md:w-[20%] h-[25%] md:h-full bg-[#fffcf7] p-4 overflow-auto flex flex-col gap-4'>
            {chatsList.map((chatElem, ind) =>  
                <SmallChatCard key={ind} chatElem={chatElem}  setAktiveChat={setAktiveChat}/>
            )}
          </div>
          
          <div className='w-full md:w-[80%] h-[80%] md:h-full bg-[#e4f0d0] p-2 relative'> 
            {aktiveChat && <AktiveChatTwo myId={myId} aktiveChat={aktiveChat}/>}
            {/* {aktiveChat.length > 0}<ActivChat myId={myId} content={aktiveChat}/> */}
             <div className='absolute bottom-2 w-[98%]'>
              <MsgForm setMsgList={setMsgList} aktiveChat={aktiveChat}/>
            </div>
          </div> 

        </div>
      </div>

    </div>
  )
}

export default Chat