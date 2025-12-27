import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-navy-900/90 backdrop-blur-xl border-b border-white/10' : ''
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href="#" className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-neon-cyan to-neon-purple flex items-center justify-center">
              <span className="text-navy-900 font-bold text-xl">T</span>
            </div>
            <span className="text-xl font-bold">
              Tcha<span className="text-neon-cyan">PBX</span>
            </span>
          </a>

          {/* Nav Links */}
          <div className="hidden md:flex items-center gap-8">
            <a href="#architecture" className="text-gray-400 hover:text-white transition-colors">
              Architecture
            </a>
            <a href="#api" className="text-gray-400 hover:text-white transition-colors">
              API
            </a>
            <a href="#performance" className="text-gray-400 hover:text-white transition-colors">
              Performance
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors font-mono text-sm">
              Docs
            </a>
          </div>

          {/* CTAs */}
          <div className="flex items-center gap-4">
            <a
              href="#"
              className="hidden sm:block text-gray-400 hover:text-white transition-colors"
            >
              Sign In
            </a>
            <a href="#" className="btn-primary text-sm">
              Get Started
            </a>
          </div>
        </div>
      </div>
    </motion.nav>
  )
}

export default Navbar
