import React from 'react'
import { Link } from 'react-router-dom'
import { useAppContext } from '../../context/AppContext'

function LetGoBtn({title}) {
  const {currentUser} = useAppContext()
  return (
    <> {!currentUser ? <Link to={'/login'} ><button className="btn bg-yellow-900 text-yellow-200 text-[1.2em]">{title}</button></Link> :  <Link to={'/reviews'} ><button className="btn bg-yellow-900 text-yellow-200 text-[1.2em]">{title}</button></Link>}</>
  )
}

export default LetGoBtn