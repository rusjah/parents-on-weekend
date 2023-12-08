import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/pages/Home';
import Footer from './components/layout/Footer';
import Nav from './components/layout/Nav';


function App() {
  return (
    <div className="App">
      <Nav />
      <div className='min-h-[66vh]'>
        <Routes>
            <Route path='/' element={<Home />} />
            

        </Routes>
      </div>
      
      <Footer />
    </div>
  );
}

export default App;
