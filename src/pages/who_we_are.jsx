import React from "react";
import { motion } from "framer-motion";

const WhoWeAre = () => {
  return (
    <section className="bg-white text-black">

      {/* ================= HERO ================= */}
      <div className="min-h-[60vh] flex flex-col justify-center items-center text-center px-6 pt-20">

        <motion.p
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-gray-500 uppercase tracking-widest mb-3"
        >
          Who We Are
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-6xl font-light leading-tight"
        >
          <span className="text-gray-600 font-medium">JOD TECH</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="mt-6 text-gray-600 max-w-2xl text-lg"
        >
          We are a passionate team of developers, designers, and innovators
          dedicated to building exceptional digital experiences.
        </motion.p>

      </div>

      {/* ================= ABOUT SECTION ================= */}
      <div className="max-w-6xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-12 items-center">

        {/* TEXT */}
        <motion.div
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-semibold mb-6">
            Building the Future of Digital
          </h2>

          <p className="text-gray-600 text-lg leading-relaxed">
            JOD TECH is a leading IT development company based in Madurai, India.
            We specialize in creating cutting-edge digital solutions that help
            businesses thrive in the modern world.
          </p>
        </motion.div>

        {/* IMAGE */}
        <motion.img
          initial={{ opacity: 0, x: 80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          src="https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=1000"
          alt="team work"
          className="rounded-2xl shadow-lg w-full h-[300px] object-cover"
        />
      </div>

      {/* ================= MISSION ================= */}
      <div className="max-w-6xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-12 items-center">

        {/* IMAGE */}
        <motion.img
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=1000"
          alt="mission"
          className="rounded-2xl shadow-lg w-full h-[300px] object-cover"
        />

        {/* TEXT */}
        <motion.div
          initial={{ opacity: 0, x: 80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="text-2xl font-semibold mb-4">Our Mission</h3>
          <p className="text-gray-600 text-lg leading-relaxed">
            To empower businesses with innovative digital solutions that drive
            growth, enhance efficiency, and create lasting impact in the digital landscape.
          </p>
        </motion.div>
      </div>

      {/* ================= VALUES ================= */}
      <div className="max-w-6xl mx-auto px-6 pb-20">

        <h3 className="text-2xl md:text-3xl font-semibold mb-10 text-center">
          Our Core Values
        </h3>

        <div className="grid md:grid-cols-3 gap-8">

          {/* CARD 1 */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="p-6 bg-gray-50 rounded-2xl shadow-md text-center"
          >
            <h4 className="text-xl font-semibold mb-3">Innovation First</h4>
            <p className="text-gray-600">
              We stay ahead with the latest technology trends.
            </p>
          </motion.div>

          {/* CARD 2 */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="p-6 bg-gray-50 rounded-2xl shadow-md text-center"
          >
            <h4 className="text-xl font-semibold mb-3">Quality Code</h4>
            <p className="text-gray-600">
              Clean, scalable, and maintainable development practices.
            </p>
          </motion.div>

          {/* CARD 3 */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="p-6 bg-gray-50 rounded-2xl shadow-md text-center"
          >
            <h4 className="text-xl font-semibold mb-3">Client-Centric</h4>
            <p className="text-gray-600">
              We prioritize your success at every step.
            </p>
          </motion.div>

        </div>

      </div>

    </section>
  );
};

export default WhoWeAre;