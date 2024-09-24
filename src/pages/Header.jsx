import React from 'react';
import { Link } from 'react-router-dom';
import safari from "../assets/safari.png";

const Header = () => {
  return (
    <header className="bg-gradient-to-r from-blue-500 to-green-400 shadow-lg">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        
        {/* Logo */}
        <Link to="/" className="flex items-center space-x-2">
          <img 
            src={safari} 
            alt="Benta Safaris" 
            className="h-14 w-auto" 
          />
          <span className="text-white text-2xl font-bold tracking-wide">
            Benta Safaris & Adventures Ltd
          </span>
        </Link>

        {/* Navigation */}
        <nav className="hidden md:flex space-x-8 text-lg">
          <Link 
            to="/" 
            className="text-white hover:text-gray-200 transition duration-300"
          >
            Home
          </Link>
          <Link 
            to="/tours" 
            className="text-white hover:text-gray-200 transition duration-300"
          >
            Tours
          </Link>
          <Link 
            to="/about" 
            className="text-white hover:text-gray-200 transition duration-300"
          >
            About Us
          </Link>
          <Link 
            to="/contact" 
            className="text-white hover:text-gray-200 transition duration-300"
          >
            Contact
          </Link>
        </nav>

        {/* Book Now Button */}
        <Link 
          to="/book" 
          className="bg-yellow-500 text-gray-900 font-semibold px-6 py-2 rounded-full shadow hover:bg-yellow-600 transition duration-300"
        >
          Book Now
        </Link>

        {/* Mobile Menu */}
        <div className="md:hidden">
          <button className="text-white focus:outline-none">
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor" 
              className="w-8 h-8"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M4 6h16M4 12h16m-7 6h7" 
              />
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
