import { useState } from 'react'
import { motion } from 'framer-motion'
import { SectionHeading } from './SectionHeading.jsx'
import { profile } from '../data/content.js'

export function Contact() {
  const [status, setStatus] = useState('idle')

  function handleSubmit(e) {
    e.preventDefault()
    setStatus('sent')
    /*
     * Backend options (connect one when you're ready):
     * - Node.js + Express: POST /api/contact with nodemailer or a queue
     * - Laravel API: POST /api/contact using Mailable + validated FormRequest
     */
  }

  return (
    <section
      id="contact"
      className="scroll-mt-28 border-t border-slate-200/70 py-20 dark:border-slate-800/80 sm:scroll-mt-32"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Contact"
          title="Let’s talk about your next role"
          subtitle="Reach out for Laravel, QA, or full-stack junior conversations — I respond promptly."
        />
        <div className="mx-auto grid max-w-4xl gap-10 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="rounded-[1.5rem] border border-slate-200/80 bg-white/85 p-7 shadow-soft backdrop-blur-xl dark:border-slate-700/80 dark:bg-slate-900/75">
              <h3 className="font-display text-lg font-bold text-slate-900 dark:text-white">Direct</h3>
              <ul className="mt-4 space-y-3 text-slate-600 dark:text-slate-300">
                <li>
                  <span className="text-sm font-medium text-slate-500 dark:text-slate-400">Email</span>
                  <br />
                  <a href={`mailto:${profile.email}`} className="text-brand-600 hover:underline dark:text-brand-400">
                    {profile.email}
                  </a>
                </li>
                <li>
                  <span className="text-sm font-medium text-slate-500 dark:text-slate-400">Phone</span>
                  <br />
                  <a
                    href={`tel:${profile.phoneTel || profile.phone.replace(/\s/g, '')}`}
                    className="hover:underline"
                  >
                    {profile.phone}
                  </a>
                </li>
                <li>
                  <span className="text-sm font-medium text-slate-500 dark:text-slate-400">Location</span>
                  <br />
                  <span>{profile.address}</span>
                </li>
                <li>
                  <span className="text-sm font-medium text-slate-500 dark:text-slate-400">Résumé</span>
                  <br />
                  <a
                    href={profile.resumeUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-brand-600 hover:underline dark:text-brand-400"
                  >
                    Open PDF (Google Drive)
                  </a>
                </li>
                <li>
                  <span className="text-sm font-medium text-slate-500 dark:text-slate-400">LinkedIn</span>
                  <br />
                  <a
                    href={profile.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-brand-600 hover:underline dark:text-brand-400"
                  >
                    Profile (update URL in content.js)
                  </a>
                </li>
              </ul>
            </div>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, x: 16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            onSubmit={handleSubmit}
            className="rounded-[1.5rem] border border-slate-200/80 bg-white/85 p-7 shadow-soft backdrop-blur-xl dark:border-slate-700/80 dark:bg-slate-900/75"
          >
            <h3 className="font-display text-lg font-bold text-slate-900 dark:text-white">Send a message</h3>
            <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
              This form is front-end only for now — wire it to Express or Laravel when you deploy.
            </p>
            <label className="mt-4 block text-sm font-medium text-slate-700 dark:text-slate-300">
              Name
              <input
                required
                name="name"
                className="mt-1.5 w-full rounded-xl border border-slate-200/90 bg-white px-4 py-3 text-slate-900 outline-none transition focus:border-brand-400 focus:ring-2 focus:ring-brand-500/25 dark:border-slate-600 dark:bg-slate-800/80 dark:text-white"
              />
            </label>
            <label className="mt-4 block text-sm font-medium text-slate-700 dark:text-slate-300">
              Email
              <input
                required
                type="email"
                name="email"
                className="mt-1.5 w-full rounded-xl border border-slate-200/90 bg-white px-4 py-3 text-slate-900 outline-none transition focus:border-brand-400 focus:ring-2 focus:ring-brand-500/25 dark:border-slate-600 dark:bg-slate-800/80 dark:text-white"
              />
            </label>
            <label className="mt-4 block text-sm font-medium text-slate-700 dark:text-slate-300">
              Message
              <textarea
                required
                name="message"
                rows={4}
                className="mt-1.5 w-full resize-y rounded-xl border border-slate-200/90 bg-white px-4 py-3 text-slate-900 outline-none transition focus:border-brand-400 focus:ring-2 focus:ring-brand-500/25 dark:border-slate-600 dark:bg-slate-800/80 dark:text-white"
              />
            </label>
            <motion.button
              type="submit"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="mt-6 w-full rounded-xl bg-gradient-to-r from-brand-600 to-indigo-600 py-3.5 text-sm font-semibold text-white shadow-glow hover:brightness-110"
            >
              Send (demo)
            </motion.button>
            {status === 'sent' && (
              <p className="mt-4 text-center text-sm font-medium text-teal-600 dark:text-teal-400" role="status">
                Thanks — in production this would email me or hit your API. For now, use the email link above.
              </p>
            )}
          </motion.form>
        </div>
      </div>
    </section>
  )
}
