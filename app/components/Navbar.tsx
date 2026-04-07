'use client'
import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Moon, Sun, Menu, X } from 'lucide-react'

const navLinks = [
  { label: 'Home', href: '#hero' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar({ isDark, onToggle }: { isDark: boolean; onToggle: () => void }) {
  const [scrolled, setScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState('hero')
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40)
      const sections = ['hero', 'about', 'skills', 'projects', 'contact']
      let current = 'hero'
      for (const id of sections) {
        const el = document.getElementById(id)
        if (el && window.scrollY >= el.offsetTop - 120) current = id
      }
      setActiveSection(current)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <>
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, ease: 'easeOut' }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? 'glass border-b border-[rgba(0,212,255,0.12)] py-3'
            : 'bg-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          {/* Logo */}
          <motion.a
            href="#hero"
            className="font-display text-xl font-bold gradient-text"
            whileHover={{ scale: 1.05 }}
          >
            RR<span className="text-[#00D4FF]">.</span>
          </motion.a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`relative text-sm font-medium transition-colors duration-300 font-display tracking-wide ${
                  activeSection === link.href.slice(1)
                    ? 'text-[#00D4FF]'
                    : isDark
                    ? 'text-slate-400 hover:text-white'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                {link.label}
                {activeSection === link.href.slice(1) && (
                  <motion.div
                    layoutId="nav-indicator"
                    className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-[#00D4FF] to-[#00FF88] rounded-full"
                  />
                )}
              </a>
            ))}
          </div>

          {/* Right controls */}
          <div className="flex items-center gap-3">
            <motion.button
              onClick={onToggle}
              whileHover={{ scale: 1.1, rotate: 15 }}
              whileTap={{ scale: 0.9 }}
              className={`p-2.5 rounded-xl glass border transition-all ${
                isDark
                  ? 'border-[rgba(0,212,255,0.2)] text-[#00D4FF]'
                  : 'border-slate-200 text-slate-700'
              }`}
            >
              {isDark ? <Sun size={18} /> : <Moon size={18} />}
            </motion.button>

            {/* Mobile Menu */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="md:hidden p-2.5 rounded-xl glass border border-[rgba(0,212,255,0.2)] text-[#00D4FF]"
            >
              {menuOpen ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu Drawer */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed top-16 left-4 right-4 z-40 glass rounded-2xl p-6 md:hidden border border-[rgba(0,212,255,0.15)]"
          >
            {navLinks.map((link, i) => (
              <motion.a
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.06 }}
                className={`block py-3 font-display font-medium text-base border-b border-[rgba(255,255,255,0.06)] last:border-0 ${
                  activeSection === link.href.slice(1) ? 'text-[#00D4FF]' : 'text-slate-300'
                }`}
              >
                {link.label}
              </motion.a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
