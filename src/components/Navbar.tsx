'use client'
import React, { useState, useEffect } from 'react'
import { createPortal } from 'react-dom'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'

function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

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

  return (
    <nav className="sticky top-0 z-50 bg-black/95 text-white px-4 md:px-6 py-4 flex items-center justify-between backdrop-blur-sm border-b border-gray-800">
      {/* Brand/Logo */}
      <Link href="/" className="text-xl font-semibold hover:text-gray-300 transition-colors">
        Faizan
      </Link>

      {/* Desktop Navigation Links - Centered */}
      <div className="hidden md:flex items-center gap-6 mx-auto">
        <Link href="/" className="hover:text-gray-300 transition-colors">Home</Link>
        <a href="#services" className="hover:text-gray-300 transition-colors scroll-smooth">Services</a>
        <a href="#projects" className="hover:text-gray-300 transition-colors scroll-smooth">Projects</a>
      </div>

      {/* Desktop Contact Button */}
      <a href="#contact" className="hidden md:block bg-gray-800 hover:bg-gray-700 text-white px-4 py-2 rounded-md transition-colors cursor-pointer scroll-smooth">
        Contact
      </a>

      {/* Mobile Burger Menu Button */}
      <button
        onClick={toggleMenu}
        className="md:hidden p-2 hover:bg-gray-800 rounded-md transition-colors"
        aria-label="Toggle menu"
      >
        {isOpen ? (
          <X className="w-6 h-6" />
        ) : (
          <Menu className="w-6 h-6" />
        )}
      </button>

      {/* Mobile Menu - Portal */}
      {typeof window !== 'undefined' && createPortal(
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black md:hidden"
              style={{ 
                backgroundColor: '#000000',
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
                <div className="flex items-center justify-between p-6 border-b border-gray-800">
                  <span className="text-xl font-semibold text-white">Menu</span>
                  <button
                    onClick={closeMenu}
                    className="p-2 hover:bg-gray-800 rounded-md transition-colors"
                    aria-label="Close menu"
                  >
                    <X className="w-6 h-6 text-white" />
                  </button>
                </div>

                {/* Menu Items - Centered */}
                <nav className="flex flex-col flex-1 justify-center items-center p-6 space-y-6">
                  <Link
                    href="/"
                    onClick={closeMenu}
                    className="text-2xl font-semibold text-white hover:text-gray-300 transition-colors py-3"
                  >
                    Home
                  </Link>
                  <a
                    href="#services"
                    onClick={closeMenu}
                    className="text-2xl font-semibold text-white hover:text-gray-300 transition-colors py-3 scroll-smooth"
                  >
                    Services
                  </a>
                  <a
                    href="#projects"
                    onClick={closeMenu}
                    className="text-2xl font-semibold text-white hover:text-gray-300 transition-colors py-3 scroll-smooth"
                  >
                    Projects
                  </a>
                  <a
                    href="#contact"
                    onClick={closeMenu}
                    className="mt-8 bg-gray-800 hover:bg-gray-700 text-white px-8 py-4 rounded-md transition-colors text-center text-lg font-semibold scroll-smooth"
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
