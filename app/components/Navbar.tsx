'use client'

import { useState } from 'react'
import { Menu, X, Sparkles } from 'lucide-react'

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <nav className="fixed top-0 w-full z-50 glass-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
              <Sparkles className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold text-gradient">Action Figure Trend</span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="/#features" className="text-gray-300 hover:text-white transition-colors">Features</a>
            <a href="/#generator" className="text-gray-300 hover:text-white transition-colors">Create Your Figure</a>
            <a href="/#about" className="text-gray-300 hover:text-white transition-colors">About</a>
            <a href="/faq" className="text-gray-300 hover:text-white transition-colors">FAQ</a>
          </div>

          {/* Auth Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <a href="/#generator" className="btn-primary px-4 py-2 rounded-lg text-white font-medium">
              Get Started
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-300 hover:text-white"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 glass rounded-lg mt-2">
              <a href="/#features" className="block px-3 py-2 text-gray-300 hover:text-white">Features</a>
              <a href="/#generator" className="block px-3 py-2 text-gray-300 hover:text-white">Create Your Figure</a>
              <a href="/#about" className="block px-3 py-2 text-gray-300 hover:text-white">About</a>
              <a href="/faq" className="block px-3 py-2 text-gray-300 hover:text-white">FAQ</a>
              <div className="border-t border-gray-700 pt-2">
                <a href="/#generator" className="block w-full btn-primary px-3 py-2 rounded-lg text-white font-medium text-center">
                  Get Started
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}