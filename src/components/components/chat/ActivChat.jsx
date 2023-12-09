import React from 'react'
import Message from './Message'

function ActivChat({content}) {
  return (
    <div>
       <Message msgType={'start'} />
       <Message msgType={'end'} />
       <Message msgType={'end'} />
        
    </div>
  )
}

export default ActivChat