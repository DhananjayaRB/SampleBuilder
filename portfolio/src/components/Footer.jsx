import { profile } from '../data/content.js'

export function Footer() {
  return (
    <footer className="border-t border-slate-200/80 bg-white/60 py-12 backdrop-blur-md dark:border-slate-800 dark:bg-slate-950/60">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 px-4 sm:flex-row sm:px-6 lg:px-8">
        <div className="text-center sm:text-left">
          <p className="font-display text-sm font-bold text-slate-900 dark:text-white">{profile.name}</p>
          <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
            © {new Date().getFullYear()} — Career restart portfolio
          </p>
        </div>
        <p className="text-sm font-medium text-slate-600 dark:text-slate-300">{profile.location}</p>
      </div>
    </footer>
  )
}
