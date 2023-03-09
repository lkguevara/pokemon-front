import './App.css';
// Router dom
import { Routes, Route } from "react-router-dom";
// imports componentes
import LandingPage from './Pages/LandingPage/LandingPage.js';
import Home from './Pages/Home/Home.js';

function App() {
  return (
    <Routes >
      <Route path='/' element={<LandingPage />} />
      <Route path='/home' element={<Home />} />
    </Routes>
    
  );
}

export default App;
