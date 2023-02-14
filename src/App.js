import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from './pages/Home';
import Signin from './pages/Signin';
import Explore from './pages/Explore';
import  Card  from './pages/Card';
import Signup from './pages/Signup';
import Transformation from './pages/Transformation';
import Competency from './pages/Competency';
import Logo from './pages/Logo';
import Banner from './pages/Banner';
import Homepage from './pages/Homepage';
import Footer from './pages/Footer';

function App() {
  return (
    <>
   <BrowserRouter>
    
    <Routes>
    <Route exact path="/" element={<Homepage />} />

     
      <Route exact path="/home" element={<Home />} />
      <Route exact path="/signin" element={<Signin/>} />
      <Route exact path="/Explore" element={<Explore/>} />
      <Route exact path="/card" element={<Card/>} />
      <Route exact path="/signup" element={<Signup/>} />
      <Route exact path="/transformation" element={<Transformation/>} />
      <Route exact path="/competency" element={<Competency/>} />
      <Route exact path="/logo" element={<Logo />} />
      <Route exact path="/baner" element={<Banner />} />
      <Route exact path="/footer" element={<Footer />} />











      






    </Routes>
  </BrowserRouter>
    </>
  );
}

export default App;
