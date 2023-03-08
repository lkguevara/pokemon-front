import './App.css';
// Router dom
import { Routes, Route } from "react-router-dom";
// imports componentes
import LandingPage from './Pages/LandingPage/LandingPage.js';

function App() {
  return (
    <Routes >
      <Route path='/' element={<LandingPage />} />
    </Routes>
    
  );
}

export default App;
