import Image from "next/image";
import FullSingerShot from "../public/fullSingerShot.png";
import LandingPage from "./components/sections/LandingPage";
import AboutSection from "./components/sections/AboutSection";

export default function Home() {
  return (
    <main>
      <h1>Coming soon</h1>
      <Image src={FullSingerShot} alt="Full Singer Shot" />
      <LandingPage />
      <AboutSection />
    </main>
  );
}
