'use client'
import { useState, useEffect } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import GithubCTA from './components/GithubCTA'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function Home() {
  const [isDark, setIsDark] = useState(true)

  useEffect(() => {
    const saved = localStorage.getItem('theme')
    if (saved) setIsDark(saved === 'dark')
  }, [])

  const toggleTheme = () => {
    const next = !isDark
    setIsDark(next)
    localStorage.setItem('theme', next ? 'dark' : 'light')
  }

  return (
    <div className={isDark ? 'dark' : 'light'} style={{ background: isDark ? '#050A14' : '#F0F4FF' }}>
      {/* Scanline effect */}
      <div className="scanline" />

      <Navbar isDark={isDark} onToggle={toggleTheme} />

      <main>
        <Hero isDark={isDark} />
        <About isDark={isDark} />
        <Skills isDark={isDark} />
        <Projects isDark={isDark} />
        <GithubCTA isDark={isDark} />
        <Contact isDark={isDark} />
      </main>

      <Footer isDark={isDark} />
    </div>
  )
}
