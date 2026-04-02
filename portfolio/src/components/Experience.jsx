import { motion } from 'framer-motion'
import { SectionHeading } from './SectionHeading.jsx'
import { experience, projectNames } from '../data/content.js'

export function Experience() {
  return (
    <section
      id="experience"
      className="scroll-mt-28 border-t border-slate-200/70 py-20 dark:border-slate-800/80 sm:scroll-mt-32"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Experience"
          title="Where I shipped real business software"
          subtitle="Timeline-style overview with responsibilities, impact, and stack."
        />

        <div className="relative mx-auto max-w-4xl">
          <div className="absolute left-[15px] top-0 bottom-0 w-px bg-gradient-to-b from-brand-400 via-teal-400 to-violet-400 md:left-1/2 md:-ml-px" />

          <motion.ul className="space-y-12">
            {experience.map((job, index) => (
              <motion.li
                key={job.id}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`relative flex flex-col gap-4 md:flex-row ${
                  index % 2 === 0 ? 'md:flex-row-reverse' : ''
                }`}
              >
                <div className="flex flex-1 md:w-1/2 md:justify-end md:pr-10">
                  <div className="md:text-right">
                    <span className="absolute left-0 flex h-9 w-9 items-center justify-center rounded-full border-4 border-white bg-gradient-to-br from-brand-500 to-indigo-600 text-xs font-bold text-white shadow-glow dark:border-slate-950 md:left-1/2 md:-ml-[18px]">
                      {index + 1}
                    </span>
                    <p className="ml-12 text-sm font-semibold text-brand-600 dark:text-brand-400 md:ml-0">
                      {job.period}
                    </p>
                    <h3 className="ml-12 font-display text-xl font-bold text-slate-900 dark:text-white md:ml-0">
                      {job.role}
                    </h3>
                    <p className="ml-12 text-lg text-slate-600 dark:text-slate-400 md:ml-0">{job.company}</p>
                  </div>
                </div>
                <div className="flex-1 md:w-1/2 md:pl-10">
                  <div className="ml-12 rounded-2xl border border-slate-200/80 bg-white/80 p-6 shadow-card backdrop-blur-md dark:border-slate-700/80 dark:bg-slate-900/70 dark:shadow-card-dark md:ml-0">
                    <p className="text-slate-600 dark:text-slate-300">{job.summary}</p>
                    <p className="mt-4 text-sm font-semibold text-slate-900 dark:text-white">Responsibilities</p>
                    <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-slate-600 dark:text-slate-300">
                      {job.responsibilities.map((r) => (
                        <li key={r}>{r}</li>
                      ))}
                    </ul>
                    <p className="mt-4 text-sm font-semibold text-slate-900 dark:text-white">Achievements</p>
                    <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-slate-600 dark:text-slate-300">
                      {job.achievements.map((a) => (
                        <li key={a}>{a}</li>
                      ))}
                    </ul>
                    <div className="mt-4 flex flex-wrap gap-2">
                      {job.tech.map((t) => (
                        <span
                          key={t}
                          className="rounded-md bg-brand-100 px-2 py-0.5 text-xs font-medium text-brand-800 dark:bg-brand-900/50 dark:text-brand-200"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.li>
            ))}
          </motion.ul>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-14 rounded-[1.5rem] border border-violet-200/70 bg-gradient-to-br from-violet-50/95 to-brand-50/90 p-7 shadow-soft dark:border-violet-900/40 dark:from-violet-950/35 dark:to-brand-950/25"
          >
            <h3 className="font-display text-lg font-semibold text-slate-900 dark:text-white">
              Systems & modules I contributed to
            </h3>
            <ul className="mt-3 flex flex-wrap gap-2">
              {projectNames.map((name) => (
                <li
                  key={name}
                  className="rounded-lg border border-white/60 bg-white/80 px-3 py-1 text-sm font-medium text-slate-700 dark:border-slate-600 dark:bg-slate-800 dark:text-slate-200"
                >
                  {name}
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
