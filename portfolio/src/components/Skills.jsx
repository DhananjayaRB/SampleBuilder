import { motion } from 'framer-motion'
import { SectionHeading } from './SectionHeading.jsx'
import { skills } from '../data/content.js'

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.08 },
  },
}

const item = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0 },
}

const cards = [
  {
    title: 'Technical',
    items: skills.technical,
    gradient: 'from-brand-50/90 to-white/90 dark:from-brand-950/40 dark:to-slate-900/80',
    icon: '⚙️',
  },
  {
    title: 'Current learning',
    items: skills.learning,
    gradient: 'from-teal-50/90 to-white/90 dark:from-teal-950/30 dark:to-slate-900/80',
    icon: '✓',
  },
  {
    title: 'AI-assisted dev',
    subtitle: 'Building & learning with AI coding tools',
    items: skills.aiAssisted,
    gradient: 'from-amber-50/90 to-white/90 dark:from-amber-950/25 dark:to-slate-900/80',
    icon: '✦',
  },
  {
    title: 'Soft skills',
    items: skills.soft,
    gradient: 'from-violet-50/90 to-white/90 dark:from-violet-950/35 dark:to-slate-900/80',
    icon: '◆',
  },
]

export function Skills() {
  return (
    <section
      id="skills"
      className="scroll-mt-28 border-t border-slate-200/70 py-20 dark:border-slate-800/80 sm:scroll-mt-32"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Skills"
          title="Stack, QA, AI-assisted building, and collaboration"
          subtitle="Traditional engineering plus modern AI tools — used with discipline, review, and quality in mind."
        />
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-80px' }}
          className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4"
        >
          {cards.map((card) => (
            <motion.div
              key={card.title}
              variants={item}
              className={`group relative overflow-hidden rounded-2xl border border-slate-200/80 bg-gradient-to-br ${card.gradient} p-6 shadow-soft transition duration-300 hover:-translate-y-1 hover:shadow-card dark:border-slate-700/80 dark:hover:shadow-card-dark sm:p-7`}
            >
              <div className="absolute -right-8 top-0 h-32 w-32 rounded-full bg-white/40 blur-2xl transition group-hover:scale-110 dark:bg-white/5" />
              <div className="relative">
                <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-white/90 text-lg shadow-sm dark:bg-slate-800/90">
                  {card.icon}
                </div>
                <h3 className="font-display text-lg font-bold text-slate-900 dark:text-white">{card.title}</h3>
                {card.subtitle && (
                  <p className="mt-1 text-xs font-medium leading-snug text-slate-500 dark:text-slate-400">
                    {card.subtitle}
                  </p>
                )}
                <ul className={`flex flex-wrap gap-2 ${card.subtitle ? 'mt-3' : 'mt-4'}`}>
                  {card.items.map((s) => (
                    <li
                      key={s}
                      className="rounded-lg border border-slate-200/80 bg-white/75 px-3 py-1.5 text-xs font-semibold text-slate-700 shadow-sm backdrop-blur-sm transition group-hover:border-brand-200 dark:border-slate-600 dark:bg-slate-800/90 dark:text-slate-200 dark:group-hover:border-brand-700"
                    >
                      {s}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
