import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { GiKnifeFork, GiMeal, GiChefToque } from "react-icons/gi";
import { AiOutlineStar } from "react-icons/ai";

import rest1 from "../assets/rest1.webp";
import rest2 from "../assets/rest2.webp";
import rest3 from "../assets/rest3.webp";
import rest4 from "../assets/rest4.webp";
import rest5 from "../assets/rest5.webp";
import rest6 from "../assets/rest6.webp";
import rest7 from "../assets/rest7.webp";

export default function Menu() {
  // Specials for carousel
  const specials = [
    { name: "Grilled Salmon", desc: "Freshly grilled, served with veggies", price: "R250", icon: <GiKnifeFork />, img: rest1 },
    { name: "Seafood Platter", desc: "Fresh seafood with lemon and herbs", price: "R300", icon: <GiChefToque />, img: rest6 },
    { name: "Steak & Veggies", desc: "Tender steak with roasted vegetables", price: "R280", icon: <GiMeal />, img: rest7 },
  ];

  // Menu items for grid
  const menuItems = [
    { name: "Classic Burger", desc: "Beef patty, cheese, lettuce, tomato", price: "R150", img: rest2 },
    { name: "Veggie Pasta", desc: "Seasonal vegetables with creamy sauce", price: "R180", img: rest3 },
    { name: "Chicken Caesar Salad", desc: "Crisp lettuce, grilled chicken, parmesan", price: "R200", img: rest4 },
    { name: "Chocolate Lava Cake", desc: "Rich molten chocolate cake", price: "R120", img: rest5 },
  ];

  const [current, setCurrent] = useState(0);

  // Auto-slide every 4s
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev === specials.length - 1 ? 0 : prev + 1));
    }, 4000);
    return () => clearInterval(timer);
  }, [specials.length]);

  const nextSlide = () => setCurrent(current === specials.length - 1 ? 0 : current + 1);
  const prevSlide = () => setCurrent(current === 0 ? specials.length - 1 : current - 1);

  return (
    <main className="py-20 bg-gradient-to-b from-blue-50 via-indigo-100 to-purple-100 overflow-hidden">

      {/* Header */}
      <section className="text-center mb-16 px-4">
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-5xl md:text-6xl font-extrabold mb-4 bg-gradient-to-r from-blue-600 via-indigo-700 to-purple-700 bg-clip-text text-transparent"
        >
          Our Specials
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="text-gray-700 max-w-2xl mx-auto text-lg md:text-xl"
        >
          Experience our chef’s favorite dishes, carefully crafted to bring unforgettable flavors.
        </motion.p>
        <div className="flex justify-center mt-6 gap-2 text-yellow-400 text-2xl">
          {[...Array(5)].map((_, i) => <AiOutlineStar key={i} />)}
        </div>
      </section>

      {/* Carousel for Specials */}
      <section className="relative container mx-auto px-4 md:px-0 mb-24">
        <div className="flex justify-between mb-6">
          <button
            onClick={prevSlide}
            className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white p-3 rounded-full shadow-lg hover:scale-110 transition"
          >
            &#8592;
          </button>
          <button
            onClick={nextSlide}
            className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white p-3 rounded-full shadow-lg hover:scale-110 transition"
          >
            &#8594;
          </button>
        </div>

        <div className="relative h-[30rem] rounded-3xl overflow-hidden shadow-2xl">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, scale: 1.05 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 1.2, ease: "easeInOut" }}
              className="absolute inset-0"
            >
              <img src={specials[current].img} alt={specials[current].name} className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent flex flex-col justify-end p-10 text-white">
                <motion.div
                  initial={{ y: 30, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.3, duration: 0.8 }}
                >
                  <div className="text-5xl mb-3">{specials[current].icon}</div>
                  <h3 className="text-3xl font-bold mb-1">{specials[current].name}</h3>
                  <p className="text-gray-200 mb-3">{specials[current].desc}</p>
                  <p className="text-yellow-400 font-bold text-2xl">{specials[current].price}</p>
                </motion.div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* Full Menu Section */}
      <section className="text-center mb-16">
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-4xl md:text-5xl font-extrabold mb-10 text-indigo-700"
        >
          Full Menu
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 px-6 md:px-16">
          {menuItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.8 }}
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition"
            >
              <img src={item.img} alt={item.name} className="w-full h-56 object-cover" />
              <div className="p-5 text-left">
                <h3 className="text-xl font-bold text-indigo-700">{item.name}</h3>
                <p className="text-gray-600 mt-1">{item.desc}</p>
                <p className="text-yellow-500 font-bold mt-3 text-lg">{item.price}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="text-center py-20 bg-gradient-to-r from-indigo-700 via-blue-700 to-purple-700 text-white mt-20 rounded-t-3xl shadow-inner">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-3xl md:text-4xl font-bold mb-6"
        >
          Ready to Taste the Magic?
        </motion.h2>
        <motion.a
          href="#contact"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="bg-white text-indigo-700 font-bold py-3 px-10 rounded-full shadow-lg hover:bg-gray-100 transition"
        >
          Reserve Your Table Now
        </motion.a>
      </section>
    </main>
  );
}
