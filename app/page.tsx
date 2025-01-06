import LandingPage from "./components/sections/LandingPage";
import AboutSection from "./components/sections/AboutSection";
import Calendar from "./components/sections/Calendar/CalendarV2.js";

export default function Home() {
  return (
    <main>
      <LandingPage />
      <AboutSection />
      <Calendar />
    </main>
  );
}
