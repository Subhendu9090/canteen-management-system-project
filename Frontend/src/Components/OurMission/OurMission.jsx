import React from 'react';
import './OurMission.css'; // Import your CSS file for Our Mission section
import aryabhata from './aryabhata.jpeg'
const OurMission = () => {
  return (
    <div className="our-mission-container">
      <h2 className="section-heading">OUR MISSION</h2>

      <div className="mission-content">
        <div className="mission-item">
          <img src={aryabhata} alt="Mission Image 1" className="mission-image" />
          <p className="mission-text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus placerat mauris vel ex fringilla, et consequat metus tempor. 
            Nullam dictum lacus eget eleifend placerat. Aliquam nec libero ac purus fermentum hendrerit nec id nisl.
            Fusce vehicula efficitur ex, eget suscipit nisi pellentesque nec. Duis ultrices massa sed mauris eleifend, eu ultrices ligula 
            lobortis.
          </p>
        </div>

        <div className="mission-item">
          <p className="mission-text">
            Fusce vehicula efficitur ex, eget suscipit nisi pellentesque nec. Duis ultrices massa sed mauris eleifend, eu ultrices ligula 
            lobortis. Suspendisse potenti. Ut facilisis urna risus, ut viverra urna efficitur a. 
            Fusce vehicula efficitur ex, eget suscipit nisi pellentesque nec. Duis ultrices massa sed mauris eleifend, eu ultrices ligula 
            lobortis.
          </p>
          <img src={aryabhata} alt="Mission Image 2" className="mission-image" />
        </div>
      </div>
    </div>
  );
};

export default OurMission;
