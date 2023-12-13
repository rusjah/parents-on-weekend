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
  Backendless.serverURL = "https://eu-api.backendless.com"
  Backendless.initApp( "4FFC35BA-38AF-2133-FF38-3C841423A400", "0821E1EC-0FFE-40BF-B0E7-B56560568E79" );
  //for adding new users
 const {userStatus} = useAppContext()

  //for activete login and sign
  const [user, setUser] = useState([])
  const [validationStaus, setvalidationStaus] = useState(true)

  return (
    <div className="App">
      <Nav/>
      <div className='min-h-[66vh]'>
      <Routes>
            <Route index element={<Home />} />
            <Route path='home' element={<Home />} />
            <Route path='login' element={<Login validationStaus={validationStaus} setvalidationStaus={setvalidationStaus}/>} />
            <Route path='signup' element={<Sign  setUsers={setUser} validationStaus={validationStaus} setvalidationStaus={setvalidationStaus}/>} />
            <Route path='changeWorld' element={<ChangeWorld />} />
           
            <Route path='reviews' element={<ProtectedRoute user={userStatus} >
                                              <Reviews />
                                           </ProtectedRoute>} />

            <Route path='chat' element={<ProtectedRoute user={userStatus} >
                                              <ChatTwo />
                                            </ProtectedRoute>} />
            <Route path='profile' element={<ProtectedRoute user={userStatus} >
                                              <Profile  />
                                           </ProtectedRoute>} />

            <Route path='mainList' element={<ProtectedRoute user={userStatus} >
                                              <MainList  />
                                            </ProtectedRoute>} />
            
            <Route path='*' element={<Home />} />

        </Routes>

        {/* <Routes>
            <Route path='/' element={<Home />} />
            <Route path='login' element={<Login validationStaus={validationStaus} setvalidationStaus={setvalidationStaus}/>} />
            <Route path='signup' element={<Sign  setUsers={setUser} validationStaus={validationStaus} setvalidationStaus={setvalidationStaus}/>} />
            <Route path='changeWorld' element={<ChangeWorld />} />
            <Route path='reviews' element={<Reviews />} />
            <Route path='profile' element={<Profile  />} />
            <Route path='chat' element={<ChatTwo />} />
            <Route path='mainList' element={<MainList />} />
            <Route path='test' element={<Test />} />

        </Routes> */}
      </div>
      {console.log(user)}
      <Footer />


      <ToastContainer />
    </div>
  );
}

export default App;
