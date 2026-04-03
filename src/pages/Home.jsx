import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Industries from "./Industry";
import WhyChooseUs from "./Whychooseus";
import { useState, useEffect } from "react";
import TypingText from "./Type";


const Home = () => {
  const texts = [
    "AI-Powered Solutions",
    "Tech-Driven Growth",
    "Digital Transformation"
  ];

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % texts.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      {/* ================= HERO SECTION ================= */}
      <section className="relative min-h-screen flex flex-col justify-center items-center text-center px-6 bg-white overflow-hidden">
        
        {/* BLUE GLOW */}
        <div className="absolute inset-0 flex justify-center items-center">
          <div className="w-[500px] h-[500px] bg-blue-400/30 rounded-full blur-[120px]"></div>
        </div>

        {/* CONTENT */}
        <div className="relative z-10">
          
          <h1 className="text-4xl md:text-6xl font-semibold tracking-tight leading-tight text-gray-900">
            Engineering Digital Success <br />
            All in One Place
          </h1>

          <p className="mt-6 text-lg md:text-xl text-gray-600 max-w-xl mx-auto">
            We help businesses build powerful digital solutions and scale faster.
          </p>

          <div className="mt-10 flex gap-4 flex-col sm:flex-row justify-center">
            
            <Link
              to="/services"
              className="px-8 py-3 rounded-full bg-black text-white text-sm md:text-base hover:bg-gray-800 transition shadow-lg"
            >
              Explore Services →
            </Link>

            <Link
              to="/quote"
              className="px-8 py-3 rounded-full border border-gray-400 text-gray-800 text-sm md:text-base hover:bg-black hover:text-white transition"
            >
              Get Quote
            </Link>

          </div>

          <TypingText/>

          {/* <motion.div
            className="mt-12 text-xl md:text-2xl font-medium text-center text-gray-600"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            {texts[index]}
          </motion.div> */}
        </div>
      </section>

      
  {/* ✅ ADD THIS */}
      <Industries/>
      <WhyChooseUs/>
      
    
         

  
    </>
  );
};

export default Home;