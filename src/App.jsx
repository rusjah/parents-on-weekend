import { Link, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/pages/Home';
import Footer from './components/layout/Footer';
import Nav from './components/layout/Nav';
import Login from './components/pages/Login'
import Sign from './components/pages/Sign'
import ChangeWorld from './components/pages/ChangeWorld'
import Reviews from './components/pages/Reviews'
import Profile from './components/pages/Profile'
import MainList from './components/pages/MainList'
import { useEffect, useState } from 'react';
import ChatTwo from './components/pages/ChatTwo'
import { useAppContext } from './context/AppContext';
import Test from './components/Test';
import ProtectedRoute from './components/pages/ProtectedRoute';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Backendless from 'backendless';



function App() {
  const ID = process.env.REACT_APP_APL_ID
  const API = process.env.REACT_APP_APP_KEY
  Backendless.serverURL = "https://eu-api.backendless.com"
  Backendless.initApp(ID,API);


  const [notification, setNotification] = useState(false)
  const [isNewMsgs, setIsNewMsgs] = useState(false)
  const [currentUserId, setCurrentUserId] = useState()

  async function getUserId() {
    try {
      const user = (await Backendless.UserService.getCurrentUser())
      user && setCurrentUserId(i => user.objectId)
    } catch (e) {
      console.log('Now isn')
    }
   
  }

  useEffect(() => {
    getUserId()
    return setCurrentUserId(null)
  }, [])
  

  return (
    <div className="App">
      <Nav notification={notification} setNotification={setNotification}/>
      <div className='min-h-[66vh]'>
      <Routes>
            <Route index element={<Home />} />
            <Route path='home' element={<Home />} />
            <Route path='login' element={<Login />} />
            <Route path='sign' element={<Sign />} />
            {/* <Route path='changeWorld' element={<ChangeWorld />} /> */}
           
            <Route path='reviews' element={<ProtectedRoute  >
                                              <Reviews />
                                           </ProtectedRoute>} />

            <Route path='chat' element={<ProtectedRoute  >
                                              <ChatTwo notification={notification} setNotification={setNotification} currentUserId={currentUserId} isNewMsgs={isNewMsgs} setIsNewMsgs={setIsNewMsgs}/>
                                            </ProtectedRoute>} />
            <Route path='profile' element={<ProtectedRoute  >
                                              <Profile  />
                                           </ProtectedRoute>} />

            <Route path='mainList' element={<ProtectedRoute  >
                                              <MainList  />
                                            </ProtectedRoute>} />
            
            <Route path='*' element={<Home />} />

        </Routes>
      </div>
      <Footer />


      <ToastContainer />
    </div>
  );
}

export default App;
