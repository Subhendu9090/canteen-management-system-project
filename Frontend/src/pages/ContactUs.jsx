import React from "react";

import {ContactUsSection} from "../Components/index";
import {MeetOurTeam} from "../Components/index";
import {ContactForm} from "../Components/index";
import {Navbar} from "../Components/index";
import {Footer} from "../Components/index";

const ContactUs = () => {
    return (
      <div>
        <Navbar/>
       <ContactUsSection/>
       <MeetOurTeam/>
       <ContactForm/>
       <Footer/>
       
        
      </div>
    );
  };
  
  export default ContactUs;