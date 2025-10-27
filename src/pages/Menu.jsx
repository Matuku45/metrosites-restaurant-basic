import React from "react";
import { motion } from "framer-motion";
import { GiKnifeFork } from "react-icons/gi";

export default function Menu() {
  const menuItems = [
    { name: "Grilled Salmon", desc: "Freshly grilled, served with veggies", price: "$25" },
    { name: "Classic Burger", desc: "Beef patty, cheese, lettuce, tomato", price: "$15" },
    { name: "Veggie Pasta", desc: "Seasonal vegetables with creamy sauce", price: "$18" },
    { name: "Chicken Caesar Salad", desc: "Crisp lettuce, grilled chicken, parmesan", price: "$20" },
    { name: "Chocolate Lava Cake", desc: "Rich molten chocolate cake", price: "$10" },
  ];

  return (
    <main className="py-20 bg-gray-50">
      <section className="container mx-auto px-4 md:px-0 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="text-4xl font-bold mb-12"
        >
          Our Menu
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-8">
          {menuItems.map((item, idx) => (
            <motion.div
              key={idx}
              whileHover={{ scale: 1.05, y: -5 }}
              className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition duration-300"
            >
              <div className="text-4xl text-blue-600 mb-4">
                <GiKnifeFork />
              </div>
              <h3 className="text-xl font-bold mb-2">{item.name}</h3>
              <p className="text-gray-600 mb-4">{item.desc}</p>
              <p className="text-blue-600 font-semibold text-lg">{item.price}</p>
            </motion.div>
          ))}
        </div>
      </section>
    </main>
  );
}
