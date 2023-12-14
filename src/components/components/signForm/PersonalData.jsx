import React from 'react'

function PersonalData({setnewUser}) {
  return (
    <div>
        <div className='flex flex-col md:flex-row justify-center gap-6 border-orange-100 border-2 p-4'>
        <div className='flex flex-col gap-4'>
            <h2 className='font-bold text-[1.5em] text-brawn-950'>My Data</h2>
            <label className='font-bold  bg-lime-50 w-64 h-24 flex gap-1 items-center justify-center  pl-2 flex-col p-1'>
              <input onChange={(e) => setnewUser(i => ({...i, fname: e.target.value}))} type="text" name='fname' placeholder="First name" className="input font-normal input-bordered input-warning w-full max-w-xs" />
            </label>
        </div>
        <div className='flex flex-col gap-4 pt-0 md:pt-[3.3em]'>
            <label className='font-bold  bg-lime-50 w-64 h-24 flex gap-1 items-center justify-center pl-2 flex-col p-1'>
              <input onChange={(e) => setnewUser(i => ({...i, lname: e.target.value}))} type="text" name='lname' placeholder="Last name" className="input font-normal input-bordered input-warning w-full max-w-xs" />
            </label>
        </div>
        <div className='flex flex-col gap-4 pt-0 md:pt-[3.3em]'>
            <label className='font-normal  bg-lime-50 w-64 h-24 flex gap-1 items-center justify-center pl-2 flex-col p-1'>
              <select required onChange={(e) => setnewUser(i => ({...i, gender: e.target.value}))} name='gender' className="select select-warning w-full max-w-xs">
                <option  disabled  value="default">Gender</option>
                <option value=""></option>
                <option  value="male">Male</option>
                <option  value="female">Female</option>
                <option  value="another">Another</option>
              </select>
            </label>
        </div>
      </div>
    </div>
  )
}

export default PersonalData