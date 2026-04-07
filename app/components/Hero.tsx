'use client'
import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import { ArrowDown, Cpu, Zap, Globe } from 'lucide-react'
import Image from 'next/image'

const floatingBadges = [
  { icon: Cpu, label: 'AI Systems', color: '#00D4FF', delay: 0, x: '-60%', y: '-30%' },
  { icon: Zap, label: 'Automation', color: '#00FF88', delay: 0.5, x: '60%', y: '-20%' },
  { icon: Globe, label: 'Web Architect', color: '#7C3AED', delay: 1, x: '-55%', y: '55%' },
]

export default function Hero({ isDark }: { isDark: boolean }) {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] })
  const y = useTransform(scrollYProgress, [0, 1], [0, 120])
  const opacity = useTransform(scrollYProgress, [0, 0.6], [1, 0])

  return (
    <section
      id="hero"
      ref={ref}
      className={`relative min-h-screen flex flex-col items-center justify-center overflow-hidden grid-bg ${
        isDark ? '' : 'bg-[#F0F4FF]'
      }`}
    >
      {/* Ambient orbs */}
      <div className="orb w-[600px] h-[600px] bg-[#00D4FF] top-[-100px] left-[-150px] opacity-[0.08]" />
      <div className="orb w-[500px] h-[500px] bg-[#00FF88] bottom-[-50px] right-[-100px] opacity-[0.06]" />
      <div className="orb w-[300px] h-[300px] bg-[#7C3AED] top-[40%] left-[50%] opacity-[0.07]" />

      <motion.div
        style={{ y, opacity }}
        className="relative z-10 max-w-6xl mx-auto px-6 flex flex-col lg:flex-row items-center gap-16 pt-24"
      >
        {/* Text side */}
        <motion.div
          className="flex-1 text-center lg:text-left"
          initial={{ opacity: 0, x: -60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9, ease: 'easeOut' }}
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-[rgba(0,212,255,0.25)] mb-6"
          >
            <span className="w-2 h-2 rounded-full bg-[#00FF88] animate-pulse" />
            <span className="text-sm font-mono-custom text-[#00FF88] tracking-widest uppercase">
              Available for Projects
            </span>
          </motion.div>

          {/* Main heading */}
          <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl font-black leading-[1.05] mb-6">
            <motion.span
              className="block text-white"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              AI Engineer &
            </motion.span>
            <motion.span
              className="block gradient-text"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.45 }}
            >
              Web Architect
            </motion.span>
          </h1>

          <motion.p
            className={`text-lg lg:text-xl leading-relaxed max-w-xl mx-auto lg:mx-0 mb-10 ${
              isDark ? 'text-slate-400' : 'text-slate-600'
            }`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
          >
            I build <span className="text-[#00D4FF] font-medium">intelligent systems</span>, automate workflows, and create{' '}
            <span className="text-[#00FF88] font-medium">scalable digital experiences</span> that solve real-world problems.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            className="flex flex-wrap gap-4 justify-center lg:justify-start"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.75 }}
          >
            <motion.a
              href="#projects"
              whileHover={{ scale: 1.04, boxShadow: '0 0 30px rgba(0, 212, 255, 0.5)' }}
              whileTap={{ scale: 0.97 }}
              className="px-8 py-4 rounded-2xl font-display font-bold text-[#050A14] text-sm tracking-wide bg-gradient-to-r from-[#00D4FF] to-[#00FF88] shadow-lg transition-all"
            >
              View Projects
            </motion.a>
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              className="px-8 py-4 rounded-2xl font-display font-bold text-[#00D4FF] text-sm tracking-wide glass border border-[rgba(0,212,255,0.3)] hover:border-[rgba(0,212,255,0.6)] transition-all"
            >
              Contact Me
            </motion.a>
          </motion.div>

          {/* Stats row */}
          <motion.div
            className="flex gap-8 justify-center lg:justify-start mt-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9 }}
          >
            {[
              { val: '3+', label: 'Years Experience' },
              { val: '20+', label: 'Projects Shipped' },
              { val: '∞', label: 'Lines of Code' },
            ].map((stat) => (
              <div key={stat.label} className="text-center lg:text-left">
                <div className="font-display text-2xl font-black gradient-text">{stat.val}</div>
                <div className={`text-xs mt-1 ${isDark ? 'text-slate-500' : 'text-slate-400'}`}>
                  {stat.label}
                </div>
              </div>
            ))}
          </motion.div>
        </motion.div>

        {/* Profile image side */}
        <motion.div
          className="relative flex-shrink-0"
          initial={{ opacity: 0, scale: 0.8, x: 60 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          transition={{ duration: 0.9, ease: 'easeOut', delay: 0.2 }}
        >
          {/* Floating badges */}
          {floatingBadges.map((badge, i) => (
            <motion.div
              key={badge.label}
              className="absolute z-20 glass rounded-xl px-3 py-2 flex items-center gap-2 border"
              style={{
                borderColor: `${badge.color}33`,
                left: badge.x,
                top: badge.y,
              }}
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1 + badge.delay, type: 'spring', stiffness: 200 }}
              whileHover={{ scale: 1.08 }}
            >
              <badge.icon size={14} style={{ color: badge.color }} />
              <span className="text-xs font-mono-custom font-medium" style={{ color: badge.color }}>
                {badge.label}
              </span>
            </motion.div>
          ))}

          {/* Hexagonal ring decorations */}
          <div
            className="absolute inset-0 rounded-full border-2 border-dashed animate-[spin_20s_linear_infinite] opacity-20"
            style={{ borderColor: '#00D4FF', borderRadius: '50%', margin: '-20px' }}
          />
          <div
            className="absolute inset-0 rounded-full border border-[rgba(0,255,136,0.2)] animate-[spin_15s_linear_infinite_reverse]"
            style={{ margin: '-35px' }}
          />

          {/* Profile image */}
          <div className="relative w-72 h-72 lg:w-80 lg:h-80">
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-[#00D4FF] to-[#00FF88] opacity-20 blur-2xl" />
            <div
              className="relative w-full h-full rounded-full overflow-hidden border-2"
              style={{ borderColor: 'rgba(0,212,255,0.4)' }}
            >
              <Image
                src="https://res.cloudinary.com/dejbrjuuq/image/upload/v1756129271/WhatsApp_Image_2025-08-25_at_3.40.20_AM_qqbjz.jpg"
                alt="Razi Ur Rehman"
                fill
                className="object-cover"
                priority
              />
            </div>
            {/* Glow ring */}
            <div className="absolute inset-0 rounded-full glow-blue pointer-events-none" />
          </div>

          {/* Name tag */}
          <motion.div
            className="absolute -bottom-4 left-1/2 -translate-x-1/2 glass rounded-full px-6 py-2 border border-[rgba(0,212,255,0.2)] whitespace-nowrap"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2 }}
          >
            <span className="font-display font-bold text-sm text-white">Razi Ur Rehman</span>
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
      >
        <span className="text-xs font-mono-custom text-slate-500 tracking-widest uppercase">Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
          className="text-[#00D4FF]"
        >
          <ArrowDown size={20} />
        </motion.div>
      </motion.div>
    </section>
  )
}
