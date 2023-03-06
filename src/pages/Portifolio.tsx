import Home from "../components/Home";
import Navbar from "../components/NavBar";
import About from "../components/About";
import Projects from "../components/Projects";
import Skills from "../components/Skills";
import Footer from "../components/Footer";
import "../App.css";

export const Portifolio = () => {
  return (
    <div>
      <Navbar />
      <Home />
      <About />
      <Projects />
      <Skills />
      <Footer />
    </div>
  );
};
