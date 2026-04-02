import { motion } from 'framer-motion'
import { SectionHeading } from './SectionHeading.jsx'
import { aboutParagraphs } from '../data/content.js'

export function About() {
  return (
    <section
      id="about"
      className="scroll-mt-28 border-t border-slate-200/70 py-20 dark:border-slate-800/80 sm:scroll-mt-32"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="About"
          title="Experience, purpose, and the road back"
          subtitle="A concise story: what I built, why I stepped away, and how I am returning with clarity."
        />
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.55 }}
          className="relative mx-auto max-w-3xl overflow-hidden rounded-[1.75rem] border border-slate-200/80 bg-white/80 p-8 shadow-card backdrop-blur-xl dark:border-slate-700/80 dark:bg-slate-900/70 dark:shadow-card-dark sm:p-10"
        >
          <div className="pointer-events-none absolute -right-24 top-0 h-48 w-48 rounded-full bg-brand-500/10 blur-3xl dark:bg-brand-500/15" />
          <div className="relative space-y-7">
            {aboutParagraphs.map((text, i) => (
              <motion.p
                key={i}
                initial={{ opacity: 0, x: -8 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.45, delay: i * 0.06 }}
                className={`text-base font-medium leading-relaxed text-slate-600 sm:text-lg dark:text-slate-300 ${i === 0 ? 'first-letter:font-display first-letter:text-4xl first-letter:font-extrabold first-letter:text-brand-600 dark:first-letter:text-brand-400' : ''}`}
              >
                {text}
              </motion.p>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
