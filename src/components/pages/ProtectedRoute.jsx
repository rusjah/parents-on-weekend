import React from 'react'
import Home from './Home'
import { toast } from 'react-toastify';
import { useAppContext } from '../../context/AppContext';

function ProtectedRoute({user, children}) {
    const {userStatus, currentUser} = useAppContext()
    // const userStatus = true

    const notify = () => toast("You need to login !");
    if (!currentUser) {
        // {notify()}
        return <Home />
    } else {
        return <>{children}</>
    }
}

export default ProtectedRoute