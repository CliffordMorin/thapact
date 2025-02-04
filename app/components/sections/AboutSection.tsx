"use client";

import React from "react";
import { Fade } from "react-awesome-reveal";

const AboutSection = () => {
  return (
    <div className="text-center p-8 mt-10">
      <Fade>
        <h1 className="text-6xl font-bold mb-10 text-yellow-50 uppercase">
          Our Mission
        </h1>
      </Fade>
      <hr className="border-t-2 border-gray-300 w-24 mx-auto mb-10 text-yellow-50" />
      <p className="text-2xl font-canelaItalic text-yellow-50 italic tracking-widest lg:px-60">
        Thapact was formed with the idea that live music can be a{" "}
        <span className="text-3xl text-red-500 font-bold capitalize">
          unifying
        </span>{" "}
        force that crosses culture, style, and genre. The foundation of the{" "}
        <span className="text-3xl text-red-500 font-bold capitalize">
          {" "}
          collective{" "}
        </span>{" "}
        is based in the rich history of{" "}
        <span className="text-3xl text-red-500 font-bold capitalize">
          R&B
        </span>,{" "}
        <span className="text-3xl text-red-500 font-bold capitalize">funk</span>
        , and{" "}
        <span className="text-3xl text-red-500 font-bold capitalize">
          hip-hop
        </span>
        . These are the guideposts in our greater musical{" "}
        <span className="text-3xl text-red-500 font-bold capitalize">
          journey
        </span>
        . Our ultimate goal is to find the sonic{" "}
        <span className="text-3xl text-red-500 font-bold capitalize">
          crossroads
        </span>{" "}
        where each of our individual experiences meet.
      </p>
      <p className="text-2xl font-canelaItalic text-yellow-50 pt-10 italic tracking-widest lg:px-60 mt-4">
        Welcome to our quest to portray the love and{" "}
        <span className="text-3xl text-red-500 font-bold capitalize">
          emotion
        </span>{" "}
        of our collective human condition.
      </p>
    </div>
  );
};

export default AboutSection;
