// src/components/Header.jsx
import React, { useState } from "react";
import { Menu, X, Heart, Facebook, Instagram, Twitter, Youtube } from "lucide-react";
import { motion } from "framer-motion";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Menu", href: "/menu" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
  ];

  const socialLinks = [
    { icon: <Facebook size={20} />, href: "https://facebook.com" },
    { icon: <Instagram size={20} />, href: "https://instagram.com" },
    { icon: <Twitter size={20} />, href: "https://twitter.com" },
    { icon: <Youtube size={20} />, href: "https://youtube.com" },
  ];

  return (
    <header className="bg-gradient-to-r from-blue-500 via-indigo-600 to-purple-600 text-white shadow-lg fixed w-full z-50">
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
        <div className="hidden md:flex items-center space-x-10">
          <nav className="flex space-x-6 font-medium text-lg">
            {navLinks.map((link, idx) => (
              <motion.a
                key={link.name}
                href={link.href}
                initial={{ y: -10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: idx * 0.1, duration: 0.4 }}
                whileHover={{ scale: 1.1, color: "#FACC15", textShadow: "0px 0px 8px #FACC15" }}
                className="transition-all"
              >
                {link.name}
              </motion.a>
            ))}
          </nav>

          {/* Social Icons */}
          <div className="flex space-x-4 ml-6">
            {socialLinks.map((social, idx) => (
              <motion.a
                key={idx}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, x: 10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: idx * 0.1, duration: 0.3 }}
                whileHover={{ scale: 1.3, color: "#FACC15" }}
                className="transition-all"
              >
                {social.icon}
              </motion.a>
            ))}
          </div>
        </div>

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
          {navLinks.map((link, idx) => (
            <motion.a
              key={link.name}
              href={link.href}
              initial={{ x: -20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: idx * 0.1, duration: 0.3 }}
              whileHover={{ scale: 1.05, color: "#FACC15" }}
              className="text-lg"
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </motion.a>
          ))}

          {/* Mobile Social Icons */}
          <div className="flex space-x-4 mt-4">
            {socialLinks.map((social, idx) => (
              <motion.a
                key={idx}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ x: 10, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: idx * 0.1, duration: 0.3 }}
                whileHover={{ scale: 1.2, color: "#FACC15" }}
              >
                {social.icon}
              </motion.a>
            ))}
          </div>
        </motion.nav>
      )}
    </header>
  );
}
