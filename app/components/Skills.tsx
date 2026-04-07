'use client'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { useState } from 'react'

const skills = [
  {
    name: 'Artificial Intelligence',
    level: 90,
    category: 'AI & ML',
    color: '#00D4FF',
    desc: 'LLM integration, AI-powered apps, OpenAI, automation pipelines',
    icon: '🤖',
  },
  {
    name: 'React & Next.js',
    level: 92,
    category: 'Frontend',
    color: '#00FF88',
    desc: 'App Router, SSR/SSG, performance optimization, component design',
    icon: '⚛️',
  },
  {
    name: 'Node.js & Express',
    level: 88,
    category: 'Backend',
    color: '#7C3AED',
    desc: 'REST APIs, middleware, authentication, real-time WebSockets',
    icon: '🟢',
  },
  {
    name: 'JavaScript / TypeScript',
    level: 93,
    category: 'Language',
    color: '#FFD700',
    desc: 'ES2023+, async/await, type safety, modern patterns',
    icon: '⚡',
  },
  {
    name: 'PHP',
    level: 85,
    category: 'Backend',
    color: '#FF6B6B',
    desc: 'Laravel, custom CMSs, WordPress customization, REST APIs',
    icon: '🐘',
  },
  {
    name: 'MongoDB',
    level: 84,
    category: 'Database',
    color: '#00C851',
    desc: 'Aggregation pipelines, indexing, Atlas, Mongoose ODM',
    icon: '🍃',
  },
  {
    name: 'Authentication',
    level: 88,
    category: 'Security',
    color: '#FF8C00',
    desc: 'JWT, OAuth2, NextAuth, session management, role-based access',
    icon: '🔐',
  },
  {
    name: 'Web Architecture',
    level: 87,
    category: 'Systems',
    color: '#FF69B4',
    desc: 'Microservices, serverless, CI/CD, scalable cloud deployments',
    icon: '🏗️',
  },
]

const categories = ['All', 'AI & ML', 'Frontend', 'Backend', 'Language', 'Database', 'Security', 'Systems']

export default function Skills({ isDark }: { isDark: boolean }) {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 })
  const [activeCategory, setActiveCategory] = useState('All')
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null)

  const filtered =
    activeCategory === 'All' ? skills : skills.filter((s) => s.category === activeCategory)

  return (
    <section
      id="skills"
      ref={ref}
      className={`relative py-28 overflow-hidden ${isDark ? 'bg-[#050A14]' : 'bg-[#F8FAFF]'} grid-bg`}
    >
      <div className="orb w-[500px] h-[500px] bg-[#00D4FF] top-1/2 left-0 opacity-[0.05]" />

      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <span className="font-mono-custom text-[#00FF88] text-sm tracking-[0.3em] uppercase mb-4 block">
            02 — Skills
          </span>
          <h2 className="section-title text-4xl lg:text-5xl text-white mb-4">
            Technical{' '}
            <span className="gradient-text">Arsenal</span>
          </h2>
          <p className={`text-lg max-w-xl mx-auto ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
            Combining AI expertise with deep web development skills to build the next generation of software.
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-[#00FF88] to-[#00D4FF] mx-auto rounded-full mt-4" />
        </motion.div>

        {/* Category filter */}
        <motion.div
          className="flex flex-wrap gap-2 justify-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.3 }}
        >
          {categories.map((cat) => (
            <motion.button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`px-5 py-2 rounded-full text-sm font-display font-medium transition-all duration-300 ${
                activeCategory === cat
                  ? 'bg-gradient-to-r from-[#00D4FF] to-[#00FF88] text-[#050A14] shadow-lg'
                  : isDark
                  ? 'glass border border-[rgba(0,212,255,0.15)] text-slate-400 hover:text-white'
                  : 'bg-white border border-slate-200 text-slate-600 hover:border-[#00D4FF]'
              }`}
            >
              {cat}
            </motion.button>
          ))}
        </motion.div>

        {/* Skills grid */}
        <motion.div
          layout
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4"
        >
          {filtered.map((skill, i) => (
            <motion.div
              key={skill.name}
              layout
              initial={{ opacity: 0, y: 30, scale: 0.9 }}
              animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
              onHoverStart={() => setHoveredSkill(skill.name)}
              onHoverEnd={() => setHoveredSkill(null)}
              whileHover={{ y: -6, scale: 1.02 }}
              className="glass rounded-2xl p-5 border border-[rgba(255,255,255,0.06)] cursor-default group relative overflow-hidden"
            >
              {/* Glow on hover */}
              {hoveredSkill === skill.name && (
                <motion.div
                  layoutId="skill-glow"
                  className="absolute inset-0 rounded-2xl opacity-10"
                  style={{ background: `radial-gradient(circle at center, ${skill.color}, transparent)` }}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 0.12 }}
                  exit={{ opacity: 0 }}
                />
              )}

              {/* Icon + Category */}
              <div className="flex items-center justify-between mb-4">
                <span className="text-2xl">{skill.icon}</span>
                <span
                  className="text-xs font-mono-custom px-2 py-1 rounded-full"
                  style={{
                    background: `${skill.color}18`,
                    color: skill.color,
                    border: `1px solid ${skill.color}33`,
                  }}
                >
                  {skill.category}
                </span>
              </div>

              {/* Name */}
              <h3 className={`font-display font-bold text-sm mb-2 ${isDark ? 'text-white' : 'text-slate-800'}`}>
                {skill.name}
              </h3>

              {/* Description */}
              <p className={`text-xs leading-relaxed mb-4 ${isDark ? 'text-slate-500' : 'text-slate-500'}`}>
                {skill.desc}
              </p>

              {/* Progress bar */}
              <div className="space-y-1">
                <div className="flex justify-between">
                  <span className="text-xs font-mono-custom" style={{ color: skill.color }}>
                    Proficiency
                  </span>
                  <span className="text-xs font-mono-custom text-slate-500">{skill.level}%</span>
                </div>
                <div
                  className="w-full h-1.5 rounded-full overflow-hidden"
                  style={{ background: `${skill.color}18` }}
                >
                  <motion.div
                    className="h-full rounded-full"
                    style={{ background: `linear-gradient(90deg, ${skill.color}, ${skill.color}aa)` }}
                    initial={{ width: 0 }}
                    animate={inView ? { width: `${skill.level}%` } : { width: 0 }}
                    transition={{ duration: 1, delay: 0.5 + i * 0.05, ease: 'easeOut' }}
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
