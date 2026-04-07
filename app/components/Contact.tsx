'use client'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { useState } from 'react'
import { Mail, Phone, Send, CheckCircle, MapPin } from 'lucide-react'

export default function Contact({ isDark }: { isDark: boolean }) {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 })
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [sent, setSent] = useState(false)
  const [sending, setSending] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setSending(true)
    // Simulate sending
    await new Promise((r) => setTimeout(r, 1500))
    setSending(false)
    setSent(true)
    setForm({ name: '', email: '', message: '' })
    setTimeout(() => setSent(false), 4000)
  }

  const inputClass = `w-full px-5 py-4 rounded-xl text-sm font-body outline-none transition-all duration-300 glass border ${
    isDark
      ? 'border-[rgba(0,212,255,0.12)] text-white placeholder-slate-600 focus:border-[rgba(0,212,255,0.4)] focus:shadow-[0_0_20px_rgba(0,212,255,0.1)]'
      : 'border-slate-200 text-slate-900 placeholder-slate-400 focus:border-[#00D4FF] bg-white'
  }`

  return (
    <section
      id="contact"
      ref={ref}
      className={`relative py-28 overflow-hidden ${isDark ? 'bg-[#05091a]' : 'bg-[#F0F4FF]'} grid-bg`}
    >
      <div className="orb w-[400px] h-[400px] bg-[#7C3AED] bottom-0 left-0 opacity-[0.07]" />
      <div className="orb w-[300px] h-[300px] bg-[#00D4FF] top-0 right-0 opacity-[0.05]" />

      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <span className="font-mono-custom text-[#FF6B6B] text-sm tracking-[0.3em] uppercase mb-4 block">
            04 — Contact
          </span>
          <h2 className="section-title text-4xl lg:text-5xl text-white mb-4">
            Let&apos;s Build{' '}
            <span className="gradient-text">Something</span>
          </h2>
          <p className={`text-lg max-w-xl mx-auto ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
            Have a project in mind? I&apos;m available for freelance, collaborations, and full-time opportunities.
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-[#FF6B6B] to-[#7C3AED] mx-auto rounded-full mt-4" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left: contact info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6"
          >
            <div>
              <h3 className="font-display font-bold text-2xl text-white mb-3">
                Get In Touch
              </h3>
              <p className={`text-base leading-relaxed ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                Whether you want to discuss an AI project, need a scalable web solution, or just want to chat about
                technology — my inbox is always open.
              </p>
            </div>

            {/* Contact cards */}
            {[
              {
                icon: Mail,
                label: 'Email',
                value: 'razirao593@gmail.com',
                href: 'mailto:razirao593@gmail.com',
                color: '#00D4FF',
              },
              {
                icon: Phone,
                label: 'Phone',
                value: '+92 319 011 3400',
                href: 'tel:+923190113400',
                color: '#00FF88',
              },
              {
                icon: MapPin,
                label: 'Location',
                value: 'Pakistan 🌏',
                href: null,
                color: '#7C3AED',
              },
            ].map((item, i) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, x: -20 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.4 + i * 0.1 }}
                className="glass rounded-2xl p-5 border border-[rgba(255,255,255,0.06)] flex items-center gap-5 group hover:scale-[1.02] transition-transform"
              >
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
                  style={{ background: `${item.color}18`, border: `1px solid ${item.color}33` }}
                >
                  <item.icon size={20} style={{ color: item.color }} />
                </div>
                <div>
                  <div className="text-xs font-mono-custom text-slate-500 mb-1">{item.label}</div>
                  {item.href ? (
                    <a
                      href={item.href}
                      className="font-display font-medium text-white hover:text-[#00D4FF] transition-colors"
                    >
                      {item.value}
                    </a>
                  ) : (
                    <span className="font-display font-medium text-white">{item.value}</span>
                  )}
                </div>
              </motion.div>
            ))}

            {/* Availability badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-[rgba(0,255,136,0.2)]">
              <span className="w-2 h-2 rounded-full bg-[#00FF88] animate-pulse" />
              <span className="text-sm text-[#00FF88] font-mono-custom">Available for new projects</span>
            </div>
          </motion.div>

          {/* Right: form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <form onSubmit={handleSubmit} className="glass rounded-3xl p-8 border border-[rgba(0,212,255,0.1)] space-y-4">
              <div>
                <label className={`block text-xs font-mono-custom mb-2 ${isDark ? 'text-slate-500' : 'text-slate-500'}`}>
                  Your Name
                </label>
                <input
                  type="text"
                  placeholder="John Doe"
                  required
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className={inputClass}
                />
              </div>
              <div>
                <label className={`block text-xs font-mono-custom mb-2 ${isDark ? 'text-slate-500' : 'text-slate-500'}`}>
                  Email Address
                </label>
                <input
                  type="email"
                  placeholder="john@example.com"
                  required
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className={inputClass}
                />
              </div>
              <div>
                <label className={`block text-xs font-mono-custom mb-2 ${isDark ? 'text-slate-500' : 'text-slate-500'}`}>
                  Message
                </label>
                <textarea
                  placeholder="Tell me about your project..."
                  required
                  rows={5}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  className={`${inputClass} resize-none`}
                />
              </div>

              <motion.button
                type="submit"
                disabled={sending || sent}
                whileHover={!sending && !sent ? { scale: 1.02, boxShadow: '0 0 30px rgba(0,212,255,0.4)' } : {}}
                whileTap={!sending && !sent ? { scale: 0.98 } : {}}
                className={`w-full py-4 rounded-xl font-display font-bold text-sm flex items-center justify-center gap-3 transition-all duration-300 ${
                  sent
                    ? 'bg-[#00FF88] text-[#050A14]'
                    : 'bg-gradient-to-r from-[#00D4FF] to-[#00FF88] text-[#050A14]'
                } disabled:opacity-70 disabled:cursor-not-allowed`}
              >
                {sent ? (
                  <>
                    <CheckCircle size={18} />
                    Message Sent!
                  </>
                ) : sending ? (
                  <>
                    <div className="w-4 h-4 rounded-full border-2 border-[#050A14] border-t-transparent animate-spin" />
                    Sending...
                  </>
                ) : (
                  <>
                    <Send size={18} />
                    Send Message
                  </>
                )}
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
