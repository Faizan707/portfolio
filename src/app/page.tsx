import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import TechnologiesSlider from "../components/TechnologiesSlider";
import OrbitAnimation from "../components/OrbitAnimation";
import Services from "../components/Services";
import Projects from "../components/Projects";
import EducationExperience from "../components/EducationExperience";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

export default function Home() {
 
  return (
  <>
    <Navbar />
    <Hero />
    <TechnologiesSlider />
    <OrbitAnimation />
    <Services />
    <Projects />
    <EducationExperience />
    <Contact />
    <Footer />
  </>
  );
}
