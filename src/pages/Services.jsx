import React from "react";
import { motion } from "framer-motion";

const services = [
  {
    title: "UI/UX Design",
    desc: "We craft intuitive and engaging user experiences.",
    advantage: "User-centered design with modern aesthetics.",
    tech: "Figma, Adobe XD, Sketch",
    img: "https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?q=80&w=800",
  },
  {
    title: "Mobile App Development",
    desc: "Build high-performance Android & iOS apps.",
    advantage: "Scalable, fast, and user-friendly apps.",
    tech: "React Native, Flutter",
    img: "https://images.unsplash.com/photo-1551650975-87deedd944c3?q=80&w=800",
  },
  {
    title: "Web Development",
    desc: "Modern responsive websites and web apps.",
    advantage: "SEO-friendly and lightning-fast websites.",
    tech: "React, Node.js, Next.js",
    img: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=800",
  },
  {
    title: "E-commerce",
    desc: "Launch powerful online stores with seamless UX.",
    advantage: "Secure payments and scalable platforms.",
    tech: "Shopify, WooCommerce",
    img: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=800",
  },
  {
    title: "Digital Marketing",
    desc: "Grow your brand with data-driven strategies.",
    advantage: "Higher reach and conversion rates.",
    tech: "SEO, Ads, Social Media",
    img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800",
  },
  {
    title: "DevOps",
    desc: "Automate and streamline development workflows.",
    advantage: "Fast deployment and reliability.",
    tech: "AWS, Docker, CI/CD",
    img: "https://images.unsplash.com/photo-1600267175161-cfaa711b4a81?q=80&w=800",
  },
  {
    title: "Inventory Software",
    desc: "Manage stock and operations efficiently.",
    advantage: "Real-time tracking and analytics.",
    tech: "Custom ERP",
    img: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=800",
  },
  {
    title: "Booking Applications",
    desc: "Smart booking systems for businesses.",
    advantage: "Easy scheduling and automation.",
    tech: "Full-stack solutions",
    img: "https://images.unsplash.com/photo-1508780709619-79562169bc64?q=80&w=800",
  },
  {
    title: "AI Chat Bot",
    desc: "Automate conversations with intelligent bots.",
    advantage: "24/7 support and smart responses.",
    tech: "AI, NLP",
    img: "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=800",
  },
  {
    title: "Backend Development",
    desc: "Robust and scalable backend systems.",
    advantage: "Secure, fast, and efficient APIs.",
    tech: "Node.js, Express, Databases",
    img: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?q=80&w=800",
  },
];

const Services = () => {
  return (
    <section className="bg-white text-black">

      {/* ================= HERO SECTION ================= */}
      <div className="min-h-[60vh] flex flex-col justify-center items-center text-center px-6 pt-20">

        <motion.h1
          initial={{ opacity: 0, y: -60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-3xl md:text-5xl font-light leading-tight tracking-wide"
        >
          Transforming Ideas <br />
          <span className="text-gray-600 font-medium">
            Into Digital Impact
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="mt-6 text-gray-600 max-w-2xl text-lg"
        >
          We design, develop, and deliver cutting-edge digital solutions that help
          businesses grow faster, smarter, and stronger in today’s competitive world.
        </motion.p>

      </div>

      {/* ================= SERVICES ================= */}
      <div className="max-w-6xl mx-auto px-6 space-y-20 pb-20">
        {services.map((service, index) => (
          <motion.div
  key={index}
  initial={{ 
    opacity: 0, 
    x: index % 2 === 0 ? -120 : 120 
  }}
  whileInView={{ 
    opacity: 1, 
    x: 0 
  }}
  transition={{ 
    duration: 0.6, 
    ease: "easeOut",
    delay: index * 0.1
  }}
  viewport={{ once: true, margin: "-80px" }}
  className={`flex flex-col md:flex-row items-center gap-10 
  ${index % 2 !== 0 ? "md:flex-row-reverse" : ""}`}
>

            {/* IMAGE */}
            <div className="w-full md:w-1/2 overflow-hidden rounded-2xl">
              <img
                src={service.img}
                alt={service.title}
                loading="lazy"
                className="w-full h-[280px] object-cover rounded-2xl shadow-lg hover:scale-105 transition duration-500"
              />
            </div>
<motion.div
  whileHover={{ scale: 1.05 }}
  transition={{ duration: 0.3 }}
  className="w-full md:w-1/2 p-8 rounded-2xl shadow-xl transition overflow-hidden relative"
>

  {/* Background Fade Animation */}
  <motion.div
    className="absolute inset-0 rounded-2xl bg-gray-100"
    animate={{ opacity: [0.6, 1, 0.6] }}
    transition={{ duration: 4, repeat: Infinity }}
  />

  {/* CONTENT */}
  <div className="relative z-10">

    {/* TITLE */}
    <motion.h2
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="text-3xl md:text-4xl font-semibold mb-4 tracking-wide"
    >
      {service.title}
    </motion.h2>

    {/* DESCRIPTION */}
    <motion.p
      animate={{ opacity: [0.6, 1, 0.6] }}
      transition={{ duration: 3, repeat: Infinity }}
      className="text-gray-700 mb-6 text-lg font-light tracking-wide"
    >
      {service.desc}
    </motion.p>

    <div className="space-y-6">

      {/* ADVANTAGE */}
      <div>
        <h4 className="text-xs uppercase tracking-widest text-black-400 mb-2">
          Why It Stands Out
        </h4>

        <motion.p
          animate={{ opacity: [0.6, 1, 0.6] }}
          transition={{ duration: 3, repeat: Infinity, delay: 0.3 }}
          className="text-base text-gray-700 font-light"
        >
          {service.advantage}
        </motion.p>
      </div>

      {/* TECH */}
      <div>
        <h4 className="text-xs uppercase tracking-widest text-black-400 mb-2">
          Tech Behind The Magic
        </h4>

        <motion.p
          animate={{ opacity: [0.6, 1, 0.6] }}
          transition={{ duration: 3, repeat: Infinity, delay: 0.6 }}
          className="text-base text-gray-700 font-light"
        >
          {service.tech}
        </motion.p>
      </div>

    </div>

  </div>
</motion.div>
          </motion.div>
        ))}
      </div>

    </section>
  );
};

export default Services;