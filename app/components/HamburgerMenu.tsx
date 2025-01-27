"use client";
import React, { useState, useEffect, useRef, useMemo } from "react";
import { motion } from "framer-motion";

const HamburgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentSection, setCurrentSection] = useState("home");
  const [isScrolled, setIsScrolled] = useState(false);
  const sectionRefs = useRef<{ [key: string]: HTMLElement | null }>({});
  const menuRef = useRef<HTMLDivElement | null>(null);

  const toggleMenu = () => setIsOpen(!isOpen);

  const menuItems = useMemo(
    () => [
      { text: "Home", number: "01", to: "home" },
      { text: "About", number: "02", to: "about" },
      { text: "Shows", number: "03", to: "shows" },
      { text: "Media", number: "04", to: "media" },
      { text: "Listen", number: "05", to: "listen" },
      { text: "Contact", number: "06", to: "contact" },
    ],
    []
  );

  const handleScroll = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsOpen(false);
    }
  };

  const handleClick = (id: string) => {
    handleScroll(id);
    toggleMenu();
  };

  const handleWindowScroll = () => {
    if (window.scrollY > 0) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", handleWindowScroll);
      return () => {
        window.removeEventListener("scroll", handleWindowScroll);
      };
    }
  }, []);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setCurrentSection(entry.target.id);
            }
          });
        },
        { threshold: 0.6 } // Adjust threshold as needed
      );

      const currentRefs = sectionRefs.current;
      menuItems.forEach((item) => {
        const element = document.getElementById(item.to);
        if (element) {
          currentRefs[item.to] = element;
          observer.observe(element);
        }
      });

      return () => {
        menuItems.forEach((item) => {
          const element = currentRefs[item.to];
          if (element) {
            observer.unobserve(element);
          }
        });
      };
    }
  }, [menuItems]);

  return (
    <div
      ref={menuRef}
      className="fixed top-7 right-0 p-4 md:p-8 z-50 transition-all duration-300"
    >
      <button
        className="flex flex-col items-left justify-center w-15 h-15 space-y-3 z-50 md:w-20 md:h-20"
        onClick={toggleMenu}
      >
        <motion.span
          className={`block w-14 h-2 rounded transition-colors duration-300 ${
            isOpen ? "bg-black" : "bg-yellow-50"
          } ${isScrolled ? "shadow-2xl" : ""}`}
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
          } ${isScrolled ? "shadow-2xl" : ""}`}
          animate={{ rotate: isOpen ? -45 : 0 }}
          transition={{ duration: 0.3 }}
        />
        <motion.span
          className={`block w-10 h-2 rounded transition-colors duration-300 ${
            isOpen ? "bg-black" : "bg-yellow-50"
          } ${isScrolled ? "shadow-2xl" : ""}`}
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
              className="absolute top-12 right-5 flex flex-col items-right justify-center space-y-3 z-50 w-15 h-15 md:w-20 md:h-20 md:top-5" // styling for location of close button
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
                  className={`relative text-[15vw] font-canelaLight leading-tight md:text-[5vw] 2xl:text-[4vw] ${
                    currentSection === item.to ? "text-red-500" : "text-black"
                  }`}
                  onClick={() => handleClick(item.to)}
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
