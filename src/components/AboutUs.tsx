import React from 'react';
import { motion } from 'framer-motion';
import { StaticImage } from 'gatsby-plugin-image';

const AboutUs: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.3 }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5, ease: "easeOut" }
    }
  };

  return (
    <section className="bg-gradient-to-b from-gray-50 to-white py-20">
      <motion.div
        className="container mx-auto px-6 md:px-12"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.h2
          className="text-5xl font-bold text-center text-gray-900 mb-16"
          variants={itemVariants}
        >
          Discover Your Journey with Naik Tours and Travels
        </motion.h2>
        <div className="flex flex-col lg:flex-row lg:space-x-16 items-center">
          <motion.div
            className="lg:w-1/2 mb-12 lg:mb-0"
            variants={itemVariants}
          >
            <StaticImage
              src="https://picsum.photos/800/600"
              alt="Bangalore Cityscape"
              className="rounded-2xl shadow-2xl hover:shadow-3xl transition-shadow duration-300"
              placeholder="blurred"
            />
          </motion.div>
          <div className="lg:w-1/2 text-gray-700 space-y-8">
            <motion.p
              className="text-lg leading-relaxed"
              variants={itemVariants}
            >
              Welcome to Naik Tours and Travels, your gateway to unforgettable experiences in Bangalore and beyond. As Bangalore's premier travel partner, we blend our deep-rooted local knowledge with a passion for exploration to craft journeys that resonate with your travel dreams.
            </motion.p>
            <motion.p
              className="text-lg leading-relaxed"
              variants={itemVariants}
            >
              Bangalore, the Silicon Valley of India, is a city where tradition meets innovation. From the lush greenery of Cubbon Park to the bustling energy of MG Road, we'll guide you through the many faces of this dynamic metropolis. Our expertly curated city tours unveil hidden gems and iconic landmarks alike.
            </motion.p>
            <motion.p
              className="text-lg leading-relaxed"
              variants={itemVariants}
            >
              But our horizons stretch far beyond city limits. Embark on soul-stirring adventures to the misty hills of Ooty, the verdant forests of Kudremukh, or the serene landscapes of Kodaikanal. Each destination is a new chapter in your travel story, waiting to be written.
            </motion.p>
            <motion.div
              className="mt-12"
              variants={itemVariants}
            >
              <a
                href="#contact"
                className="inline-block px-8 py-4 bg-indigo-600 text-white font-semibold rounded-full hover:bg-indigo-700 transition-colors duration-300 transform hover:scale-105"
              >
                Start Your Adventure
              </a>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default AboutUs;