import { useState } from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="relative z-50 m-2 border-b-2 border-[#263039] flex items-center justify-between md:justify-start gap-4 md:gap-20 p-5">

      <div className="text-2xl font-bold">
        HIBA
      </div>

      <button
        className="md:hidden text-2xl z-50"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle menu"
      >
        {menuOpen ? "✕" : "☰"}
      </button>

      <div
        className={`
          ${menuOpen ? "flex" : "hidden"} 
          md:flex flex-col md:flex-row 
          items-start md:items-center 
          gap-4 md:gap-9
          absolute md:static top-full left-0 w-full md:w-auto
          bg-[#10151A] md:bg-transparent
          p-5 md:p-0
          border-t md:border-0 border-[#263039]
          shadow-lg md:shadow-none
          z-[999]
          pointer-events-auto
        `}
      >
        <a href="#home" onClick={() => setMenuOpen(false)} className="w-full md:w-auto py-2">Home</a>
<a href="#about" onClick={() => setMenuOpen(false)} className="w-full md:w-auto py-2">About</a>
<a href="#project" onClick={() => setMenuOpen(false)} className="w-full md:w-auto py-2">Services</a>
<a href="#contact" onClick={() => setMenuOpen(false)} className="w-full md:w-auto py-2">Contact</a>
      </div>

<a href="#contact" onClick={() => setMenuOpen(false)} className="w-full md:w-auto py-2">
  
      <button className="hidden md:block bg-[#F2C14E] text-black px-4 py-2 rounded hover:bg-[#e0b03d]">
        Contact Me
      </button>
</a>


    </nav>
  );
}

export default Navbar;