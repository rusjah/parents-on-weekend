import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function Login({validationStaus,setvalidationStaus}) {
  const navigate = useNavigate();
  const [userLogin, setUserLogin] = useState()


  function login(e) {
    e.preventDefault()
    const user = {
      email: e.target.emailinp.value,
      password: e.target.passwordinp.value
    }

  
    setUserLogin(prevState => {
      return {
        ...prevState,
        user
      }
    });

    e.target.passwordinp.value = ''
    e.target.emailinp.value = ''

    // console.log(userLogin);


   if (validationStaus) {
    //assign validation variable true [home]
    setvalidationStaus(true)
    navigate('/mainList')
   } else {
    //assign validation variable false
    navigate('/signup')
   }
  }

  return (
   <div className='py-[14vh] px-[30vw] h-[66vh]  bg-[#f0efeb] flex flex-col items-center'>
     <h2 className='font-bold text-[2.5rem] text-green-900 pb-2'>Login</h2>
     <form onSubmit={login} className='flex flex-col justify-center items-center gap-6  w-[60%] h-full border-orange-950 border-4 border-yellow-700 p-12 rounded-lg bg-[#fff]'>
      <input required type="email" placeholder="email" name='emailinp' className="input input-bordered input-warning w-[90%]" />
      <input required type="password" placeholder="Password" name='passwordinp' className="input input-bordered input-warning w-[90%]" />
      <button type='submit' className="btn bg-yellow-900 text-yellow-200 text-[1.2em] self-end">Log In</button>
    </form>
   </div>
  )
}

export default Login