import Backendless from "backendless";
import { useContext, useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import {AVATAR,PETS, CHILDREN} from '../data/Data'
import { toast } from "react-toastify";
import axios from "axios";


const { createContext } = require("react");

const AppContext = createContext();

export const AppProvider = ({children}) => {
    const navigate = useNavigate()

    const [currentUser, setCurrentUser] = useState({})
    const [userStatus, setUserStatus] = useState(false)


    function generateAvatar(role, gender) {
        if(role === 'grand' && gender === 'male') return AVATAR.grandfather
        if(role === 'grand' && gender === 'female') return AVATAR.grandmother
        if(role === 'parent' && gender === 'male') return AVATAR.father
        if(role === 'parent' && gender === 'female') return AVATAR.mother
        return AVATAR.default
    }

    function generateOptions(userOptions) {
        let options = {}
        PETS.map(el => {
            userOptions.pets.includes(el.nameId) ? options[`${el.nameId}`] = true 
                                     : options[`${el.nameId}`] = false })
        CHILDREN.map(el => {
            userOptions.children.includes(el.nameId) ? options[`${el.nameId}`] = true 
                                     : options[`${el.nameId}`] = false })
        return options
    }

    const getAge = (date) => {
        const subDate =  new Date() -  new Date(date);
        const years = 365 * 24 * 60 * 60 * 1000;
        return Math.floor(subDate / years)
    }

    async function getReferenseFile(userFile, fileFolder, fileName) {
        const fileUploadResponse = await Backendless.Files.upload(userFile, fileFolder, fileName )
        const fileReference = {
            fileId: fileUploadResponse.fileId,
            fileUrl: fileUploadResponse.fileURL,
            name: fileUploadResponse.name
        }
        return fileReference;
    }

    async function toLogin(userLogin) {
       try {
        const validation = await Backendless.UserService.isValidLogin()
            const res = await Backendless.UserService.login(userLogin.email, userLogin.password, true);
            setCurrentUser(res)
            setUserStatus(true)
            navigate('mainList')
       } catch (e) {
            console.log(e);
       }
    }

    async function toLogout(loginUser) {
        const res = await Backendless.UserService.logout(`${loginUser.email}`, `${loginUser.password}`, true);
        setCurrentUser(null)
        setUserStatus(false)
        navigate('home')
    }

    async function registration(registretedUser, userOptions) {
        const validation = await Backendless.UserService.isValidLogin()
        if (validation) {
            toast('You are login')
            setUserStatus(true)
            navigate('mainList')
            return
        }
        try {
            const options = generateOptions(userOptions);
            const newUser = {...registretedUser}

            newUser.birthday = newUser.birthday ? 
                                new Date(newUser.birthday) : 
                                new Date();


            if (newUser.photo) {
                const fileReference = await getReferenseFile(newUser.photo, 'images', true, `avatar-${Math.random() * 10}`)  
                const photo = {
                    tag: 'avatars',
                    fileReference:  fileReference
                }
                newUser.photo = photo.fileReference.fileUrl
            } else { newUser.photo = generateAvatar(newUser.role, newUser.gender) }

            if (newUser.video) {
                const fileReference = await getReferenseFile(newUser.video, 'videos', `record-${Math.random() * 10}`)  
                const video = {
                    tag: 'records',
                    fileReference: fileReference
                }
                newUser.video = video.fileReference.fileUrl
            }
         

            const user = new Backendless.User(newUser);
            console.log(user,'user');
            const res = await Backendless.UserService.register( user )
            console.log(res, 'userRes');
            setUserStatus(true);
            const opt = await Backendless.Data.of('options').save(options)
            console.log(opt, 'optRes');

            const userRel = { objectId: res.objectId }
            const optRel = { objectId:  opt.objectId}
            const relation = await Backendless.Data.of( "Users" ).addRelation( userRel, "optionsId", [optRel] )
            navigate('mainList')
        } catch(e) {
            console.log(e);
        }
    }

    async function getCurrentUser() {
        const user = await Backendless.Data.of('Users').findById(currentUser.objectId, {
                relations: [`optionsId`]
        })
        console.log(user, 'form cont');
        setCurrentUser(user)
        // return user;
    }

    ////////////////////////////////////////////////////

    function getOptions(opt) {
        const userOptPs = []
        const userOptCh = []
        PETS.map(obj => {
            for(let key in opt) {
                (obj.nameId === key && opt[key]) && userOptPs.push(key)
            }
        })
        CHILDREN.map(obj => {
            for(let key in opt) {
                (obj.nameId === key && opt[key]) && userOptCh.push(key)
            }
        })
        return {pets: userOptPs, children: userOptCh};
    }
    
    //for playing video
    const videoRef = useRef(null)
    function toglePlay () {
      if(videoRef.current.pauser) {
        videoRef.current.play();
      } else {
        videoRef.current.pause()
      }
    }

    
    useEffect(() =>{
        console.log(currentUser,'user from context');
    },[])
   

    return <AppContext.Provider value={{
        toLogin, toLogout, registration,
        currentUser, userStatus,
        getCurrentUser,
        getOptions, getAge, 
        toglePlay, videoRef
        }}>
        {children}
    </AppContext.Provider>
}

export const useAppContext = (() => {
    return useContext(AppContext)
});

