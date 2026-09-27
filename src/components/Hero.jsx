import React, { useState } from "react";

const Hero = () => {
  const [, setMenuOpen] = useState(false); // kept for compatibility; not needed here

  return (
    <div className="flex flex-col md:flex-row w-full min-h-screen items-center justify-center gap-8 p-5 m-2">

      {/* LEFT SIDE */}
      <section className="w-full md:w-1/2 m-2 md:m-8 text-center md:text-left">
        <p className="text-base md:text-lg text-[#4FD1C5]">
          Full stack developer, Lahore
        </p>

        <strong className="block text-3xl md:text-4xl mt-2">
          I build the whole{" "}
          <i className="text-[#F2C14E]">stack</i>,
          not just the screen.
        </strong>

        <p className="mt-4 text-sm md:text-base">
          From database schema to the pixels you click on — I design,
          build, and ship complete web products, end to end.
        </p>

        <div className="mt-6 flex flex-col sm:flex-row gap-3 justify-center md:justify-start">
          <a href="#contact" className="w-full sm:w-auto">
            <button className="w-full sm:w-auto bg-[#F2C14E] text-black hover:text-white px-4 py-2 rounded hover:bg-[#e0b03d]">
              Get in Touch
            </button>
          </a>

          <a href="#project" className="w-full sm:w-auto">
            <button className="w-full sm:w-auto bg-[#10151A] border border-[#263039] text-[#4FD1C5] px-4 py-2 rounded hover:bg-[#4FD1C5] hover:text-white">
              View Projects
            </button>
          </a>
        </div>
      </section>

      {/* RIGHT SIDE */}
      <section className="w-full md:w-1/2 md:ml-8">
        <div className="hover:border-teal-400 transition-colors duration-300 bg-[#1C242D] mb-4 border text-[#4FD1C5] border-[#263039] p-4 rounded-xl">
          <p className="text-xl">Frontend</p>
          <p>React · Tailwind · Vite</p>
        </div>
        <div className="hover:border-teal-400 transition-colors duration-300 bg-[#1C242D] mb-4 border text-[#4FD1C5] border-[#263039] p-4 rounded-xl">
          <p className="text-xl">Backend</p>
          <p>Node.js · Express · MongoDB</p>
        </div>
        <div className="hover:border-teal-400 transition-colors duration-300 bg-[#1C242D] mb-4 border text-[#4FD1C5] border-[#263039] p-4 rounded-xl">
          <p className="text-xl">Tools</p>
          <p>HTML5 · CSS3 · JavaScript · React.js · Tailwind CSS · Git & GitHub · MongoDB · Node.js · Express.js · Vite</p>
        </div>
      </section>

    </div>
  );
};

export default Hero;