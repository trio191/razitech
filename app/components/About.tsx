'use client'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Brain, Code2, Rocket, Database } from 'lucide-react'

const highlights = [
  {
    icon: Brain,
    title: 'AI-First Thinking',
    desc: 'Approach every problem through the lens of intelligence automation and machine learning.',
    color: '#00D4FF',
  },
  {
    icon: Code2,
    title: 'Clean Architecture',
    desc: 'Scalable, maintainable codebases built with modern patterns and best practices.',
    color: '#00FF88',
  },
  {
    icon: Rocket,
    title: 'Rapid Deployment',
    desc: 'From idea to production — fast iteration cycles with CI/CD and cloud infrastructure.',
    color: '#7C3AED',
  },
  {
    icon: Database,
    title: 'Data-Driven Systems',
    desc: 'Designing systems that collect, process, and act on data intelligently.',
    color: '#FF6B6B',
  },
]

export default function About({ isDark }: { isDark: boolean }) {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.15 })

  return (
    <section
      id="about"
      ref={ref}
      className={`relative py-28 overflow-hidden ${isDark ? 'bg-[#05091a]' : 'bg-white'}`}
    >
      {/* Background element */}
      <div className="orb w-[400px] h-[400px] bg-[#7C3AED] top-0 right-0 opacity-[0.06]" />

      <div className="max-w-7xl mx-auto px-6">
        {/* Section header */}
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <span className="font-mono-custom text-[#00D4FF] text-sm tracking-[0.3em] uppercase mb-4 block">
            01 — About
          </span>
          <h2 className="section-title text-4xl lg:text-5xl text-white mb-4">
            The Mind Behind The{' '}
            <span className="gradient-text">Machine</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#00D4FF] to-[#00FF88] mx-auto rounded-full" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Text side */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="space-y-6">
              <p className={`text-xl leading-relaxed ${isDark ? 'text-slate-300' : 'text-slate-700'}`}>
                I&apos;m{' '}
                <span className="text-[#00D4FF] font-semibold">Razi Ur Rehman</span>, an AI-driven developer
                passionate about crafting intelligent digital experiences.
              </p>
              <p className={`text-lg leading-relaxed ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                From building <span className="text-[#00FF88] font-medium">AI-powered web applications</span> to
                automating complex workflows, I engineer systems that solve real-world problems at scale. My
                approach blends technical depth with design thinking — because great software should feel as good as it performs.
              </p>
              <p className={`text-lg leading-relaxed ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                I specialize in bridging the gap between <span className="text-[#7C3AED] font-medium">cutting-edge AI capabilities</span> and
                production-ready web infrastructure. Whether it&apos;s integrating LLMs, building intelligent APIs, or
                architecting microservices — I build systems that evolve.
              </p>
            </div>

            {/* Tech stack mini */}
            <motion.div
              className="mt-10 flex flex-wrap gap-3"
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ delay: 0.6 }}
            >
              {['Next.js', 'OpenAI API', 'Node.js', 'MongoDB', 'React', 'PHP'].map((tech) => (
                <span
                  key={tech}
                  className="px-4 py-1.5 rounded-full font-mono-custom text-xs border border-[rgba(0,212,255,0.2)] text-[#00D4FF] glass"
                >
                  {tech}
                </span>
              ))}
            </motion.div>
          </motion.div>

          {/* Cards grid */}
          <div className="grid grid-cols-2 gap-4">
            {highlights.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30, scale: 0.95 }}
                animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
                transition={{ duration: 0.6, delay: 0.3 + i * 0.1 }}
                whileHover={{ y: -4, scale: 1.02 }}
                className="glass rounded-2xl p-5 border border-[rgba(255,255,255,0.06)] group cursor-default"
              >
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center mb-4 transition-all group-hover:scale-110"
                  style={{ background: `${item.color}18`, border: `1px solid ${item.color}33` }}
                >
                  <item.icon size={20} style={{ color: item.color }} />
                </div>
                <h3 className={`font-display font-bold text-sm mb-2 ${isDark ? 'text-white' : 'text-slate-800'}`}>
                  {item.title}
                </h3>
                <p className={`text-xs leading-relaxed ${isDark ? 'text-slate-500' : 'text-slate-500'}`}>
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
