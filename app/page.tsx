import LandingPage from "./components/sections/LandingPage";
import AboutSection from "./components/sections/AboutSection";
import Calendar from "./components/sections/Calendar/CalendarV2.js";
import Media from "./components/sections/Media";
import Listen from "./components/sections/Listen";
import Contact from "./components/sections/Contact/Contact";
import Footer from "./components/sections/Footer";

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
      <section id="listen">
        <Listen />
      </section>
      <section id="contact">
        <Contact />
      </section>
      <Footer />
    </main>
  );
}
