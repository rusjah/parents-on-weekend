import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/pages/Home';
import Footer from './components/layout/Footer';
import Nav from './components/layout/Nav';
import Login from './components/pages/Login'
import Sign from './components/pages/Sign'
import ChangeWorld from './components/pages/ChangeWorld'
import Reviews from './components/pages/Reviews'


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
            <Route path='/reviews' element={<Reviews.jsx />} />
        </Routes>
      </div>
      
      <Footer />
    </div>
  );
}

export default App;
