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

      <Reveal>
        <Hero />
      </Reveal>
      <Reveal>
        <About />
      </Reveal>
      <Reveal>
        <Project />
      </Reveal>
      <Reveal>
        <Contact />
      </Reveal>
    </div>
  );
}

export default App;