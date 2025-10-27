import React, { useState } from "react";
import { motion } from "framer-motion";
import { AiOutlineMail, AiOutlinePhone, AiOutlineHome } from "react-icons/ai";

export default function Contacts() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Thank you ${formData.name}, we received your message!`);
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <main className="py-20 bg-white">
      <section className="container mx-auto px-4 md:px-0">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="text-4xl font-bold mb-12 text-center"
        >
          Contact Us
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="flex flex-col gap-6 text-gray-700"
          >
            <div className="flex items-center gap-4 text-xl">
              <AiOutlineHome className="text-blue-600" /> 123 Main Street, Cityville
            </div>
            <div className="flex items-center gap-4 text-xl">
              <AiOutlinePhone className="text-blue-600" /> +27 123 456 789
            </div>
            <div className="flex items-center gap-4 text-xl">
              <AiOutlineMail className="text-blue-600" /> contact@metrosites.com
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.form
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="flex flex-col gap-4"
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
              className="border rounded-lg p-3 h-32 focus:outline-none focus:ring-2 focus:ring-blue-600"
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
      </section>
    </main>
  );
}
