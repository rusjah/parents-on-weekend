import React from 'react'

function Message({msgType}) {
  return (
    <div className={`chat chat-${msgType}`}>
        <div className="chat-header">
        Obi-Wan Kenobi
        <time className="text-xs opacity-50">12:45</time>
        </div>
        <div className="chat-bubble">You were the Chosen One!</div>
        <div className="chat-footer opacity-50">
        Delivered
        </div>
    </div>
  )
}

export default Message