import { motion } from 'framer-motion'
import { SectionHeading } from './SectionHeading.jsx'
import { whyHireMe } from '../data/content.js'

export function WhyHireMe() {
  return (
    <section id="why-me" className="scroll-mt-28 py-20 sm:scroll-mt-32">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="For recruiters"
          title="Why hire me?"
          subtitle="Short, confident signals — not fluff — for PHP, QA, and beginner full-stack conversations."
        />
        <div className="grid gap-6 sm:grid-cols-2">
          {whyHireMe.map((block, i) => (
            <motion.div
              key={block.title}
              initial={{ opacity: 0, scale: 0.98 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="rounded-[1.5rem] border border-slate-200/80 bg-gradient-to-br from-white/90 to-brand-50/60 p-7 shadow-soft transition hover:-translate-y-0.5 hover:shadow-card dark:border-slate-700/80 dark:from-slate-900/80 dark:to-brand-950/25 dark:hover:shadow-card-dark"
            >
              <h3 className="font-display text-lg font-semibold text-slate-900 dark:text-white">{block.title}</h3>
              <p className="mt-2 text-slate-600 dark:text-slate-300">{block.body}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
