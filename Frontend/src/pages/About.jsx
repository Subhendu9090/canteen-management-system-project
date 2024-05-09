import React from 'react'
import {AboutUsSection} from '../Components/index'
import {OurMission} from '../Components/index'
import {Navbar} from '../Components/index'
import {Footer} from '../Components/index'

const About = () => {
  return (
    <div>
       <Navbar/>
       <AboutUsSection/>
       <OurMission/>
       <Footer/>
    </div>
  )
}

export default About