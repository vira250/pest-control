import React from 'react'
import { motion } from 'framer-motion'
import Navbar from './Navbar'

const Hero = () => {
  return (
    <div className="relative w-full h-[940px] overflow-hidden rounded-b-[30px]">
      {/* Background Layers */}
      <div className="fixed top-0 left-0 w-screen h-[1000px] bg-[url('src/assets/hero_section.png')] bg-cover bg-center bg-no-repeat blur-[3.7px] -z-10"></div>
      <div className="fixed top-0 left-0 w-screen h-[1000px] rounded-b-[30px] bg-[linear-gradient(270deg,rgba(0,0,0,0.2)_0.12%,rgba(0,0,0,0.92)_100.45%)] -z-10"></div>

      {/* Navbar */}
      <div>
        <Navbar />
      </div>

      {/* Hero Section */}
      <div className="mt-[60px] flex justify-between items-start px-6">
        {/* Left Section with animation */}
        <motion.div
          className="max-w-[646px]"
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: 'easeOut' }}
        >
          <p className="text-white font-arial text-[12px] not-italic font-normal leading-normal tracking-[5.76px] capitalize">
            Shree Pest Control
          </p>
          <h2 className="w-[646px] h-fit flex-shrink-0 text-[#E2E9E9] font-arial text-[72.378px] not-italic font-bold leading-normal">
            Expert Pest Solutions for Your Peace of Mind
          </h2>
          <p className="w-[449px] h-fit flex-shrink-0 text-white font-arial text-[14px] not-italic font-normal leading-normal tracking-[0.84px] mt-2">
            We safeguard your property from rodents, insects, and other pests using eco-friendly methods and experienced technicians. Trust Norats to keep your space clean and pest-free.
          </p>
          <motion.button
            className="flex w-[165px] h-[46px] px-[17px] py-[13px] pl-[19px] justify-center items-center flex-shrink-0 rounded-[5px] bg-[#03DCE0] cursor-pointer mt-4"
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            whileHover={{
              scale: 1.08,
              boxShadow: "0 0 25px #03DCE0",
              transition: { duration: 0.3, ease: "easeOut" }
            }}
            whileTap={{
              scale: 0.95,
              transition: { duration: 0.2, ease: "easeOut" }
            }}
          >
            Schedule Service
          </motion.button>

          {/* Stats Cards */}
          <div className="flex gap-6 mt-10">
            <motion.div
              className="w-[220px] h-[150px] bg-white rounded-2xl shadow-xl flex flex-col items-center justify-center"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <p className="text-sm font-semibold tracking-wide text-gray-500 uppercase">
                Happy Clients
              </p>
              <h2 className="text-4xl font-bold text-gray-900 mt-2">100+</h2>
            </motion.div>

            <motion.div
              className="w-[220px] h-[150px] bg-white rounded-2xl shadow-xl flex flex-col items-center justify-center"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              <p className="text-sm font-semibold tracking-wide text-gray-500 uppercase">
                Services
              </p>
              <h2 className="text-4xl font-bold text-gray-900 mt-2">10+</h2>
            </motion.div>

            <motion.div
              className="w-[220px] h-[150px] bg-white rounded-2xl shadow-xl flex flex-col items-center justify-center"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
            >
              <p className="text-sm font-semibold tracking-wide text-gray-500 uppercase">
                Branches
              </p>
              <h2 className="text-4xl font-bold text-gray-900 mt-2">5+</h2>
            </motion.div>
          </div>
        </motion.div>

        {/* Right Section with animation */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: 'easeOut', delay: 0.3 }}
        >
          <img
            src="src/assets/hero2.png"
            className="w-[506px] h-[810px] flex-shrink-0 aspect-[22/27]"
            alt="Hero Illustration"
          />
        </motion.div>
      </div>
    </div>
  )
}

export default Hero
