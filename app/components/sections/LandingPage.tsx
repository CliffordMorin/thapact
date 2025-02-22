"use client";

import React from "react";
import Image from "next/image";
import Logo from "../../../public/thaPactLogoBanner.svg";
import FullSingerShot from "../../../public/fullSingerShot.png";
// import Popup from "../Popup";
import { Rotate } from "react-awesome-reveal";
import HamburgerMenu from "../HamburgerMenu";
import { motion, Variants } from "framer-motion";
import { FaArrowDown } from "react-icons/fa";

export default function LandingPage() {
  // const [isPopupOpen, setIsPopupOpen] = useState(true);

  // const closePopup = () => setIsPopupOpen(false);

  const arrowVariants: Variants = {
    animate: {
      y: [0, 10, 0],
      transition: {
        duration: 1,
        repeat: Infinity,
        repeatType: "loop" as const,
      },
    },
  };

  return (
    <div className="relative h-screen flex items-end justify-center">
      {/* <Popup isOpen={isPopupOpen} onClose={closePopup}>
        <h1 className="text-2xl font-bold text-center text-black">
          Welcome to ThaPact Music Collective
        </h1>
        <p className="text-center mt-4 text-black">
          ThaPact is a music collective based in San Diego. Our site is
          currently under construction, but you can contact us at{" "}
          <a href="mailto:info@thapact.com" className="text-blue-500 underline">
            info@thapact.com
          </a>
          .
        </p>
      </Popup> */}
      <Image
        src={FullSingerShot}
        alt="Full Singer Shot"
        fill
        className="object-cover"
      />

      <div className="absolute top-1 w-full flex justify-between items-center px-4 md:top-4">
        <div className="flex items-center md:absolute md:left-1/2 md:transform md:-translate-x-1/2 md:-top-10">
          <Rotate delay={150} duration={1500}>
            <Image
              src={Logo}
              alt="The Pact Logo"
              className="w-[140px] h-[140px] md:w-60 md:h-60"
            />
          </Rotate>
        </div>
        <div className="flex items-center ml-auto">
          <HamburgerMenu />
        </div>
      </div>
      <motion.div
        className="flex justify-center items-center mb-10"
        variants={arrowVariants}
        animate="animate"
      >
        <FaArrowDown className="text-white text-7xl opacity-50" />
      </motion.div>
    </div>
  );
}
