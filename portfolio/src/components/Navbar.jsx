import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { useTheme } from '../context/ThemeContext.jsx'
import { profile } from '../data/content.js'

const links = [
  { href: '#about', label: 'About' },
  { href: '#skills', label: 'Skills' },
  { href: '#experience', label: 'Experience' },
  { href: '#projects', label: 'Projects' },
  { href: '#growth', label: 'My Journey' },
  { href: '#why-me', label: 'Why Hire Me' },
  { href: '#contact', label: 'Contact' },
]

export function Navbar() {
  const { dark, toggle } = useTheme()
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 32)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <motion.header
      initial={{ y: -24, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
      className="fixed inset-x-0 top-0 z-50 px-4 pt-4 sm:px-6 lg:px-8"
    >
      <nav
        className={`mx-auto flex max-w-6xl flex-col rounded-2xl border transition-all duration-300 ${
          scrolled
            ? 'border-slate-200/90 bg-white/85 py-2 shadow-nav backdrop-blur-2xl dark:border-slate-700/90 dark:bg-slate-950/80 dark:shadow-card-dark'
            : 'border-slate-200/60 bg-white/55 py-2 shadow-soft backdrop-blur-xl dark:border-slate-800/60 dark:bg-slate-950/55'
        }`}
      >
        <div className="flex items-center justify-between gap-3 px-3 sm:px-4">
          <a
            href="#top"
            className="group flex items-center gap-2 font-display text-lg font-bold tracking-tight text-slate-900 dark:text-white"
          >
            <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-brand-500 to-indigo-600 text-sm font-extrabold text-white shadow-glow">
              {profile.name
                .split(' ')
                .map((n) => n[0])
                .join('')}
            </span>
            <span>
              {profile.name.split(' ')[0]}
              <span className="text-brand-600 dark:text-brand-400">.</span>
            </span>
          </a>

          <ul className="hidden items-center gap-0.5 lg:flex">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  className="relative rounded-lg px-3 py-2 text-[13px] font-medium text-slate-600 transition-colors after:absolute after:inset-x-2 after:bottom-1 after:h-px after:origin-left after:scale-x-0 after:bg-brand-500 after:transition-transform after:content-[''] hover:text-brand-700 hover:after:scale-x-100 dark:text-slate-400 dark:hover:text-brand-300 dark:after:bg-brand-400"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-2">
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              className="hidden rounded-full bg-gradient-to-r from-brand-600 to-indigo-600 px-4 py-2 text-sm font-semibold text-white shadow-glow sm:inline-flex dark:shadow-glow"
            >
              Let&apos;s talk
            </motion.a>
            <button
              type="button"
              onClick={toggle}
              aria-label={dark ? 'Switch to light mode' : 'Switch to dark mode'}
              className="flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200/80 bg-white/90 text-slate-700 shadow-sm transition hover:border-brand-300 hover:text-brand-600 dark:border-slate-700 dark:bg-slate-900/90 dark:text-slate-200"
            >
              {dark ? <SunIcon className="h-5 w-5" /> : <MoonIcon className="h-5 w-5" />}
            </button>

            <button
              type="button"
              className="flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200/80 bg-white/90 text-slate-700 shadow-sm lg:hidden dark:border-slate-700 dark:bg-slate-900/90"
              aria-label="Open menu"
              onClick={() => setOpen((o) => !o)}
            >
              {open ? <CloseIcon /> : <MenuIcon />}
            </button>
          </div>
        </div>

        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            className="border-t border-slate-200/80 px-3 py-3 dark:border-slate-800 lg:hidden"
          >
            <ul className="flex flex-col gap-0.5">
              {links.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    onClick={() => setOpen(false)}
                    className="block rounded-xl px-3 py-2.5 text-sm font-medium text-slate-700 transition hover:bg-brand-50 hover:text-brand-700 dark:text-slate-200 dark:hover:bg-slate-800"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
              <li className="pt-2">
                <a
                  href="#contact"
                  onClick={() => setOpen(false)}
                  className="block rounded-full bg-gradient-to-r from-brand-600 to-indigo-600 py-2.5 text-center text-sm font-semibold text-white"
                >
                  Let&apos;s talk
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </nav>
    </motion.header>
  )
}

function SunIcon({ className }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12 3v2m0 14v2M5.22 5.22l1.42 1.42m10.72 10.72 1.42 1.42M3 12h2m14 0h2M5.22 18.78l1.42-1.42M17.64 6.34l1.42-1.42M12 8a4 4 0 1 0 4 4 4 4 0 0 0-4-4Z"
      />
    </svg>
  )
}

function MoonIcon({ className }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M21 14.5A8.5 8.5 0 0 1 9.5 3 6.5 6.5 0 1 0 21 14.5Z"
      />
    </svg>
  )
}

function MenuIcon() {
  return (
    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" d="M4 7h16M4 12h16M4 17h16" />
    </svg>
  )
}

function CloseIcon() {
  return (
    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" d="M6 6l12 12M18 6L6 18" />
    </svg>
  )
}
