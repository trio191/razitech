import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Razi Ur Rehman — AI Engineer & Web Architect',
  description: 'AI-driven developer specializing in intelligent systems, automation, and scalable digital experiences.',
  keywords: ['AI Engineer', 'Web Developer', 'Next.js', 'React', 'Machine Learning', 'Full Stack'],
  authors: [{ name: 'Razi Ur Rehman' }],
  openGraph: {
    title: 'Razi Ur Rehman — AI Engineer & Web Architect',
    description: 'I build intelligent systems, automate workflows, and create scalable digital experiences.',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Syne:wght@400;500;600;700;800&family=Outfit:wght@300;400;500;600&family=DM+Mono:wght@300;400;500&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased">
        {children}
      </body>
    </html>
  )
}
