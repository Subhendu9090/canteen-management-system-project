// AboutHostelSection.js
import React from 'react';
import './AboutHostelSection.css';
import agnibhawan from './agnibhawan.jpeg'; // Import your image files
import akashbhawan from './akashbhawan.jpeg';
import brahmosbhawan from './brahmosbhawan.jpeg';
import suryabhwan from './suryabhwan.jpeg';
import  rohinibhawan from './rohinibhawan.jpeg';
import prithwibhawan from './prithwibhawan.jpeg';
import { Link } from 'react-router-dom';

const AboutHostelSection = () => {
    return (
      <div className="about-hostel-section bg-slate-500">
        <div className="about-heading">
          <span className="px-4 py-2 bg-blue-900 hover:bg-black hover:text-white overflow-hiddenabout rounded-3xl border-yellow-600 border-x-[5px] border-x-pink-900 border-y-2 hover:border-y-blue-900 hover:border-x-yellow-600">About Hostel</span>
        </div>
        <div className="hostel-images">
          <div className="border border-yellow-400 hostel-image">
            <img 
            className='p-2 '
            src={brahmosbhawan} alt="Hostel 1" />
            <div className="buttons">
            <Link to="/register"><button className="submit-button" >Register</button></Link>
              <a href='https://igitsarang.ac.in'> <button className="explore-button">Explore</button></a>
              <div className="m-2 image-name">Brahmos Bhawan</div>
            </div>

          </div>
          <div className="border border-yellow-400 hostel-image">
            <img
            className='p-2 '
            src={suryabhwan} alt="Hostel 2" />
            <div className="buttons">
              <Link to="/register"><button className="submit-button" >Register</button></Link>
              
              <a href='https://igitsarang.ac.in'> <button className="explore-button">Explore</button></a>
            </div>
            <div className="image-name">Surya Bhawan</div>
          </div>
          <div className="border border-yellow-400 hostel-image">
            <img 
            className='p-2 '
            src={rohinibhawan} alt="Hostel 3" />
            <div className="buttons">
            <Link to="/register"><button className="submit-button" >Register</button></Link>
              <a href='https://igitsarang.ac.in'> <button className="explore-button">Explore</button></a>
            </div>
            <div className="image-name">Rohini Bhawan</div>
          </div>
          <div className="border border-yellow-400 hostel-image">
            <img 
            className='p-2 '
            src={prithwibhawan} alt="Hostel 4" />
            <div className="buttons">
            <Link to="/register"><button className="submit-button" >Register</button></Link>
              <a href='https://igitsarang.ac.in'> <button className="explore-button">Explore</button></a>
            </div>
            <div className="image-name">Prithwi Bhawan</div>
          </div>
          <div className="border border-yellow-400 hostel-image">
            <img
            className='p-2 '
            src={agnibhawan} alt="Hostel 5" />
            <div className="buttons">
            <Link to="/register"><button className="submit-button" >Register</button></Link>
              <a href='https://igitsarang.ac.in'> <button className="explore-button">Explore</button></a>
            </div>
            <div className="image-name">Agni Bhawan</div>
          </div>
          <div className="border border-yellow-400 hostel-image">
            <img
            className='p-2 '
            src={akashbhawan} alt="Hostel 6" />
            <div className="buttons">
            <Link to="/register"><button className="submit-button" >Register</button></Link>
              <a href='https://igitsarang.ac.in'> <button className="explore-button">Explore</button></a>
            </div>
            <div className="image-name">Akash bhawan</div>
          </div>
        </div>
      </div>
    );
  };
  
  export default AboutHostelSection;