import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/pages/Home';
import Footer from './components/layout/Footer';
import Nav from './components/layout/Nav';
import Login from './components/pages/Login'
import Sign from './components/pages/Sign'
import ChangeWorld from './components/pages/ChangeWorld'
import Reviews from './components/pages/Reviews'
import Profile from './components/pages/Profile'
import Chat from './components/pages/Chat'
import MainList from './components/pages/MainList'
import Record from './components/components/video/Record';
import { useEffect, useState } from 'react';
import ChatTwo from './components/pages/ChatTwo'


function App() {
  //for adding new users
  const [users, setUsers] = useState([])

  //for activete login and sign
  const [validationStaus, setvalidationStaus] = useState(true)

  return (
    <div className="App">
      <Nav validationStaus={validationStaus} setvalidationStaus={setvalidationStaus}/>
      <div className='min-h-[66vh]'>
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/login' element={<Login validationStaus={validationStaus} setvalidationStaus={setvalidationStaus}/>} />
            <Route path='/signup' element={<Sign setUsers={setUsers} validationStaus={validationStaus} setvalidationStaus={setvalidationStaus}/>} />
            <Route path='/changeWorld' element={<ChangeWorld />} />
            <Route path='/reviews' element={<Reviews />} />
            <Route path='/profile' element={<Profile />} />
            <Route path='/chat' element={<ChatTwo />} />
            <Route path='/mainList' element={<MainList />} />
            <Route path='/video' element={<Record />} />

        </Routes>
      </div>
      {console.log(users)}
      <Footer />
    </div>
  );
}

export default App;
