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

    function setForUserID (id) {
        setUserId(id);
    }

    function validation() {
        Backendless.UserService.isValidLogin()
            .then(res => {
                res ? statusTrue() : statusFalse()
                res && navigate('mainList')
                return;
            })
            .catch(err => console.log(err))
    }

       function registration(userData,pets,children) {

        validation()
        
        let options = generateOptions(pets, children);
        const newUser= {...userData}

        if (userData.photo) {
            Backendless.Files.upload(userData.photo, 'photo')
                .then( res => newUser.photo = res.fileURL)
                .catch(err => console.log(err))   
        } else {
            newUser.photo = generateAvatar(newUser.role, newUser.gender)
        }

        if (userData.video) {
            Backendless.Files.upload(userData.video, 'video')
                .then( res => newUser.video = res.fileURL)
                .catch(err => console.log(err))
            
        }

        setForUserID('registrations', newUser.video)


        newUser.birthday =  new Date(newUser.birthday)

        const user = new Backendless.User(newUser);
        Backendless.UserService.register( user )
        .then( res => {
            statusTrue();
            console.log(res, 'registrations');
            Backendless.Data.of('options').save(options)
                .then(opt => {
                    const userRel = { objectId: res.objectId };
                    const optRel = { objectId:  opt.objectId}; 
                    Backendless.Data.of( "Users" ).addRelation( userRel, "optionsId", [optRel] )
                        .then(ress => {
                            setCurrentUser(cur => newUser)
                            findUser(ress.objectId)
                            navigate('mainList')
                            console.log(ress, 'regis')})
                        .catch(err => console.log(err))
                })
        })
        .catch(err => {
            if (err.code === 3033) {
                toast("You already have account! Please, Log In");
                navigate('login')}
            console.log(`error - ${err.message}`)
        })
       
      }

      function toLogin(loginBy) {
        validation()
        const email = loginBy.email
        const password = loginBy.password
        Backendless.UserService.login(email, password, true )
            .then( res => {
                statusTrue() 
                const curUser = res
                findUser(res.objectId)
                
                navigate('mainList')
            })
            .catch(err =>console.log(err))
      }

      function findUser(objectId) {
    //    Backendless.UserService.getCurrentUser().then( res => {
            Backendless.Data.of("Users").find({
                    where : "objectId = '" + objectId + "'",
                    relations: [`optionsId`]
                })
                .then(ek=> {
                    console.log(ek, 'from find')
                    setCurrentUser(ek[0])})
                .catch(err=>console.log(err,'find'))
      }

    function toLogout() {
        Backendless.UserService.logout()
            .then( res => {
                setCurrentUser(i => {})
                statusFalse()
                navigate('home')
            })
            .catch(err => console.log(err))    
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

    useEffect(() =>{
        console.log('id', userId)
        // findUser()
      },[])
   

    function statusTrue() {
        setUserStatus(true)
    }

    function statusFalse() {
        setUserStatus(false)
    }

    return <AppContext.Provider value={{
            userStatus, statusFalse,statusTrue,
            registration,toLogin,toLogout, 
            findUser, currentUser,
            getAge, getOptions
        }}>
        {children}
    </AppContext.Provider>
}

export const useAppContext = (() => {
    return useContext(AppContext)
});

