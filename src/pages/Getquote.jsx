import React, { useState } from "react";
import { motion } from "framer-motion";

const GetQuote = () => {

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.id]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const whatsappNumber = "917867908377";

    const text = `Hello JOD TECH 👋

Name: ${form.name}
Email: ${form.email}
Phone: ${form.phone}

Project Details:
${form.message}`;

    const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(text)}`;
    window.open(url, "_blank");
  };

  return (
    <section className="bg-gray-50">

      {/* ================= HERO ================= */}
      <div className="min-h-[50vh] flex flex-col justify-center items-center text-center px-6 bg-white">
        
        <motion.h1
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-5xl font-light"
        >
          Let’s Build Something <br />
          <span className="text-gray-600 font-medium">
            Amazing Together
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="mt-4 text-gray-600 max-w-xl"
        >
          Share your idea and get a quick quote. We respond instantly via WhatsApp.
        </motion.p>

      </div>

      {/* ================= MAIN CARD ================= */}
      <div className="py-16 px-4">
        <div className="max-w-6xl mx-auto bg-white shadow-xl rounded-2xl overflow-hidden">

          <div className="grid md:grid-cols-2">

            {/* ================= LEFT SIDE ================= */}
            <div className="p-8 space-y-6 bg-gray-50 flex flex-col items-center text-center">

              <div>
                <h3 className="font-semibold text-gray-800 mb-2 text-lg">
                  Visit Our Office
                </h3>
                <p className="text-gray-600">No 10, Chitharanjan St</p>
                <p className="text-gray-600">
                  Chinna Chokkikulam, Madurai – 625002
                </p>
              </div>

              <div>
                <p className="text-gray-600"> 7867908377</p>
                <p className="text-gray-600">✉ support@jodtech.in</p>
              </div>

              {/* ================= QR CODE ================= */}
              <div className="bg-white p-4 rounded-xl shadow-md">
                
                <img
                  src="https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=https://www.google.com/maps?q=9.9358056,78.132"
                  alt="QR Code Location"
                  className="w-[180px] h-[180px]"
                />

                <p className="text-sm text-gray-500 mt-3">
                  Scan to open location in Google Maps
                </p>

              </div>

            </div>

            {/* ================= RIGHT SIDE (FORM) ================= */}
            <div className="p-8">

              <h2 className="text-2xl font-semibold mb-6 text-gray-800">
                Get a Quote
              </h2>

              <form onSubmit={handleSubmit} className="grid gap-5">

                <input
                  type="text"
                  id="name"
                  placeholder="Your Name *"
                  required
                  onChange={handleChange}
                  className="border p-3 rounded-lg focus:ring-2 focus:ring-indigo-500 outline-none"
                />

                <input
                  type="email"
                  id="email"
                  placeholder="Email *"
                  required
                  onChange={handleChange}
                  className="border p-3 rounded-lg focus:ring-2 focus:ring-indigo-500 outline-none"
                />

                <input
                  type="tel"
                  id="phone"
                  placeholder="Phone Number"
                  onChange={handleChange}
                  className="border p-3 rounded-lg focus:ring-2 focus:ring-indigo-500 outline-none"
                />

                <textarea
                  id="message"
                  rows="5"
                  placeholder="Project Details *"
                  required
                  onChange={handleChange}
                  className="border p-3 rounded-lg focus:ring-2 focus:ring-indigo-500 outline-none"
                ></textarea>

                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  type="submit"
                  className="bg-green-500 text-white py-3 rounded-lg font-semibold hover:bg-green-600 transition"
                >
                  Send via WhatsApp 
                </motion.button>

              </form>

            </div>

          </div>
        </div>
      </div>

    </section>
  );
};

export default GetQuote;