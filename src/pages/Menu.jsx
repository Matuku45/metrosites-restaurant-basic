import React, { useState } from "react";
import { motion } from "framer-motion";
import { GiKnifeFork, GiMeal, GiChefToque } from "react-icons/gi";
import { AiOutlineStar } from "react-icons/ai";

// Import all your restaurant images
import rest1 from "../assets/rest1.webp";
import rest2 from "../assets/rest2.webp";
import rest3 from "../assets/rest3.webp";
import rest4 from "../assets/rest4.webp";
import rest5 from "../assets/rest5.webp";
import rest6 from "../assets/rest6.webp";
import rest7 from "../assets/rest7.webp";

export default function Menu() {
  const menuItems = [
    { name: "Grilled Salmon", desc: "Freshly grilled, served with veggies", price: "$25", icon: <GiKnifeFork />, img: rest1 },
    { name: "Classic Burger", desc: "Beef patty, cheese, lettuce, tomato", price: "$15", icon: <GiKnifeFork />, img: rest2 },
    { name: "Veggie Pasta", desc: "Seasonal vegetables with creamy sauce", price: "$18", icon: <GiKnifeFork />, img: rest3 },
    { name: "Chicken Caesar Salad", desc: "Crisp lettuce, grilled chicken, parmesan", price: "$20", icon: <GiChefToque />, img: rest4 },
    { name: "Chocolate Lava Cake", desc: "Rich molten chocolate cake", price: "$10", icon: <GiMeal />, img: rest5 },
    { name: "Seafood Platter", desc: "Fresh seafood with lemon and herbs", price: "$30", icon: <GiMeal />, img: rest6 },
    { name: "Steak & Veggies", desc: "Tender steak with roasted vegetables", price: "$28", icon: <GiChefToque />, img: rest7 },
  ];

  const [current, setCurrent] = useState(0);

  const nextSlide = () => {
    setCurrent(current === menuItems.length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? menuItems.length - 1 : current - 1);
  };

  return (
    <main className="py-20 bg-gradient-to-b from-blue-50 via-indigo-50 to-purple-50">
      
      {/* Header */}
      <section className="text-center mb-16 px-4">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="text-4xl md:text-5xl font-bold mb-4 text-indigo-600"
        >
          Our Delicious Menu
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.3 }}
          className="text-gray-700 max-w-2xl mx-auto text-lg md:text-xl"
        >
          Explore our variety of dishes made with passion, fresh ingredients, and love. Each plate is a masterpiece ready to delight your taste buds.
        </motion.p>
        <motion.div className="flex justify-center mt-6 gap-2 text-yellow-400 text-2xl" whileHover={{ scale: 1.1 }}>
          <AiOutlineStar /><AiOutlineStar /><AiOutlineStar /><AiOutlineStar /><AiOutlineStar />
        </motion.div>
      </section>

      {/* Carousel Menu */}
      <section className="relative container mx-auto px-4 md:px-0">
        <div className="flex justify-between mb-4">
          <button
            onClick={prevSlide}
            className="bg-blue-600 text-white p-3 rounded-full shadow-lg hover:bg-blue-700 transition"
          >
            &#8592;
          </button>
          <button
            onClick={nextSlide}
            className="bg-blue-600 text-white p-3 rounded-full shadow-lg hover:bg-blue-700 transition"
          >
            &#8594;
          </button>
        </div>

        <motion.div
          key={current}
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.8 }}
          className="relative rounded-xl overflow-hidden shadow-2xl"
        >
          <img
            src={menuItems[current].img}
            alt={menuItems[current].name}
            className="w-full h-96 object-cover group-hover:scale-105 transition duration-500 rounded-xl"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent rounded-xl flex flex-col justify-end p-6 text-white">
            <div className="text-5xl mb-2">{menuItems[current].icon}</div>
            <h3 className="text-2xl font-bold mb-1">{menuItems[current].name}</h3>
            <p className="mb-2">{menuItems[current].desc}</p>
            <p className="font-bold text-xl">{menuItems[current].price}</p>
          </div>
        </motion.div>
      </section>

      {/* CTA */}
      <section className="text-center py-20 bg-gradient-to-r from-indigo-600 via-blue-600 to-purple-600 text-white mt-16">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="text-3xl md:text-4xl font-bold mb-6"
        >
          Ready to Taste the Difference?
        </motion.h2>
        <motion.a
          href="#contact"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-white text-blue-600 font-bold py-3 px-8 rounded-lg shadow-lg hover:bg-gray-100 transition"
        >
          Reserve Your Table
        </motion.a>
      </section>
    </main>
  );
}
