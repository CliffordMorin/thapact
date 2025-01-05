"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";

const HamburgerMenu: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <div className="z-50">
      <button
        className="flex flex-col items-left justify-center w-15 h-15 space-y-3 z-50 md:w-20 md:h-20"
        onClick={toggleMenu}
      >
        <motion.span
          className={`block w-14 h-2 rounded transition-colors duration-300 ${
            isOpen ? "bg-black" : "bg-white"
          }`}
          animate={{
            rotate: isOpen ? 45 : 0,
            x: isOpen ? 4 : 0,
            y: isOpen ? 11 : 0,
          }}
          transition={{ duration: 0.3 }}
        />
        <motion.span
          className={`block w-20 h-2 rounded transition-opacity duration-300 ${
            isOpen ? "bg-black" : "bg-white"
          }`}
          animate={{ rotate: isOpen ? -45 : 0 }}
          transition={{ duration: 0.3 }}
        />
        <motion.span
          className={`block w-10 h-2 rounded transition-colors duration-300 ${
            isOpen ? "bg-black" : "bg-white"
          }`}
          animate={{
            rotate: isOpen ? 45 : 0,
            y: isOpen ? -6 : 0,
            x: isOpen ? 35 : 0,
          }}
          transition={{ duration: 0.3 }}
        />
      </button>
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={toggleMenu}
        >
          <div
            className="fixed inset-0 bg-white flex flex-col items-center justify-center z-50"
            onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside the menu
          >
            <button
              className="absolute top-20 right-5 flex flex-col items-right justify-center space-y-3 z-50 w-15 h-15 md:w-20 md:h-20 md:top-5" // styling for location of close button
              onClick={toggleMenu}
            >
              <motion.span
                className={`block w-14 h-2 rounded transition-colors duration-300 bg-black`}
                animate={{
                  rotate: isOpen ? 45 : 0,
                  x: isOpen ? 4 : 0,
                  y: isOpen ? 11 : 0,
                }}
                transition={{ duration: 0.3 }}
              />
              <motion.span
                className={`block w-20 h-2 rounded transition-opacity duration-300 bg-black`}
                animate={{ rotate: isOpen ? -45 : 0 }}
                transition={{ duration: 0.3 }}
              />
              <motion.span
                className={`block w-10 h-2 rounded transition-colors duration-300 bg-black`}
                animate={{
                  rotate: isOpen ? 45 : 0,
                  y: isOpen ? -6 : 0,
                  x: isOpen ? 35 : 0,
                }}
                transition={{ duration: 0.3 }}
              />
            </button>
            <nav className="flex flex-col space-y-4 text-center">
              <motion.a
                href="#"
                className="text-black text-2xl"
                onClick={toggleMenu}
                whileTap={{ scale: 1.2 }}
              >
                Home
              </motion.a>
              <motion.a
                href="#"
                className="text-black text-2xl"
                onClick={toggleMenu}
                whileTap={{ scale: 1.2 }}
              >
                About
              </motion.a>
              <motion.a
                href="#"
                className="text-black text-2xl"
                onClick={toggleMenu}
                whileTap={{ scale: 1.2 }}
              >
                Contact
              </motion.a>
            </nav>
          </div>
        </div>
      )}
    </div>
  );
};

export default HamburgerMenu;
