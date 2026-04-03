import React, { useState } from "react";

const Apply = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    type: "Internship",
    role: "",
    message: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(form);

    alert("Application Submitted Successfully ✅");

    setForm({
      name: "",
      email: "",
      phone: "",
      type: "Internship",
      role: "",
      message: "",
    });
  };

  return (
    <section className="min-h-screen bg-gray-50 flex justify-center items-center px-6 py-20">
      <div className="bg-white w-full max-w-2xl p-8 rounded-2xl shadow-xl">

        <h2 className="text-3xl font-semibold mb-6 text-center">
          Apply Now
        </h2>

        <form onSubmit={handleSubmit} className="space-y-5">

          {/* NAME */}
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            value={form.name}
            onChange={handleChange}
            required
            className="w-full border p-3 rounded-lg"
          />

          {/* EMAIL */}
          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={form.email}
            onChange={handleChange}
            required
            className="w-full border p-3 rounded-lg"
          />

          {/* PHONE */}
          <input
            type="text"
            name="phone"
            placeholder="Phone Number"
            value={form.phone}
            onChange={handleChange}
            required
            className="w-full border p-3 rounded-lg"
          />

          {/* TYPE */}
          <select
            name="type"
            value={form.type}
            onChange={handleChange}
            className="w-full border p-3 rounded-lg"
          >
            <option>Internship</option>
            <option>Job</option>
            <option>Training</option>
          </select>

          {/* ROLE */}
          <input
            type="text"
            name="role"
            placeholder="Role (e.g. Frontend Developer)"
            value={form.role}
            onChange={handleChange}
            className="w-full border p-3 rounded-lg"
          />

          {/* MESSAGE */}
          <textarea
            name="message"
            placeholder="Why should we choose you?"
            value={form.message}
            onChange={handleChange}
            className="w-full border p-3 rounded-lg"
          />

          {/* SUBMIT */}
          <button
            type="submit"
            className="w-full bg-indigo-600 text-white py-3 rounded-lg hover:bg-indigo-700 transition"
          >
            Submit Application
          </button>

        </form>
      </div>
    </section>
  );
};

export default Apply;