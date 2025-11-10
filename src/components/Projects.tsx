'use client'
import React, { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, ExternalLink } from 'lucide-react';

const Projects = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const projects = [
    {
      name: 'Semantic Tribe',
      description: 'A portfolio website for Semantic Tribe, an IT services providing company. Built with modern web technologies to showcase their services and expertise.',
      tech: ['Next.js', 'Framer Motion','React bootstrap','cloudinary'],
      image: '/images/semantic-tribe.png',
      link: 'https://semantictribe.com/',
      category: 'Portfolio Website'
    },
    {
      name: 'Dear Doggo',
      description: 'An e-commerce website for dog accessories including clothes, bracelets, glasses, and more. A complete shopping experience for pet owners.',
      tech: ['Next.js', 'Framer Motion','Tailwind CSS','MongoDB','Mongoose','cloudinary'],
      image: '/images/dear-doggo.png',
      link: 'https://deardoggo.shop/',
      category: 'E-commerce Website'
    },
    {
      name: 'Art Branch',
      description: 'A social platform where artists can share their work and connect with each other. A community-driven website that enables artists to showcase their creativity and build meaningful connections.',
      tech: ['Next.js', 'Framer Motion','Tailwind CSS','Supabase','cloudinary'],
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

  return (
    <section id="projects" className="w-full bg-black py-12 md:py-16 px-4 md:px-6">
      <div className="max-w-7xl mx-auto">
        {/* Title */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
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
              className="bg-gray-900 rounded-xl overflow-hidden border border-gray-800"
            >
              {/* Project Image */}
              <div className="relative w-full h-[250px] bg-gray-800 overflow-hidden">
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
              <div className="p-4 bg-gray-900">
                {/* Category */}
                <p className="text-gray-400 text-xs font-medium uppercase tracking-wide mb-2">
                  {project.category}
                </p>
                
                {/* Project Name */}
                <h3 className="text-lg font-bold text-white mb-2">
                  {project.name}
                </h3>

                {/* Description */}
                <p className="text-gray-300 text-sm leading-relaxed mb-3">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="mb-3">
                  <p className="text-gray-400 text-xs mb-2 font-medium">Tech Stack:</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-2 py-1 bg-gray-800 text-gray-300 text-xs rounded-md border border-gray-700"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Visit Button */}
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 whitespace-nowrap bg-white text-gray-800 px-4 py-2 rounded-md font-semibold hover:bg-gray-100 transition-colors cursor-pointer text-sm"
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
            whileHover={{ scale: 1.1, backgroundColor: 'rgba(0, 0, 0, 1)' }}
            whileTap={{ scale: 0.95 }}
            className="shrink-0 w-12 h-12 bg-black/80 hover:bg-black rounded-full flex items-center justify-center text-white border border-gray-700 backdrop-blur-sm shadow-lg cursor-pointer"
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
                  className="bg-gray-900 rounded-xl overflow-hidden border border-gray-800 hover:border-gray-700 transition-all"
                >
                  {/* Project Image */}
                  <div className="relative w-full h-[500px] bg-gray-800 overflow-hidden">
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
                  <div className="p-6 bg-gray-900">
                    {/* Category */}
                    <p className="text-gray-400 text-sm font-medium uppercase tracking-wide mb-2">
                      {currentProject.category}
                    </p>
                    
                    {/* Project Name */}
                    <h3 className="text-xl md:text-2xl font-bold text-white mb-3">
                      {currentProject.name}
                    </h3>

                    {/* Description */}
                    <p className="text-gray-300 text-base leading-relaxed mb-4">
                      {currentProject.description}
                    </p>

                    {/* Tech Stack */}
                    <div className="mb-4">
                      <p className="text-gray-400 text-sm mb-2 font-medium">Tech Stack:</p>
                      <div className="flex flex-wrap gap-2">
                        {currentProject.tech.map((tech, index) => (
                          <motion.span
                            key={index}
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ 
                              delay: index * 0.05,
                              type: 'spring',
                              stiffness: 200
                            }}
                            whileHover={{ 
                              scale: 1.05,
                              backgroundColor: 'rgba(55, 65, 81, 1)',
                              borderColor: 'rgba(107, 114, 128, 1)'
                            }}
                            className="px-3 py-1.5 bg-gray-800 text-gray-300 text-sm rounded-md border border-gray-700 cursor-default transition-colors"
                          >
                            {tech}
                          </motion.span>
                        ))}
                      </div>
                    </div>

                    {/* Visit Button */}
                    <a
                      href={currentProject.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 whitespace-nowrap bg-white text-gray-800 px-6 py-3 rounded-md font-semibold hover:bg-gray-100 transition-colors cursor-pointer group"
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
            whileHover={{ scale: 1.1, backgroundColor: 'rgba(0, 0, 0, 1)' }}
            whileTap={{ scale: 0.95 }}
            className="shrink-0 w-12 h-12 bg-black/80 hover:bg-black rounded-full flex items-center justify-center text-white border border-gray-700 backdrop-blur-sm shadow-lg cursor-pointer"
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

