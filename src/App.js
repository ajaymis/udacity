import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from './pages/Navbar';
import Home from './pages/Home';
import Signin from './pages/Signin';
import Explore from './pages/Explore';
import  Card  from './pages/Card';
import Signup from './pages/Signup';

function App() {
  return (
    <>
   <BrowserRouter>
    
    <Routes>
      <Route exact path="/" element={<Navbar />} />
      <Route exact path="/home" element={<Home />} />
      <Route exact path="/signin" element={<Signin/>} />
      <Route exact path="/Explore" element={<Explore/>} />
      <Route exact path="/card" element={<Card/>} />
      <Route exact path="/signup" element={<Signup/>} />






      






    </Routes>
  </BrowserRouter>
    </>
  );
}

export default App;
