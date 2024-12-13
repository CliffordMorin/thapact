import Image from "next/image";
import LandingPage from "./components/sections/LandingPage";
import AboutSection from "./components/sections/AboutSection";

export default function Home() {
  return (
    <main>
      <h1>Coming soon</h1>
      <Image
        src="/fullSingerShot.png"
        alt="Full Singer Shot"
        width={1440}
        height={1033}
      />
      <LandingPage />
      <AboutSection />
    </main>
  );
}
