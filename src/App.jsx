import { Analytics } from "@vercel/analytics/react"
import Header from "./components/Header";
import Hero from "./components/Hero";
import VisionMission from "./components/VisionMission";
import Projects from "./components/Projects";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


function App() {
  return (
    <>
      <Header />
      <Hero />
      <VisionMission />
      <Projects />
      <About />
      <Contact />
      <Footer />
         <Analytics />
    </>
  );
}

export default App;
