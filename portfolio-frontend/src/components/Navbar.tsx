'use client'
import React, { useState, useEffect } from 'react'
import { createPortal } from 'react-dom'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Sun, Moon } from 'lucide-react'
import { useTheme } from '../contexts/ThemeContext'

function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const { theme, toggleTheme } = useTheme()

  // Lock body scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isOpen])

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  const closeMenu = () => {
    setIsOpen(false)
  }

  const navBg = theme === 'dark' ? 'bg-black/95' : 'bg-white/95'
  const navText = theme === 'dark' ? 'text-white' : 'text-gray-900'
  const navBorder = theme === 'dark' ? 'border-gray-800' : 'border-gray-200'
  const navHover = theme === 'dark' ? 'hover:text-gray-300' : 'hover:text-gray-600'
  const buttonBg = theme === 'dark' ? 'bg-gray-800' : 'bg-gray-200'
  const buttonHover = theme === 'dark' ? 'hover:bg-gray-700' : 'hover:bg-gray-300'
  const contactButtonBg = theme === 'dark' ? 'bg-gray-800' : 'bg-gray-900'
  const contactButtonHover = theme === 'dark' ? 'hover:bg-gray-700' : 'hover:bg-gray-800'
  const contactButtonText = theme === 'dark' ? 'text-white' : 'text-white'
  const iconColor = theme === 'dark' ? 'text-white' : 'text-gray-900'
  const menuButtonHover = theme === 'dark' ? 'hover:bg-gray-800' : 'hover:bg-gray-200'

  return (
    <nav className={`sticky top-0 z-50 ${navBg} ${navText} px-4 md:px-6 py-4 flex items-center justify-between backdrop-blur-sm border-b ${navBorder}`}>
      {/* Brand/Logo */}
      <Link href="/" className={`text-xl font-semibold ${navHover} transition-colors`}>
        Faizan
      </Link>

      {/* Desktop Navigation Links - Centered */}
      <div className="hidden md:flex items-center gap-6 mx-auto">
        <Link href="/" className={`${navHover} transition-colors`}>Home</Link>
        <a href="#services" className={`${navHover} transition-colors scroll-smooth`}>Services</a>
        <a href="#projects" className={`${navHover} transition-colors scroll-smooth`}>Projects</a>
      </div>

      {/* Desktop Right Side - Theme Toggle & Contact */}
      <div className="hidden md:flex items-center gap-4">
        {/* Theme Toggle Button */}
        <motion.button
          onClick={toggleTheme}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          className={`p-2 rounded-md ${buttonBg} ${buttonHover} transition-colors`}
          aria-label="Toggle theme"
        >
          {theme === 'dark' ? (
            <Sun className={`w-5 h-5 ${iconColor}`} />
          ) : (
            <Moon className={`w-5 h-5 ${iconColor}`} />
          )}
        </motion.button>
        
        {/* Contact Button */}
        <a href="#contact" className={`${contactButtonBg} ${contactButtonText} ${contactButtonHover} px-4 py-2 rounded-md transition-colors cursor-pointer scroll-smooth`}>
          Contact
        </a>
      </div>

      {/* Mobile Right Side - Theme Toggle & Menu */}
      <div className="md:hidden flex items-center gap-2">
        {/* Theme Toggle Button */}
        <motion.button
          onClick={toggleTheme}
          whileTap={{ scale: 0.95 }}
          className={`p-2 rounded-md ${buttonBg} ${buttonHover} transition-colors`}
          aria-label="Toggle theme"
        >
          {theme === 'dark' ? (
            <Sun className={`w-5 h-5 ${iconColor}`} />
          ) : (
            <Moon className={`w-5 h-5 ${iconColor}`} />
          )}
        </motion.button>
        
        {/* Mobile Burger Menu Button */}
        <button
          onClick={toggleMenu}
          className={`p-2 ${menuButtonHover} rounded-md transition-colors`}
          aria-label="Toggle menu"
        >
          {isOpen ? (
            <X className={`w-6 h-6 ${iconColor}`} />
          ) : (
            <Menu className={`w-6 h-6 ${iconColor}`} />
          )}
        </button>
      </div>

      {/* Mobile Menu - Portal */}
      {typeof window !== 'undefined' && createPortal(
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 md:hidden"
              style={{ 
                backgroundColor: theme === 'dark' ? '#000000' : '#FFFFFF',
                zIndex: 99999,
                position: 'fixed',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0
              }}
            >
              <div className="flex flex-col h-full w-full relative" style={{ zIndex: 100000 }}>
                {/* Menu Header */}
                <div className={`flex items-center justify-between p-6 border-b ${navBorder}`}>
                  <span className={`text-xl font-semibold ${navText}`}>Menu</span>
                  <button
                    onClick={closeMenu}
                    className={`p-2 ${menuButtonHover} rounded-md transition-colors`}
                    aria-label="Close menu"
                  >
                    <X className={`w-6 h-6 ${iconColor}`} />
                  </button>
                </div>

                {/* Menu Items - Centered */}
                <nav className="flex flex-col flex-1 justify-center items-center p-6 space-y-6">
                  <Link
                    href="/"
                    onClick={closeMenu}
                    className={`text-2xl font-semibold ${navText} ${navHover} transition-colors py-3`}
                  >
                    Home
                  </Link>
                  <a
                    href="#services"
                    onClick={closeMenu}
                    className={`text-2xl font-semibold ${navText} ${navHover} transition-colors py-3 scroll-smooth`}
                  >
                    Services
                  </a>
                  <a
                    href="#projects"
                    onClick={closeMenu}
                    className={`text-2xl font-semibold ${navText} ${navHover} transition-colors py-3 scroll-smooth`}
                  >
                    Projects
                  </a>
                  <a
                    href="#contact"
                    onClick={closeMenu}
                    className={`mt-8 ${contactButtonBg} ${contactButtonText} ${contactButtonHover} px-8 py-4 rounded-md transition-colors text-center text-lg font-semibold scroll-smooth`}
                  >
                    Contact
                  </a>
                </nav>
              </div>
            </motion.div>
          )}
        </AnimatePresence>,
        document.body
      )}
    </nav>
  )
}

export default Navbar
