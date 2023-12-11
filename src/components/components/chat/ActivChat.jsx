import React from 'react'
import Message from './Message'

function ActivChat({content, myId}) {
  return (
    <div className=' overflow-scroll h-[80%]'>
        {content.map((el, ind) => {
          if(myId === el.senderId) {
            {console.log("ffffff", el)}
            return <Message key={ind} msgType={'end'} content={el}/>
          } else {
            {console.log("elelel", el)}
            return  <Message key={ind} msgType={'start'} content = {el}/>
          }
        })}
        
    </div>
  )
}

export default ActivChat