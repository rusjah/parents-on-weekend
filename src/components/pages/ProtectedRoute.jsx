import React from 'react'
import Home from './Home'
import { toast } from 'react-toastify';


function ProtectedRoute({user, children}) {
    const notify = () => toast("You need to login !");
    if (!user) {
        {notify()}
        return <Home />
    } else {
        return <>{children}</>
    }
}

export default ProtectedRoute