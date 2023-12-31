import React from 'react'
import { useAppContext } from '../../../context/AppContext'

function BaseData({setnewUser}) {
  const {currentUser} = useAppContext()
  const defaultPostNumber = currentUser.postNumber ? currentUser.postNumber : ''
  const defaultRole = currentUser.defaultRole ? currentUser.defaultRole : ''
  const defaultHelpType = currentUser.defaultHelpType ? currentUser.defaultHelpType : ''

  const role = [{role:'grand', content: 'I have time'},{role:'parent', content: 'I need help'}]
  const helpType = [{helpType: 'pets', content: 'Pets'}, {helpType: 'children', content: 'Children'}, {helpType: 'patsChildren', content: 'Pats & Children'}]

  return (
    <div className='flex flex-col lg:flex-row justify-center items-center gap-6 border-orange-100 border-2 p-4'>
        <div className=' rating gap-1 flex flex-col gap-4'>
          <h2 className='font-bold text-[1.5em] text-brawn-950'>My role</h2>
          {role.map((el,ind) => 
          <label key={ind} className='font-bold  bg-lime-50 w-64 h-12 flex gap-2 items-center pl-2'>
            {console.log(currentUser, 'role')}
            <input required onChange={(e) => setnewUser(i => ({...i, role: e.target.value}))} type="radio" name="role"   value={el.role} className="mask mask-heart bg-lime-400 checked:bg-yellow-400" />
            <span>{el.content}</span>
          </label>)}
        </div>

        <div className=' rating gap-1 flex flex-col gap-4'>
          <h2 className='font-bold text-[1.5em] text-brawn-950'>I can/need help:</h2>
          {helpType.map((el,ind) => 
              <label key={ind} className='font-bold  bg-lime-50 w-64 h-12 flex gap-2 items-center pl-2'>
                <input onChange={(e) => setnewUser(i => ({...i, helpType: e.target.value}))} type="radio" name="helpType"   value={el.helpType} className="mask mask-heart bg-lime-400 checked:bg-yellow-400" />
                <span>{el.content}</span>
            </label>
            )}
        </div>

        <div className='flex flex-col gap-4'>
          <h2 className='font-bold text-[1.5em] text-brawn-950'>My post number</h2>
          <label className='font-bold  bg-lime-50 w-64 h-32 flex gap-1 items-center pl-2 flex-col p-1'>
            <input onChange={(e) => setnewUser(i => ({...i, postNumber: e.target.value}))} defaultValue={defaultPostNumber} type="text" name='postNumber' placeholder="Type here" className="input font-normal input-bordered input-warning w-full max-w-xs" />
            <span className='text-green-950 text-[14px] pl-1'>It help us find for you the best partner </span>
          </label>
        </div>
      </div>
  )
}

export default BaseData