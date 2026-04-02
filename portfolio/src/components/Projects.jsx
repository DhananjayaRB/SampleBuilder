import { motion } from 'framer-motion'
import { SectionHeading } from './SectionHeading.jsx'
import { projects } from '../data/content.js'

export function Projects() {
  return (
    <section
      id="projects"
      className="scroll-mt-28 border-t border-slate-200/70 py-20 dark:border-slate-800/80 sm:scroll-mt-32"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Projects"
          title="Demo work — ready for real repos & demos"
          subtitle="Three focused examples: Laravel CRUD, QA-oriented UI, and lightweight bug triage. Replace placeholders with your live links."
        />
        <div className="grid gap-8 lg:grid-cols-3">
          {projects.map((p, i) => (
            <motion.article
              key={p.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.45, delay: i * 0.1 }}
              whileHover={{ y: -6 }}
              className="group relative flex flex-col overflow-hidden rounded-[1.5rem] border border-slate-200/80 bg-white/85 p-6 shadow-soft transition-shadow duration-300 hover:shadow-card dark:border-slate-700/80 dark:bg-slate-900/75 dark:hover:shadow-card-dark"
            >
              <div className="pointer-events-none absolute -right-16 top-0 h-40 w-40 rounded-full bg-brand-500/10 blur-3xl transition group-hover:bg-brand-500/15 dark:bg-brand-500/15" />
              <div className="relative mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-brand-500 via-indigo-500 to-teal-500 text-lg font-bold text-white shadow-glow">
                {i + 1}
              </div>
              <h3 className="font-display text-xl font-semibold text-slate-900 dark:text-white">{p.title}</h3>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-slate-600 dark:text-slate-300">
                {p.description}
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                {p.stack.map((s) => (
                  <span
                    key={s}
                    className="rounded-md bg-slate-100 px-2 py-0.5 text-xs font-medium text-slate-700 dark:bg-slate-800 dark:text-slate-200"
                  >
                    {s}
                  </span>
                ))}
              </div>
              <div className="mt-6 flex flex-wrap gap-3 border-t border-slate-100 pt-4 dark:border-slate-800">
                <a
                  href={p.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-semibold text-brand-600 hover:text-brand-500 dark:text-brand-400"
                >
                  GitHub →
                </a>
                <a
                  href={p.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-semibold text-teal-600 hover:text-teal-500 dark:text-teal-400"
                >
                  Live demo →
                </a>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
