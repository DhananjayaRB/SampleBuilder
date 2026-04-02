/** Sample portfolio content — replace contact placeholders with real values when publishing. */

export const profile = {
  name: 'Poornima G',
  title: 'Software Developer | QA Learner | Career Restart Candidate',
  headline: 'Restarting Stronger — Building Reliable Software with Experience & Resilience',
  location: 'Bangalore, India',
  address: 'Bangalore',
  email: 'poorni8393g@gmail.com',
  /** Display and tel: link (+91 for India) */
  phone: '+91 89705 79244',
  phoneTel: '+918970579244',
  linkedin: 'https://www.linkedin.com/in/poornima-g-placeholder',
  /** Served from /public/profile.png */
  photo: '/profile.png',
  /** Opens in a new tab (e.g. Google Drive viewer) */
  resumeUrl: 'https://drive.google.com/file/d/1ABUIHvMyDLakSxHTUgmN8L0E9FojhWM0/view',
}

export const aboutParagraphs = [
  'I am a software developer with around three years of professional experience building and maintaining business applications using Laravel, PHP, MySQL, and the classic web stack — HTML, CSS, JavaScript, jQuery, and AJAX. I enjoy debugging, refining workflows, and shipping features that teams actually rely on every day.',
  'After 2021, I took a deliberate pause: I prepared for UPSC, which deepened my discipline, focus, and ability to absorb large bodies of information under pressure. Later, I embraced motherhood — a chapter that strengthened my sense of responsibility, patience, and balancing competing priorities without losing sight of goals.',
  'Today I am actively restarting my career with clarity and momentum: I am strengthening my foundation in software testing and QA while sharpening my skills in modern web technologies. I bring proven delivery experience, a learner’s mindset, and the resilience of someone who has already navigated major life transitions — and chosen to come back stronger.',
]

export const skills = {
  technical: [
    'PHP',
    'Laravel',
    'MySQL',
    'HTML',
    'CSS',
    'JavaScript',
    'jQuery',
    'AJAX',
  ],
  learning: [
    'Software Testing',
    'QA Concepts',
    'Test Case Writing',
    'Manual Testing',
  ],
  soft: ['Communication', 'Leadership', 'Adaptability', 'Problem Solving'],
}

export const experience = [
  {
    id: 'resolve',
    company: 'Resolve Biz Apps',
    role: 'Software Engineer',
    period: '—',
    summary:
      'Built and enhanced internal business applications with Laravel and MySQL; collaborated on requirements, implementation, and ongoing maintenance.',
    responsibilities: [
      'Developed and maintained modules for savings proof, expense, and related financial workflows.',
      'Integrated front-end interfaces with AJAX and jQuery for responsive user interactions.',
      'Wrote and optimized SQL for reporting and transactional integrity.',
      'Partnered with stakeholders to clarify rules and edge cases before release.',
    ],
    achievements: [
      'Delivered stable CRUD and workflow features used daily by operations teams.',
      'Reduced recurring bugs through structured debugging and clearer validation logic.',
    ],
    tech: ['Laravel', 'PHP', 'MySQL', 'HTML', 'CSS', 'JavaScript', 'jQuery', 'AJAX'],
  },
  {
    id: 'rsp',
    company: 'RSP Innov',
    role: 'Software Developer',
    period: '—',
    summary:
      'Contributed to multiple business systems covering leave, health planning, and petty cash — full stack lean with JavaScript-heavy UIs.',
    responsibilities: [
      'Implemented leave management and health planner features end-to-end.',
      'Maintained petty cash and expense-related screens and APIs.',
      'Improved UX consistency across modules with shared components and styles.',
    ],
    achievements: [
      'Shipped reliable modules that supported HR and finance processes.',
      'Improved maintainability by aligning patterns across Laravel codebases.',
    ],
    tech: ['Laravel', 'PHP', 'MySQL', 'HTML', 'CSS', 'JavaScript', 'jQuery', 'AJAX'],
  },
]

export const projectNames = [
  'Savings Proof',
  'Expense Management',
  'Petty Cash',
  'Leave Management',
  'Health Planner',
]

/**
 * Demo / mock projects for portfolio display.
 * Swap GitHub and live URLs when repositories are public.
 */
export const projects = [
  {
    id: 'laravel-crud',
    title: 'Laravel CRUD App',
    description:
      'A demo-style business entity manager with Laravel validation, Eloquent relationships, and Blade or API-ready patterns — showcases structured CRUD and MySQL design.',
    stack: ['Laravel', 'PHP', 'MySQL', 'HTML', 'CSS', 'JavaScript'],
    github: 'https://github.com/yourusername/laravel-crud-demo',
    live: 'https://your-demo.vercel.app',
  },
  {
    id: 'testing-demo',
    title: 'Testing Demo — Test Cases UI',
    description:
      'Front-end exploration of test case authoring: suites, steps, expected results, and status — aligned with manual QA practice and future automation hooks.',
    stack: ['React', 'Tailwind CSS', 'QA concepts'],
    github: 'https://github.com/yourusername/test-cases-ui',
    live: 'https://your-testing-demo.netlify.app',
  },
  {
    id: 'bug-tracker',
    title: 'Bug Tracking Mini Tool',
    description:
      'Lightweight issue tracker mock: severity, reproduction steps, and assignee — illustrates how I think about reproducibility and triage.',
    stack: ['JavaScript', 'HTML', 'CSS', 'Local storage / mock API'],
    github: 'https://github.com/yourusername/mini-bug-tracker',
    live: 'https://your-bugs-demo.pages.dev',
  },
]

export const careerBreak = {
  title: 'Career Break — A Phase of Growth',
  pillars: [
    {
      heading: 'UPSC preparation',
      text: 'Rigorous study sharpened my consistency, analytical reading, and performance under long horizons — skills that map directly to focused delivery in tech.',
    },
    {
      heading: 'Motherhood',
      text: 'Leading at home strengthened prioritization, empathy, and calm execution when plans change — the same composure I bring to deadlines and production issues.',
    },
    {
      heading: 'Return to tech',
      text: 'I am deliberately upskilling in QA and modern web stacks so my experience meets today’s bar. I am not starting from zero — I am upgrading a strong base.',
    },
  ],
}

export const whyHireMe = [
  {
    title: 'Proven delivery + fresh curiosity',
    body: 'Years shipping Laravel business apps, now pairing that with structured learning in testing and contemporary front-end patterns.',
  },
  {
    title: 'Comeback drive',
    body: 'I chose to return with intention. That focus shows up as ownership, follow-through, and respect for team time.',
  },
  {
    title: 'Fast, accountable learner',
    body: 'I debug methodically, ask sharp questions, and document what I learn so the next person benefits too.',
  },
  {
    title: 'Reliable partner',
    body: 'Communication and leadership are not buzzwords here — they are how I align with stakeholders and keep delivery predictable.',
  },
]
