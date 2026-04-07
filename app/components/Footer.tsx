'use client'
import { Github, Mail, Phone } from 'lucide-react'

export default function Footer({ isDark }: { isDark: boolean }) {
  return (
    <footer
      className={`relative py-10 border-t ${
        isDark ? 'border-[rgba(0,212,255,0.08)] bg-[#030609]' : 'border-slate-100 bg-white'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="font-display text-xl font-black gradient-text">
          RR<span className="text-[#00D4FF]">.</span>
        </div>

        <p className={`text-sm font-mono-custom ${isDark ? 'text-slate-600' : 'text-slate-400'}`}>
          © 2025 Razi Ur Rehman — AI Engineer & Web Architect
        </p>

        <div className="flex items-center gap-4">
          {[
            { icon: Github, href: 'https://github.com/raziurrehman', label: 'GitHub' },
            { icon: Mail, href: 'mailto:razirao593@gmail.com', label: 'Email' },
            { icon: Phone, href: 'tel:+923190113400', label: 'Phone' },
          ].map((social) => (
            <a
              key={social.label}
              href={social.href}
              target={social.href.startsWith('http') ? '_blank' : undefined}
              rel="noopener noreferrer"
              aria-label={social.label}
              className={`p-2 rounded-lg glass border border-[rgba(0,212,255,0.12)] transition-all hover:border-[rgba(0,212,255,0.4)] hover:text-[#00D4FF] ${
                isDark ? 'text-slate-500' : 'text-slate-400'
              }`}
            >
              <social.icon size={16} />
            </a>
          ))}
        </div>
      </div>
    </footer>
  )
}
