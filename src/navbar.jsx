import React from 'react';
import logo from './location.png'; // Import the logo image

function Navbar() {
  return (
    <nav className="p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center p-4 md:p-10 font-montserrat font-semibold">
          <img
            src={logo} // Use the imported logo image
            alt="Location Logo"
            className="h-8 w-8"
          />
          <span className="ml-2 text-lg sm:text-xl md:text-2xl text-white">Nearby</span>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
