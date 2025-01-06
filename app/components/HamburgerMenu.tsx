"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";

const HamburgerMenu: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const menuItems = [
    { text: "Home", number: "01" },
    { text: "About", number: "02" },
    { text: "Shows", number: "03" },
    { text: "Media", number: "04" },
    { text: "Listen", number: "05" },
    { text: "Contact", number: "06" },
  ];

  return (
    <div className="z-50">
      <button
        className="flex flex-col items-left justify-center w-15 h-15 space-y-3 z-50 md:w-20 md:h-20"
        onClick={toggleMenu}
      >
        <motion.span
          className={`block w-14 h-2 rounded transition-colors duration-300 ${
            isOpen ? "bg-black" : "bg-yellow-50"
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
            isOpen ? "bg-black" : "bg-yellow-50"
          }`}
          animate={{ rotate: isOpen ? -45 : 0 }}
          transition={{ duration: 0.3 }}
        />
        <motion.span
          className={`block w-10 h-2 rounded transition-colors duration-300 ${
            isOpen ? "bg-black" : "bg-yellow-50"
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
            className="fixed inset-0 bg-yellow-50 flex flex-col items-center justify-center z-50"
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
            <nav className="flex flex-col space-y-1 text-center">
              {menuItems.map((item, index) => (
                <motion.a
                  key={item.text}
                  href="#"
                  className="relative text-black text-[17vw] font-canelaLight leading-tight md:text-[8vw] 2xl:text-[4vw]"
                  onClick={toggleMenu}
                  whileHover={{ scale: 1.2 }}
                >
                  {item.text}
                  <span
                    className={`absolute text-xs font-serif ${
                      index % 2 === 0 ? "top-0 right--2" : "top-0 left-0"
                    }`}
                  >
                    {item.number}
                  </span>
                </motion.a>
              ))}
            </nav>
          </div>
        </div>
      )}
    </div>
  );
};

export default HamburgerMenu;
