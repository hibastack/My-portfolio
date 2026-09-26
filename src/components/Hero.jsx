import React from "react";

const Hero = () => {
  return (
    <div className="  flex w-full h-screen  items-center justify-center gap-4 p-5  m-2 ">

      {/* LEFT SIDE - 50% */}
      <section className="w-1/2 m-8">
        <p className="text-lg text-[#4FD1C5]">
          Full stack developer, Lahore
        </p>

        <strong className="text-4xl">
          I build the whole{" "}
          <i className="text-[#F2C14E]">stack</i>,
          not just the screen.
        </strong>

        <p>
          From database schema to the pixels you click on — I design,
          build, and ship complete web products, end to end.
        </p>

        <div className="mt-6">
          <button className="m-2 bg-[#F2C14E] text-black hover:text-white px-4 py-2 rounded hover:bg-[#e0b03d]">
            Get in Touch
          </button>

          <button className="bg-[#10151A] border border-[#263039] text-[#4FD1C5] px-4 py-2 rounded hover:bg-[#4FD1C5] hover:text-white">
            View Projects
          </button>
        </div>
      </section>

      {/* RIGHT SIDE - 50% */}
      <section className=" w-1/2 ml-8 mr-0">
        <div className="  hover:border-teal-400 transition-colors duration-300 bg-[#1C242D] mb-4 border text-[#4FD1C5] border-[#263039] p-4 rounded-xl border-r-0">
            <p className="text-xl ">Frontend</p>
        <p>React · Tailwind · Vite</p>
        </div>
        <div className=" hover:border-teal-400 transition-colors duration-300 bg-[#1C242D] mb-4 border text-[#4FD1C5] border-[#263039] p-4 rounded-xl border-r-0">
            <p className="text-xl ">Backend</p>
            <p>Node.js · Express · MongoDB</p>
        </div>
        <div className=" hover:border-teal-400 transition-colors duration-300 bg-[#1C242D] mb-4 border text-[#4FD1C5] border-[#263039] p-4 rounded-xl border-r-0">
            <p className="text-xl ">Tools</p>
            <p className="">HTML5
. CSS3
. JavaScript
. React.js
. Tailwind CSS
. Git & GitHub
. MongoDB
. Node.js
. Express.js
. Vite</p>
        </div>
      </section>

    </div>
  );
};

export default Hero;