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
    const [editModalStatus, setEditModalStatus] = useState(false)
    const [editModalContent, setEditModalContent] = useState('')
    const [allUsers, setAllUsers] = useState([])

    const [isFilter, setIsFilter] = useState(false)
    let [filters, setFilters] = useState([])
    const [filteredUsers, setFilteredUsers] = useState([])

    const [usersModalStatus, setUsersModalStatus] = useState(false)
    const [usersModalContent, setUsersModalContent] = useState()

    const [reviews, setReviews] = useState([])




    const [chats, setChats] = useState([])
    const [activeChat, setActiveChat] = useState({})
    const [messages, setMessages] = useState([])





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

    async function validationCheck () {
        const validation = await Backendless.UserService.isValidLogin()
        if (validation) {
            toast('You are login')
            setUserStatus(true)
            navigate('mainList')
            return
        }
    }

    async function toLogin(userLogin) {
        // validationCheck()
       try {
            const res = await Backendless.UserService.login(userLogin.email, userLogin.password, true);
            setCurrentUser(res)
            setUserStatus(true)
            // toast('')
            navigate('home')
       } catch (e) {
            if (e.code === 3003) {
                toast('Your password or email is not correct...\n Please, try again...')
            }
            // console.log(e, 'login err');
       }
    }

    async function toLogout(loginUser) {
        const res = await Backendless.UserService.logout(`${loginUser.email}`, `${loginUser.password}`, true);
        setCurrentUser(null)
        setUserStatus(false)
        navigate('home')
    }


    async function registration(registretedUser, userOptions) {
        // validationCheck()
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
            const res = await Backendless.UserService.register( user )
            setUserStatus(true);
            const opt = await Backendless.Data.of('options').save(options)
            const userRel = { objectId: res.objectId }
            const optRel = { objectId:  opt.objectId}
            const relation = await Backendless.Data.of( "Users" ).addRelation( userRel, "optionsId", [optRel] )
            toast('Welcome, to our platphorm. Please, login to your profile')
            navigate('login')
        } catch(e) {
            // console.log(e, 'regestration err', e.code);
        }
    }

    async function getCurrentUser() {
       try {
        const refCur = await Backendless.UserService.getCurrentUser()
        const user = await Backendless.Data.of('Users').findById(refCur.objectId, {
            relations: [`optionsId`]
        })
        setCurrentUser(user)
        setUserStatus(i => true)
       } catch(e) {
        // console.log('error get current ', e);
       }
        // return user;
    }

    async function updateUser(updatedProp, userOptions) {
        try {
            if (updatedProp.birthday) {
                updatedProp.birthday = new Date(updatedProp.birthday)
             } else { new Date() }

            if (updatedProp.video)  {
                const fileReference = await getReferenseFile(updatedProp.video, 'videos', `record-${Math.random() * 10}`)  
                const video = {
                    tag: 'records',
                    fileReference: fileReference
                }
                updatedProp.video = video.fileReference.fileUrl 
            }
            if(updatedProp.photo){
                const fileReference = await getReferenseFile(updatedProp.photo, 'images', true, `avatar-${Math.random() * 10}`)  
                const photo = {
                    tag: 'avatars',
                    fileReference:  fileReference
                }
                updatedProp.photo = photo.fileReference.fileUrl
            }
            const options = generateOptions(userOptions);


            const currentUser = await Backendless.UserService.getCurrentUser()
            const obj = {
                objectId: currentUser.objectId,
                ...updatedProp
            }
            const update = await Backendless.Data.of( "Users" ).save( obj)
            const opt = await Backendless.Data.of('options').save(options)
            getCurrentUser()
            setEditModalStatus(i => false)
            changeEditModalContent('')
        } catch(e) {
            // console.log('update', e);
        }
    }

    async function getAllUsers(cond) {
        try {
           const role = currentUser.role === 'grand' ? 'parent' : 'grand'
           const users = await Backendless.Data.of("Users").find({
                where : "role =  '" + role + "'",
                relations: [`optionsId`]
                })
            setAllUsers(users)
        } catch (e) {
            // console.log(e, 'get all');
        }
    }

    //filtering

    function isFilterCheck() {
        filters.length > 0 ? setIsFilter(true) : setIsFilter(false)
    }

    function togleFilter(filterProp) {
        const existingFilterIndex = filters.findIndex(el => el.name === filterProp.name);
      
        if (existingFilterIndex !== -1) {
          // If the filter exists, remove it
          const updatedFilters = filters.filter(el => el.name !== filterProp.name);
          setFilters(updatedFilters);
        } else {
          setFilters(i => [...i, filterProp]);
        }
      }

      function filterUsers() {
        if (filters.length === 0) return;
      
        const filteredUsers = allUsers.filter(user => {
          for (const filter of filters) {
            if (filter.status !== user.optionsId[filter.name]) {
              return false; // Exclude user if any filter condition doesn't match
            }
          }
          return true; // Include user if all filter conditions match
        });
      
        setFilteredUsers(filteredUsers);
      }

    // ////////////////////////////////////////////////////

    function getOptions(opt) {
        const userOptPs = []
        const userOptCh = []
        opt && PETS.map(obj => {
            for(let key in opt) {
                (obj.nameId === key && opt[key]) && userOptPs.push(key)}
        })
        opt && CHILDREN.map(obj => {
            for(let key in opt) {
                (obj.nameId === key && opt[key]) && userOptCh.push(key)}
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

    //for open modal window to edit profile
    function changeEditModalStatus() {
        setEditModalStatus(i => true)
    }
    function changeEditModalContent(content) {
        setEditModalContent(i => content)
    }
    function closeEditModal(){
        setEditModalStatus(i => false)
        changeEditModalContent('')
    }


    //for open modal window about user
    function changeUsertModalStatus() {
       setUsersModalStatus(i => true)
    }
    function changeUserModalContent(content) {
        setUsersModalContent(i => content)
    }
    function closeUserModal(){
        setUsersModalStatus(i => false)
        changeUserModalContent('')
    }


    async function saveReview(review) {
        try {
            const send = await Backendless.Data.of('reviews').save(review)
            const userRel = { objectId: send.objectId }
            const optRel = { objectId:  currentUser.objectId}
            const relation = await Backendless.Data.of( "reviews" ).addRelation( userRel, "usersId", [optRel] )
            const savedReview = await Backendless.Data.of('reviews').findById(send.objectId, {
                relations: ['usersId'] // Include 'usersId' relation to fetch user data
              });
          
            setReviews(i => [ savedReview, ...i])
        } catch (err) {
            // console.log(err)
        }
    }

    async function getAllReviws() {
        try {
            const reviws = await Backendless.Data.of('reviews').find( {
                relations: ['usersId']
              });
            setReviews(i => reviws)
        } catch(e) {
            // console.log(e);
        }
    }

    const [togleReview, setTogleReview] = useState(false)
    const [filteredReviw, setFilteredReviw] = useState([])

    async function filterReviw() {
        console.log(togleReview);
       if (togleReview) {
             setTogleReview(false)
        } else {
            const curUsr = await Backendless.UserService.getCurrentUser()
            const filteredRev = reviews.filter(el =>el.usersId.objectId === curUsr.objectId)
            setFilteredReviw(i => filteredRev)
            setTogleReview(true)
        }
        
    }




    // const [chats, setChats] = useState([])
    // const [activeChat, setActiveChat] = useState({})
    // const [messages, setMessages] = useState([])
    const [recieverID, setRecieverID] = useState('')

    function sendNewMessage(newMsg) {
        setMessages(i => [...i, newMsg])
    }

    function setRevievedID(id) {
        setRecieverID(id)
    }


    useEffect(() =>{
        isFilterCheck()
        filterUsers()
    },[filters])


    useEffect(() =>{
        getAllReviws()
        getAllUsers()
    },[])
   

    return <AppContext.Provider value={{
        toLogin, toLogout, registration,
        currentUser, userStatus,
        getCurrentUser, updateUser, 
        getAllUsers,allUsers, filterUsers,
        getOptions, getAge, 
        toglePlay, videoRef,
        changeEditModalStatus, editModalStatus,
        changeEditModalContent, editModalContent,
        closeEditModal,
        
        changeUserModalContent, changeUsertModalStatus,
        usersModalContent, usersModalStatus, closeUserModal,

        isFilter, togleFilter, filteredUsers, filterUsers, 

        saveReview, reviews, getAllReviws,filteredReviw, togleReview, filterReviw,

        sendNewMessage, setRevievedID, recieverID,

        }}>
        {children}
    </AppContext.Provider>
}

export const useAppContext = (() => {
    return useContext(AppContext)
});

