// src/components/Header.jsx
import React, { useState } from "react";
import { Menu, X, Heart } from "lucide-react";
import { motion } from "framer-motion";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Menu", href: "/menu" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <header className="bg-gradient-to-r from-blue-500 via-indigo-600 to-purple-600 text-white shadow-md fixed w-full z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center p-4 md:p-6">
        {/* Logo */}
        <motion.div
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="flex items-center space-x-2"
        >
          <Heart size={28} className="text-pink-400 animate-pulse" />
          <span className="font-bold text-xl md:text-2xl">MetroSites Restaurant</span>
        </motion.div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex space-x-8 font-medium text-lg">
          {navLinks.map((link) => (
            <motion.a
              key={link.name}
              href={link.href}
              whileHover={{ scale: 1.1, color: "#FACC15" }} // yellow accent
              className="transition-colors"
            >
              {link.name}
            </motion.a>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center">
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.nav
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: "auto", opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="md:hidden bg-gradient-to-r from-blue-500 via-indigo-600 to-purple-600 text-white flex flex-col space-y-4 p-6"
        >
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="hover:text-yellow-400 transition text-lg"
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </a>
          ))}
        </motion.nav>
      )}
    </header>
  );
}
