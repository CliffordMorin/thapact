import React from "react";
import Image from "next/image";

const photos = [
  {
    src: "/DukesSpeaking2.png",
    alt: "Dukes Speaking",
    size: "landscape",
  },
  { src: "/emmashot1.png", alt: "Emma", size: "square" },
  { src: "/AlanMac LS2.png", alt: "Alan Mac", size: "square" },
  { src: "/averydanny3.png", alt: "Avery Danny", size: "landscape" },
  { src: "/DavideAction2.png", alt: "Davide Action", size: "square" },
  {
    src: "/Raw Color Graded Footy for Screenshots.mp4.02_07_06_09.Still002.png",
    alt: "Raw Color Graded Footy",
    size: "square",
  },
  {
    src: "/chrisolsonbass2.png",
    alt: "Chris Olson Bass",
    size: "landscape",
  },

  { src: "/emmyshot1.png", alt: "Emmy", size: "landscape" },
  { src: "/jehladcrowd1.png", alt: "Jehlad Crowd", size: "landscape" },

  {
    src: "/singersplushorns.png",
    alt: "Singers Plus Horns",
    size: "landscape",
  },
];

export default function Media() {
  return (
    <div className="container mx-auto p-10">
      <div className="grid grid-cols-4 gap-4 md:grid-cols-8 lg:grid-cols-12">
        {photos.map((photo, index) => (
          <div
            key={index}
            className={`${
              photo.size === "landscape" ? "col-span-2" : "col-span-1"
            }`}
          >
            <Image
              src={photo.src}
              alt={photo.alt}
              width={photo.size === "landscape" ? 750 : 500}
              height={500}
              className="object-cover w-full h-full"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
