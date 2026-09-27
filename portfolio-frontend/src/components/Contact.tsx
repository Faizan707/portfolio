'use client'
import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';

const Contact = () => {
  const { theme } = useTheme();

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
    }
  ];

  const bgColor = theme === 'dark' ? 'bg-black' : 'bg-white'
  const textColor = theme === 'dark' ? 'text-white' : 'text-gray-900'
  const grayText = theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
  const grayTextLight = theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
  const borderColor = theme === 'dark' ? 'border-gray-700' : 'border-gray-300'
  const borderHover = theme === 'dark' ? 'hover:border-white' : 'hover:border-gray-900'
  const iconColor = theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
  const iconHover = theme === 'dark' ? 'group-hover:text-white' : 'group-hover:text-gray-900'

  return (
    <section className={`w-full ${bgColor} py-12 md:py-16 px-4 md:px-6`} id="contact">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mx-auto text-center space-y-8"
        >
          <div>
            <p className={`${grayTextLight} text-sm uppercase tracking-wide mb-2`}>
              Contact me
            </p>
            <h2 className={`text-4xl md:text-5xl font-bold ${textColor} mb-6`}>
              Get in touch
            </h2>
            <p className={`${grayText} text-lg leading-relaxed`}>
              Have a project in mind or a role to discuss? Feel free to reach out — I&apos;m always happy to talk.
            </p>
          </div>

          {/* Social Links */}
          <div className="flex items-center justify-center gap-6 pt-4">
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
                  className={`w-12 h-12 flex items-center justify-center rounded-full border ${borderColor} ${borderHover} transition-colors group`}
                  aria-label={social.name}
                >
                  <IconComponent className={`w-6 h-6 ${iconColor} ${iconHover} transition-colors`} />
                </motion.a>
              );
            })}
          </div>

          {/* Direct contact */}
          <p className={`${grayTextLight} text-sm md:text-base`}>
            <a href="mailto:faizanbutt707@gmail.com" className={`${textColor} font-semibold hover:underline`}>
              faizanbutt707@gmail.com
            </a>
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
