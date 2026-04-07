'use client'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { useState } from 'react'
import { ExternalLink, Github, Calendar, AlertCircle } from 'lucide-react'

const projects = [
  {
    name: 'NeuraChat AI',
    intro: 'Real-time AI chat application with GPT-4 integration, context memory, and multi-modal support.',
    started: 'January 2024',
    url: 'https://vercel.com',
    github: 'https://github.com/raziurrehman',
    tags: ['Next.js', 'OpenAI', 'WebSocket'],
    color: '#00D4FF',
  },
  {
    name: 'AutoFlow Studio',
    intro: 'Visual workflow automation builder that connects APIs, AI agents, and third-party services.',
    started: 'March 2024',
    url: 'https://react.dev',
    github: 'https://github.com/raziurrehman',
    tags: ['React', 'Node.js', 'AI'],
    color: '#00FF88',
  },
  {
    name: 'SmartCommerce',
    intro: 'AI-powered e-commerce platform with personalized recommendations and intelligent inventory.',
    started: 'June 2023',
    url: 'https://nextjs.org',
    github: 'https://github.com/raziurrehman',
    tags: ['Next.js', 'MongoDB', 'ML'],
    color: '#7C3AED',
  },
  {
    name: 'DevMetrics Dashboard',
    intro: 'Real-time developer analytics dashboard with GitHub integration and performance insights.',
    started: 'September 2023',
    url: 'https://tailwindcss.com',
    github: 'https://github.com/raziurrehman',
    tags: ['React', 'Node.js', 'Charts'],
    color: '#FF6B6B',
  },
  {
    name: 'LegalAI Assistant',
    intro: 'Document analysis and legal Q&A system using RAG (Retrieval-Augmented Generation) pipeline.',
    started: 'November 2023',
    url: 'https://www.typescriptlang.org',
    github: 'https://github.com/raziurrehman',
    tags: ['TypeScript', 'RAG', 'OpenAI'],
    color: '#FFD700',
  },
  {
    name: 'CloudSphere API',
    intro: 'Scalable multi-tenant REST API platform with JWT auth, rate limiting, and auto-documentation.',
    started: 'April 2023',
    url: 'https://expressjs.com',
    github: 'https://github.com/raziurrehman',
    tags: ['Express', 'MongoDB', 'Auth'],
    color: '#FF8C00',
  },
]

function ProjectCard({ project, index, isDark }: { project: typeof projects[0]; index: number; isDark: boolean }) {
  const [iframeError, setIframeError] = useState(false)
  const [iframeLoaded, setIframeLoaded] = useState(false)
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay: (index % 2) * 0.15 }}
      whileHover={{ y: -6, scale: 1.01 }}
      className="glass rounded-2xl overflow-hidden border border-[rgba(255,255,255,0.06)] group transition-all duration-500"
      style={{
        boxShadow: `0 0 0 0 ${project.color}`,
      }}
      whileHover-style={{ boxShadow: `0 8px 40px ${project.color}22` }}
    >
      {/* Preview area */}
      <div className="relative h-60 overflow-hidden bg-[#05091a]">
        {/* Gradient overlay */}
        <div
          className="absolute inset-0 z-10 pointer-events-none"
          style={{
            background: `linear-gradient(to bottom, transparent 60%, ${isDark ? '#0A1628' : '#fff'} 100%)`,
          }}
        />

        {/* Color accent top bar */}
        <div
          className="absolute top-0 left-0 right-0 h-0.5 z-20"
          style={{ background: `linear-gradient(90deg, transparent, ${project.color}, transparent)` }}
        />

        {!iframeError ? (
          <>
            {!iframeLoaded && (
              <div className="absolute inset-0 flex items-center justify-center">
                <div
                  className="w-8 h-8 rounded-full border-2 animate-spin"
                  style={{ borderColor: `${project.color}33`, borderTopColor: project.color }}
                />
              </div>
            )}
            <iframe
              src={project.url}
              title={project.name}
              className={`w-full h-full border-0 transition-opacity duration-500 ${iframeLoaded ? 'opacity-100' : 'opacity-0'}`}
              onLoad={() => setIframeLoaded(true)}
              onError={() => setIframeError(true)}
              sandbox="allow-scripts allow-same-origin allow-forms"
              style={{ pointerEvents: 'none' }}
            />
          </>
        ) : (
          <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 p-4">
            <AlertCircle size={28} style={{ color: project.color }} className="opacity-60" />
            <p className="text-sm text-slate-500 text-center">Preview restricted by host</p>
            <a
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 rounded-xl text-xs font-display font-bold transition-all"
              style={{
                background: `${project.color}22`,
                color: project.color,
                border: `1px solid ${project.color}44`,
              }}
            >
              Visit Live Site
            </a>
          </div>
        )}
      </div>

      {/* Card content */}
      <div className="p-6">
        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-3">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="text-xs font-mono-custom px-2.5 py-1 rounded-full"
              style={{
                background: `${project.color}15`,
                color: project.color,
                border: `1px solid ${project.color}30`,
              }}
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Name */}
        <h3
          className="font-display font-bold text-lg mb-2 group-hover:text-[#00D4FF] transition-colors"
          style={{ color: isDark ? '#fff' : '#0F172A' }}
        >
          {project.name}
        </h3>

        {/* Intro */}
        <p className={`text-sm leading-relaxed mb-4 ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
          {project.intro}
        </p>

        {/* Date */}
        <div className="flex items-center gap-1.5 mb-5">
          <Calendar size={12} className="text-slate-500" />
          <span className="text-xs font-mono-custom text-slate-500">Started: {project.started}</span>
        </div>

        {/* Buttons */}
        <div className="flex gap-3">
          <motion.a
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.96 }}
            className="flex-1 flex items-center justify-center gap-2 py-2.5 rounded-xl text-sm font-display font-bold transition-all"
            style={{
              background: `linear-gradient(135deg, ${project.color}22, ${project.color}11)`,
              color: project.color,
              border: `1px solid ${project.color}44`,
            }}
          >
            <ExternalLink size={14} />
            Open Live
          </motion.a>
          <motion.a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.96 }}
            className={`flex-1 flex items-center justify-center gap-2 py-2.5 rounded-xl text-sm font-display font-bold glass border transition-all ${
              isDark
                ? 'border-[rgba(255,255,255,0.08)] text-slate-400 hover:text-white'
                : 'border-slate-200 text-slate-500 hover:text-slate-800'
            }`}
          >
            <Github size={14} />
            GitHub
          </motion.a>
        </div>
      </div>
    </motion.div>
  )
}

export default function Projects({ isDark }: { isDark: boolean }) {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.05 })

  return (
    <section
      id="projects"
      ref={ref}
      className={`relative py-28 overflow-hidden ${isDark ? 'bg-[#05091a]' : 'bg-[#f8faff]'}`}
    >
      <div className="orb w-[400px] h-[400px] bg-[#00FF88] bottom-0 right-0 opacity-[0.05]" />

      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <span className="font-mono-custom text-[#7C3AED] text-sm tracking-[0.3em] uppercase mb-4 block">
            03 — Projects
          </span>
          <h2 className="section-title text-4xl lg:text-5xl text-white mb-4">
            Work That{' '}
            <span className="gradient-text-purple">Speaks</span>
          </h2>
          <p className={`text-lg max-w-xl mx-auto ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
            A selection of live projects — AI systems, web apps, and developer tools built with precision.
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-[#7C3AED] to-[#00D4FF] mx-auto rounded-full mt-4" />
        </motion.div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, i) => (
            <ProjectCard key={project.name} project={project} index={i} isDark={isDark} />
          ))}
        </div>
      </div>
    </section>
  )
}
