"use client";

import React, { useState } from "react";
import Image from "next/image";
import Logo from "../../../public/thaPactLogo.svg";
import FullSingerShot from "../../../public/fullSingerShot.png";
import Popup from "../Popup";
import HamburgerMenu from "../HamburgerMenu";

export default function LandingPage() {
  const [isPopupOpen, setIsPopupOpen] = useState(true);

  const closePopup = () => setIsPopupOpen(false);

  return (
    <div className="relative h-screen flex items-start justify-center">
      <Popup isOpen={isPopupOpen} onClose={closePopup}>
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
      </Popup>
      <Image
        src={FullSingerShot}
        alt="Full Singer Shot"
        fill
        className="object-cover"
      />

      <div className="absolute top-10 w-full flex justify-between items-center px-4 md:top-8">
        <div className="flex items-center">
          <Image
            src={Logo}
            alt="The Pact Logo"
            className="w-28 h-28 md:w-40 md:h-40"
          />
        </div>
        <div className="flex items-center ml-auto">
          <HamburgerMenu />
        </div>
      </div>
    </div>
  );
}
