import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/pages/Home';
import Footer from './components/layout/Footer';


function App() {
  return (
    <div className="App">
      <Nav />
      <Routes>
          <Route path='/' element={<Home />} />

      </Routes>
      <Footer />
    </div>
  );
}

export default App;
