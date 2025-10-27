import React from "react";
import { motion } from "framer-motion";
import { AiOutlineArrowRight, AiOutlineStar } from "react-icons/ai";
import { GiKnifeFork, GiMeal } from "react-icons/gi";

export default function Home() {
  const featuredMenu = [
    { name: "Grilled Salmon", desc: "Freshly grilled, served with veggies", price: "$25", icon: <GiKnifeFork /> },
    { name: "Classic Burger", desc: "Beef patty, cheese, lettuce, tomato", price: "$15", icon: <GiKnifeFork /> },
    { name: "Veggie Pasta", desc: "Seasonal vegetables with creamy sauce", price: "$18", icon: <GiKnifeFork /> },
  ];

  return (
    <main className="space-y-20">

      {/* Hero Section with gradient background */}
      <section className="relative bg-gradient-to-r from-blue-500 via-indigo-600 to-purple-600 text-white h-screen flex flex-col items-center justify-center gap-6">
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-center px-4"
        >
          <div className="text-6xl mb-4 animate-bounce">
            <GiMeal />
          </div>
          <h1 className="text-4xl md:text-6xl font-extrabold mb-4">
            Welcome to MetroSites
          </h1>
          <p className="text-lg md:text-2xl mb-6">
            Taste the finest flavors crafted with passion and love.
          </p>
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="#menu"
            className="bg-white text-blue-600 font-bold py-3 px-6 rounded-lg shadow-lg inline-flex items-center gap-2 hover:bg-gray-100 transition"
          >
            Explore Menu <AiOutlineArrowRight />
          </motion.a>
        </motion.div>
      </section>

      {/* About Section */}
      <section className="container mx-auto px-4 md:px-0 text-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <h2 className="text-3xl font-bold mb-4">Our Story</h2>
          <p className="text-gray-700 max-w-2xl mx-auto mb-6 text-lg">
            MetroSites Restaurant brings together the best local ingredients
            to create unforgettable meals. Every dish is a story on your plate.
          </p>
          <motion.div
            className="inline-flex items-center gap-2 text-yellow-400 text-2xl"
            whileHover={{ scale: 1.1 }}
          >
            <AiOutlineStar />
            <AiOutlineStar />
            <AiOutlineStar />
            <AiOutlineStar />
            <AiOutlineStar />
          </motion.div>
        </motion.div>
      </section>

      {/* Featured Menu */}
      <section id="menu" className="bg-gray-50 py-20">
        <div className="container mx-auto px-4 md:px-0 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-3xl font-bold mb-12"
          >
            Featured Menu
          </motion.h2>

          <div className="grid md:grid-cols-3 gap-8">
            {featuredMenu.map((item, idx) => (
              <motion.div
                key={idx}
                whileHover={{ scale: 1.05, y: -5 }}
                className="card bg-white shadow-lg p-6 rounded-xl hover:shadow-2xl transition duration-300"
              >
                <div className="text-5xl text-blue-600 mb-4">{item.icon}</div>
                <h3 className="text-xl font-bold mb-2">{item.name}</h3>
                <p className="text-gray-600 mb-4">{item.desc}</p>
                <p className="text-blue-600 font-semibold text-lg">{item.price}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-indigo-600 via-blue-600 to-blue-500 text-white py-20 text-center">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="text-3xl md:text-4xl font-bold mb-6"
        >
          Reserve Your Table Today
        </motion.h2>
        <motion.a
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          href="#contact"
          className="bg-white text-blue-600 font-bold py-3 px-6 rounded-lg shadow-lg inline-block hover:bg-gray-100 transition"
        >
          Book Now
        </motion.a>
      </section>
    </main>
  );
}
