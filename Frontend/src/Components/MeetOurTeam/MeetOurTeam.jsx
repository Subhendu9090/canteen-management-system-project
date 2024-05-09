import React from 'react';
import './MeetOurTeam.css'; // Import your CSS file for Meet Our Team section
import p1 from './p2.jpg'
import p2 from './p1.jpg'
import p3 from './p3.jpg'
import p4 from './p4.png'
import p5 from './p5.jpg'


const MeetOurTeam = () => {
  return (
    <div className="meet-our-team-container">
      <h1 className="text-3xl font-semibold section-heading">Meet Our Team</h1>
      <div className="team-members">
        <div className="team-member">
          <img src={p1} alt="Team Member 1" className="team-member-photo" />
          <div className="member-info">
            <h3 className="member-name">Somya Ranjan Sahoo</h3>
            <p className="member-designation">Team Lead</p>
          </div>
        </div>
        <div className="team-member">
          <img src={p2} alt="Team Member 2" className="team-member-photo" />
          <div className="member-info">
            <h3 className="member-name">Monalisha Nayak</h3>
            <p className="member-designation">Frontend Developer</p>
          </div>
        </div>
        <div className="team-member">
          <img src={p3} alt="Team Member 3" className="team-member-photo" />
          <div className="member-info">
            <h3 className="member-name">Umakanta Mahanta</h3>
            <p className="member-designation">Lead Designer</p>
          </div>
        </div>
        <div className="team-member">
          <img src={p4} alt="Team Member 4" className="team-member-photo" />
          <div className="member-info">
            <h3 className="member-name">Rupam Mohanty</h3>
            <p className="member-designation">Developer</p>
          </div>
        </div>
        <div className="team-member">
          <img src={p5} alt="Team Member 5" className="team-member-photo" />
          <div className="member-info">
            <h3 className="member-name">Subhendu Jena</h3>
            <p className="member-designation">Developer</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MeetOurTeam;
