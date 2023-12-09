import React from 'react'
import MsgForm from '../components/MsgForm'
import SmallChatCard from '../components/SmallChatCard'

function Chat() {
  return (
    <div className='min-h-[66vh] bg-yellow-50 py-20 flex justify-center'>
      <div className='flex flex-col w-[80%] h-[60vh] border-orange-900 border-4 rounded-[20px]'>
        <header className='bg-yellow-900 h-[5vh] text-yellow-400 pl-6 font-bold text-[1.5rem]'><p>Chat</p></header>
        <div className='flex w-full h-full'>
          <div className='w-[25%] bg-[#fffcf7] p-2'>
            <SmallChatCard />
            <SmallChatCard />
            <SmallChatCard />
          </div>
          <div className='w-[75%] bg-[#e4f0d0] p-2 relative overflow-auto'>
            


          <div className="chat chat-start">
            <div className="chat-image avatar">
              <div className="w-10 rounded-full">
                <img alt="Tailwind CSS chat bubble component" src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
              </div>
            </div>
            <div className="chat-header">
              Obi-Wan Kenobi
              <time className="text-xs opacity-50">12:45</time>
            </div>
            <div className="chat-bubble">You were the Chosen One!</div>
            <div className="chat-footer opacity-50">
              Delivered
            </div>
          </div>
          <div className="chat chat-end">
            <div className="chat-image avatar">
              <div className="w-10 rounded-full">
                <img alt="Tailwind CSS chat bubble component" src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
              </div>
            </div>
            <div className="chat-header">
              Anakin
              <time className="text-xs opacity-50">12:46</time>
            </div>
            <div className="chat-bubble">I hate you!</div>
            <div className="chat-footer opacity-50">
              Seen at 12:46
            </div>
          </div>










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