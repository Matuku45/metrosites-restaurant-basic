import React, { useState } from 'react';
import { FiMenu } from 'react-icons/fi'; // hamburger menu icon

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-blue-600 text-white shadow-md">
      <div className="container mx-auto flex justify-between items-center p-4">
        <h1 className="text-2xl font-bold">MetroSites Restaurant</h1>
        
        {/* Desktop Nav */}
        <nav className="hidden md:flex space-x-6 font-medium">
          <a href="#home" className="hover:text-gray-200">Home</a>
          <a href="#menu" className="hover:text-gray-200">Menu</a>
          <a href="#about" className="hover:text-gray-200">About</a>
          <a href="#contact" className="hover:text-gray-200">Contact</a>
        </nav>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-white text-2xl"
          onClick={() => setIsOpen(!isOpen)}
        >
          <FiMenu />
        </button>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="md:hidden bg-blue-500 px-4 pb-4">
          <a href="#home" className="block py-2 hover:text-gray-200">Home</a>
          <a href="#menu" className="block py-2 hover:text-gray-200">Menu</a>
          <a href="#about" className="block py-2 hover:text-gray-200">About</a>
          <a href="#contact" className="block py-2 hover:text-gray-200">Contact</a>
        </div>
      )}
    </header>
  );
}
