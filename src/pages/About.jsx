import React from "react";
import { motion } from "framer-motion";
import { AiOutlineStar, AiOutlineHeart } from "react-icons/ai";
import { GiChefToque, GiKnifeFork } from "react-icons/gi";

export default function About() {
  const values = [
    { icon: <GiKnifeFork className="text-4xl text-white" />, title: "Quality Ingredients" },
    { icon: <AiOutlineHeart className="text-4xl text-white" />, title: "Authentic Flavors" },
    { icon: <GiChefToque className="text-4xl text-white" />, title: "Exceptional Service" },
    { icon: <AiOutlineStar className="text-4xl text-white" />, title: "Memorable Experiences" },
  ];

  const team = [
    { name: "Chef John", role: "Head Chef", icon: <GiChefToque className="text-5xl text-yellow-400" /> },
    { name: "Sara Lee", role: "Sous Chef", icon: <GiChefToque className="text-5xl text-yellow-400" /> },
    { name: "Mike Brown", role: "Manager", icon: <AiOutlineStar className="text-5xl text-yellow-400" /> },
  ];

  return (
    <main className="bg-gradient-to-b from-gray-50 via-gray-100 to-gray-200 py-20">

      {/* About Header */}
      <section className="container mx-auto px-4 md:px-0 text-center mb-16">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="text-4xl md:text-5xl font-extrabold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-indigo-500 to-purple-500"
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
          MetroSites Restaurant has been delighting guests with exquisite meals crafted with love and passion.
          Since our founding, our mission has been to serve <strong>fresh, high-quality ingredients</strong> 
          and create dining experiences that linger in memory.
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
      <section className="container mx-auto px-4 md:px-0 text-center mb-20">
        <motion.h3
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-3xl md:text-4xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 via-purple-500 to-pink-500"
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
              className="bg-gradient-to-r from-blue-500 via-indigo-600 to-purple-600 p-6 rounded-2xl shadow-lg hover:shadow-2xl transition flex items-center gap-4 cursor-pointer"
            >
              {value.icon}
              <p className="text-white font-semibold text-lg md:text-xl">{value.title}</p>
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
          className="text-3xl md:text-4xl font-bold mb-12 bg-clip-text text-transparent bg-gradient-to-r from-pink-400 via-red-500 to-yellow-400"
        >
          Meet Our Team
        </motion.h3>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {team.map((member, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.2 }}
              className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-2xl transition flex flex-col items-center gap-4"
            >
              {member.icon}
              <h4 className="text-xl font-semibold">{member.name}</h4>
              <p className="text-gray-600">{member.role}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="mt-20 py-16 bg-gradient-to-r from-indigo-600 via-blue-600 to-purple-500 text-white text-center rounded-xl mx-4 md:mx-20">
        <motion.h3
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="text-3xl md:text-4xl font-bold mb-6"
        >
          Join Us for an Unforgettable Dining Experience
        </motion.h3>
        <motion.a
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          href="#contact"
          className="bg-white text-blue-600 font-bold py-3 px-6 rounded-lg shadow-lg inline-block hover:bg-gray-100 transition"
        >
          Book a Table
        </motion.a>
      </section>
    </main>
  );
}
