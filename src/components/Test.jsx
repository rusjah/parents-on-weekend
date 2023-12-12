import React, { useState } from 'react'
import Record from './components/video/Record'

function Test() {
    const [first, setfirst] = useState()
   
    function func(e) {
        {console.log('dfsdfsd', e.target)}
    }
  return (
        <div>
            <form action="" onSubmit={func}>
            <Record setSetUrl={setfirst}/>
            
            <button type='submit'>ok</button>
            </form>
        </div>
  )
}

export default Test