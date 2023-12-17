import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAppContext } from '../../context/AppContext';

function Login() {

  const {toLogin, userStatus, findUse, currenUser} = useAppContext()

  function loginHandler(e) {
    e.preventDefault()

    const email = e.target.emailinp.value
    const password = e.target.passwordinp.value
    const user = {
      email,
      password
      }

      e.target.passwordinp.value = ''
      e.target.emailinp.value = ''
      
      toLogin(user)
  }

  return (
   <div className='py-[14vh] md:px-[1vw] h-[66vh]  bg-[#f0efeb] flex flex-col items-center'>
     <h2 className='font-bold text-[2.5rem] text-green-900 pb-2'>Login</h2>
     <form onSubmit={loginHandler} className='flex flex-col justify-center items-center gap-6  w-[80%] md:w-[50%] h-full border-orange-950 border-4 border-yellow-700 p-12 rounded-lg bg-[#fff]'>
      <input required type="email" placeholder="email" name='emailinp' className="input input-bordered input-warning w-[90%]" />
      <input required type="password" placeholder="Password" name='passwordinp' className="input input-bordered input-warning w-[90%]" />
      <button type='submit' className="btn bg-yellow-900 text-yellow-200 text-[1.2em] self-end">Log In</button>
    </form>
   </div>
  )
}

export default Login