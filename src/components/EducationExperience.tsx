'use client'
import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Briefcase, MapPin, Calendar, Sparkles } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';

const EducationExperience = () => {
  const { theme } = useTheme();

  const timeline = [
    {
      year: '2025 - PRESENT',
      title: 'Web Developer',
      detail: 'Musharp',
      icon: Briefcase,
      type: 'experience',
      location: 'Remote',
      gradient: 'from-pink-500 to-rose-500',
      badge: theme === 'dark' ? 'bg-pink-500/10 text-pink-300 border-pink-500/30' : 'bg-pink-50 text-pink-700 border-pink-200',
      glow: 'shadow-pink-500/20',
      current: true,
    },
    {
      year: '2024 - 2025',
      title: 'Shopify Frontend Developer',
      detail: 'Mucsled inc',
      icon: Briefcase,
      type: 'experience',
      location: 'Remote',
      gradient: 'from-purple-500 to-violet-500',
      badge: theme === 'dark' ? 'bg-purple-500/10 text-purple-300 border-purple-500/30' : 'bg-purple-50 text-purple-700 border-purple-200',
      glow: 'shadow-purple-500/20',
    },
    {
      year: '2024',
      title: 'Bachelor in Computer Science',
      detail: 'Virtual University of Pakistan',
      icon: GraduationCap,
      type: 'education',
      gradient: 'from-blue-500 to-cyan-500',
      badge: theme === 'dark' ? 'bg-blue-500/10 text-blue-300 border-blue-500/30' : 'bg-blue-50 text-blue-700 border-blue-200',
      glow: 'shadow-blue-500/20',
    },
    {
      year: '2023 - 2025',
      title: 'Software Engineer',
      detail: 'PITC (Power Information Technology Company)',
      icon: Briefcase,
      type: 'experience',
      location: 'Lahore, Pakistan',
      gradient: 'from-green-500 to-emerald-500',
      badge: theme === 'dark' ? 'bg-green-500/10 text-green-300 border-green-500/30' : 'bg-green-50 text-green-700 border-green-200',
      glow: 'shadow-green-500/20',
    },
  ];

  const bgColor = theme === 'dark' ? 'bg-black' : 'bg-white';
  const textColor = theme === 'dark' ? 'text-white' : 'text-gray-900';
  const grayText = theme === 'dark' ? 'text-gray-300' : 'text-gray-700';
  const grayTextLight = theme === 'dark' ? 'text-gray-400' : 'text-gray-600';
  const cardBg = theme === 'dark' ? 'bg-gray-900/60' : 'bg-white';
  const cardBorder = theme === 'dark' ? 'border-gray-800' : 'border-gray-200';
  const lineBg = theme === 'dark' ? 'bg-linear-to-b from-gray-800 via-gray-700 to-gray-800' : 'bg-linear-to-b from-gray-200 via-gray-300 to-gray-200';
  const ringBg = theme === 'dark' ? 'ring-black' : 'ring-white';

  return (
    <section className={`w-full ${bgColor} py-16 md:py-24 px-4 md:px-6 overflow-hidden relative`}>
      {/* Decorative background blobs */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-20 right-10 w-72 h-72 bg-pink-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-5xl mx-auto relative">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 md:mb-20"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-blue-500/30 bg-blue-500/10 text-blue-400 text-xs font-semibold uppercase tracking-wider mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            My Journey
          </div>
          <h2 className={`${textColor} text-4xl md:text-5xl font-bold mb-3`}>
            Education & Experience
          </h2>
          <p className={`${grayTextLight} text-base md:text-lg max-w-xl mx-auto`}>
            A timeline of learning, building, and growing as a developer
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Center vertical line */}
          <div className={`absolute left-5 md:left-1/2 top-2 bottom-2 w-px ${lineBg} md:-translate-x-1/2`} />

          <div className="space-y-10 md:space-y-14">
            {timeline.map((item, index) => {
              const Icon = item.icon;
              const isLeft = index % 2 === 0;

              return (
                <motion.div
                  key={index}
                  className="relative"
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-60px' }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  {/* Dot on line */}
                  <div className="absolute left-5 md:left-1/2 -translate-x-1/2 top-6 z-10">
                    <div className={`relative w-5 h-5 rounded-full bg-linear-to-br ${item.gradient} ring-4 ${ringBg} shadow-lg ${item.glow}`}>
                      {item.current && (
                        <span className={`absolute inset-0 rounded-full bg-linear-to-br ${item.gradient} animate-ping opacity-75`} />
                      )}
                    </div>
                  </div>

                  {/* Card wrapper — alternates left/right on desktop */}
                  <div className={`pl-14 md:pl-0 md:w-1/2 ${isLeft ? 'md:pr-12' : 'md:ml-auto md:pl-12'}`}>
                    <div
                      className={`group relative ${cardBg} backdrop-blur-sm border ${cardBorder} rounded-2xl p-5 md:p-6 hover:-translate-y-1 hover:shadow-2xl ${item.glow} transition-all duration-300 overflow-hidden`}
                    >
                      {/* Gradient overlay on hover */}
                      <div
                        className={`absolute inset-0 bg-linear-to-br ${item.gradient} opacity-0 group-hover:opacity-[0.04] transition-opacity duration-300 pointer-events-none`}
                      />

                      {/* Top accent bar */}
                      <div className={`absolute top-0 left-0 right-0 h-1 bg-linear-to-r ${item.gradient}`} />

                      {/* Header row */}
                      <div className="flex items-start gap-4 mb-3">
                        <div
                          className={`shrink-0 w-12 h-12 rounded-xl bg-linear-to-br ${item.gradient} flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300`}
                        >
                          <Icon className="w-6 h-6 text-white" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-semibold border ${item.badge} mb-2`}>
                            <Calendar className="w-3 h-3" />
                            {item.year}
                          </div>
                          <h4 className={`${textColor} text-base md:text-lg font-bold leading-tight`}>
                            {item.title}
                          </h4>
                        </div>
                      </div>

                      {/* Detail + location */}
                      <div className="pl-16 space-y-1.5">
                        <p className={`${grayText} text-sm md:text-base font-medium`}>
                          {item.detail}
                        </p>
                        {item.location && (
                          <div className={`flex items-center gap-1.5 ${grayTextLight} text-xs`}>
                            <MapPin className="w-3.5 h-3.5" />
                            <span>{item.location}</span>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Bottom decorative end-cap */}
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="absolute left-5 md:left-1/2 -translate-x-1/2 -bottom-2"
          >
            <div className={`w-3 h-3 rounded-full bg-linear-to-br from-blue-500 to-purple-500 ring-4 ${ringBg}`} />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default EducationExperience;
