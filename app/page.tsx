import LandingPage from "./components/sections/LandingPage";
import AboutSection from "./components/sections/AboutSection";
import Calendar from "./components/sections/Calendar/CalendarV2.js";
import Media from "./components/sections/Media";

export default function Home() {
  return (
    <main>
      <section id="home">
        <LandingPage />
      </section>
      <section id="about">
        <AboutSection />
      </section>
      <section id="shows">
        <Calendar />
      </section>
      <section id="media">
        <Media />
      </section>
    </main>
  );
}
