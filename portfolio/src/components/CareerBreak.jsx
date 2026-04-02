import { motion } from 'framer-motion'
import { SectionHeading } from './SectionHeading.jsx'
import { careerBreak } from '../data/content.js'

export function CareerBreak() {
  return (
    <section
      id="growth"
      className="scroll-mt-28 border-t border-slate-200/70 bg-gradient-to-b from-white/40 via-brand-50/35 to-violet-50/25 py-20 dark:border-slate-800/80 dark:from-slate-950/40 dark:via-brand-950/15 dark:to-slate-950/80 sm:scroll-mt-32"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="My journey"
          title={careerBreak.title}
          subtitle="Confident framing: the gap was intentional growth — not a void on the timeline."
        />
        <div className="grid gap-8 md:grid-cols-3">
          {careerBreak.pillars.map((pillar, i) => (
            <motion.div
              key={pillar.heading}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: i * 0.12 }}
              className="relative overflow-hidden rounded-[1.5rem] border border-slate-200/80 bg-white/80 p-7 shadow-card backdrop-blur-xl dark:border-slate-700/80 dark:bg-slate-900/75 dark:shadow-card-dark"
            >
              <div className="absolute -right-8 -top-8 h-24 w-24 rounded-full bg-gradient-to-br from-brand-400/30 to-teal-400/20 blur-2xl" />
              <h3 className="relative font-display text-lg font-semibold text-brand-700 dark:text-brand-300">
                {pillar.heading}
              </h3>
              <p className="relative mt-3 leading-relaxed text-slate-600 dark:text-slate-300">{pillar.text}</p>
            </motion.div>
          ))}
        </div>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mx-auto mt-12 max-w-2xl text-center text-lg font-medium text-slate-700 dark:text-slate-200"
        >
          I am ready to contribute from day one — combining battle-tested Laravel experience with a disciplined
          mindset and fresh investment in quality engineering.
        </motion.p>
      </div>
    </section>
  )
}
