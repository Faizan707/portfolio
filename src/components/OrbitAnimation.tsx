'use client'
import React from 'react';
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
  SiExpress,
  SiNestjs,
  SiDocker,
  SiPrisma,
  SiMongodb,
  SiMysql,
  SiPostgresql,
  SiMongoose
} from 'react-icons/si';
import { FaCode, FaDatabase } from 'react-icons/fa';

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
  'State Mgmt': SiRedux,
  'Express.js': SiExpress,
  'Nest.js': SiNestjs,
  'Docker': SiDocker,
  'ORM': FaDatabase,
  'Prisma': SiPrisma,
  'Mongoose': SiMongoose,
  'TypeORM': FaDatabase,
  'MySQL': SiMysql,
  'MongoDB': SiMongodb,
  'PostgreSQL': SiPostgresql,
};

// Brand colors for each technology
const techColors: Record<string, string> = {
  'HTML': '#E34F26',
  'CSS': '#1572B6',
  'JavaScript': '#F7DF1E',
  'TypeScript': '#3178C6',
  'React': '#61DAFB',
  'Next.js': '#FFFFFF', 
  'Tailwind CSS': '#06B6D4',
  'shadcn/ui': '#FFFFFF',
  'Context API': '#61DAFB',
  'Redux Toolkit': '#764ABC',
  'RTK Query': '#764ABC',
  'State Mgmt': '#764ABC',
  'Express.js': '#68A063', 
  'Nest.js': '#E0234E',
  'Docker': '#2496ED',
  'ORM': '#FFFFFF',
  'Prisma': '#2D3748',
  'Mongoose': '#880000',
  'TypeORM': '#FE0902',
  'MySQL': '#4479A1',
  'MongoDB': '#47A248',
  'PostgreSQL': '#336791',
};

const frontendRings = [
  { category: 'Core', techs: ['HTML', 'CSS', 'JavaScript'] },
  { category: 'Frameworks', techs: ['React', 'Next.js', 'TypeScript'] },
  { category: 'Styling', techs: ['Tailwind CSS', 'shadcn/ui'] },
  { category: 'State Management', techs: ['Context API', 'Redux Toolkit', 'RTK Query'] }
];

const backendRings = [
  { category: 'Frameworks', techs: ['Express.js', 'Nest.js'] },
  { category: 'Tools', techs: ['Docker', 'ORM'] },
  { category: 'ORMs', techs: ['Prisma', 'Mongoose', 'TypeORM'] },
  { category: 'Databases', techs: ['MySQL', 'MongoDB', 'PostgreSQL'] }
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
  const getRingRadius = (ringIndex: number, totalRings: number) => {
    // Responsive radius based on container size
    // Base sizes: mobile (400px) -> tablet (450px) -> desktop (500px)
    const baseSize = 400; // Mobile base
    const scaleFactor = baseSize / 500; // Scale from desktop (500px) base
    const minRadius = 60 * scaleFactor;
    const maxRadius = 180 * scaleFactor;
    const spacing = (maxRadius - minRadius) / (totalRings - 1 || 1);
    return minRadius + (ringIndex * spacing);
  };

  const titleColor = theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
  const iconBg = theme === 'dark' ? 'bg-black' : 'bg-white'
  const iconBorder = theme === 'dark' ? 'border-gray-700' : 'border-gray-300'
  const tooltipBg = theme === 'dark' ? 'bg-gray-800' : 'bg-gray-200'
  const tooltipText = theme === 'dark' ? 'text-white' : 'text-gray-900'
  const tooltipGray = theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
  const tooltipBorder = theme === 'dark' ? 'border-t-gray-800' : 'border-t-gray-200'

  return (
    <div className="flex flex-col items-center justify-center relative">
      <h3 className={`text-xl md:text-2xl font-semibold ${titleColor} mb-8 z-10`}>
        {title}
      </h3>
      
      <div className="relative w-full max-w-[400px] md:max-w-[450px] lg:max-w-[500px] aspect-square mx-auto">
      {/* Center Icon */}
        <div
          className={`absolute w-12 h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 ${centerColor} rounded-full flex items-center justify-center z-30 shadow-2xl pointer-events-auto`}
          style={{
            left: '50%',
            top: '50%',
            transform: 'translate(-50%, -50%)',
          }}
        >
          <Code className={`w-6 h-6 md:w-7 md:h-7 lg:w-8 lg:h-8 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`} />
      </div>

        {rings.map((ring, ringIndex) => {
          const radius = getRingRadius(ringIndex, rings.length);
          const ringSize = radius * 2;
          const duration = baseDuration + (ringIndex * 5);
          const rotationDirection = ringIndex % 2 === 0 ? 360 : -360;

          return (
        <motion.div
              key={`ring-${ringIndex}`}
              className="absolute pointer-events-none"
              animate={{ rotate: rotationDirection }}
              transition={{
                duration,
                repeat: Infinity,
                ease: 'linear',
              }}
          style={{
                width: ringSize,
                height: ringSize,
                left: '50%',
                top: '50%',
                marginLeft: `-${radius}px`,
                marginTop: `-${radius}px`,
                transformOrigin: 'center center',
              }}
            >
              <div className={`absolute rounded-full border ${borderColor} w-full h-full`} />
              
              {ring.techs.map((tech, techIndex) => {
                const angle = (360 / ring.techs.length) * techIndex;
                const x = Math.cos((angle * Math.PI) / 180) * radius;
                const y = Math.sin((angle * Math.PI) / 180) * radius;
                const IconComponent = techIcons[tech] || FaCode;
                const iconColor = techColors[tech] || '#FFFFFF';

            return (
                  <div
                    key={`${ringIndex}-${tech}`}
                    className="absolute pointer-events-auto"
                    style={{
                      left: `calc(50% + ${x}px)`,
                      top: `calc(50% + ${y}px)`,
                      transform: 'translate(-50%, -50%)',
                    }}
                  >
                    <div 
                      className={`w-10 h-10 md:w-12 md:h-12 lg:w-14 lg:h-14 ${iconBg} rounded-full border-2 ${iconBorder} flex items-center justify-center hover:scale-110 transition-all cursor-pointer group relative`}
                style={{
                        boxShadow: `0 0 20px ${iconColor}40`,
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.borderColor = iconColor;
                        e.currentTarget.style.boxShadow = `0 0 30px ${iconColor}80`;
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.borderColor = '';
                        e.currentTarget.style.boxShadow = `0 0 20px ${iconColor}40`;
                      }}
                    >
                      <div 
                        className="flex items-center justify-center w-full h-full [&>svg]:fill-current [&>svg]:text-current"
                        style={{ color: iconColor }}
                      >
                        <IconComponent className="w-5 h-5 md:w-6 md:h-6 lg:w-7 lg:h-7" />
                      </div>
                      {/* Tooltip with tech name and category */}
                      <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none z-50">
                        <div className={`${tooltipBg} ${tooltipText} text-xs px-3 py-2 rounded whitespace-nowrap shadow-lg`}>
                          <div className="font-semibold">{tech}</div>
                          <div className={`${tooltipGray} text-[10px] mt-0.5`}>{ring.category}</div>
                        </div>
                        {/* Tooltip arrow */}
                        <div className={`absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent ${tooltipBorder}`}></div>
                      </div>
                    </div>
                </div>
                );
              })}
              </motion.div>
            );
          })}
      </div>
    </div>
  );
};

const OrbitAnimation = () => {
  const { theme } = useTheme()
  const bgColor = theme === 'dark' ? 'bg-black' : 'bg-white'
  const textColor = theme === 'dark' ? 'text-white' : 'text-gray-900'

  return (
    <section className={`relative w-full ${bgColor} py-12 md:py-16 px-4 md:px-6 overflow-hidden`}>
      <motion.h2 
        className={`text-center ${textColor} text-2xl md:text-4xl font-bold mb-12`}
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        My Tech Stack
      </motion.h2>

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
        {/* Frontend Orbit */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <OrbitSystem
            rings={frontendRings}
            title="Frontend Technologies"
            borderColor="border-blue-500/30"
            centerColor="bg-blue-500/20 border-2 border-blue-500/30"
            baseDuration={40}
            theme={theme}
          />
        </motion.div>

        {/* Backend Orbit */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <OrbitSystem
            rings={backendRings}
            title="Backend Technologies"
            borderColor="border-green-500/30"
            centerColor="bg-green-500/20 border-2 border-green-500/30"
            baseDuration={50}
            theme={theme}
          />
        </motion.div>
      </div>
    </section>
  );
};

export default OrbitAnimation;
