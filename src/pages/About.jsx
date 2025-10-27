import React from "react";
import { motion } from "framer-motion";
import { AiOutlineStar } from "react-icons/ai";

export default function About() {
  return (
    <main className="py-20 bg-gray-50">
      <section className="container mx-auto px-4 md:px-0 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="text-4xl font-bold mb-6"
        >
          About MetroSites
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.2 }}
          className="text-gray-700 max-w-3xl mx-auto mb-8 text-lg"
        >
          MetroSites Restaurant has been serving delicious meals crafted with love and passion. 
          We believe in quality ingredients, authentic flavors, and creating memorable dining experiences.
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
    </main>
  );
}
