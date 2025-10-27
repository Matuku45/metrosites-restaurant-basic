import React from 'react';
import { FaFacebookF, FaInstagram, FaTwitter } from 'react-icons/fa';
import { motion } from 'framer-motion';

export default function Footer() {
  const socials = [
    { href: "https://facebook.com", icon: <FaFacebookF /> },
    { href: "https://instagram.com", icon: <FaInstagram /> },
    { href: "https://twitter.com", icon: <FaTwitter /> },
  ];

  return (
    <footer className="bg-gray-900 text-gray-200 p-6 mt-10">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        <p className="text-sm mb-4 md:mb-0">&copy; 2025 MetroSites Restaurant. All rights reserved.</p>
        <div className="flex space-x-6">
          {socials.map((social, i) => (
            <motion.a
              key={i}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xl hover:text-white"
              whileHover={{ scale: 1.2, color: "#facc15" }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              {social.icon}
            </motion.a>
          ))}
        </div>
      </div>
    </footer>
  );
}
