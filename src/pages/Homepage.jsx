import React from 'react';
import Home from './Home';
import Card from './Card';
import Logo from './Logo';
import Banner from './Banner';
import Competency from './Competency';
import Explore from './Explore';
import Transformation from './Transformation';

const Homepage = () => {
  return (
    <div>
        <Home/>
        <Explore/>
        <Card/>
        <Transformation/>
        <Competency/>
        <Logo/>
        <Banner/>
      
    </div>
  )
}

export default Homepage
