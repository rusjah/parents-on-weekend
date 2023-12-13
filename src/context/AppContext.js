import Backendless from "backendless";
import { useContext, useState } from "react";

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


export const AppProvider = ({children}) => {
    const photosAvatar = {}
   
    // const [user, setUser] = useState({
    //    name: 'ana'
    // })
  
    const [user, setUser] = useState(null)

    // const handleLogin = (newUser) => setUser({newUser})
    // const handleLogout = () => setUser(null)

    //initialize backendless

    const API_KEY = process.env.REACT_APP_API_KEY_PT;
    const APL_ID = process.env.REACT_APP_APL_ID_PT;

    Backendless.serverURL = "https://eu-api.backendless.com"
    Backendless.initApp( APL_ID, API_KEY );

    return <AppContext.Provider value={{
        photoPets, childrenPhotos,
        user, setUser
        }}>
        {children}
    </AppContext.Provider>
}

export const useAppContext = (() => {
    return useContext(AppContext)
});

