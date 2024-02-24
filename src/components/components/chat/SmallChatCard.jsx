import React, { useEffect, useState } from 'react'
import { useAppContext } from '../../../context/AppContext';
import Backendless from 'backendless';

function SmallChatCard({chat,  setNewMsg, newMsg}) {
    const {setActiveChat, getChatMsg, activeChat} = useAppContext()
    const [lastMsg, setLastMsg] = useState()
    const [chatsUser, setChatsUser] = useState()

    async function getLastMsg () {
        const lastChatsMsg = await Backendless.Data.of ('messages').findLast ({
          relations: ['chat'],
          where: "chat.name = '" + chat.name + "'",
        });
        console.log("lastChatsMsg", lastChatsMsg)
        lastChatsMsg != undefined ? setLastMsg (i => lastChatsMsg.msg) : setLastMsg (i => '')
    }

    async function getChatsUser () {
        const user = await Backendless.UserService.getCurrentUser ();
        const chatUser = chat.parts.filter (el => el.objectId !== user.objectId);
        setChatsUser (i => chatUser[0]);
    }

    async function activateChat() {
        setActiveChat(chat)
        // getChatMsg(chat)
        const msgs = await Backendless.Data.of ('messages').find ({
            relations: ['recieverId', 'senderId', 'chat'],
            where: "chat.name = '" + chat.name + "'",
            sortBy: 'created ASC',
          });
          console.log('form small card',msgs)
        const activTalk =  msgs.map((el) => ({ msg: el.msg, senderId: el.senderId.objectId }));
        setNewMsg(activTalk)
    }

    useEffect(() => {
        getLastMsg()
        getChatsUser()
    },[])

    useEffect(() => {
    },[])

  return (
    <div onClick={activateChat} className="card-body border-2 border-yellow-100 rounded-full max-h-20 py-2">
        {chatsUser && <div className='flex max-h-full gap-4'>
            <figure className='w-8 h-8'>
                <img className='w-full h-full rounded-full' src={chatsUser.photo} alt="photo" />
            </figure>
            <figcaption>
                <p className='font-bold text-yellow-995'>{chatsUser.fname} {chatsUser.lname}</p>
                <p className="w-[40vw] md:w-[6vw] truncate">{newMsg || lastMsg}</p> 
            </figcaption>
        </div>}
        
    </div>
  )
}

export default SmallChatCard 