'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { useTheme } from '../contexts/ThemeContext'

function TechnologiesSlider() {
  const { theme } = useTheme()
  const technologies = [
    'HTML',
    'CSS',
    'JavaScript',
    'TypeScript',
    'React',
    'Next.js',
    'State Management',
    'Context API',
    'Redux Toolkit',
    'RTK Query',
    'Express.js',
    'Nest.js',
    'Docker',
    'ORM',
    'Prisma',
    'Mongoose',
    'TypeORM',
    'MySQL',
    'MongoDB',
    'PostgreSQL'
  ]

  // Duplicate the array for seamless loop (only for desktop animation)
  const duplicatedTechnologies = [...technologies, ...technologies]

  const bgColor = theme === 'dark' ? 'bg-black' : 'bg-white'
  const textColor = theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
  const cardBg = theme === 'dark' ? 'bg-black' : 'bg-gray-50'
  const cardBorder = theme === 'dark' ? 'border-gray-700' : 'border-gray-300'
  const cardText = theme === 'dark' ? 'text-white' : 'text-gray-900'

  return (
    <section className={`w-full ${bgColor} py-8 md:py-12 px-4 md:px-6`}>
      {/* Heading */}
      <h2 className={`text-center ${textColor} text-2xl md:text-3xl font-semibold mb-8`}>
        Technologies I use
      </h2>

      {/* Mobile: Grid Layout */}
      <div className="md:hidden max-w-7xl mx-auto">
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
          {technologies.map((tech, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
              className={`px-4 py-3 ${cardBg} rounded-lg border ${cardBorder} text-center`}
            >
              <span className={`${cardText} text-sm font-medium`}>{tech}</span>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Desktop: Animated Slider */}
      <div className="hidden md:block max-w-7xl mx-auto overflow-hidden relative">
        <motion.div
          className="flex gap-4"
          initial={{ x: 0 }}
          animate={{ x: '-50%' }}
          transition={{
            repeat: Infinity,
            repeatType: 'loop',
            duration: 30,
            ease: 'linear',
          }}
        >
          {duplicatedTechnologies.map((tech, index) => (
            <div
              key={index}
              className={`shrink-0 px-6 py-3 ${cardBg} rounded-lg border ${cardBorder} whitespace-nowrap`}
            >
              <span className={`${cardText} text-base md:text-lg font-medium`}>{tech}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default TechnologiesSlider

