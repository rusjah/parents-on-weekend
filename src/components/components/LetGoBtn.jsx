import React from 'react'
import { Link } from 'react-router-dom'

function LetGoBtn({title}) {
  return (
    <Link to={'/login'} ><button className="btn bg-yellow-900 text-yellow-200 text-[1.2em]">{title}</button></Link>
  )
}

export default LetGoBtn