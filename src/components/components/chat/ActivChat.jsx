import React from 'react'
import Message from './Message'

function ActivChat({content, myId}) {
  return (
    <div className=' overflow-scroll h-[44vh]'>
        {content.map((el, ind) => {
          if(myId === el.senderId) {
            return <Message key={ind} msgType={'end'}/>
          }
          return  <Message key={ind} msgType={'start'}/>
        })}
        
    </div>
  )
}

export default ActivChat