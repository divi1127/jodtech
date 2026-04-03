import React from "react";
import { Link } from "react-router-dom";
import { FaInstagram, FaWhatsapp } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-black text-gray-300 px-6 py-12">

      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-10">

        {/* COMPANY INFO */}
        <div>
          <h2 className="text-2xl font-semibold text-white mb-4 tracking-wide">
            JOD TECH
          </h2>
          <p className="text-sm text-gray-400 leading-relaxed">
            We build powerful digital solutions that transform businesses.
            From web and mobile apps to enterprise software.
          </p>
        </div>

        {/* CENTER MENU */}
        <div className="flex flex-col items-start md:items-center">
          <h3 className="text-white font-medium mb-4">Quick Links</h3>
          <ul className="space-y-2 text-sm text-center md:text-left">
            <li>
              <Link to="/" className="hover:text-white transition">Home</Link>
            </li>
            <li>
              <Link to="/about" className="hover:text-white transition">Who We Are</Link>
            </li>
            <li>
              <Link to="/services" className="hover:text-white transition">Services</Link>
            </li>
            <li>
              <Link to="/careers" className="hover:text-white transition">Careers</Link>
            </li>
          </ul>
        </div>

        {/* CONTACT + SOCIAL */}
        <div>
          <h3 className="text-white font-medium mb-4">Contact</h3>

          <p className="text-sm text-gray-400 mb-2">
            No 10, Chitharanjan St
          </p>
          <p className="text-sm text-gray-400 mb-2">
            Chinna Chokkikulam, Madurai – 625002
          </p>
          <p className="text-sm text-gray-400 mb-2">
            7867908377
          </p>
          <p className="text-sm text-gray-400 mb-4">
            support@jodtech.in
          </p>

          {/* SOCIAL ICONS */}
          <div className="flex gap-4 text-xl">
            <a href="#" className="hover:text-white transition">
              <FaInstagram />
            </a>
            <a href="#" className="hover:text-white transition">
              <FaWhatsapp />
            </a>
          </div>
        </div>

      </div>

      {/* BOTTOM SECTION */}
      <div className="border-t border-gray-800 mt-10 pt-6 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500 gap-4">

        <p>© 2026 JOD TECH — All Rights Reserved.</p>

        <div className="flex gap-6">
          <Link to="/privacy" className="hover:text-white transition">
            Privacy Policy
          </Link>
          <Link to="/terms" className="hover:text-white transition">
            Terms & Conditions
          </Link>
        </div>

      </div>

    </footer>
  );
};

export default Footer;