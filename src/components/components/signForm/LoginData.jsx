import React from 'react'
import { useAppContext } from '../../../context/AppContext'

function LoginData({setnewUser, edit, setUpdatingData}) {
    const {currentUser} = useAppContext()

    const defaultEmail = currentUser && currentUser.email || ''
    const defaultPhone = currentUser && currentUser.phone || ''

    const emailHandler = (e) => {
        edit ? setUpdatingData((i) => ({...i, email: e.target.value})) : setnewUser(i => ({...i, email: e.target.value}))
    }
    const passwordHandler = (e) => {
        edit ? setUpdatingData((i) => ({...i, password: e.target.value})) : setnewUser(i => ({...i, password: e.target.value}))
    }
    const phoneHandler = (e) => {
        edit ? setUpdatingData((i) => ({...i, phone: e.target.value})) :  setnewUser(i => ({...i, phone: e.target.value}))
    }

  return (
    <div>
       
        <div className='flex flex-col lg:flex-row justify-center items-center gap-2 md:gap-6 border-orange-100 border-2 p-4'>
            <div className='flex flex-col gap-4'>
                <h2 className='font-bold text-[1.5em] text-brawn-950'>Contact</h2>
                <label className='font-bold  bg-lime-50 w-64 h-24 flex gap-1 items-center justify-center pl-2 flex-col p-1'>
                    <input required onChange={(e) => emailHandler(e)} defaultValue={defaultEmail} type="email" name='email' placeholder="Email" className="input font-normal input-bordered input-warning w-full max-w-xs" /> 
                </label>
            </div>
            <div className='flex flex-col gap-4 pt-0 md:pt-[3.3em]'>
                <label className='font-bold  bg-lime-50 w-64 h-24 flex gap-1 items-center justify-center pl-2 flex-col p-1'>
                    <input required onChange={(e) => passwordHandler(e)}  type="password" name='password' placeholder="Password" className="input font-normal input-bordered input-warning w-full max-w-xs" />
                </label>
            </div>
            <div className='flex flex-col gap-4 pt-0 md:pt-[3.3em]'>
                <label className='font-bold  bg-lime-50 w-64 h-24 flex gap-1 items-center justify-center pl-2 flex-col p-1'>
                   <input onChange={(e) => phoneHandler(e)} defaultValue={defaultPhone} type="tel" name='tel' placeholder="Phone" className="input font-normal input-bordered input-warning w-full max-w-xs" />
                </label>
            </div>
        </div> 
    </div>
  )
}

export default LoginData