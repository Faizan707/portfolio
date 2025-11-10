'use client'
import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Briefcase, MapPin, Calendar } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';

const EducationExperience = () => {
  const { theme } = useTheme()
  const education = [
    {
      year: '2024',
      entries: [
        {
          title: 'Bachelor in Computer Science',
          detail: 'Virtual University of Pakistan',
          icon: GraduationCap,
          type: 'education'
        }
      ]
    }
  ];

  const experience = [
    {
      year: '2023 - PRESENT',
      entries: [
        {
          title: 'Software Engineer',
          detail: 'PITC (Power Information Technology Company)',
          icon: Briefcase,
          type: 'experience',
          location: 'Lahore, Pakistan'
        }
      ]
    },
    {
      year: '2024 - 2025',
      entries: [
        {
          title: 'Shopify Frontend Developer',
          detail: 'Mucsled inc',
          icon: Briefcase,
          type: 'experience',
          location: 'Remote'
        }
      ]
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  };

  const bgColor = theme === 'dark' ? 'bg-black' : 'bg-white'
  const textColor = theme === 'dark' ? 'text-white' : 'text-gray-900'
  const grayText = theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
  const grayTextLight = theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
  const cardBg = theme === 'dark' ? 'bg-gray-900/50' : 'bg-gray-50/50'
  const cardBorder = theme === 'dark' ? 'border-gray-800' : 'border-gray-200'
  const cardHover = theme === 'dark' ? 'hover:bg-gray-900' : 'hover:bg-gray-100'

  return (
    <section className={`w-full ${bgColor} py-12 md:py-16 px-4 md:px-6`}>
      <div className="max-w-7xl mx-auto">
        {/* Title */}
        <motion.h2
          className={`text-center ${textColor} text-4xl md:text-5xl font-bold mb-16`}
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Education & Experience
        </motion.h2>

        {/* Content Grid */}
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          {/* Education Column */}
          <motion.div
            className="space-y-8"
            variants={itemVariants}
          >
            <div className="flex items-center gap-3 mb-6">
              <Calendar className="w-5 h-5 text-blue-400" />
              <h3 className={`${grayText} text-base font-semibold uppercase tracking-wide`}>
                {education[0].year}
              </h3>
            </div>
            {education[0].entries.map((entry, index) => {
              const IconComponent = entry.icon;
              return (
                <motion.div
                  key={index}
                  className="group relative"
                  whileHover={{ y: -4 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className={`${cardBg} border ${cardBorder} rounded-lg p-6 hover:border-blue-500/50 ${cardHover} transition-all duration-300`}>
                    <div className="flex items-start gap-4">
                      <div className="shrink-0 w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center border border-blue-500/30 group-hover:bg-blue-500/30 group-hover:border-blue-500/50 transition-all">
                        <IconComponent className="w-6 h-6 text-blue-400" />
                      </div>
                      <div className="flex-1 space-y-2">
                        <h4 className={`${textColor} text-lg md:text-xl font-bold group-hover:text-blue-500 transition-colors`}>
                          {entry.title}
                        </h4>
                        <p className={`${grayTextLight} text-sm md:text-base`}>
                          {entry.detail}
                        </p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>

          {/* Experience Column 1 */}
          <motion.div
            className="space-y-8"
            variants={itemVariants}
          >
            <div className="flex items-center gap-3 mb-6">
              <Calendar className="w-5 h-5 text-green-400" />
              <h3 className={`${grayText} text-base font-semibold uppercase tracking-wide`}>
                {experience[0].year}
              </h3>
            </div>
            {experience[0].entries.map((entry, index) => {
              const IconComponent = entry.icon;
              return (
                <motion.div
                  key={index}
                  className="group relative"
                  whileHover={{ y: -4 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className={`${cardBg} border ${cardBorder} rounded-lg p-6 hover:border-green-500/50 ${cardHover} transition-all duration-300`}>
                    <div className="flex items-start gap-4">
                      <div className="shrink-0 w-12 h-12 bg-green-500/20 rounded-lg flex items-center justify-center border border-green-500/30 group-hover:bg-green-500/30 group-hover:border-green-500/50 transition-all">
                        <IconComponent className="w-6 h-6 text-green-400" />
                      </div>
                      <div className="flex-1 space-y-2">
                        <h4 className={`${textColor} text-lg md:text-xl font-bold group-hover:text-green-500 transition-colors`}>
                          {entry.title}
                        </h4>
                        <p className={`${grayTextLight} text-sm md:text-base`}>
                          {entry.detail}
                        </p>
                        {entry.location && (
                          <div className={`flex items-center gap-1.5 ${grayTextLight} text-xs mt-1`}>
                            <MapPin className="w-3.5 h-3.5" />
                            <span>{entry.location}</span>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>

          {/* Experience Column 2 */}
          <motion.div
            className="space-y-8"
            variants={itemVariants}
          >
            <div className="flex items-center gap-3 mb-6">
              <Calendar className="w-5 h-5 text-purple-400" />
              <h3 className={`${grayText} text-base font-semibold uppercase tracking-wide`}>
                {experience[1].year}
              </h3>
            </div>
            {experience[1].entries.map((entry, index) => {
              const IconComponent = entry.icon;
              return (
                <motion.div
                  key={index}
                  className="group relative"
                  whileHover={{ y: -4 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className={`${cardBg} border ${cardBorder} rounded-lg p-6 hover:border-purple-500/50 ${cardHover} transition-all duration-300`}>
                    <div className="flex items-start gap-4">
                      <div className="shrink-0 w-12 h-12 bg-purple-500/20 rounded-lg flex items-center justify-center border border-purple-500/30 group-hover:bg-purple-500/30 group-hover:border-purple-500/50 transition-all">
                        <IconComponent className="w-6 h-6 text-purple-400" />
                      </div>
                      <div className="flex-1 space-y-2">
                        <h4 className={`${textColor} text-lg md:text-xl font-bold group-hover:text-purple-500 transition-colors`}>
                          {entry.title}
                        </h4>
                        <p className={`${grayTextLight} text-sm md:text-base`}>
                          {entry.detail}
                        </p>
                        {entry.location && (
                          <div className={`flex items-center gap-1.5 ${grayTextLight} text-xs mt-1`}>
                            <MapPin className="w-3.5 h-3.5" />
                            <span>{entry.location}</span>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default EducationExperience;

