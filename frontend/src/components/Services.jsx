import React from 'react';
import PestControlCard from './card';
import { motion } from 'framer-motion';

const Services = () => {
  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.8, ease: 'easeOut' }
    },
  };

  const cardVariants = {
    offscreen: { y: 100, opacity: 0, scale: 0.95 },
    onscreen: { 
      y: 0, 
      opacity: 1, 
      scale: 1,
      transition: { type: 'spring', bounce: 0.3, duration: 0.8 }
    }
  };

  const hoverEffect = {
    scale: 1.05,
    boxShadow: "0px 20px 40px rgba(0,0,0,0.15)",
    transition: { type: "spring", stiffness: 300, damping: 20 }
  };

  return (
    <motion.div
      id='services'
      className="relative w-full flex flex-col items-center gap-4 py-[100px] px-4"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={sectionVariants}
      style={{
        background: 'linear-gradient(180deg, #F7FAFC 0%, #E6FFFA 100%)', // soft gradient
        overflow: 'hidden'
      }}
    >
      {/* Subtle abstract shapes */}
      <div className="absolute top-0 left-1/4 w-72 h-72 bg-[#B2F5EA] rounded-full opacity-30 -z-10 filter blur-3xl"></div>
      <div className="absolute bottom-0 right-1/3 w-96 h-96 bg-[#81E6D9] rounded-full opacity-20 -z-10 filter blur-3xl"></div>

      <motion.span
        className="text-black font-arial text-[14px] font-bold leading-normal tracking-[2.66px] capitalize z-10"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        What we offer
      </motion.span>

      <motion.h2
        className="text-black text-center font-arial text-[36px] font-bold leading-normal capitalize z-10 max-w-3xl"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
      >
        Your safety and satisfaction are our top priority.
      </motion.h2>

      <div className="w-full max-w-[1200px] z-10 mt-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {[...Array(8)].map((_, i) => (
            <motion.div
              key={i}
              initial="offscreen"
              whileInView="onscreen"
              whileHover={hoverEffect}
              viewport={{ once: true, amount: 0.2 }}
              variants={cardVariants}
            >
              <PestControlCard />
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default Services;
