import React from 'react';
import heroImage from './heropic.png'; // Import the existing image
import phoneImage from './Hands - Phone.png'; // Import the new image
import mapsImage from './maps11.png'; // Import the new image

const Hero = () => (
  <div className="flex justify-center items-center">
    <img
      src={heroImage}
      alt="Hero"
      style={{ width: "950px", height: "auto" }}
    />
   
  
  </div>
);

export default Hero;
