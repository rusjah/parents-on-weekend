import React, { useEffect, useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import Notification from '../components/Notification';
import logo from '../../images/logo2.1-min.png'
import { useAppContext } from '../../context/AppContext';


function Nav({notification, setNotification}) {
    const { toLogout, userStatus, currentUser} = useAppContext()
    const navigate = useNavigate();
    const location = useLocation();
// const userStatus = true
    

    //is true when user bekome new msg
    // let notification = false

    const [showSubMenu, setShowSubMenu] = useState(false)

    function hiddenMenu() {
        setShowSubMenu(i => false)
    }

    function showMenu() {
        setShowSubMenu(i => true)
    }

    function recieveNewMsg() {
        setNotification(i => false)
    }

    useEffect(() => {
        if (location.hash) {
        const element = document.getElementById(location.hash.substring(1));
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
        } else {
        window.scrollTo({ top: 0, behavior: 'smooth' });
        }
    }, [location]);

   

  return (
    <div className='h-[7vh] lg:h-[10vh] bg-[#D4A373] text-lime-950 font-bold  sticky top-0 z-50 '>
        <div className="navbar  h-full flex items-start md:items-center">
            <figure className="flex-1 rounded-full">
                <Link to={'/'} className='rounded-full h-full' ><img src={logo} alt="Logo" className='rounded-[100%] w-8 md:w-16 h-full' /></Link>
            </figure>

            <div className="md:flex flex-none ">

                <div className="dropdown dropdown-endh-full mt-[-12px] list-none flex md:hidden ">
                   {currentUser && <Link to={'/chat'} onClick={recieveNewMsg}>
                        <li className='relative'>
                            <Notification notification={notification}/>
                            <p className='text-[1.5em] mt-2'><ion-icon name="chatbubble-outline"></ion-icon></p>
                        </li>
                    </Link>
                    }
                    <>
                        <div onClick={showMenu} tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar h-full ">
                            <div className="w-8 h-full rounded-full  mt-3">
                            <p className='text-[1.5em] h-full'><ion-icon name="person-outline"></ion-icon> </p>
                            {/* <img alt="Tailwind CSS Navbar component" src={userImgUrl} className='h-full' /> */}
                            </div>
                        </div>
                        <ul onClick={hiddenMenu} tabIndex={0} className={showSubMenu ? `menu menu-sm dropdown-content mt-12 z-[1] p-2 shadow bg-base-100 rounded-box w-52 right-1`: 'hidden'}>
                            <Link to={'/'}><li><p >Home</p></li></Link>
                            <Link to={'/#about'}><li><p>About Us</p></li></Link>
                            {/* <Link to={'/changeWorld'}><li><p>Help</p></li></Link> */}
                            {!currentUser && <>
                                <Link to={'/login'}><li><p>Log in</p></li></Link> 
                                <Link to={'/sign'}><li><p>Sign up</p></li></Link>
                            </>}
                            {currentUser && <>
                                <Link to={'/mainList'}><li><p >People</p></li></Link>
                                <Link to={'/reviews'}><li><p >Reviews</p></li></Link>
                                <Link to={'/profile'}><li><p >Profile</p></li></Link>
                                <li onClick={toLogout}><p>Log out</p></li>

                         </>}
                        </ul>
                    </>
                </div>

                <ul className="hidden md:flex menu menu-horizontal px-1 text-green-950 font-bold">
                    <Link to={'/'}><li><p >Home</p></li></Link>
                    <Link to={'/#about'}><li><p>About Us</p></li></Link>
                    {/* <Link to={'/changeWorld'}><li><p>Help</p></li></Link> */}
                    {!currentUser && <>
                        <Link to={'/login'}><li><p>Log in</p></li></Link> 
                        <Link to={'/sign'}><li><p>Sign up</p></li></Link>
                    </>}
                    {currentUser && <>
                        <Link to={'/mainList'}><li><p >People</p></li></Link>
                        <Link to={'/reviews'}><li><p >Reviews</p></li></Link>
                        <Link to={'/chat'} onClick={recieveNewMsg}><li className='relative'>
                            <Notification notification={notification}/>
                            <p className='text-[1.5em]'><ion-icon name="chatbubble-outline"></ion-icon></p>
                        </li></Link>
                        <Link to={'/profile'}><li><p className='text-[1.5em]'><ion-icon name="person-outline"></ion-icon></p></li></Link>
                        <li onClick={toLogout}><p>Log out</p></li>

                    </>}
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Nav