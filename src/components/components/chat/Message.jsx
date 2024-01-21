import React, { useContext, useEffect } from 'react'

function Message({msgType, content}) {

  function getTime(date) {
    return (String(new Date(date)).split(' ')[3]).slice(0,5)
  }
  
  useEffect(() => {
  },[])
  

  return (
    <div>
        {msgType === 'start' ? <div className={`chat chat-start `}>
          <div className="chat-header"> 
          </div>
          <div className="chat-bubble flex flex-col">{content.msg} 
          {/* <span className='text-[10px] text-white-700'>{getTime(content.sendDate)}</span> */}
          </div>
          <div className="chat-footer opacity-50">
            {/* {content.status} */}
          </div> 
        </div> :
          <div className={`chat chat-end`}>
          <div className="chat-header"> 
          </div>
          <div className="chat-bubble flex flex-col">{content.msg} 
          {/* <span className='text-[10px] text-white-700'>{getTime(content.sendDate)}</span> */}
          </div>
          <div className="chat-footer opacity-50">
            {/* {content.status} */}
          </div> 
        </div>
        }
    </div>
  )
}

export default Message