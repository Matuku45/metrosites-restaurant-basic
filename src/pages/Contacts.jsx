import React, { useState } from "react";
import { motion } from "framer-motion";
import { AiOutlineMail, AiOutlinePhone, AiOutlineHome, AiOutlineInstagram, AiOutlineFacebook, AiOutlineTwitter } from "react-icons/ai";

export default function Contacts() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Thank you ${formData.name}, we received your message!`);
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <main className="py-20 bg-gradient-to-b from-gray-50 via-gray-100 to-gray-200">
      {/* Header */}
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="text-4xl md:text-5xl font-bold mb-16 text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-500 via-indigo-600 to-purple-500"
      >
        Contact Us
      </motion.h2>

      <div className="container mx-auto px-4 md:px-0 grid md:grid-cols-2 gap-12">
        
        {/* Contact Info & Map */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="flex flex-col gap-8"
        >
          {/* Info Cards */}
          <div className="space-y-6">
            <div className="flex items-center gap-4 bg-white rounded-xl shadow-lg p-4 hover:shadow-2xl transition">
              <AiOutlineHome className="text-blue-600 text-3xl" />
              <p className="text-gray-700 font-semibold">123 Main Street, Cityville</p>
            </div>
            <div className="flex items-center gap-4 bg-white rounded-xl shadow-lg p-4 hover:shadow-2xl transition">
              <AiOutlinePhone className="text-blue-600 text-3xl" />
              <p className="text-gray-700 font-semibold">+27 123 456 789</p>
            </div>
            <div className="flex items-center gap-4 bg-white rounded-xl shadow-lg p-4 hover:shadow-2xl transition">
              <AiOutlineMail className="text-blue-600 text-3xl" />
              <p className="text-gray-700 font-semibold">contact@metrosites.com</p>
            </div>

            {/* Social Media */}
            <div className="flex items-center gap-6 justify-center mt-4 text-blue-600 text-2xl">
              <AiOutlineFacebook className="hover:text-blue-800 transition cursor-pointer" />
              <AiOutlineInstagram className="hover:text-pink-500 transition cursor-pointer" />
              <AiOutlineTwitter className="hover:text-sky-400 transition cursor-pointer" />
            </div>
          </div>

          {/* Google Map */}
          <div className="mt-6 rounded-xl overflow-hidden shadow-lg">
            <iframe
              title="MetroSites Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3303.512345678!2d18.423!3d-33.925!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1dcc5e3f4!2sCityville!5e0!3m2!1sen!2sza!4v1234567890"
              width="100%"
              height="300"
              className="border-0"
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </div>
        </motion.div>

        {/* Contact Form */}
        <motion.form
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="flex flex-col gap-4 bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition"
          onSubmit={handleSubmit}
        >
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Your Name"
            className="border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-600"
            required
          />
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Your Email"
            className="border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-600"
            required
          />
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Your Message"
            className="border rounded-lg p-3 h-36 focus:outline-none focus:ring-2 focus:ring-blue-600"
            required
          />
          <button
            type="submit"
            className="bg-blue-600 text-white py-3 rounded-lg font-bold hover:bg-blue-700 transition"
          >
            Send Message
          </button>
        </motion.form>
      </div>
    </main>
  );
}
