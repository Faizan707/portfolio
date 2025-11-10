'use client'
import React from 'react'
import { motion } from 'framer-motion'
import { useTheme } from '../contexts/ThemeContext'

function Hero() {
  const { theme } = useTheme()
  const name = "I'm Muhammad Faizan"
  const nameArray = name.split('')

  const bgColor = theme === 'dark' ? 'bg-black' : 'bg-white'
  const textColor = theme === 'dark' ? 'text-white' : 'text-gray-900'
  const grayText = theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
  const grayTextLight = theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
  const shadowColor = theme === 'dark' ? 'bg-white opacity-10' : 'bg-gray-900 opacity-5'

  return (
    <section id="home" className={`${bgColor} ${textColor} min-h-screen flex items-center justify-center px-4 md:px-6 relative overflow-hidden`}>
      {/* Light shadow in center */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className={`w-[800px] h-[800px] ${shadowColor} rounded-full blur-[100px]`}></div>
      </div>
      
      <div className="text-center max-w-4xl relative z-10">
        {/* Location */}
        <motion.div 
          className={`flex items-center justify-center gap-2 mb-4 ${grayText}`}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.6 }}
        >
          <svg 
            className="w-5 h-5" 
            fill="currentColor" 
            viewBox="0 0 20 20"
          >
            <path 
              fillRule="evenodd" 
              d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" 
              clipRule="evenodd" 
            />
          </svg>
          <span>Lahore, Pakistan</span>
        </motion.div>

        {/* Name with letter-by-letter animation */}
        <h1 className="text-5xl md:text-6xl font-bold mb-4">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: false }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="inline-block"
          >
            {nameArray.map((char, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false }}
                transition={{
                  duration: 0.3,
                  delay: 0.5 + index * 0.05,
                  ease: "easeOut"
                }}
                className="inline-block"
              >
                {char === ' ' ? '\u00A0' : char}
              </motion.span>
            ))}
          </motion.span>
        </h1>

        {/* Title */}
        <motion.h2 
          className="text-4xl md:text-5xl font-bold mb-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.6, delay: 1.5 }}
        >
          Web Developer
        </motion.h2>

        {/* Description */}
        <motion.p 
          className={`text-lg md:text-xl ${grayTextLight} mb-8 max-w-2xl mx-auto`}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.6, delay: 1.8 }}
        >
          I specialize in researching and analyzing your brand and provide you a beautiful and effective website for making a digital standing among your competitors
        </motion.p>

        {/* Buttons */}
        <motion.div 
          className="flex flex-col sm:flex-row gap-4 justify-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.6, delay: 2.1 }}
        >
          <motion.a 
            href="#contact"
            className={theme === 'dark' 
              ? "bg-white text-gray-800 px-6 py-3 rounded-md font-semibold hover:bg-gray-100 transition-colors cursor-pointer"
              : "bg-gray-900 text-white px-6 py-3 rounded-md font-semibold hover:bg-gray-800 transition-colors cursor-pointer"
            }
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Get yours now
          </motion.a>
          <motion.a 
            href="#services"
            className={theme === 'dark'
              ? "bg-gray-800 text-white px-6 py-3 rounded-md font-semibold hover:bg-gray-700 transition-colors cursor-pointer"
              : "bg-gray-200 text-gray-900 px-6 py-3 rounded-md font-semibold hover:bg-gray-300 transition-colors cursor-pointer"
            }
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            See my services
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero

