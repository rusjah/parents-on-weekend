import Backendless from "backendless";
import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {AVATAR,PETS, CHILDREN} from '../data/Data'
import { toast } from "react-toastify";


const { createContext } = require("react");

const AppContext = createContext();

export const AppProvider = ({children}) => {
    //for protecting routing
    const [userStatus, setUserStatus] = useState(true)
    const [currentUser, setCurrentUser] = useState({})
    const [userId, setUserId] = useState()
    // let userId = '';
    const navigate = useNavigate()

    function generateAvatar(role, gender) {
        if(role === 'grand' && gender === 'male') return AVATAR.grandfather
        if(role === 'grand' && gender === 'female') return AVATAR.grandmother
        if(role === 'parent' && gender === 'male') return AVATAR.father
        if(role === 'parent' && gender === 'female') return AVATAR.mother
        return AVATAR.mother
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

    const getAge = (date) => {
        const subDate =  new Date() -  new Date(date);
        const years = 365 * 24 * 60 * 60 * 1000;
        return Math.floor(subDate / years)
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

            newUser.birthday = new Date(newUser.birthday)

            const user = new Backendless.User(newUser);

            const res = await  Backendless.UserService.register(user)
            // userId = res.objectId
            setUserId(res.objectId)

            const optRes = await Backendless.Data.of('options').save(options)
            
            const userRel = { objectId: userId };
            const optRel = { objectId:  optRes.objectId}; 
            // await Backendless.Data.of( "options" ).addRelation( optRel, "userId", [userRel] )
            await Backendless.Data.of( "Users" ).addRelation( userRel, "optionsId", [optRel] )

            setUserStatus(i => true)
            navigate('/profile')
            
        } catch(error) {
            if (error.code === 3033) {
                toast("You already have account! Please, Log In");
                navigate('login')
            }
            console.log(`error - ${error.message}`)
        }
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

   
    async function findUsersData() {
        try {
            // const curr =  await Backendless.UserService.getCurrentUser()
            const curr = await Backendless.Data.of("Users").find( {
                    relations: [`optionsId`]
                })
            setCurrentUser(curr[0])
        } catch {
            console.log('err');
        }
    }

    function getOptions(opt) {
        const userOptPs = []
        const userOptCh = []
        PETS.map(obj => {
            for(let key in opt) {
                if(obj.nameId === key && opt[key]) {
                    userOptPs.push(key)
                }
            }
        })
        CHILDREN.map(obj => {
            for(let key in opt) {
                if(obj.nameId === key && opt[key]) {
                    userOptCh.push(key)
                }
            }
        })
        return {pets: userOptPs, children: userOptCh};
    }

    useEffect(() => {
        findUsersData()
    }, [])

    return <AppContext.Provider value={{
        userStatus, setUserStatus,
        registration, loginUser, logoutUser,
        findUsersData, currentUser, 
        getAge, getOptions, userId
        }}>
        {children}
    </AppContext.Provider>
}

export const useAppContext = (() => {
    return useContext(AppContext)
});

