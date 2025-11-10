'use client'
import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Globe } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';

const Footer = () => {
  const { theme } = useTheme()
  const socialLinks = [
    {
      name: 'GitHub',
      url: 'https://github.com/Faizan707',
      icon: Github
    },
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/faizan-butt-9b2897233/',
      icon: Linkedin
    },
    {
      name: 'Email',
      url: 'mailto:faizanbutt707@gmail.com',
      icon: Mail
    },
    {
      name: 'Website',
      url: 'https://portfolio-faizan707s-projects.vercel.app/',
      icon: Globe
    }
  ];

  const bgColor = theme === 'dark' ? 'bg-black' : 'bg-white'
  const textColor = theme === 'dark' ? 'text-white' : 'text-gray-900'
  const grayText = theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
  const grayTextLight = theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
  const borderColor = theme === 'dark' ? 'border-gray-800' : 'border-gray-200'
  const dividerColor = theme === 'dark' ? 'bg-gray-700' : 'bg-gray-300'
  const iconBorder = theme === 'dark' ? 'border-gray-700' : 'border-gray-300'
  const iconBorderHover = theme === 'dark' ? 'hover:border-white' : 'hover:border-gray-900'
  const iconColor = theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
  const iconHover = theme === 'dark' ? 'group-hover:text-white' : 'group-hover:text-gray-900'
  const linkHover = theme === 'dark' ? 'hover:text-white' : 'hover:text-gray-900'

  return (
    <footer className={`w-full ${bgColor} ${textColor} border-t ${borderColor}`}>
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 md:px-6 py-8 md:py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 relative">
          {/* Left Section - Personal Info */}
          <div className="space-y-4">
            <h3 className={`text-2xl md:text-3xl font-bold ${textColor}`}>
              Muhammad Faizan
            </h3>
            <p className={`${grayText} text-sm md:text-base leading-relaxed`}>
              I&apos;m a web developer with experience in front-end, back-end, and UI/UX design, creating modern, functional websites to help businesses grow.
            </p>
            
            {/* Social Icons */}
            <div className="flex items-center gap-4 pt-4">
              {socialLinks.map((social, index) => {
                const IconComponent = social.icon;
                return (
                  <motion.a
                    key={index}
                    href={social.url}
                    target={social.name === 'Email' ? undefined : '_blank'}
                    rel={social.name === 'Email' ? undefined : 'noopener noreferrer'}
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className={`w-10 h-10 flex items-center justify-center rounded-full border ${iconBorder} ${iconBorderHover} transition-colors group`}
                    aria-label={social.name}
                  >
                    <IconComponent className={`w-5 h-5 ${iconColor} ${iconHover} transition-colors`} />
                  </motion.a>
                );
              })}
            </div>
          </div>

          {/* Vertical Dividers */}
          <div className={`hidden md:block absolute left-[calc(33.333%-1rem)] top-0 bottom-0 w-px ${dividerColor}`}></div>
          <div className={`hidden md:block absolute left-[calc(66.666%-1rem)] top-0 bottom-0 w-px ${dividerColor}`}></div>

          {/* Middle Section - Contact Info */}
          <div className="space-y-4">
            <h4 className={`text-lg font-semibold ${textColor} mb-4`}>Contact me</h4>
            <div className={`space-y-3 ${grayText}`}>
              <div>
                <span className="font-medium">Email:</span>{' '}
                  <a 
                    href="mailto:faizanbutt707@gmail.com" 
                    className={`${linkHover} transition-colors`}
                  >
                    faizanbutt707@gmail.com
                  </a>
                </div>
                <div>
                  <span className="font-medium">Phone:</span>{' '}
                  <a 
                    href="tel:03315722251" 
                    className={`${linkHover} transition-colors`}
                  >
                    (+92) 331-5722251
                  </a>
                </div>
                <div>
                  <span className="font-medium">Address:</span>{' '}
                  <span>Lahore, Pakistan</span>
                </div>
              </div>
            </div>

            {/* Right Section - Menu */}
            <div className="space-y-4">
              <h4 className={`text-lg font-semibold ${textColor} mb-4`}>Menu</h4>
              <nav className="flex flex-col space-y-2">
                <Link 
                  href="/" 
                  className={`${grayText} ${linkHover} transition-colors`}
                >
                  Home
                </Link>
                <a 
                  href="#services" 
                  className={`${grayText} ${linkHover} transition-colors scroll-smooth`}
                >
                  Services
                </a>
                <a 
                  href="#projects" 
                  className={`${grayText} ${linkHover} transition-colors scroll-smooth`}
                >
                  Projects
                </a>
              </nav>
            </div>
          </div>
        </div>

        {/* Copyright Section */}
        <div className={`border-t ${borderColor}`}>
          <div className="max-w-7xl mx-auto px-4 md:px-6 py-4 md:py-6">
            <p className={`${grayTextLight} text-xs md:text-sm text-center`}>
            Copyright © 2025 Muhammad Faizan - All rights reserved || Designed By: Muhammad Faizan
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

