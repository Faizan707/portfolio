'use client'
import React, { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, ExternalLink } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';

const Projects = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const { theme } = useTheme();

  const projects = [
    {
      name: 'Semantic Tribe',
      description: 'A portfolio website for Semantic Tribe, an IT services providing company. Built with modern web technologies to showcase their services and expertise.',
      image: '/images/semantic-tribe.png',
      link: 'https://semantictribe.com/',
      category: 'Portfolio Website'
    },
    {
      name: 'Dear Doggo',
      description: 'An e-commerce website for dog accessories including clothes, bracelets, glasses, and more. A complete shopping experience for pet owners.',
      image: '/images/dear-doggo.png',
      link: 'https://deardoggo.shop/',
      category: 'E-commerce Website'
    },
    {
      name: 'Art Branch',
      description: 'A social platform where artists can share their work and connect with each other. A community-driven website that enables artists to showcase their creativity and build meaningful connections.',
      image: '/images/art-branch.png',
      link: 'https://artbranch.com.au/',
      category: 'Social Platform'
    }
  ];

  const nextProject = () => {
    setCurrentIndex((prev) => (prev + 1) % projects.length);
  };

  const prevProject = () => {
    setCurrentIndex((prev) => (prev - 1 + projects.length) % projects.length);
  };

  const currentProject = projects[currentIndex];

  const bgColor = theme === 'dark' ? 'bg-black' : 'bg-white'
  const textColor = theme === 'dark' ? 'text-white' : 'text-gray-900'
  const cardBg = theme === 'dark' ? 'bg-gray-900' : 'bg-gray-50'
  const cardBorder = theme === 'dark' ? 'border-gray-800' : 'border-gray-200'
  const imageBg = theme === 'dark' ? 'bg-gray-800' : 'bg-gray-100'
  const categoryText = theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
  const descText = theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
  const buttonBg = theme === 'dark' ? 'bg-white' : 'bg-gray-900'
  const buttonText = theme === 'dark' ? 'text-gray-800' : 'text-white'
  const buttonHover = theme === 'dark' ? 'hover:bg-gray-100' : 'hover:bg-gray-800'
  const navButtonBg = theme === 'dark' ? 'bg-black/80 hover:bg-black' : 'bg-white/80 hover:bg-white'
  const navButtonBorder = theme === 'dark' ? 'border-gray-700' : 'border-gray-300'

  return (
    <section id="projects" className={`w-full ${bgColor} py-12 md:py-16 px-4 md:px-6`}>
      <div className="max-w-7xl mx-auto">
        {/* Title */}
        <div className="text-center mb-12">
          <h2 className={`text-4xl md:text-5xl font-bold ${textColor} mb-4`}>
            My  Projects
          </h2>
        </div>

        {/* Mobile: All Projects as Cards */}
        <div className="md:hidden space-y-6">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`${cardBg} rounded-xl overflow-hidden border ${cardBorder}`}
            >
              {/* Project Image */}
              <div className={`relative w-full h-[250px] ${imageBg} overflow-hidden`}>
                <Image
                  src={project.image}
                  alt={project.name}
                  fill
                  className="object-contain"
                  sizes="100vw"
                  unoptimized
                  style={{
                    objectFit: 'contain',
                    objectPosition: 'center',
                  }}
                />
              </div>

              {/* Project Info */}
              <div className={`p-4 ${cardBg}`}>
                {/* Category */}
                <p className={`${categoryText} text-xs font-medium uppercase tracking-wide mb-2`}>
                  {project.category}
                </p>
                
                {/* Project Name */}
                <h3 className={`text-lg font-bold ${textColor} mb-2`}>
                  {project.name}
                </h3>

                {/* Description */}
                <p className={`${descText} text-sm leading-relaxed mb-3`}>
                  {project.description}
                </p>

                
                {/* Visit Button */}
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`inline-flex items-center gap-2 whitespace-nowrap ${buttonBg} ${buttonText} px-4 py-2 rounded-md font-semibold ${buttonHover} transition-colors cursor-pointer text-sm`}
                >
                  <span>Visit Website</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Desktop: Carousel View */}
        <div className="hidden md:flex items-center gap-4 max-w-[800px] mx-auto">
          {/* Previous Button - Outside Container */}
          <motion.button
            onClick={prevProject}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className={`shrink-0 w-12 h-12 ${navButtonBg} rounded-full flex items-center justify-center ${textColor} border ${navButtonBorder} backdrop-blur-sm shadow-lg cursor-pointer`}
            aria-label="Previous project"
          >
            <motion.div
              whileHover={{ x: -2 }}
              transition={{ type: 'spring', stiffness: 400 }}
            >
              <ChevronLeft className="w-6 h-6" />
            </motion.div>
          </motion.button>

          {/* Single Project Card */}
          <div className="flex-1">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.5, ease: 'easeInOut' }}
              >
                {/* Project Card */}
                <motion.div
                  whileHover={{ y: -8, scale: 1.02 }}
                  transition={{ duration: 0.3, ease: 'easeOut' }}
                  className={`${cardBg} rounded-xl overflow-hidden border ${cardBorder} ${theme === 'dark' ? 'hover:border-gray-700' : 'hover:border-gray-400'} transition-all`}
                >
                  {/* Project Image */}
                  <div className={`relative w-full h-[500px] ${imageBg} overflow-hidden`}>
                    <motion.div
                      initial={{ scale: 1.1, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{ duration: 0.5 }}
                      whileHover={{ scale: 1.05 }}
                      className="relative w-full h-full"
                    >
                      <Image
                        src={currentProject.image}
                        alt={currentProject.name}
                        fill
                        className="object-contain"
                        sizes="(max-width: 768px) 100vw, 600px"
                        priority={currentIndex === 0}
                        unoptimized
                        style={{
                          objectFit: 'contain',
                          objectPosition: 'center',
                        }}
                      />
                    </motion.div>
                  </div>

                  {/* Project Info */}
                  <div className={`p-6 ${cardBg}`}>
                    {/* Category */}
                    <p className={`${categoryText} text-sm font-medium uppercase tracking-wide mb-2`}>
                      {currentProject.category}
                    </p>
                    
                    {/* Project Name */}
                    <h3 className={`text-xl md:text-2xl font-bold ${textColor} mb-3`}>
                      {currentProject.name}
                    </h3>

                    {/* Description */}
                    <p className={`${descText} text-base leading-relaxed mb-4`}>
                      {currentProject.description}
                    </p>

                 

                    {/* Visit Button */}
                    <a
                      href={currentProject.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`inline-flex items-center gap-2 whitespace-nowrap ${buttonBg} ${buttonText} px-6 py-3 rounded-md font-semibold ${buttonHover} transition-colors cursor-pointer group`}
                    >
                      <span>Visit Website</span>
                      <motion.div
                        animate={{ x: 0 }}
                        whileHover={{ x: 4 }}
                        transition={{ type: 'spring', stiffness: 400 }}
                      >
                        <ExternalLink className="w-4 h-4" />
                      </motion.div>
                    </a>
                  </div>
                </motion.div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Next Button - Outside Container */}
          <motion.button
            onClick={nextProject}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className={`shrink-0 w-12 h-12 ${navButtonBg} rounded-full flex items-center justify-center ${textColor} border ${navButtonBorder} backdrop-blur-sm shadow-lg cursor-pointer`}
            aria-label="Next project"
          >
            <motion.div
              whileHover={{ x: 2 }}
              transition={{ type: 'spring', stiffness: 400 }}
            >
              <ChevronRight className="w-6 h-6" />
            </motion.div>
          </motion.button>
        </div>
      </div>
    </section>
  );
};

export default Projects;

