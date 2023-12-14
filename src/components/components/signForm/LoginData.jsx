import React from 'react'

function LoginData({setnewUser}) {
  return (
    <div>
        <div className='flex flex-col md:flex-row justify-center gap-2 md:gap-6 border-orange-100 border-2 p-4'>
            <div className='flex flex-col gap-4'>
                <h2 className='font-bold text-[1.5em] text-brawn-950'>Contact</h2>
                <label className='font-bold  bg-lime-50 w-64 h-24 flex gap-1 items-center justify-center pl-2 flex-col p-1'>
                <input required onChange={(e) => setnewUser(i => ({...i, email: e.target.value}))} type="email" name='email' placeholder="Email" className="input font-normal input-bordered input-warning w-full max-w-xs" />
                </label>
            </div>
            <div className='flex flex-col gap-4 pt-0 md:pt-[3.3em]'>
                <label className='font-bold  bg-lime-50 w-64 h-24 flex gap-1 items-center justify-center pl-2 flex-col p-1'>
                <input required onChange={(e) => setnewUser(i => ({...i, password: e.target.value}))} type="password" name='password' placeholder="Password" className="input font-normal input-bordered input-warning w-full max-w-xs" />
                </label>
            </div>
            <div className='flex flex-col gap-4 pt-0 md:pt-[3.3em]'>
                <label className='font-bold  bg-lime-50 w-64 h-24 flex gap-1 items-center justify-center pl-2 flex-col p-1'>
                <input onChange={(e) => setnewUser(i => ({...i, phone: e.target.value}))} type="tel" name='tel' placeholder="Phone" className="input font-normal input-bordered input-warning w-full max-w-xs" />
                </label>
            </div>
        </div> 
    </div>
  )
}

export default LoginData