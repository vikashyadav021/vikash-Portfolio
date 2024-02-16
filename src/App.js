
// import components
import Hero from "./components/Hero";
import Navbar from "./Layouts/Navbar";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Service from "./components/Services";
// import Testimonials from "./components/Testimonials";
import Hireme from "./components/Hireme"; 
import Contact from "./components/Contact";
import { useEffect } from "react";

// Animation package
import Aos from "aos";
import "aos/dist/aos.css";
import DarkAndLightMode from "./components/DarkMode";

const App = () => {
  useEffect(() => {
    Aos.init({
      duration: 1800,
      offset: 100,
      // disable: "mobile",
    });
  }, []);
  return (
    <div>
      <Navbar />
      {/* <DarkAndLightMode/> */}
      <Hero />
      <Skills />
      <hr />
      <Projects />
      <Service />
      {/* <Testimonials /> */}
      <Hireme />
      <Contact />
      <footer className="p-3 text-center">
        <p>©Vikash Yadav All CopyRights Reserved 2024</p>
      </footer>
    </div>
  );
};

export default App;


