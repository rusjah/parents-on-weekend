import React, { useEffect, useState } from 'react'
import Home from './Home'
import { toast } from 'react-toastify';
import { useAppContext } from '../../context/AppContext';

function ProtectedRoute({isUerLogedIn, children}) {
    const {userStatus, currentUser} = useAppContext()
    const [user, setUser] = useState(null)

    useEffect(() => {
        const savedUser =JSON.parse(localStorage.getItem('currentUser'));
        setUser(savedUser);
    },[])

    const notify = () => toast("You need to login !");
    if (!currentUser || !user) {
        // {notify()}
        return <Home />
    } else {
        return <>{children}</>
    }
}

export default ProtectedRoute