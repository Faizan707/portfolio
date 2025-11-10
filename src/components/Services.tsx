'use client'
import React from 'react';
import { Code, Server, Zap } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';

const Services = () => {
  const { theme } = useTheme()
  const services = [
    {
      icon: Code,
      title: 'Front-End Dev',
      description: 'Bringing designs to life with clean, efficient, and optimized code. I build responsive, interactive, and user-friendly web applications using the latest front-end technologies like React.'
    },
    {
      icon: Server,
      title: 'Back-End Dev',
      description: 'I develop robust server-side applications that power dynamic and data-driven websites. From API creation to database management, I ensure your web apps run smoothly and efficiently.'
    },
    {
      icon: Zap,
      title: 'Performance Optimization',
      description: 'Slow websites lose visitors! I enhance website performance with code optimization, caching strategies, and SEO improvements, ensuring fast load times and a smooth user experience.'
    }
  ];

  const bgColor = theme === 'dark' ? 'bg-black' : 'bg-white'
  const textColor = theme === 'dark' ? 'text-white' : 'text-gray-900'
  const grayText = theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
  const borderColor = theme === 'dark' ? 'border-gray-800' : 'border-gray-200'
  const iconColor = theme === 'dark' ? 'text-white' : 'text-gray-900'

  return (
    <section id="services" className={`w-full ${bgColor} py-12 md:py-16 px-4 md:px-6`}>
      <div className="max-w-7xl mx-auto">
        {/* Centered Title */}
        <div className="text-center mb-12">
          <h2 className={`text-4xl md:text-5xl font-bold ${textColor} mb-4`}>
            My Services
          </h2>
         </div>
        {/* Services List */}
        <div className="mt-16 space-y-8">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <div key={index} className={`flex items-start gap-6 pb-8 border-b ${borderColor} last:border-b-0`}>
                {/* Icon */}
                <div className=" flex items-center justify-center shrink-0 w-12 h-12 ">
                  <IconComponent className={`w-8 h-8 ${iconColor}`} />
                </div>
                
                {/* Content */}
                <div className="flex-1">
                  <h3 className={`text-xl md:text-2xl font-bold ${textColor} mb-2`}>
                    {service.title}
                  </h3>
                  <p className={`${grayText} text-base md:text-lg leading-relaxed`}>
                    {service.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;

