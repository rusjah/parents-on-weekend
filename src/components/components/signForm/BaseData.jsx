import React from 'react'

function BaseData({setnewUser}) {
  return (
    <div className='flex flex-col md:flex-row justify-center gap-6 border-orange-100 border-2 p-4'>
        <div className=' rating gap-1 flex flex-col gap-4'>
          <h2 className='font-bold text-[1.5em] text-brawn-950'>My role</h2>
          <label className='font-bold  bg-lime-50 w-64 h-12 flex gap-2 items-center pl-2'>
            <input onChange={(e) => setnewUser(i => ({...i, role: e.target.value}))} type="radio" name="role"  value="grand" className="mask mask-heart bg-lime-400 checked:bg-yellow-400" />
            <span>I have time</span>
          </label>
          <label className='font-bold  bg-lime-50 w-64 h-12 flex gap-2 items-center pl-2'>
            <input onChange={(e) => setnewUser(i => ({...i, role: e.target.value}))} type="radio" name="role"  value="parent" className="mask mask-heart bg-lime-400 checked:bg-yellow-400" />
            <span>I need help</span>
          </label>
        </div>
        <div className=' rating gap-1 flex flex-col gap-4'>
          <h2 className='font-bold text-[1.5em] text-brawn-950'>I can/need help:</h2>
          <label className='font-bold  bg-lime-50 w-64 h-12 flex gap-2 items-center pl-2'>
            <input onChange={(e) => setnewUser(i => ({...i, helpType: e.target.value}))} type="radio" name="helpType"  value="pets" className="mask mask-heart bg-lime-400 checked:bg-yellow-400" />
            <span>Pets</span>
          </label>
          <label className='font-bold  bg-lime-50 w-64 h-12 flex gap-2 items-center pl-2'>
            <input onChange={(e) => setnewUser(i => ({...i, helpType: e.target.value}))} type="radio" name="helpType"  value="children" className="mask mask-heart bg-lime-400 checked:bg-yellow-400" />
            <span>Children</span>
          </label>
          <label className='font-bold  bg-lime-50 w-64 h-12 flex gap-2 items-center pl-2'>
            <input onChange={(e) => setnewUser(i => ({...i, helpType: e.target.value}))} type="radio" name="helpType"  value="patsChildren" className="mask mask-heart bg-lime-400 checked:bg-yellow-400" />
            <span>Pats & Children</span>
          </label>
        </div>
        <div className='flex flex-col gap-4'>
          <h2 className='font-bold text-[1.5em] text-brawn-950'>My post number</h2>
          <label className='font-bold  bg-lime-50 w-64 h-32 flex gap-1 items-center pl-2 flex-col p-1'>
            <input onChange={(e) => setnewUser(i => ({...i, postNumber: e.target.value}))} type="text" name='postNumber' placeholder="Type here" className="input font-normal input-bordered input-warning w-full max-w-xs" />
            <span className='text-green-950 text-[14px] pl-1'>It help us find for you the best partner </span>
          </label>
        </div>
      </div>
  )
}

export default BaseData