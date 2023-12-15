import Backendless from "backendless";
import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {AVATAR,PETS, CHILDREN} from '../data/Data'
import { toast } from "react-toastify";


const { createContext } = require("react");

const AppContext = createContext();

export const AppProvider = ({children}) => {

    const [currentUser, setCurrentUser] = useState({})
    const [userStatus, setUserStatus] = useState(false)

    const [userId, setUserId] = useState()
    const navigate = useNavigate()

    

    async function toLogin( ) {
       try {
        const res = await Backendless.UserService.login("test@gmail.com", '11111', true);
        setCurrentUser(res)
        setUserStatus(true)
        console.log(res, 'login')
       } catch (e) {
            console.log(e);
       }
    }

    async function toLogout(loginUser) {
        const res = await Backendless.UserService.logout(`${loginUser.email}`, `${loginUser.password}`, true);
        setCurrentUser(null)
        setUserStatus(false)
        console.log(res, 'logput');
    }

    
    useEffect(() =>{
        console.log(currentUser,'user from context');
    },[])
   

    return <AppContext.Provider value={{
        toLogin, toLogout, 
        currentUser, userStatus
        }}>
        {children}
    </AppContext.Provider>
}

export const useAppContext = (() => {
    return useContext(AppContext)
});

