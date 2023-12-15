import Backendless from "backendless";
import { useContext, useEffect, useState } from "react";
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
            fileUrl: fileUploadResponse.fileURL,
            fileId: fileUploadResponse.id,
            name: fileUploadResponse.name
        }
        return fileReference;
    }

    async function toLogin( ) {
       try {
        const validation = await Backendless.UserService.isValidLogin()
            const res = await Backendless.UserService.login("test@gmail.com", '11111', true);
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

            // const axioRes =  await axios.post(
            //                       `https://eu.backendlessappcontent.com/${process.env.REACT_APP_APL_ID}/${process.env.REACT_APP_APP_KEY}/files/images`,
            //                       newUser.photo )

            // console.log(axioRes, 'axios');


            if (newUser.photo) {
                try {
                    const formdata = new FormData();
                    formdata.append("image", newUser.photo);
                    const url = `https://eu.backendlessappcontent.com/${process.env.REACT_APP_APP_ID}/${process.env.REACT_APP_KEY}/files/images`
                    const reph = await axios.post(url,formdata)
                    console.log('photo', reph);
                    newUser.photo = {
                        tag :"photo",
                        url :res.data.fileURL
                    }
                    // const fileReference = await getReferenseFile(newUser.photo, 'images', `avatar-${Math.random() * 10}`)  
                    // newUser.photo = {
                    // tag: 'avatars',
                    // fileReference:  fileReference
                
                } catch(err) {console.log(err)}
            } else { newUser.photo = generateAvatar(newUser.role, newUser.gender) }

            if (newUser.video) {
                const fileReference = await getReferenseFile(newUser.photo, 'videos', `record-${Math.random() * 10}`)  
                newUser.video = {
                    tag: 'records',
                    fileReference: fileReference
                }
            }

            const user = new Backendless.User(newUser);
            const res = await Backendless.UserService.register( user )
            console.log(res, 'userRes');
            setUserStatus(true);
            const opt = await Backendless.Data.of('options').save(options)
            console.log(opt, 'optRes');

            const userRel = { objectId: res.objectId }
            const optRel = { objectId:  opt.objectId}
            const relation = await Backendless.Data.of( "Users" ).addRelation( userRel, "optionsId", [optRel] )
            console.log(relation, 'realation');
            navigate('mainList')
        } catch(e) {
            console.log(e);
        }
    }

    

    
    useEffect(() =>{
        console.log(currentUser,'user from context');
    },[])
   

    return <AppContext.Provider value={{
        toLogin, toLogout, registration,
        currentUser, userStatus
        }}>
        {children}
    </AppContext.Provider>
}

export const useAppContext = (() => {
    return useContext(AppContext)
});

