import React from "react";
import { FaYoutube, FaInstagram, FaFacebook, FaSpotify } from "react-icons/fa";

const currentYear = new Date().getFullYear();

export default function Footer() {
  return (
    <div
      style={{
        backgroundColor: "#FEFCE8",
        fontFamily: "serif",
        color: "black",
        padding: "20px",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: "15px",
        }}
      >
        <a
          href="https://www.youtube.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaYoutube size={40} />
        </a>
        <a
          href="https://www.instagram.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaInstagram size={40} />
        </a>
        <a
          href="https://www.facebook.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaFacebook size={40} />
        </a>
        <a
          href="https://www.spotify.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaSpotify size={40} />
        </a>
      </div>
      <div style={{ textAlign: "center", marginTop: "10px", fontSize: "14px" }}>
        Made with love by Clifford Morin {currentYear}
      </div>
      <div
        style={{
          position: "absolute",
          bottom: "10px",
          right: "10px",
          fontSize: "10px",
        }}
      >
        <a href="http://www.onlinewebfonts.com">Web Fonts</a>
      </div>
    </div>
  );
}
