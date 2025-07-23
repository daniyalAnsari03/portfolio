import About from "./about/page";
import Footer from "./components/footer";
import Hero from "./components/hero";
import ImagPeragraph from "./components/image";
import NavBar from "./components/navbar";
import Skills2 from "./components/skills2";
import Contact from "./contact/page";
import Skills from "./skills/page";
import Project from "./work/page";


export default function Navbar(){
  return(
    <>
    <NavBar />
    <Hero />
    <ImagPeragraph />
    <Project />
    <Skills />
    <Skills2 />
    <About />
    <Contact />
    <Footer />
    </>
  )
}