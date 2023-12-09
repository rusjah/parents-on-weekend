import React from 'react'
import MsgForm from '../components/MsgForm'

function Chat() {
  return (
    <div className='min-h-[66vh] bg-yellow-50 py-20 flex justify-center'>
      <div className='flex flex-col w-[80%] h-[60vh] border-orange-900 border-4 rounded-[20px]'>
        <header className='bg-yellow-900 h-[5vh] text-yellow-400 pl-6 font-bold text-[1.5rem]'><p>Chat</p></header>
        <div className='flex w-full h-full'>
          <div className='w-[25%] bg-[#fffcf7] p-2'>
            list
          </div>
          <div className='w-[75%] bg-[#e4f0d0] p-2 relative overflow-auto'>
            msg
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