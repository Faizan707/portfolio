'use client'
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Code } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';
import { 
  SiHtml5, 
  SiCss3, 
  SiJavascript, 
  SiTypescript, 
  SiReact, 
  SiNextdotjs,
  SiTailwindcss,
  SiRedux,
  SiFramer,
  SiGit,
  SiGithub,
  SiFigma,
  SiVercel,
  SiShopify
} from 'react-icons/si';
import { FaCode, FaChartLine } from 'react-icons/fa';
import { GiWaterDrop } from 'react-icons/gi';

// Icon mapping for technologies
const techIcons: Record<string, React.ComponentType<{ className?: string }>> = {
  'HTML': SiHtml5,
  'CSS': SiCss3,
  'JavaScript': SiJavascript,
  'TypeScript': SiTypescript,
  'React': SiReact,
  'Next.js': SiNextdotjs,
  'Tailwind CSS': SiTailwindcss,
  'shadcn/ui': FaCode,
  'Context API': SiReact,
  'Redux Toolkit': SiRedux,
  'RTK Query': SiRedux,
  'Framer Motion': SiFramer,
  'Recharts': FaChartLine,
  'Git': SiGit,
  'GitHub': SiGithub,
  'Figma': SiFigma,
  'Vercel': SiVercel,
  'Shopify': SiShopify,
  'Liquid': GiWaterDrop,
};

// Brand colors for each technology
const techColors: Record<string, { dark: string; light: string }> = {
  'HTML': { dark: '#E34F26', light: '#E34F26' },
  'CSS': { dark: '#1572B6', light: '#1572B6' },
  'JavaScript': { dark: '#F7DF1E', light: '#D97706' },
  'TypeScript': { dark: '#3178C6', light: '#3178C6' },
  'React': { dark: '#61DAFB', light: '#0284C7' },
  'Next.js': { dark: '#FFFFFF', light: '#000000' },
  'Tailwind CSS': { dark: '#06B6D4', light: '#0891B2' },
  'shadcn/ui': { dark: '#FAFAFA', light: '#18181B' },
  'Context API': { dark: '#61DAFB', light: '#0284C7' },
  'Redux Toolkit': { dark: '#764ABC', light: '#764ABC' },
  'RTK Query': { dark: '#8B5CF6', light: '#7C3AED' },
  'Framer Motion': { dark: '#F43F5E', light: '#E11D48' },
  'Recharts': { dark: '#22C55E', light: '#16A34A' },
  'Git': { dark: '#F05032', light: '#F05032' },
  'GitHub': { dark: '#FFFFFF', light: '#24292F' },
  'Figma': { dark: '#F24E1E', light: '#F24E1E' },
  'Vercel': { dark: '#FFFFFF', light: '#000000' },
  'Shopify': { dark: '#95BF47', light: '#5E8E3E' },
  'Liquid': { dark: '#5EC7F5', light: '#0284C7' },
};

const frontendRings = [
  { category: 'Core', techs: ['HTML', 'CSS', 'JavaScript'] },
  { category: 'Frameworks', techs: ['React', 'Next.js', 'TypeScript'] },
  { category: 'Styling', techs: ['Tailwind CSS', 'shadcn/ui'] },
  { category: 'State Management', techs: ['Context API', 'Redux Toolkit', 'RTK Query'] },
  { category: 'Motion, Data Viz & Tools', techs: ['Framer Motion', 'Recharts', 'Git', 'Figma', 'Vercel'] },
  { category: 'E-commerce', techs: ['Shopify', 'Liquid'] }
];

const OrbitSystem = ({
  rings,
  title,
  borderColor,
  centerColor,
  baseDuration,
  theme
}: {
  rings: { category: string; techs: string[] }[];
  title: string;
  borderColor: string;
  centerColor: string;
  baseDuration: number;
  theme: 'light' | 'dark';
}) => {
  const [screenSize, setScreenSize] = useState<'mobile' | 'tablet' | 'desktop'>('desktop');
  const [hoveredTech, setHoveredTech] = useState<string | null>(null);
  const [activeRingIndex, setActiveRingIndex] = useState<number | null>(null);

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      if (width < 640) {
        setScreenSize('mobile');
      } else if (width < 1024) {
        setScreenSize('tablet');
      } else {
        setScreenSize('desktop');
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const getRingRadius = (ringIndex: number) => {
    if (screenSize === 'mobile') {
      const radii = [44, 65, 86, 107, 127, 148];
      return radii[ringIndex] || 44 + ringIndex * 21;
    }
    if (screenSize === 'tablet') {
      const radii = [56, 84, 112, 141, 169, 196];
      return radii[ringIndex] || 56 + ringIndex * 28;
    }
    // Desktop
    const radii = [62, 98, 133, 169, 204, 240];
    return radii[ringIndex] || 62 + ringIndex * 36;
  };

  const titleColor = theme === 'dark' ? 'text-gray-300' : 'text-gray-700';
  const iconBg = theme === 'dark' ? 'bg-zinc-950' : 'bg-white';
  const iconBorder = theme === 'dark' ? 'border-zinc-800' : 'border-zinc-200';
  const tooltipBg = theme === 'dark' ? 'bg-zinc-900/95 border-zinc-700' : 'bg-white/95 border-zinc-300';
  const tooltipText = theme === 'dark' ? 'text-white' : 'text-zinc-900';
  const tooltipGray = theme === 'dark' ? 'text-zinc-400' : 'text-zinc-600';
  const arrowBg = theme === 'dark' ? 'bg-zinc-900 border-zinc-700' : 'bg-white border-zinc-300';

  const isPaused = hoveredTech !== null;

  return (
    <div className="flex flex-col items-center justify-center relative select-none">
      <h3 className={`text-xl md:text-2xl font-semibold ${titleColor} mb-6 z-10`}>
        {title}
      </h3>

      {/* Orbit Container */}
      <div className="relative w-[340px] h-[340px] sm:w-[440px] sm:h-[440px] md:w-[500px] md:h-[500px] lg:w-[540px] lg:h-[540px] mx-auto flex items-center justify-center">
        {/* Center Tech Hub Icon */}
        <div
          className={`absolute w-11 h-11 sm:w-12 sm:h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 ${centerColor} rounded-full flex items-center justify-center z-10 shadow-2xl pointer-events-none backdrop-blur-sm`}
          style={{
            left: '50%',
            top: '50%',
            transform: 'translate(-50%, -50%)',
          }}
        >
          <Code className={`w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 lg:w-8 lg:h-8 ${theme === 'dark' ? 'text-blue-400' : 'text-blue-600'}`} />
        </div>

        {/* Orbit Rings */}
        {rings.map((ring, ringIndex) => {
          const radius = getRingRadius(ringIndex);
          const ringSize = radius * 2;
          const duration = baseDuration + (ringIndex * 6);
          const isClockwise = ringIndex % 2 === 0;
          const animationName = isClockwise ? 'orbitClockwise' : 'orbitCounterClockwise';
          const reverseAnimationName = isClockwise ? 'orbitCounterClockwise' : 'orbitClockwise';
          const isRingActive = activeRingIndex === ringIndex;

          return (
            <div
              key={`ring-${ringIndex}`}
              className="absolute pointer-events-none rounded-full"
              style={{
                width: ringSize,
                height: ringSize,
                left: '50%',
                top: '50%',
                marginLeft: `-${radius}px`,
                marginTop: `-${radius}px`,
                zIndex: isRingActive ? 40 : 20 - ringIndex,
                animation: `${animationName} ${duration}s linear infinite`,
                animationPlayState: isPaused ? 'paused' : 'running',
              }}
            >
              {/* Ring Orbit Border */}
              <div 
                className={`absolute inset-0 rounded-full border ${borderColor} transition-colors duration-300`} 
                style={{
                  borderColor: isRingActive ? 'rgba(59, 130, 246, 0.5)' : undefined
                }}
              />
              
              {/* Technology Icons on this ring */}
              {ring.techs.map((tech, techIndex) => {
                const angle = (360 / ring.techs.length) * techIndex;
                const x = Math.cos((angle * Math.PI) / 180) * radius;
                const y = Math.sin((angle * Math.PI) / 180) * radius;
                const IconComponent = techIcons[tech] || FaCode;
                const techColorConfig = techColors[tech] || { dark: '#3B82F6', light: '#2563EB' };
                const iconColor = theme === 'dark' ? techColorConfig.dark : techColorConfig.light;
                const isHovered = hoveredTech === tech;

                return (
                  <div
                    key={`${ringIndex}-${tech}`}
                    className="absolute pointer-events-auto"
                    style={{
                      left: `calc(50% + ${x}px)`,
                      top: `calc(50% + ${y}px)`,
                      transform: 'translate(-50%, -50%)',
                      zIndex: isHovered ? 50 : 25,
                    }}
                    onMouseEnter={() => {
                      setHoveredTech(tech);
                      setActiveRingIndex(ringIndex);
                    }}
                    onMouseLeave={() => {
                      setHoveredTech(null);
                      setActiveRingIndex(null);
                    }}
                  >
                    {/* Counter-rotating container keeps icon & tooltip upright */}
                    <div
                      style={{
                        animation: `${reverseAnimationName} ${duration}s linear infinite`,
                        animationPlayState: isPaused ? 'paused' : 'running',
                      }}
                    >
                      <div 
                        className={`w-9 h-9 sm:w-10 sm:h-10 md:w-12 md:h-12 lg:w-13 lg:h-13 ${iconBg} rounded-full border-2 ${iconBorder} flex items-center justify-center transition-all duration-300 cursor-pointer relative group shadow-md`}
                        style={{
                          transform: isHovered ? 'scale(1.25)' : 'scale(1)',
                          borderColor: isHovered ? iconColor : undefined,
                          boxShadow: isHovered 
                            ? `0 0 25px ${iconColor}90, 0 0 10px ${iconColor}50` 
                            : `0 0 12px ${iconColor}25`,
                        }}
                      >
                        {/* Icon */}
                        <div 
                          className="flex items-center justify-center w-full h-full [&>svg]:fill-current [&>svg]:text-current transition-transform duration-300"
                          style={{ color: iconColor }}
                        >
                          <IconComponent className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 lg:w-6 lg:h-6" />
                        </div>

                        {/* Tooltip with tech name & category */}
                        <div 
                          className={`absolute bottom-full left-1/2 -translate-x-1/2 mb-3 pointer-events-none transition-all duration-200 z-50 ${
                            isHovered 
                              ? 'opacity-100 translate-y-0 scale-100' 
                              : 'opacity-0 translate-y-2 scale-95'
                          }`}
                        >
                          <div className={`${tooltipBg} ${tooltipText} border px-3 py-1.5 rounded-lg shadow-2xl whitespace-nowrap backdrop-blur-md`}>
                            <div className="font-semibold text-xs text-center flex items-center justify-center gap-1.5">
                              <span 
                                className="w-2 h-2 rounded-full inline-block" 
                                style={{ backgroundColor: iconColor }}
                              />
                              {tech}
                            </div>
                            <div className={`${tooltipGray} text-[10px] text-center font-normal mt-0.5`}>
                              {ring.category}
                            </div>
                          </div>
                          {/* Tooltip Arrow */}
                          <div 
                            className={`w-2 h-2 ${arrowBg} border-r border-b rotate-45 mx-auto -mt-1`}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          );
        })}
      </div>

      {/* Embedded keyframe styles for smooth hardware-accelerated orbit and counter-rotation */}
      <style jsx global>{`
        @keyframes orbitClockwise {
          0% {
            transform: rotate(0deg);
          }
          100% {
            transform: rotate(360deg);
          }
        }
        @keyframes orbitCounterClockwise {
          0% {
            transform: rotate(360deg);
          }
          100% {
            transform: rotate(0deg);
          }
        }
      `}</style>
    </div>
  );
};

const OrbitAnimation = () => {
  const { theme } = useTheme();
  const bgColor = theme === 'dark' ? 'bg-black' : 'bg-white';
  const textColor = theme === 'dark' ? 'text-white' : 'text-gray-900';

  return (
    <section className={`relative w-full ${bgColor} py-12 md:py-16 px-4 md:px-6 overflow-hidden`}>
      <motion.h2 
        className={`text-center ${textColor} text-2xl md:text-4xl font-bold mb-10`}
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        My Tech Stack
      </motion.h2>

      <div className="max-w-2xl mx-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <OrbitSystem
            rings={frontendRings}
            title="Interactive Technology Orbit"
            borderColor="border-blue-500/20"
            centerColor="bg-blue-500/20 border-2 border-blue-500/30"
            baseDuration={35}
            theme={theme}
          />
        </motion.div>
      </div>
    </section>
  );
};

export default OrbitAnimation;
