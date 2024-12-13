"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";

const HamburgerMenu: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <div className="absolute top-10 left-4 z-50">
      <button
        className="flex flex-col items-left justify-center w-20 h-20 space-y-3"
        onClick={toggleMenu}
      >
        <motion.span
          className={`block w-12 h-2 rounded transition-colors duration-300 ${
            isOpen ? "bg-black" : "bg-white"
          }`}
          animate={{ rotate: isOpen ? 45 : 0, y: isOpen ? 6 : 0 }}
          transition={{ duration: 0.3 }}
        />
        <motion.span
          className={`block w-20 h-2 rounded transition-opacity duration-300 ${
            isOpen ? "bg-black" : "bg-white"
          }`}
          animate={{ opacity: isOpen ? 0 : 1 }}
          transition={{ duration: 0.3 }}
        />
        <motion.span
          className={`block w-8 h-2 rounded transition-colors duration-300 ${
            isOpen ? "bg-black" : "bg-white"
          }`}
          animate={{ rotate: isOpen ? -45 : 0, y: isOpen ? -6 : 0 }}
          transition={{ duration: 0.3 }}
        />
      </button>
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={toggleMenu}
        >
          <div className="fixed inset-y-0 left-0 w-64 bg-white p-6 z-50 rounded-r-lg">
            <nav className="flex flex-col space-y-4">
              <a href="#" className="text-black">
                Home
              </a>
              <a href="#" className="text-black">
                About
              </a>
              <a href="#" className="text-black">
                Contact
              </a>
            </nav>
          </div>
        </div>
      )}
    </div>
  );
};

export default HamburgerMenu;
