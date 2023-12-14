import Backendless from "backendless";
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import {AVATAR,PETS, CHILDREN} from '../data/Data'

const { createContext } = require("react");

const AppContext = createContext();

export const AppProvider = ({children}) => {
    //for protecting routing
    const [userStatus, setUserStatus] = useState(true)
    let userId = '';
    const navigate = useNavigate()

    function generateAvatar(role, gender) {
        if(role === 'grand' && gender === 'male') return AVATAR.grandfather
        if(role === 'grand' && gender === 'female') return AVATAR.grandmother
        if(role === 'parent' && gender === 'male') return AVATAR.father
        if(role === 'parent' && gender === 'female') return AVATAR.mother
        if(gender === 'another') return AVATAR.mother
    }

    function generateOptions(pets, children) {
        let optionsData = {}
        PETS.map(el => {
            pets.includes(el.nameId) ? optionsData[`${el.nameId}`] = true 
                                     : optionsData[`${el.nameId}`] = false
        })
        CHILDREN.map(el => {
            children.includes(el.nameId) ? optionsData[`${el.nameId}`] = true 
                                     : optionsData[`${el.nameId}`] = false
        })
        return optionsData
    }

   


    async function  registration(userData, pets, children) {
        let options = generateOptions(pets, children);
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

            console.log('role',newUser.role)
            console.log('gender',newUser.gender)
            console.log(newUser.photo)

            newUser.birthday = new Date(newUser.birthday)

            const user = new Backendless.User(newUser);

            const res = await  Backendless.UserService.register(user )
            userId = res.objectId;

            const optRes = await Backendless.Data.of('options').save(options)
            
            const userRel = { objectId: userId };
            const optRel = { objectId:  optRes.objectId}; 
            await Backendless.Data.of( "Users" ).addRelation( userRel, "optionsId", [optRel] )

            setUserStatus(i => true)
            navigate('/profile')
            
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
        userStatus, registration, loginUser, logoutUser, setUserStatus,
        }}>
        {children}
    </AppContext.Provider>
}

export const useAppContext = (() => {
    return useContext(AppContext)
});

