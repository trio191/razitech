'use client'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Github, Star, GitFork } from 'lucide-react'

export default function GithubCTA({ isDark }: { isDark: boolean }) {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 })

  return (
    <section
      ref={ref}
      className={`relative py-20 overflow-hidden ${isDark ? 'bg-[#050A14]' : 'bg-white'}`}
    >
      {/* Animated grid */}
      <div className="absolute inset-0 grid-bg opacity-50" />
      <div className="orb w-[300px] h-[300px] bg-[#00D4FF] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-[0.05]" />

      <div className="relative max-w-4xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="glass rounded-3xl p-12 text-center border border-[rgba(0,212,255,0.15)] relative overflow-hidden"
        >
          {/* Corner accents */}
          <div className="absolute top-0 left-0 w-20 h-20 border-t-2 border-l-2 border-[#00D4FF] rounded-tl-3xl opacity-50" />
          <div className="absolute bottom-0 right-0 w-20 h-20 border-b-2 border-r-2 border-[#00FF88] rounded-br-3xl opacity-50" />

          {/* GitHub icon */}
          <motion.div
            animate={{ rotate: [0, 5, -5, 0] }}
            transition={{ repeat: Infinity, duration: 5, ease: 'easeInOut' }}
            className="inline-flex items-center justify-center w-20 h-20 rounded-2xl glass border border-[rgba(0,212,255,0.2)] mb-6 mx-auto"
          >
            <Github size={36} className="text-white" />
          </motion.div>

          <h2 className="section-title text-3xl lg:text-4xl text-white mb-4">
            More on{' '}
            <span className="gradient-text">GitHub</span>
          </h2>
          <p className={`text-lg mb-8 max-w-xl mx-auto ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
            Explore open-source contributions, experimental AI projects, and tools I build and share with the community.
          </p>

          {/* Mini stats */}
          <div className="flex justify-center gap-8 mb-8">
            {[
              { icon: Star, label: 'Stars', val: '120+' },
              { icon: GitFork, label: 'Repos', val: '30+' },
              { icon: Github, label: 'Commits', val: '500+' },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="flex items-center gap-1 justify-center text-[#00D4FF] mb-1">
                  <stat.icon size={14} />
                  <span className="font-mono-custom text-sm">{stat.val}</span>
                </div>
                <span className="text-xs text-slate-500">{stat.label}</span>
              </div>
            ))}
          </div>

          <motion.a
            href="https://github.com/raziurrehman"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05, boxShadow: '0 0 40px rgba(0,212,255,0.4)' }}
            whileTap={{ scale: 0.97 }}
            className="inline-flex items-center gap-3 px-10 py-4 rounded-2xl font-display font-bold text-[#050A14] bg-gradient-to-r from-[#00D4FF] to-[#00FF88] shadow-xl transition-all"
          >
            <Github size={20} />
            Visit My GitHub
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}
