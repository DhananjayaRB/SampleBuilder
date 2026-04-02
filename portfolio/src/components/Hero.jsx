import { motion } from 'framer-motion'
import { profile } from '../data/content.js'

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.09, delayChildren: 0.06 },
  },
}

const item = {
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] } },
}

const stackPills = ['Laravel & PHP', 'MySQL', 'Growing in QA']

export function Hero() {
  return (
    <section
      id="top"
      className="relative overflow-hidden pt-32 pb-16 sm:pt-36 sm:pb-24 lg:pt-40 lg:pb-28"
    >
      <div
        className="pointer-events-none absolute -left-32 top-20 h-96 w-96 rounded-full bg-brand-400/25 blur-[100px] dark:bg-brand-600/20"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -right-24 top-40 h-80 w-80 rounded-full bg-teal-400/20 blur-[90px] dark:bg-teal-500/15"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute bottom-0 left-1/2 h-64 w-[120%] -translate-x-1/2 bg-hero-glow dark:opacity-90"
        aria-hidden
      />

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-10">
          <motion.div
            className="lg:col-span-7"
            variants={container}
            initial="hidden"
            animate="show"
          >
            <motion.div variants={item}>
              <span className="inline-flex items-center gap-2.5 rounded-full border border-slate-200/80 bg-white/80 px-4 py-2 text-xs font-semibold uppercase tracking-widest text-slate-600 shadow-soft backdrop-blur-md dark:border-slate-700/80 dark:bg-slate-900/70 dark:text-slate-300">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-teal-400 opacity-60" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-teal-500" />
                </span>
                Career restart · {profile.location}
              </span>
            </motion.div>

            <motion.h1
              variants={item}
              className="mt-7 font-display text-4xl font-extrabold leading-[1.08] tracking-tight text-slate-900 sm:text-5xl sm:leading-[1.06] lg:text-6xl dark:text-white"
            >
              <span className="block text-gradient">{profile.name}</span>
              <span className="mt-2 block max-w-xl text-2xl font-semibold leading-snug text-slate-600 sm:text-3xl dark:text-slate-300">
                {profile.title}
              </span>
            </motion.h1>

            <motion.p
              variants={item}
              className="mt-6 max-w-xl text-lg font-medium leading-relaxed text-slate-600 sm:text-xl dark:text-slate-400"
            >
              {profile.headline}
            </motion.p>

            <motion.div variants={item} className="mt-8 flex flex-wrap gap-2">
              {stackPills.map((pill) => (
                <span
                  key={pill}
                  className="rounded-lg border border-slate-200/90 bg-white/70 px-3 py-1 text-xs font-semibold text-slate-700 shadow-sm backdrop-blur-sm dark:border-slate-600 dark:bg-slate-800/80 dark:text-slate-200"
                >
                  {pill}
                </span>
              ))}
            </motion.div>

            <motion.div
              variants={item}
              className="mt-10 grid w-full max-w-2xl grid-cols-1 gap-3 sm:grid-cols-3"
            >
              <motion.a
                href="#projects"
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex min-h-[48px] items-center justify-center rounded-xl bg-gradient-to-r from-brand-600 via-indigo-600 to-indigo-700 px-5 text-sm font-semibold text-white shadow-glow transition hover:brightness-110 dark:hover:brightness-110"
              >
                View Projects
              </motion.a>
              <motion.a
                href="#contact"
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex min-h-[48px] items-center justify-center rounded-xl border border-slate-200/90 bg-white/90 px-5 text-sm font-semibold text-slate-800 shadow-soft backdrop-blur-md transition hover:border-brand-300 hover:text-brand-700 dark:border-slate-600 dark:bg-slate-900/80 dark:text-slate-100 dark:hover:border-brand-500"
              >
                Contact Me
              </motion.a>
              <motion.a
                href={profile.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex min-h-[48px] items-center justify-center gap-2 rounded-xl border border-slate-200/80 bg-slate-900/[0.03] px-5 text-sm font-semibold text-slate-800 transition hover:bg-slate-100 dark:border-slate-600 dark:bg-white/[0.05] dark:text-slate-100 dark:hover:bg-slate-800"
              >
                <ExternalLinkIcon className="h-4 w-4 shrink-0 opacity-80" />
                Résumé
              </motion.a>
            </motion.div>
          </motion.div>

          <motion.div
            className="relative lg:col-span-5"
            initial={{ opacity: 0, scale: 0.94, y: 24 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.75, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="absolute -inset-4 rounded-[2rem] bg-gradient-to-br from-brand-500/20 via-transparent to-teal-500/20 blur-2xl dark:from-brand-600/25 dark:to-teal-500/15" />
            <div className="relative overflow-hidden rounded-[1.75rem] border border-slate-200/80 bg-white/90 p-6 shadow-card backdrop-blur-2xl dark:border-slate-700/80 dark:bg-slate-900/85 dark:shadow-card-dark sm:p-8">
              <div className="absolute -right-20 -top-20 h-48 w-48 rounded-full bg-brand-400/15 blur-3xl dark:bg-brand-500/20" />
              <div className="absolute -bottom-16 -left-10 h-40 w-40 rounded-full bg-teal-400/15 blur-3xl dark:bg-teal-500/15" />

              <div className="relative flex items-start gap-4">
                <div className="relative h-20 w-20 shrink-0 overflow-hidden rounded-2xl shadow-glow ring-2 ring-white/90 dark:ring-slate-700/90">
                  <img
                    src={profile.photo}
                    alt={`${profile.name} — professional photo`}
                    width={160}
                    height={160}
                    className="h-full w-full object-cover object-top"
                  />
                </div>
                <div>
                  <p className="font-display text-lg font-bold text-slate-900 dark:text-white">
                    Open to opportunities
                  </p>
                  <p className="mt-1 text-sm leading-relaxed text-slate-600 dark:text-slate-400">
                    PHP / Laravel engineering · QA & quality mindset · Full-stack junior paths
                  </p>
                </div>
              </div>

              <div className="relative mt-8 grid grid-cols-3 gap-3">
                {[
                  { label: 'Yrs dev', value: '3+', sub: 'delivery' },
                  { label: 'Stack', value: 'Laravel', sub: 'core' },
                  { label: 'Focus', value: 'QA ↑', sub: 'now' },
                ].map((s) => (
                  <div
                    key={s.label}
                    className="rounded-xl border border-slate-100 bg-slate-50/90 px-3 py-3 text-center dark:border-slate-700/80 dark:bg-slate-800/60"
                  >
                    <p className="text-[10px] font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                      {s.label}
                    </p>
                    <p className="mt-1 font-display text-lg font-bold text-slate-900 dark:text-white">{s.value}</p>
                    <p className="text-[10px] font-medium text-slate-500 dark:text-slate-400">{s.sub}</p>
                  </div>
                ))}
              </div>

              <motion.div
                className="relative mt-8 overflow-hidden rounded-xl border border-slate-200/80 bg-slate-950 px-4 py-3 font-mono text-[11px] leading-relaxed text-slate-300 dark:border-slate-600"
                initial={{ opacity: 0.85 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
              >
                <div className="mb-2 flex gap-1.5">
                  <span className="h-2.5 w-2.5 rounded-full bg-red-400/90" />
                  <span className="h-2.5 w-2.5 rounded-full bg-amber-400/90" />
                  <span className="h-2.5 w-2.5 rounded-full bg-emerald-400/90" />
                </div>
                <p>
                  <span className="text-purple-400">const</span>{' '}
                  <span className="text-sky-300">focus</span> ={' '}
                  <span className="text-emerald-400">&apos;reliability & growth&apos;</span>;
                </p>
                <p className="mt-1 text-slate-500">
                  // Business apps, tests, and calm debugging under pressure
                </p>
              </motion.div>

              <motion.div
                className="pointer-events-none absolute right-6 top-24 hidden sm:block"
                aria-hidden
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
              >
                <div className="h-16 w-16 rounded-2xl border border-white/40 bg-gradient-to-br from-brand-400/30 to-teal-400/20 shadow-soft backdrop-blur-md dark:border-slate-600/40" />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

function ExternalLinkIcon({ className }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
      />
    </svg>
  )
}
