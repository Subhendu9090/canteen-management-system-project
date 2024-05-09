// HomePage.js
import React from 'react';
import {HeroSection} from '../Components/index';
import {AboutCollegeSection} from '../Components/index';
import {AboutHostelSection} from '../Components/index';
import {Navbar} from '../Components/index';
import {Footer} from '../Components/index';


const HomePage = () => {
  return (
    <div>
      <div >
      <Navbar/>
      </div>
      <div >
      <HeroSection />
      </div>
      
      <AboutCollegeSection/>
      <AboutHostelSection/>
      <Footer/>
      
    </div>
  );
};

export default HomePage;