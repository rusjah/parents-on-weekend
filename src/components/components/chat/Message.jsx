import React from 'react'

function Message({msgType, content}) {
  return (
    <div>
        {msgType === 'start' ? <div className={`chat chat-start `}>
          {console.log(content, 'constent')}
          <div className="chat-header"> 
            {/* Obi-Wan Kenobi 
            <time className="text-xs opacity-50">2 hours ago</time> */}
          </div>
          <div className="chat-bubble">{content.msg}</div>
          <div className="chat-footer opacity-50">
            Seen
          </div> 
        </div> :
          <div className={`chat chat-end`}>
          <div className="chat-header"> 
            {/* Obi-Wan Kenobi
            <time className="text-xs opacity-50">2 hours ago</time> */}
          </div>
          <div className="chat-bubble">{content.msg}</div>
          <div className="chat-footer opacity-50">
            Seen
          </div> 
        </div>
        }
    </div>
    // <div className={`chat chat-${msgType} w-full bg-green-200` }>
    //     <div className="chat-header">
    //     Obi-Wan Kenobi
    //     <time className="text-xs opacity-50">12:45</time>
    //     </div>
    //     <div className="chat-bubble">You were the Chosen One!</div>
    //     <div className="chat-footer opacity-50">
    //     Delivered
    //     </div>
    // </div>

  )
}

export default Message