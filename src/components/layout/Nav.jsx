import React from 'react'
import { Link } from 'react-router-dom'

function Nav() {
    const imgUrl = 'https://premieriron.backendless.app/api/files/images/logo2.1.png'
  return (
    <div className='h-[10vh] bg-[#D4A373] text-lime-950 font-bold"'>
        <div className="navbar  h-full flex items-center ">
            <figure className="flex-1 rounded-full">
                <Link to={'/'} className='rounded-full' ><img src={imgUrl} alt="Logo" className='rounded-[100%] w-20 h-full' /></Link>
            </figure>
            <div className="flex-none ">
                <ul className="menu menu-horizontal px-1 text-green-950 font-bold">
               <Link><li><p >Home</p></li></Link>
                <li><p>About Us</p></li>
                <li><p>Help</p></li>
                <li><p>Log in</p></li>
                <li><p>Sign up</p></li>
                {/* <li>
                    <details>
                    <summary>
                        Parent
                    </summary>
                    <ul className="p-2 bg-base-100 rounded-t-none">
                        <li><a>Link 1</a></li>
                        <li><a>Link 2</a></li>
                    </ul>
                    </details>
                </li> */}
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Nav