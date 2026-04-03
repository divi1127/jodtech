import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Careers = () => {
  return (
    <section className="bg-white text-black">

      {/* ================= HERO ================= */}
      <div className="relative h-[85vh] w-full pt-20">

        <img
          src="https://i.pinimg.com/1200x/7c/60/05/7c6005347a471c2b237ecb28181084fb.jpg"
          alt="office"
          className="absolute top-0 left-0 w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-black/50"></div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 h-full flex flex-col justify-center px-6 md:px-20 text-white max-w-4xl"
        >
          <p className="uppercase tracking-widest text-sm mb-4 text-gray-300">
            Careers
          </p>

          <h1 className="text-4xl md:text-6xl font-light leading-tight">
            Step into the kind of work that builds what’s next
          </h1>

          <p className="mt-6 text-gray-300 text-lg max-w-2xl">
            1–4 years experience | AI & Digital Skills | Early Join Bonus
          </p>

          <Link to="/apply">
            <motion.button
              whileHover={{ scale: 1.05 }}
              className="mt-6 border border-white px-8 py-3 rounded-full hover:bg-white hover:text-black transition"
            >
              Start Your Application →
            </motion.button>
          </Link>
        </motion.div>
      </div>

      {/* ================= INTERNSHIP ================= */}
      <div className="max-w-6xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-12 items-center">

        <motion.div
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
        >
          <h2 className="text-3xl font-semibold mb-4">Internship Programs</h2>
          <p className="text-gray-600 mb-6">
            Kickstart your career with real-world experience and mentorship.
          </p>

          <div className="space-y-4">
            <div>
              <h4 className="font-semibold">Web Development Internship</h4>
              <p className="text-sm text-gray-600">Work on live client projects.</p>
            </div>

            <div>
              <h4 className="font-semibold">Mobile App Internship</h4>
              <p className="text-sm text-gray-600">Build real Android & iOS apps.</p>
            </div>

            <div>
              <h4 className="font-semibold">UI/UX Internship</h4>
              <p className="text-sm text-gray-600">Design modern user experiences.</p>
            </div>
          </div>
        </motion.div>

        <motion.img
          initial={{ opacity: 0, x: 80 }}
          whileInView={{ opacity: 1, x: 0 }}
          src="https://i.pinimg.com/1200x/bf/fa/8f/bffa8f3d463fcf81cc6bed5e95f6b63b.jpg"
          className="rounded-2xl shadow-lg h-[300px] object-cover w-full"
        />
      </div>

      {/* ================= JOBS ================= */}
      <div className="max-w-6xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-12 items-center">

        <motion.img
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          src="https://images.unsplash.com/photo-1551836022-d5d88e9218df?q=80&w=1000"
          className="rounded-2xl shadow-lg h-[300px] object-cover w-full"
        />

        <motion.div
          initial={{ opacity: 0, x: 80 }}
          whileInView={{ opacity: 1, x: 0 }}
        >
          <h2 className="text-3xl font-semibold mb-4">Job Opportunities</h2>
          <p className="text-gray-600 mb-6">
            Join our team and build scalable, impactful solutions.
          </p>

          <div className="space-y-4">
            <div>
              <h4 className="font-semibold">Frontend Developer</h4>
              <p className="text-sm text-gray-600">Create interactive UI.</p>
            </div>

            <div>
              <h4 className="font-semibold">Backend Developer</h4>
              <p className="text-sm text-gray-600">Develop APIs & systems.</p>
            </div>

            <div>
              <h4 className="font-semibold">Full Stack Developer</h4>
              <p className="text-sm text-gray-600">Handle complete apps.</p>
            </div>
          </div>
        </motion.div>
      </div>

      {/* ================= TRAINING ================= */}
      <div className="max-w-6xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-12 items-center">

        <motion.div
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
        >
          <h2 className="text-3xl font-semibold mb-4">Training Programs</h2>
          <p className="text-gray-600 mb-6">
            Learn industry-ready skills with expert guidance.
          </p>

          <div className="space-y-4">
            <div>
              <h4 className="font-semibold">Full Stack Development</h4>
              <p className="text-sm text-gray-600">Frontend + Backend training.</p>
            </div>

            <div>
              <h4 className="font-semibold">Flutter Development</h4>
              <p className="text-sm text-gray-600">Build mobile apps.</p>
            </div>

            <div>
              <h4 className="font-semibold">UI/UX Design</h4>
              <p className="text-sm text-gray-600">Design user experiences.</p>
            </div>
          </div>
        </motion.div>

        <motion.img
          initial={{ opacity: 0, x: 80 }}
          whileInView={{ opacity: 1, x: 0 }}
          src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=1000"
          className="rounded-2xl shadow-lg h-[300px] object-cover w-full"
        />
      </div>

      {/* ================= DIVERSITY ================= */}
      <div className="relative h-[70vh] flex items-center justify-center text-center">

        <img
          src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=1200"
          className="absolute inset-0 w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-black/60"></div>

        <div className="relative z-10 text-white max-w-3xl px-6">
          <h2 className="text-3xl md:text-5xl font-light mb-6">
            A belief in <span className="font-medium">diversity</span>
          </h2>

          <p className="text-gray-300 text-lg mb-6">
            How do you create remarkable change? By hiring, celebrating and
            nurturing the best people—from all walks of life.
          </p>

          <Link to="/about">
            <button className="bg-white text-black px-6 py-3 rounded-full hover:bg-gray-200 transition">
              Learn more about us →
            </button>
          </Link>
        </div>
      </div>

      {/* ================= CTA ================= */}
      {/* <div className="text-center py-20 px-6">
        <h3 className="text-2xl md:text-3xl font-semibold mb-4">
          Ready to Start Your Journey?
        </h3>

      </div> */}

    </section>
  );
};

export default Careers;