import React from "react";
import { motion } from "framer-motion";
import { AiOutlineStar } from "react-icons/ai";
import { GiChefToque } from "react-icons/gi";

export default function About() {
  const values = [
    "Quality Ingredients",
    "Authentic Flavors",
    "Exceptional Service",
    "Memorable Experiences",
  ];

  return (
    <main className="py-20 bg-gray-50">
      
      {/* About Header */}
      <section className="container mx-auto px-4 md:px-0 text-center mb-16">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="text-4xl md:text-5xl font-bold mb-6 text-blue-600"
        >
          About MetroSites
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.2 }}
          className="text-gray-700 max-w-3xl mx-auto mb-6 text-lg md:text-xl"
        >
          MetroSites Restaurant has been delighting guests with exquisite meals 
          crafted with love and passion. Since our founding, our mission has been 
          to serve **fresh, high-quality ingredients** and create dining experiences 
          that linger in memory.
        </motion.p>

        <motion.div
          className="inline-flex items-center gap-2 text-yellow-400 text-3xl"
          whileHover={{ scale: 1.1 }}
        >
          <AiOutlineStar />
          <AiOutlineStar />
          <AiOutlineStar />
          <AiOutlineStar />
          <AiOutlineStar />
        </motion.div>
      </section>

      {/* Mission & Values */}
      <section className="container mx-auto px-4 md:px-0 text-center mb-16">
        <motion.h3
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-3xl md:text-4xl font-semibold mb-8 text-indigo-600"
        >
          Our Mission
        </motion.h3>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.2 }}
          className="text-gray-700 max-w-2xl mx-auto mb-8 text-lg md:text-xl"
        >
          To create **memorable dining experiences** by combining innovative culinary techniques 
          with the freshest ingredients, exceptional service, and a welcoming atmosphere.
        </motion.p>

        <motion.h3
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-3xl md:text-4xl font-semibold mb-8 text-indigo-600"
        >
          Our Values
        </motion.h3>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {values.map((value, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.2 }}
              className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition flex items-center gap-4"
            >
              <GiChefToque className="text-4xl text-blue-500" />
              <p className="text-gray-700 font-semibold text-lg">{value}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Team Section */}
      <section className="container mx-auto px-4 md:px-0 text-center">
        <motion.h3
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-3xl md:text-4xl font-semibold mb-8 text-indigo-600"
        >
          Meet Our Team
        </motion.h3>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="text-gray-700 max-w-3xl mx-auto mb-6 text-lg md:text-xl"
        >
          Our professional chefs and staff are dedicated to delivering the **best culinary experience**. 
          With years of experience and passion for food, they turn every meal into a masterpiece.
        </motion.p>
      </section>
    </main>
  );
}
