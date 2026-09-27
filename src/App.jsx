import Navbar from "./components/Navbar";
import "./App.css";
import Hero from "./components/Hero";
import About from "./components/About";
import Project from "./components/Project";
import Contact from "./components/Contact";
import Reveal from "./components/Reveal";

function App() {
  return (
    <div>
      <Navbar />

      <div id="home">
        <Reveal>
          <Hero />
        </Reveal>
      </div>

      <div id="about">
        <Reveal>
          <About />
        </Reveal>
      </div>

      <div id="project">
        <Reveal>
          <Project />
        </Reveal>
      </div>

      <div id="contact">
        <Reveal>
          <Contact />
        </Reveal>
      </div>
    </div>
  );
}

export default App;