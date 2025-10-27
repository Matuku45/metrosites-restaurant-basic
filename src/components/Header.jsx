import React, { useState } from 'react';
import { FiMenu } from 'react-icons/fi';
import { motion } from 'framer-motion';
import { AiOutlineHome, AiOutlineMenu, AiOutlineInfoCircle, AiOutlineMail } from 'react-icons/ai';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { href: "#home", label: "Home", icon: <AiOutlineHome size={20} /> },
    { href: "#menu", label: "Menu", icon: <AiOutlineMenu size={20} /> },
    { href: "#about", label: "About", icon: <AiOutlineInfoCircle size={20} /> },
    { href: "#contact", label: "Contact", icon: <AiOutlineMail size={20} /> },
  ];

  return (
    <header className="bg-blue-600 text-white shadow-lg sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center p-4">
        <h1 className="text-2xl md:text-3xl font-extrabold tracking-wide">
          MetroSites Restaurant
        </h1>

        {/* Desktop Nav */}
        <nav className="hidden md:flex space-x-6 font-medium text-lg">
          {links.map((link) => (
            <motion.a
              key={link.href}
              href={link.href}
              className="flex items-center gap-2 hover:text-gray-200 transition-all duration-300"
              whileHover={{ scale: 1.1 }}
            >
              {link.icon} <span>{link.label}</span>
            </motion.a>
          ))}
        </nav>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-white text-3xl p-1"
          onClick={() => setIsOpen(!isOpen)}
        >
          <FiMenu />
        </button>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <motion.div
          className="md:hidden bg-blue-500 px-4 pb-4 flex flex-col"
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: 'auto', opacity: 1 }}
          transition={{ duration: 0.3 }}
        >
          {links.map((link) => (
            <motion.a
              key={link.href}
              href={link.href}
              className="flex items-center gap-2 py-3 text-lg hover:text-gray-200 transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              onClick={() => setIsOpen(false)}
            >
              {link.icon} <span>{link.label}</span>
            </motion.a>
          ))}
        </motion.div>
      )}
    </header>
  );
}
