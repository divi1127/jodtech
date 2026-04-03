import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  const location = useLocation();
  const isCareersPage = location.pathname === "/careers";

  // Scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 w-full z-50 flex justify-between items-center px-6 md:px-12 py-4 transition-all duration-300
        
        ${scrolled 
          ? "bg-white shadow-md" 
          : isCareersPage 
            ? "bg-transparent" 
            : "bg-white"
        }

        ${isCareersPage && !scrolled ? "text-white" : "text-black"}
        `}
      >

        {/* LOGO */}
        <h2
          className={`text-2xl md:text-3xl font-semibold tracking-wide 
          ${isCareersPage && !scrolled ? "text-white" : "text-black"}`}
        >
          JodTech
        </h2>

        {/* DESKTOP MENU */}
        <ul
          className={`hidden md:flex gap-8 text-lg font-medium tracking-wide
          ${isCareersPage && !scrolled ? "text-white" : "text-black"}`}
        >
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">Who We Are</Link></li>
          <li><Link to="/services">Services</Link></li>
          <li><Link to="/careers">Careers</Link></li>
        </ul>

        {/* BUTTON */}
        <Link
          to="/quote"
          className={`hidden md:block px-6 py-2 rounded-full border transition
          ${isCareersPage && !scrolled
            ? "border-white text-white hover:bg-white hover:text-black"
            : "border-gray-400 text-black hover:bg-black hover:text-white"
          }`}
        >
          Get Quote
        </Link>

        {/* MOBILE MENU ICON */}
        <div
          className={`md:hidden text-2xl cursor-pointer
          ${isCareersPage && !scrolled ? "text-white" : "text-black"}`}
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? "✖" : "☰"}
        </div>
      </nav>

      {/* MOBILE MENU */}
      {mobileOpen && (
        <div className="fixed top-16 left-0 w-full bg-white shadow-md flex flex-col items-center gap-6 py-6 z-40">

          <Link to="/" onClick={() => setMobileOpen(false)}>Home</Link>
          <Link to="/about" onClick={() => setMobileOpen(false)}>Who We Are</Link>
          <Link to="/services" onClick={() => setMobileOpen(false)}>Services</Link>
          <Link to="/careers" onClick={() => setMobileOpen(false)}>Careers</Link>

          <Link
            to="/quote"
            onClick={() => setMobileOpen(false)}
            className="px-6 py-2 border rounded-full"
          >
            Get Quote
          </Link>
        </div>
      )}
    </>
  );
};

export default Navbar;