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


function App() {
  return (
    <div className="App">
      <Nav />
      <div className='min-h-[66vh]'>
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/login' element={<Login />} />
            <Route path='/signup' element={<Sign />} />
            <Route path='/changeWorld' element={<ChangeWorld />} />
            <Route path='/reviews' element={<Reviews />} />
            <Route path='/profile' element={<Profile />} />
            <Route path='/chat' element={<Chat />} />
            <Route path='/mainList' element={<MainList />} />
        </Routes>
      </div>
      
      <Footer />
    </div>
  );
}

export default App;
