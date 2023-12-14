import Backendless from "backendless";
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import {AVATAR} from '../components/data/Data'

const { createContext } = require("react");

const AppContext = createContext();

export const AppProvider = ({children}) => {
    //for protecting routing
    const [userStatus, setUserStatus] = useState(true)
    const userId = '';
    const navigate = useNavigate()

    function generateAvatar(role, gender) {
        if(role === 'grand' && gender === 'men') return AVATAR.grandfather
        if(role === 'grand' && gender === 'woomen') return AVATAR.grandmother
        if(role === 'parent' && gender === 'men') return AVATAR.father
        if(role === 'parent' && gender === 'foomen') return AVATAR.mother
    }


    async function  registration(userData) {
        const newUser= {...userData}

        try {
            if (userData.video) {
                const videoURLs = await Backendless.Files.upload(userData.video, 'video')
                newUser.video = videoURLs.fileURL;
            }
            if (userData.photo) {
                const imgURLs = await Backendless.Files.upload(userData.photo, 'photo')
                newUser.photo = imgURLs.fileURL;
            } else {
                newUser.photo = generateAvatar(newUser.role, newUser.gender)
            }

            newUser.birthday = new Date(newUser.birthday)

            const user = new Backendless.User(newUser);

            const res = await  Backendless.UserService.register(user )
            setUserStatus(i => true)
            navigate('/profile')
            userId = res.objectId;
            
        } catch(error) {
            console.log(`error - ${error.message}`)
        }

        console.log(newUser.video, 'video');
        console.log(newUser.photo, 'photo');
    }

    //make login
    async function loginUser(userData) {
        const email = userData.email
        const password = userData.password
        await Backendless.UserService.login(email, password, true )
        setUserStatus(i => true)
        navigate('mainList')
    }

      //make logout
    async function logoutUser() {
        await Backendless.UserService.logout()
        setUserStatus(i => false)
        navigate('home')
    }


    return <AppContext.Provider value={{
        userStatus, registration, loginUser, logoutUser, setUserStatus
        }}>
        {children}
    </AppContext.Provider>
}

export const useAppContext = (() => {
    return useContext(AppContext)
});

