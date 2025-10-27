import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { AiOutlineArrowRight, AiOutlineStar } from "react-icons/ai";
import { GiKnifeFork, GiMeal } from "react-icons/gi";

import food1 from "../assets/food.jpg";
import food2 from "../assets/food2.webp";
import food3 from "../assets/food3.webp";

export default function Home() {
  const heroImages = [food1, food2, food3];
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % heroImages.length);
    }, 5000); // change every 5 seconds
    return () => clearInterval(interval);
  }, []);

  const services = [
    {
      title: "Fine Dining",
      desc: "Experience elegant meals with carefully selected ingredients and exquisite presentation.",
      icon: <GiKnifeFork className="text-6xl text-blue-500 mx-auto" />,
    },
    {
      title: "Home Delivery",
      desc: "Get your favorite meals delivered to your doorstep quickly and safely.",
      icon: <GiMeal className="text-6xl text-indigo-500 mx-auto" />,
    },
    {
      title: "Event Catering",
      desc: "Take proper takeaway of your special occasions with our customized catering services.",
      icon: <GiKnifeFork className="text-6xl text-purple-500 mx-auto" />,
    },
  ];

  return (
    <main className="space-y-20">

      {/* Hero Section */}
      <section
        className="relative text-white h-screen flex flex-col items-center justify-center gap-6"
        style={{
          backgroundImage: `url(${heroImages[currentImage]})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          transition: "background-image 1s ease-in-out",
        }}
      >
        <div className="absolute inset-0 bg-black/40"></div> {/* overlay */}
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="relative z-10 text-center px-4"
        >
          <div className="text-6xl mb-4 animate-bounce">
            <GiMeal />
          </div>
       <motion.h1
  initial={{ opacity: 0, y: -30 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 1 }}
  className="text-4xl md:text-6xl font-extrabold mb-4 text-center bg-clip-text text-transparent 
             bg-gradient-to-r from-yellow-400 via-red-500 to-pink-500 drop-shadow-lg"
>
  Welcome to MetroSites Resturant
</motion.h1>

          <p className="text-lg md:text-2xl mb-6">
            Taste the finest flavors crafted with passion and love.
          </p>
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="#services"
            className="bg-white text-blue-600 font-bold py-3 px-6 rounded-lg shadow-lg inline-flex items-center gap-2 hover:bg-gray-100 transition"
          >
            Explore Services <AiOutlineArrowRight />
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
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-blue-600">Our Story</h2>
          <p className="text-gray-700 max-w-2xl mx-auto mb-6 text-lg md:text-xl">
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

      {/* Services Section */}
      <section id="services" className="bg-gray-50 py-20">
        <div className="container mx-auto px-4 md:px-0 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-3xl md:text-4xl font-bold mb-12 text-blue-600"
          >
            Our Services
          </motion.h2>

          <div className="grid md:grid-cols-3 gap-10">
            {services.map((service, idx) => (
              <motion.div
                key={idx}
                whileHover={{ scale: 1.05, y: -5 }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.2 }}
                className="bg-white shadow-lg rounded-xl p-8 flex flex-col items-center text-center hover:shadow-2xl transition-all"
              >
                <div className="mb-6">{service.icon}</div>
                <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                <p className="text-gray-600">{service.desc}</p>
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
