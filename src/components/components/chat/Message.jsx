import React, { useContext, useEffect } from 'react'

function Message({msgType, content}) {

  function getTime(date) {
    // return (String(date).split(' ')[3]).slice(0,5)
    return (String(new Date()).split(' ')[3]).slice(0,5)
  }
  
  useEffect(() => {
    console.log(content);
  },[])
  

  return (
    <div>
        {msgType === 'start' ? <div className={`chat chat-start `}>
          <div className="chat-header"> 
            {/* Obi-Wan Kenobi 
            <time className="text-xs opacity-50">2 hours ago</time> */}
          </div>
          <div className="chat-bubble flex flex-col">{content.msg} <span className='text-[10px] text-white-700'>{getTime(content.date)}</span></div>
          <div className="chat-footer opacity-50">
            {content.status}
          </div> 
        </div> :
          <div className={`chat chat-end`}>
          <div className="chat-header"> 
            {/* Obi-Wan Kenobi
            <time className="text-xs opacity-50">2 hours ago</time> */}
          </div>
          <div className="chat-bubble flex flex-col">{content.msg} <span className='text-[10px] text-white-700'>{getTime(content.date)}</span></div>
          <div className="chat-footer opacity-50">
            {content.status}
          </div> 
        </div>
        }
    </div>
  )
}

export default Message