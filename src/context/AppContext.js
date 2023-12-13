import Backendless from "backendless";
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";

const { createContext } = require("react");

const AppContext = createContext();
const photoPets = [
     {
        title: 'dog',
        url: "https://ik.imagekit.io/gdvzxjp5x/parentsOnWeekend/photos/pets/dog.jpg"
    },
    {
        title: 'cat',
        url: "https://ik.imagekit.io/gdvzxjp5x/parentsOnWeekend/photos/pets/cat.jpg"
    },
    {
        title: 'fish',
        url: "https://ik.imagekit.io/gdvzxjp5x/parentsOnWeekend/photos/pets/fish.jpg"
    },
    {
        title: 'bird',
        url: "https://ik.imagekit.io/gdvzxjp5x/parentsOnWeekend/photos/pets/bird.jpg"
    },
    {
        title: 'rabbit',
        url: "https://ik.imagekit.io/gdvzxjp5x/parentsOnWeekend/photos/pets/rabbit.jpg"
    },
    {
        title: 'reptilien',
        url: "https://ik.imagekit.io/gdvzxjp5x/parentsOnWeekend/photos/pets/reptilien.jpg"
    },
    {
        title: 'another',
        url: "https://ik.imagekit.io/gdvzxjp5x/parentsOnWeekend/photos/pets/another.jpg"
    },
]
const childrenPhotos = [
    { 
        title: "baby",
        url: "https://ik.imagekit.io/gdvzxjp5x/parentsOnWeekend/photos/children/baby.jpg"
    },
    { 
        title: "four to six",
        url: "https://ik.imagekit.io/gdvzxjp5x/parentsOnWeekend/photos/children/five.jpg"
    },
    { 
        title: "seven to nine",
        url: "https://ik.imagekit.io/gdvzxjp5x/parentsOnWeekend/photos/children/eight.jpg"
    },
    { 
        title: "ten to twelve",
        url: "https://ik.imagekit.io/gdvzxjp5x/parentsOnWeekend/photos/children/eleven.jpg"
    },
    { 
        title: "twelve+",
        url: "https://ik.imagekit.io/gdvzxjp5x/parentsOnWeekend/photos/children/mehr.jpg"
    },
    
]

const photosAvatar = {
    mother:"https://ik.imagekit.io/gdvzxjp5x/parentsOnWeekend/photos/users/mother.jpg",
    father:"https://ik.imagekit.io/gdvzxjp5x/parentsOnWeekend/photos/users/father.jpg",
    grandmother:"https://ik.imagekit.io/gdvzxjp5x/parentsOnWeekend/photos/users/grandmother.jpg",
    grandfather: "https://ik.imagekit.io/gdvzxjp5x/parentsOnWeekend/photos/users/grandfather.jpg"
}



export const AppProvider = ({children}) => {
    //for protecting routing
    const [userStatus, setUserStatus] = useState(true)
    const navigate = useNavigate()

    //functions for catch data from form 
    // const loginData = (userObj, e) {
    //         userObj
    // }

    //initialize backendless

    


     function  registration(userData) {
        // const newUser= {...userData}
        // newUser.photo = 'kaaka'
        // newUser.video = 'ajdfkj'
        console.log(userData, '');
        // try {
        //     const videoURLs = await Backendless.Files.upload(userData.video, 'video')
        //     newUser.video = videoURLs;
            
        //     const imgURLs = await Backendless.Files.upload(userData.photo, 'photo')
        //     newUser.photo = imgURLs;


            var user = new Backendless.User();
            user.email = userData.email
            user.fname = userData.fname;
            user.password =userData.password
            // user.lname = "lname"
            // user.birthday = "Wed Dec 13 2023 15:21:22 GMT+0100 (Central European Standard Time)"
            // user.about = "kjfkajkdjks"
            // user.role = "parent"
            // user.state = "go"
            // user.helpType = "pets"
            // user.phone = "+4915122332231"
            // user.gender="men"
            // user.photo = "s"
            // user.video = "s"

            Backendless.UserService.register(user )
                .then( res => {
                    setUserStatus(i => true)
                    // if (user) {
                    //     navigate('/profile')
                    // }

                    console.log('registar', res);
                } )
                .catch( err => {
                    console.log('resgi', err.code);
                });
         
        //   } catch(error) {
        //     console.log(`error - ${error.message}`)
        //   }

    }

    //make login
    function loginUser(userData) {
        const email = userData.email
        const password = userData.password
        Backendless.UserService.login('my@gmail.com', '11111', true )
        .then( res => {
            setUserStatus(i => true)
            console.log(res);
        } )
        .catch( err => {console.log(err)} );
    }


    return <AppContext.Provider value={{
        photoPets, childrenPhotos,
        userStatus, registration, loginUser, setUserStatus
        }}>
        {children}
    </AppContext.Provider>
}

export const useAppContext = (() => {
    return useContext(AppContext)
});

