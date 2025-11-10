'use client'
import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Globe } from 'lucide-react';

const Footer = () => {
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
      url: '#',
      icon: Globe
    }
  ];

  return (
    <footer className="w-full bg-black text-white border-t border-gray-800">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 md:px-6 py-8 md:py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 relative">
          {/* Left Section - Personal Info */}
          <div className="space-y-4">
            <h3 className="text-2xl md:text-3xl font-bold text-white">
              Muhammad Faizan
            </h3>
            <p className="text-gray-300 text-sm md:text-base leading-relaxed">
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
                    className="w-10 h-10 flex items-center justify-center rounded-full border border-gray-700 hover:border-white transition-colors group"
                    aria-label={social.name}
                  >
                    <IconComponent className="w-5 h-5 text-gray-400 group-hover:text-white transition-colors" />
                  </motion.a>
                );
              })}
            </div>
          </div>

          {/* Vertical Dividers */}
          <div className="hidden md:block absolute left-[calc(33.333%-1rem)] top-0 bottom-0 w-px bg-gray-700"></div>
          <div className="hidden md:block absolute left-[calc(66.666%-1rem)] top-0 bottom-0 w-px bg-gray-700"></div>

          {/* Middle Section - Contact Info */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white mb-4">Contact me</h4>
            <div className="space-y-3 text-gray-300">
              <div>
                <span className="font-medium">Email:</span>{' '}
                <a 
                  href="mailto:faizanbutt707@gmail.com" 
                  className="hover:text-white transition-colors"
                >
                  faizanbutt707@gmail.com
                </a>
              </div>
              <div>
                <span className="font-medium">Phone:</span>{' '}
                <a 
                  href="tel:03315722251" 
                  className="hover:text-white transition-colors"
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
            <h4 className="text-lg font-semibold text-white mb-4">Menu</h4>
            <nav className="flex flex-col space-y-2">
              <Link 
                href="/" 
                className="text-gray-300 hover:text-white transition-colors"
              >
                Home
              </Link>
              <a 
                href="#services" 
                className="text-gray-300 hover:text-white transition-colors scroll-smooth"
              >
                Services
              </a>
              <a 
                href="#projects" 
                className="text-gray-300 hover:text-white transition-colors scroll-smooth"
              >
                Projects
              </a>
            </nav>
          </div>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 md:px-6 py-4 md:py-6">
          <p className="text-gray-400 text-xs md:text-sm text-center">
            Copyright © 2025 Muhammad Faizan - All rights reserved || Designed By: Muhammad Faizan
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

