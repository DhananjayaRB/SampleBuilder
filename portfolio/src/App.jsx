/**
 * Poornima G — Personal portfolio (React + Vite + Tailwind + Framer Motion).
 *
 * Optional backend for contact form / CMS:
 * - Node.js + Express: serve static build + POST /api/contact
 * - Laravel API: Sanctum/CORS + Mail for inquiries
 */

import { Navbar } from './components/Navbar.jsx'
import { Hero } from './components/Hero.jsx'
import { About } from './components/About.jsx'
import { Skills } from './components/Skills.jsx'
import { Experience } from './components/Experience.jsx'
import { Projects } from './components/Projects.jsx'
import { CareerBreak } from './components/CareerBreak.jsx'
import { WhyHireMe } from './components/WhyHireMe.jsx'
import { Contact } from './components/Contact.jsx'
import { Footer } from './components/Footer.jsx'

export default function App() {
  return (
    <div className="relative min-h-screen">
      <div
        className="pointer-events-none fixed inset-0 -z-10 bg-slate-50 bg-mesh-light dark:bg-mesh-dark"
        aria-hidden
      />
      <div
        className="pointer-events-none fixed inset-0 -z-10 bg-grid-fade bg-grid bg-[length:56px_56px] opacity-[0.55] dark:opacity-[0.22]"
        aria-hidden
      />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <CareerBreak />
        <WhyHireMe />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
