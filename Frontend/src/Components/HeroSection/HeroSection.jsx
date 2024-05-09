// HeroSection.js
import React, { useState, useEffect } from 'react';
import './HeroSection.css';
import image1 from './image1.jpeg'; // Import your image files
import image2 from './image2.jpeg';
import image3 from './image3.jpeg';

const HeroSection = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const[image1 ,setInamge1]=useState("https://i.ytimg.com/vi/WBsv-EMbDbQ/maxresdefault.jpg")
  const[image2 ,setInamge2]=useState("https://igitsarang.ac.in/assets/documents/homepgbanner/resizeimg/new_1542800571_thumb.jpg")
  const[image3 ,setInamge3]=useState("https://igitsarang.ac.in/assets/documents/homepgbanner/resizeimg/2019-10-28-16-36-43_1572261109_thumb.jpg")
  const images = [image1, image2, image3]; // Array of imported image URLs

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImageIndex(prevIndex =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);

    return () => clearInterval(intervalId);
  }, [images.length]);

  return (
    <div className="hero-section">
      {images.map((image, index) => (
        <div
          key={index}
          className={
            index === currentImageIndex
              ? 'hero-image active'
              : 'hero-image inactive'
          }
          style={{ backgroundImage: `url(${image})` }}
        ></div>
      ))}
    </div>
  );
};

export default HeroSection;
