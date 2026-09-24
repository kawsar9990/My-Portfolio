import { Category, Skill, CategoryId } from '../types/Skill';
import { BiLogoPostgresql } from "react-icons/bi"

export const SKILL_CATEGORIES: Category[] = [
  { id: 'highlights', label: 'Highlights & Core' },
  { id: 'frontend', label: 'Frontend' },
  { id: 'backend', label: 'Backend' },
  { id: 'devops', label: 'DevOps & Cloud' }
];

export const TechIcons = {
JS: () => (
  <svg className="w-10 h-10 rounded" viewBox="0 0 128 128">
     <path fill="#F7DF1E" d="M0 0h128v128H0z"/>
     <path fill="#000" d="M67.3 103.9c2.3 3.8 5.4 6.7 11 6.7 4.5 0 7.4-2.2 7.4-5.3 0-3.7-2.9-5.1-7.8-7.3l-2.7-1.2c-7.8-3.3-13-7.5-13-16.3 0-8.8 6.8-15.5 17.3-15.5 7.6 0 12.8 2.6 16.5 9.1l-8.2 5.3c-1.8-3.1-3.9-4.4-8.1-4.4-3.6 0-5.8 1.8-5.8 4.2 0 3 1.9 4.2 6.6 6.3l2.7 1.2c9.2 3.9 14.2 8.1 14.2 16.8 0 9.7-7.6 16.1-18.9 16.1-10.4 0-16.7-5.3-20.2-11.7l9-4c.1 0 .5.7 1 1zm-36-2.2c2.1 3.5 4.7 5.9 8.8 5.9 4.2 0 6.8-1.7 6.8-8.2V65.8h11.2v34.3c0 12.5-7.3 18-17.7 18-9.4 0-15.3-5.1-18.4-11.3l9.3-5.1z"/>
   </svg>
),
TS: () => (
 <svg className="w-10 h-10 rounded" viewBox="0 0 128 128">
    <path fill="#3178C6" d="M0 0h128v128H0z"/>
    <path fill="#FFF" d="M72.2 103.9c2.3 3.8 5.4 6.7 11 6.7 4.5 0 7.4-2.2 7.4-5.3 0-3.7-2.9-5.1-7.8-7.3l-2.7-1.2c-7.8-3.3-13-7.5-13-16.3 0-8.8 6.8-15.5 17.3-15.5 7.6 0 12.8 2.6 16.5 9.1l-8.2 5.3c-1.8-3.1-3.9-4.4-8.1-4.4-3.6 0-5.8 1.8-5.8 4.2 0 3 1.9 4.2 6.6 6.3l2.7 1.2c9.2 3.9 14.2 8.1 14.2 16.8 0 9.7-7.6 16.1-18.9 16.1-10.4 0-16.7-5.3-20.2-11.7l9-4zm-43.8-38h32.7v9.5H50v42.2H38.7V75.4H28.4v-9.5z"/>
  </svg> 
),
React: () => (
    <svg className="w-10 h-10 text-[#61DAFB] animate-[spin_20s_linear_infinite]" viewBox="0 0 100 100" fill="currentColor">
        <circle cx="50" cy="50" r="10"/>
        <ellipse cx="50" cy="50" rx="42" ry="16" fill="none" stroke="currentColor" strokeWidth="7"/>
        <ellipse cx="50" cy="50" rx="42" ry="16" fill="none" stroke="currentColor" strokeWidth="7" transform="rotate(60 50 50)"/>
        <ellipse cx="50" cy="50" rx="42" ry="16" fill="none" stroke="currentColor" strokeWidth="7" transform="rotate(120 50 50)"/>
    </svg>
  ),
Next: () => (
    <svg className="w-10 h-10 text-black dark:text-white" viewBox="0 0 128 128" fill="currentColor">
        <path d="M64 0C28.7 0 0 28.7 0 64s28.7 64 64 64 64-28.7 64-64S99.3 0 64 0zm23.2 92.5L48.1 41.8v37.6H38V38.1h10.5l40 52.1V38.1h10.1v54.4h-11.4z"/>
    </svg>
),
Tailwind: () => (
  <svg className="w-10 h-10 text-[#38BDF8]" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12.001 4.8c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C13.666 10.618 15.027 12 18.001 12c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C16.336 6.182 14.975 4.8 12.001 4.8zm-6 7.2c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C7.666 17.818 9.027 19.2 12.001 19.2c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C10.336 13.382 8.975 12 6.001 12z"/>
  </svg>
),
Node: () => (
    <svg className="w-10 h-10 text-[#5FA04E]" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 1l10.4 6v12L12 23 1.6 19V7L12 1zm0 2.3L3.6 8v8L12 20.7 20.4 16V8L12 3.3zM12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10z"/>
      </svg>
 ),
Express: () => (
    <svg className="w-10 h-10 text-slate-800 dark:text-slate-200" viewBox="0 0 24 24" fill="currentColor">
        <path d="M24 18.25h-3.88l-3.23-5.2-3.24 5.2H9.77l5.12-8.08-4.85-7.42h3.87l2.95 4.79 2.96-4.79h3.88l-4.85 7.42L24 18.25zM0 18.25V5.75h8.73v3.13H3.64v1.75h4.63v3.08H3.64v1.41h5.09v3.13H0z"/>
      </svg>
  ),
MongoDB: () => (
    <svg className="w-10 h-10 text-[#13AA52]" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 0s-5.5 8.1-5.5 13.3c0 3.8 2.5 7.7 5.5 10.7 3-3 5.5-6.9 5.5-10.7C17.5 8.1 12 0 12 0zm0 21c-1.8-2.2-3.5-5.2-3.5-7.7 0-3.3 2.6-7.5 3.5-9.1.9 1.6 3.5 5.8 3.5 9.1 0 2.5-1.7 5.5-3.5 7.7z"/>
      </svg>
  ),
HTML: () => (
<svg className="w-10 h-10 text-orange-600" viewBox="0 0 24 24" fill="currentColor">
<path d="M3 2l1.8 20L12 24l7.2-2L21 2H3zm13.2 5H8l.2 2h7.8l-.6 7-3.4 1-3.4-1-.2-3h2.4l.1 1.2 1.1.3 1.1-.3.1-2.2H6L5.4 5h11z"/>
</svg>
),
CSS: () => (
<svg className="w-10 h-10 text-blue-500" viewBox="0 0 24 24" fill="currentColor">
<path d="M3 2l1.8 20L12 24l7.2-2L21 2H3zm13.5 4l-.3 2H9.1l.2 2h6.7l-.6 7-3.4 1-3.4-1-.2-3h2.3l.1 1.2 1.2.3 1.2-.3.1-2.2H7.1L6.5 6h10z"/>
</svg>
),
Netlify: () => (
  <svg
    className="w-10 h-10"
    viewBox="0 0 24 24"
    fill="none"
  >
    <rect x="4" y="4" width="4" height="4" fill="#00C7B7" />
    <rect x="16" y="4" width="4" height="4" fill="#00C7B7" />
    <rect x="4" y="16" width="4" height="4" fill="#00C7B7" />
    <rect x="16" y="16" width="4" height="4" fill="#00C7B7" />
    <path
      d="M8 8L16 16"
      stroke="#00C7B7"
      strokeWidth="2"
    />
    <path
      d="M16 8L8 16"
      stroke="#00C7B7"
      strokeWidth="2"
    />
  </svg>
),
Redux: () => (
<svg className="w-10 h-10 text-purple-500" viewBox="0 0 24 24" fill="currentColor">
<circle cx="12" cy="5" r="2"/>
<circle cx="6" cy="18" r="2"/>
<circle cx="18" cy="18" r="2"/>
<path d="M12 7c3.5 1 6 4 6 9M12 7c-3.5 1-6 4-6 9" stroke="currentColor" strokeWidth="2" fill="none"/>
</svg>
),
Supabase: () => (
  <svg
    className="w-10 h-10"
    viewBox="0 0 24 24"
    fill="none"
  >
    <path
      d="M14.2 3H8.4c-.4 0-.8.2-1 .5L3.8 19.2c-.3.8.2 1.8 1.1 1.8h4.5c.4 0 .8-.2 1-.6L20.2 4.8C20.8 4 20.2 3 19.2 3h-5z"
      fill="#3ECF8E"
    />
    <path
      d="M13.8 3h5.4c1 0 1.6 1 .9 1.8l-9.5 14.6V8.2c0-2.9 1.4-5.2 3.2-5.2z"
      fill="#249361"
    />
  </svg>
),
Jwt: () => (
  <svg
    className="w-10 h-10 text-amber-500"
    viewBox="0 0 24 24"
    fill="currentColor"
  >
    <circle cx="12" cy="4" r="2.5" />
    <circle cx="12" cy="20" r="2.5" />
    <circle cx="4" cy="12" r="2.5" />
    <circle cx="20" cy="12" r="2.5" />
    <path
      d="M12 6.5v11M6.5 12h11"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
    />
  </svg>
),
Docker: () => (
  <svg className="w-10 h-10" viewBox="0 0 128 128">
    <path
      fill="#2396ED"
      d="M124.3 54.3c-4.3-2.9-14.1-4-21.5-2.5-1-7.1-5.6-13.3-12.7-18l-3.5-2.1-2.3 3.4c-4.4 6.7-5.3 17.8-1.3 25.1-1.8 1-5.5 2.3-10.2 2.3H2.2c0 35.3 22.7 51.7 41.7 51.7 41.2 0 71.8-18.9 85.7-53.8 5.5.1 17.4.1 20.4-11.2 1.1-4.4.4-8.6-.7-11.7z"
    />
    <rect x="10" y="44" width="14" height="14" fill="#2396ED" />
    <rect x="26" y="44" width="14" height="14" fill="#2396ED" />
    <rect x="42" y="44" width="14" height="14" fill="#2396ED" />
    <rect x="58" y="44" width="14" height="14" fill="#2396ED" />
    <rect x="26" y="28" width="14" height="14" fill="#2396ED" />
    <rect x="42" y="28" width="14" height="14" fill="#2396ED" />
    <rect x="58" y="28" width="14" height="14" fill="#2396ED" />
    <rect x="42" y="12" width="14" height="14" fill="#2396ED" />
    <rect x="58" y="12" width="14" height="14" fill="#2396ED" />
  </svg>
),
SocketIO: () => (
  <svg
    className="w-10 h-10 text-zinc-900 dark:text-white"
    viewBox="0 0 24 24"
    fill="currentColor"
  >
    <circle cx="12" cy="12" r="9" fill="none" stroke="currentColor" strokeWidth="2" />
    <path
      d="M13 4L7 13h4l-1 7 7-10h-4l1-6z"
      fill="currentColor"
    />
  </svg>
),
Fastify: () => (
  <svg
    className="w-10 h-10 text-black dark:text-white"
    viewBox="0 0 24 24"
    fill="currentColor"
  >
    <path d="M13 2L5 14h5l-1 8 10-14h-6l1-6z" />
  </svg>
),
Linux: () => (
  <svg
    className="w-10 h-10 text-yellow-500"
    viewBox="0 0 24 24"
    fill="currentColor"
  >
    <rect x="3" y="4" width="18" height="16" rx="2" />
    <path
      d="M7 9l3 3-3 3"
      stroke="white"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
    />
    <path
      d="M13 15h4"
      stroke="white"
      strokeWidth="2"
      strokeLinecap="round"
    />
  </svg>
),
NextAuth: () => (
  <svg
    className="w-10 h-10 text-slate-700 dark:text-white"
    viewBox="0 0 24 24"
    fill="currentColor"
  >
    <path d="M12 2L4 5v6c0 5 3.4 9.4 8 11 4.6-1.6 8-6 8-11V5l-8-3z" />
    <path
      d="M9.5 12l1.5 1.5 3.5-3.5"
      stroke="white"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
    />
  </svg>
),
Cloudinary: () => (
  <svg
    className="w-10 h-10"
    viewBox="0 0 24 24"
    fill="none"
  >
    <path
      d="M7.5 18a4.5 4.5 0 010-9c.3 0 .6 0 .9.1A5.5 5.5 0 0119 11a3.5 3.5 0 010 7H7.5z"
      fill="#3448C5"
    />
    <circle cx="10" cy="11" r="2" fill="#00AEEF" />
  </svg>
),
Render: () => (
  <svg
    className="w-10 h-10 text-[#46E3B7]"
    viewBox="0 0 24 24"
    fill="currentColor"
  >
    <circle cx="8" cy="8" r="4" />
    <path d="M12 4h8v8c0 4.4-3.6 8-8 8h-4v-4h4a4 4 0 004-4V8h-4V4z" />
  </svg>
),
Shadcn: () => (
  <svg
    className="w-10 h-10 text-black dark:text-white"
    viewBox="0 0 24 24"
    fill="currentColor"
  >
    <path d="M18 3L6 21h4l12-18h-4z" />
    <path d="M6 3h4L2 15h4L14 3H6z" />
  </svg>
),
Bootstrap: () => (
  <svg
    className="w-10 h-10"
    viewBox="0 0 24 24"
    fill="currentColor"
  >
    <path
      fill="#7952B3"
      d="M4 3.5A2.5 2.5 0 0 1 6.5 1h11A2.5 2.5 0 0 1 20 3.5v17a2.5 2.5 0 0 1-2.5 2.5h-11A2.5 2.5 0 0 1 4 20.5v-17z"
    />
    <path
      fill="#fff"
      d="M9 7h4.2c2.2 0 3.8 1.1 3.8 3 0 1.3-.7 2.2-1.9 2.6 1.5.3 2.4 1.4 2.4 3 0 2.2-1.8 3.4-4.4 3.4H9V7zm3.8 4.6c1 0 1.7-.5 1.7-1.4s-.6-1.3-1.7-1.3h-1.3v2.7h1.3zm.3 5c1.3 0 2-.5 2-1.6s-.8-1.6-2-1.6h-1.6v3.2h1.6z"
    />
  </svg>
),
Git: () => (
  <svg
    className="w-10 h-10 text-orange-600"
    viewBox="0 0 24 24"
    fill="currentColor"
  >
    <path d="M23.56 10.93L13.07.44a1.5 1.5 0 0 0-2.12 0l-2.18 2.18 2.77 2.77a1.79 1.79 0 0 1 2.27 2.28l2.67 2.67a1.79 1.79 0 1 1-1.08 1.01l-2.49-2.49v6.54a1.79 1.79 0 1 1-1.47 0V9.81a1.79 1.79 0 0 1-.97-2.35L7.72 4.7.44 11.98a1.5 1.5 0 0 0 0 2.12l10.49 10.49a1.5 1.5 0 0 0 2.12 0l10.51-10.51a1.5 1.5 0 0 0 0-2.15z"/>
  </svg>
),
GitHub: () => (
  <svg
    className="w-10 h-10 text-black dark:text-white"
    viewBox="0 0 24 24"
    fill="currentColor"
  >
    <path d="M12 .5C5.65.5.5 5.65.5 12a11.5 11.5 0 008 10.94c.58.1.79-.25.79-.56v-2.17c-3.25.71-3.94-1.57-3.94-1.57-.53-1.35-1.3-1.71-1.3-1.71-1.06-.73.08-.72.08-.72 1.18.08 1.8 1.21 1.8 1.21 1.04 1.79 2.73 1.27 3.4.97.11-.76.41-1.28.74-1.57-2.59-.29-5.31-1.3-5.31-5.77 0-1.27.45-2.3 1.2-3.11-.12-.3-.52-1.5.11-3.12 0 0 .98-.31 3.2 1.19A11.1 11.1 0 0112 6.1c.98 0 1.97.13 2.9.38 2.22-1.5 3.19-1.19 3.19-1.19.64 1.62.24 2.82.12 3.12.75.81 1.2 1.84 1.2 3.11 0 4.48-2.73 5.48-5.33 5.77.42.37.8 1.09.8 2.2v3.26c0 .31.21.67.8.56A11.5 11.5 0 0023.5 12C23.5 5.65 18.35.5 12 .5z"/>
  </svg>
),

RestApi: () => (
  <svg
    className="w-10 h-10 text-blue-500"
    viewBox="0 0 24 24"
    fill="currentColor"
  >
    <path d="M7 3a2 2 0 100 4 2 2 0 000-4zm10 14a2 2 0 100 4 2 2 0 000-4zM7 17a2 2 0 100 4 2 2 0 000-4z" />
    <path
      d="M9 5h4a4 4 0 014 4v5"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
    />
    <path
      d="M9 19h6"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
    />
  </svg>
),
ContextAPI: () => (
  <svg
    className="w-10 h-10 text-blue-500"
    viewBox="0 0 24 24"
    fill="currentColor"
  >
    <circle cx="12" cy="12" r="2.5" />
    <circle cx="6" cy="7" r="2" />
    <circle cx="18" cy="7" r="2" />
    <circle cx="6" cy="17" r="2" />
    <circle cx="18" cy="17" r="2" />

    <path
      d="M7.5 8.5L10.5 11"
      stroke="currentColor"
      strokeWidth="1.8"
      fill="none"
    />
    <path
      d="M16.5 8.5L13.5 11"
      stroke="currentColor"
      strokeWidth="1.8"
      fill="none"
    />
    <path
      d="M7.5 15.5L10.5 13"
      stroke="currentColor"
      strokeWidth="1.8"
      fill="none"
    />
    <path
      d="M16.5 15.5L13.5 13"
      stroke="currentColor"
      strokeWidth="1.8"
      fill="none"
    />
  </svg>
),
Firebase: () => (
  <svg
    className="w-10 h-10"
    viewBox="0 0 24 24"
    fill="currentColor"
  >
    <path
      fill="#FFCA28"
      d="M5.8 18.8L7.3 2.5c.1-.6.6-.8 1-.3l4.1 7.7-6.6 8.9z"
    />
    <path
      fill="#FFA000"
      d="M18.2 18.8L16.7 6.2c-.1-.5-.5-.6-.8-.2L5.8 18.8l6.2 3.5 6.2-3.5z"
    />
    <path
      fill="#F57F17"
      d="M12 9.9L9.8 5.8c-.2-.4-.6-.4-.8 0L5.8 18.8 12 9.9z"
    />
  </svg>
),
Redis: () => (
  <svg className="w-10 h-10" viewBox="0 0 24 24">
    <path
      fill="#DC382D"
      d="M12 3L3 7.5 12 12l9-4.5L12 3z"
    />
    <path
      fill="#C6302B"
      d="M3 12l9 4.5 9-4.5v4.5L12 21 3 16.5V12z"
    />
    <circle cx="12" cy="12" r="1.5" fill="white" />
  </svg>
),
MUI: () => (
  <svg
    className="w-10 h-10"
    viewBox="0 0 36 32"
    fill="none"
  >
    <path
      d="M0 24.75V7.25L9 12.875V30.375L0 24.75Z"
      fill="#007FFF"
    />
    <path
      d="M9 30.375V12.875L18 18.5V36L9 30.375Z"
      fill="#007FFF"
    />
    <path
      d="M18 36V18.5L27 12.875V30.375L18 36Z"
      fill="#007FFF"
    />
    <path
      d="M27 30.375V12.875L36 7.25V24.75L27 30.375Z"
      fill="#007FFF"
    />
  </svg>
),
}


export const SKILLS_DATA: Record<CategoryId, Skill[]> = {
  highlights: [
    { id: 'js', name: 'JavaScript (ES6+)', customIcon: <TechIcons.JS />, lightBg: 'bg-amber-50 hover:bg-amber-100', darkBg: 'dark:bg-[#201D13] dark:hover:bg-[#29261B]' },
    { id: 'ts', name: 'TypeScript', customIcon: <TechIcons.TS />, lightBg: 'bg-blue-50 hover:bg-blue-100', darkBg: 'dark:bg-[#121B2A] dark:hover:bg-[#182436]' },
    { id: 'react', name: 'React.js', customIcon: <TechIcons.React />, lightBg: 'bg-cyan-50 hover:bg-cyan-100', darkBg: 'dark:bg-[#0F2229] dark:hover:bg-[#142C35]' },
    { id: 'next', name: 'Next.js', customIcon: <TechIcons.Next />, lightBg: 'bg-slate-100 hover:bg-slate-200', darkBg: 'dark:bg-[#1C1F26] dark:hover:bg-[#252932]' },
    { id: 'node', name: 'Node.js', customIcon: <TechIcons.Node />, lightBg: 'bg-emerald-50 hover:bg-emerald-100', darkBg: 'dark:bg-[#12221A] dark:hover:bg-[#192E23]' },
  {
  id: 'tailwind',
  name: 'Tailwind CSS',
  customIcon: <TechIcons.Tailwind />,
  lightBg: 'bg-cyan-50 hover:bg-cyan-100',
  darkBg: 'dark:bg-[#0F2229] dark:hover:bg-[#14303D]'
  },
    { id: 'express', name: 'Express.js', customIcon: <TechIcons.Express />, lightBg: 'bg-gray-100 hover:bg-gray-200', darkBg: 'dark:bg-[#1E2028] dark:hover:bg-[#272A35]' },
    { id: 'mongo', name: 'MongoDB', customIcon: <TechIcons.MongoDB />, lightBg: 'bg-teal-50 hover:bg-teal-100', darkBg: 'dark:bg-[#0E241B] dark:hover:bg-[#143125]' },
    { id: 'pg', name: 'PostgreSQL', customIcon: <BiLogoPostgresql className="h-7 w-7 text-[#336791]" />, lightBg: 'bg-indigo-50 hover:bg-indigo-100', darkBg: 'dark:bg-[#131B2E] dark:hover:bg-[#1A243D]' },
{
  id: 'mui',
  name: 'Material UI',
  customIcon: <TechIcons.MUI />,
  lightBg: 'bg-blue-50 hover:bg-blue-100',
  darkBg: 'dark:bg-[#121B2A] dark:hover:bg-[#182436]'
},
  ],
  frontend: [
    { id: 'html', name: 'HTML5', customIcon: <TechIcons.HTML />, lightBg: 'bg-orange-50 hover:bg-orange-100', darkBg: 'dark:bg-[#2B1B17] dark:hover:bg-[#36231E]' },
    { id: 'css', name: 'CSS3', customIcon: <TechIcons.CSS />, lightBg: 'bg-indigo-50 hover:bg-indigo-100', darkBg: 'dark:bg-[#161C2C] dark:hover:bg-[#1E263B]' },
    { id: 'tailwind', name: 'Tailwind CSS', customIcon: <TechIcons.Tailwind />, lightBg: 'bg-teal-50 hover:bg-teal-100', darkBg: 'dark:bg-[#0E242B] dark:hover:bg-[#143039]' },
    {
  id: 'mui',
  name: 'Material UI',
  customIcon: <TechIcons.MUI />,
  lightBg: 'bg-blue-50 hover:bg-blue-100',
  darkBg: 'dark:bg-[#121B2A] dark:hover:bg-[#182436]'
  },
  {
  id: 'bootstrap',
  name: 'Bootstrap 5',
  customIcon: <TechIcons.Bootstrap />,
  lightBg: 'bg-violet-50 hover:bg-violet-100',
  darkBg: 'dark:bg-[#20162D] dark:hover:bg-[#2A1D3A]'
},
{
  id: 'shadcn',
  name: 'Shadcn/UI',
  customIcon: <TechIcons.Shadcn />,
  lightBg: 'bg-slate-50 hover:bg-slate-100',
  darkBg: 'dark:bg-[#1E2028] dark:hover:bg-[#282B36]'
},
    { id: 'react', name: 'React.js', customIcon: <TechIcons.React />, lightBg: 'bg-cyan-50 hover:bg-cyan-100', darkBg: 'dark:bg-[#0F2229] dark:hover:bg-[#142C35]' },
    { id: 'next', name: 'Next.js', customIcon: <TechIcons.Next />, lightBg: 'bg-slate-100 hover:bg-slate-200', darkBg: 'dark:bg-[#1C1F26] dark:hover:bg-[#252932]' },
    { id: 'redux', name: 'Redux Toolkit', customIcon: <TechIcons.Redux />, lightBg: 'bg-purple-50 hover:bg-purple-100', darkBg: 'dark:bg-[#1E162B] dark:hover:bg-[#291E3B]' },
    {
  id: 'context-api',
  name: 'Context API',
  customIcon: <TechIcons.ContextAPI />,
  lightBg: 'bg-blue-50 hover:bg-blue-100',
  darkBg: 'dark:bg-[#121E2F] dark:hover:bg-[#192A42]'
},
  ],
  backend: [
    { id: 'node', name: 'Node.js', customIcon: <TechIcons.Node />, lightBg: 'bg-emerald-50 hover:bg-emerald-100', darkBg: 'dark:bg-[#12221A] dark:hover:bg-[#192E23]' },
    { id: 'express', name: 'Express.js', customIcon: <TechIcons.Express />, lightBg: 'bg-gray-100 hover:bg-gray-200', darkBg: 'dark:bg-[#1E2028] dark:hover:bg-[#272A35]' },
{
  id: 'rest',
  name: 'REST API',
  customIcon: <TechIcons.RestApi />,
  lightBg: 'bg-blue-50 hover:bg-blue-100',
  darkBg: 'dark:bg-[#121E2F] dark:hover:bg-[#192A42]'
},  
    { id: 'mongo', name: 'MongoDB', customIcon: <TechIcons.MongoDB />, lightBg: 'bg-teal-50 hover:bg-teal-100', darkBg: 'dark:bg-[#0E241B] dark:hover:bg-[#143125]' },
    { id: 'pg', name: 'PostgreSQL', customIcon: <BiLogoPostgresql className="h-7 w-7 text-[#336791]" />, lightBg: 'bg-indigo-50 hover:bg-indigo-100', darkBg: 'dark:bg-[#131B2E] dark:hover:bg-[#1A243D]' },
{
  id: 'redis',
  name: 'Redis',
  customIcon: <TechIcons.Redis />,
  lightBg: 'bg-red-50 hover:bg-red-100',
  darkBg: 'dark:bg-[#291416] dark:hover:bg-[#361A1D]'
},  
{
  id: 'socketio',
  name: 'Socket.IO',
  customIcon: <TechIcons.SocketIO />,
  lightBg: 'bg-slate-100 hover:bg-slate-200',
  darkBg: 'dark:bg-[#1E2028] dark:hover:bg-[#282B36]'
},
{
  id: 'jwt',
  name: 'JWT Authentication',
  customIcon: <TechIcons.Jwt />,
  lightBg: 'bg-yellow-50 hover:bg-yellow-100',
  darkBg: 'dark:bg-[#2B2512] dark:hover:bg-[#383019]'
},
{
  id: 'fastify',
  name: 'Fastify',
  customIcon: <TechIcons.Fastify />,
  lightBg: 'bg-slate-100 hover:bg-slate-200',
  darkBg: 'dark:bg-[#1E2028] dark:hover:bg-[#282B36]'
},
{
  id: 'nextauth',
  name: 'NextAuth.js',
  customIcon: <TechIcons.NextAuth />,
  lightBg: 'bg-slate-50 hover:bg-slate-100',
  darkBg: 'dark:bg-[#1E2028] dark:hover:bg-[#282B36]'
},
],
  devops: [
  {
  id: 'docker',
  name: 'Docker',
  customIcon: <TechIcons.Docker />,
  lightBg: 'bg-sky-50 hover:bg-sky-100',
  darkBg: 'dark:bg-[#12212E] dark:hover:bg-[#182B3C]'
},
{
  id: 'git',
  name: 'Git',
  customIcon: <TechIcons.Git />,
  lightBg: 'bg-orange-50 hover:bg-orange-100',
  darkBg: 'dark:bg-[#291B16] dark:hover:bg-[#36241D]'
},
{
  id: 'github',
  name: 'GitHub',
  customIcon: <TechIcons.GitHub />,
  lightBg: 'bg-slate-100 hover:bg-slate-200',
  darkBg: 'dark:bg-[#1E2028] dark:hover:bg-[#282B36]'
},
{
  id: 'render',
  name: 'Render',
  customIcon: <TechIcons.Render />,
  lightBg: 'bg-emerald-50 hover:bg-emerald-100',
  darkBg: 'dark:bg-[#11241C] dark:hover:bg-[#173026]'
},
{
  id: 'cloudinary',
  name: 'Cloudinary',
  customIcon: <TechIcons.Cloudinary />,
  lightBg: 'bg-blue-50 hover:bg-blue-100',
  darkBg: 'dark:bg-[#131B2E] dark:hover:bg-[#1A243D]'
},
{
  id: 'linux',
  name: 'Linux',
  customIcon: <TechIcons.Linux />,
  lightBg: 'bg-yellow-50 hover:bg-yellow-100',
  darkBg: 'dark:bg-[#242114] dark:hover:bg-[#302C1B]'
},
{ id: 'vercel', name: 'Vercel', customIcon: <div className="w-10 h-10 text-black dark:text-white text-2xl flex items-center justify-center">▲</div>, lightBg: 'bg-slate-100 hover:bg-slate-200', darkBg: 'dark:bg-[#1E2028] dark:hover:bg-[#282B36]' },
{
  id: 'netlify',
  name: 'Netlify',
  customIcon: <TechIcons.Netlify />,
  lightBg: 'bg-teal-50 hover:bg-teal-100',
  darkBg: 'dark:bg-[#0F2426] dark:hover:bg-[#143033]'
},
{
  id: 'firebase',
  name: 'Firebase',
  customIcon: <TechIcons.Firebase />,
  lightBg: 'bg-amber-50 hover:bg-amber-100',
  darkBg: 'dark:bg-[#241B12] dark:hover:bg-[#30241A]'
},
{
  id: 'supabase',
  name: 'Supabase',
  customIcon: <TechIcons.Supabase />,
  lightBg: 'bg-emerald-50 hover:bg-emerald-100',
  darkBg: 'dark:bg-[#10231A] dark:hover:bg-[#173026]'
}
]
};