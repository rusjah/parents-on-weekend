import Backendless from "backendless";
import { useContext, useState } from "react";

const { createContext } = require("react");

const AppContext = createContext();

export const AppProvider = ({children}) => {
    const [user, setUser] = useState(null)
  
    // const handleLogin = (newUser) => setUser({newUser})
    // const handleLogout = () => setUser(null)

    //initialize backendless

    const API_KEY = process.env.REACT_APP_API_KEY_PT;
    const APL_ID = process.env.REACT_APP_APL_ID_PT;

    Backendless.serverURL = "https://eu-api.backendless.com"
    Backendless.initApp( APL_ID, API_KEY );

    return <AppContext.Provider value={{
      
        }}>
        {children}
    </AppContext.Provider>
}

export const useAppContext = (() => {
    return useContext(AppContext)
});

