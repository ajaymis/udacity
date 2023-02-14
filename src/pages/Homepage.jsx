import React from 'react';
import Home from './Home';
import Card from './Card';
import Logo from './Logo';
import Banner from './Banner';
import Competency from './Competency';
import Explore from './Explore';
import Transformation from './Transformation';
import Navbar from './Navbar';
import Footer from './Footer';

const Homepage = () => {
  return (
    <div>
        <Navbar/>
        <Home/>
        <Explore/>
        <Card/>
        <Transformation/>
        <Competency/>
        <Logo/>
        <Banner/>
        <Footer/>
      
    </div>
  )
}

export default Homepage
