import { Analytics } from "@vercel/analytics/react"
import Header from "./components/Header";
import Hero from "./components/Hero";
import Services from "./components/Services";
import TrustSection from "./components/TrustSection";
import Testimonials from "./components/Testimonials";
import FinalCTA from "./components/FinalCTA";
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
      <Services />
      <TrustSection />
      <Testimonials />
      <About />
      <FinalCTA />
      <Contact />
      <Footer />
      <Analytics />
    </>
  );
}

export default App;
