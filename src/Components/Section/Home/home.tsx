"use client"

import { BiLogoPostgresql } from "react-icons/bi"
import { Typewriter } from "react-simple-typewriter"
import { FaGithub, FaLinkedinIn, FaWhatsapp, FaTelegramPlane } from "react-icons/fa"
import { Network, Zap, Puzzle, ArrowUpRight } from "lucide-react"

interface TechIcon {
  id: string
  name: string
  colorBg: string
  colorBorder: string
  colorText: string
  side: "left" | "right"
  svg: React.ReactNode
}

const techStackList: TechIcon[] = [
  {
    id: "javascript",
    name: "JavaScript",
    colorBg: "bg-yellow-50 hover:bg-yellow-100",
    colorBorder: "border-yellow-300",
    colorText: "text-yellow-600",
    side: "left",
    svg: (
      <div className="flex h-7 w-7 items-center justify-end rounded bg-yellow-400 pr-0.5 pb-0.5 text-xs font-extrabold text-slate-900">
        JS
      </div>
    ),
  },

  {
    id: "react",
    name: "React.js",
    colorBg: "bg-cyan-50 hover:bg-cyan-100",
    colorBorder: "border-cyan-300",
    colorText: "text-cyan-500",
    side: "left",
    svg: (
      <svg className="h-8 w-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <ellipse cx="12" cy="12" rx="10" ry="4.5" />
        <ellipse cx="12" cy="12" rx="10" ry="4.5" transform="rotate(60 12 12)" />
        <ellipse cx="12" cy="12" rx="10" ry="4.5" transform="rotate(120 12 12)" />
        <circle cx="12" cy="12" r="2" fill="currentColor" />
      </svg>
    ),
  },

  {
    id: "tailwind",
    name: "Tailwind CSS",
    colorBg: "bg-teal-50 hover:bg-teal-100",
    colorBorder: "border-teal-300",
    colorText: "text-teal-500",
    side: "left",
    svg: (
      <svg className="h-8 w-8" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12.001 4.8c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C13.666 10.618 15.027 12 18.001 12c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913.228-1.565.89-2.288 1.624C16.336 6.182 14.975 4.8 12.001 4.8zm-6 7.2c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C7.666 17.818 9.027 19.2 12.001 19.2c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913.228-1.565.89-2.288 1.624C10.336 13.382 8.975 12 6.001 12z" />
      </svg>
    ),
  },

  {
    id: "typescript",
    name: "TypeScript",
    colorBg: "bg-indigo-50 hover:bg-indigo-100",
    colorBorder: "border-indigo-300",
    colorText: "text-indigo-600",
    side: "left",
    svg: (
      <div className="flex h-7 w-7 items-center justify-center rounded bg-blue-600 p-1 text-xs font-bold tracking-tighter text-white">
        TS
      </div>
    ),
  },

  {
    id: "nextjs",
    name: "Next.js",
    colorBg: "bg-slate-100 hover:bg-slate-200",
    colorBorder: "border-slate-400",
    colorText: "text-slate-900",
    side: "right",
    svg: (
      <div className="flex h-8 w-8 items-center justify-center rounded-full bg-black text-sm font-bold tracking-tighter text-white">
        N
      </div>
    ),
  },

  {
    id: "nodejs",
    name: "Node.js",
    colorBg: "bg-green-50 hover:bg-green-100",
    colorBorder: "border-green-300",
    colorText: "text-green-600",
    side: "right",
    svg: (
      <div className="flex h-7 w-7 items-center justify-center rounded-lg border-2 border-green-600 text-xs font-bold text-green-700">
        JS
      </div>
    ),
  },

  {
    id: "postgresql",
    name: "PostgreSQL",
    colorBg: "bg-blue-50 hover:bg-blue-100",
    colorBorder: "border-blue-200",
    colorText: "text-[#336791]",
    side: "right",
    svg: <BiLogoPostgresql className="h-7 w-7 text-[#336791]" />,
  },

 {
    id: "mongodb",
    name: "MongoDB",
    colorBg: "bg-emerald-50 hover:bg-emerald-100",
    colorBorder: "border-emerald-300",
    colorText: "text-emerald-600",
    side: "right",
    svg: (
      <svg className="h-8 w-8" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 1.5C12 1.5 5.5 8.33 5.5 13.5C5.5 17.09 8.41 20 12 20C15.59 20 18.5 17.09 18.5 13.5C18.5 8.33 12 1.5 12 1.5ZM12 22.5C11.17 22.5 10.5 21.83 10.5 21H13.5C13.5 21.83 12.83 22.5 12 22.5Z" />
      </svg>
    ),
  },
]



export default function HeroSection() {

return(
<div className="relative flex w-full items-center justify-center overflow-hidden bg-slate-50 px-6 pt-28 pb-12 text-slate-900 transition-colors duration-500 dark:bg-slate-950 dark:text-slate-100 lg:px-16 lg:pb-13">

<div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:linear-gradient(to_bottom,white_60%,transparent_100%)]" />

<div className="pointer-events-none absolute left-1/2 top-1/3 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-purple-600/15 blur-[120px] dark:bg-purple-500/10" />

<div className="pointer-events-none absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-b from-transparent to-transparent dark:to-[#141C2B]" />

<div className="relative z-10 mx-auto grid w-full max-w-7xl items-center gap-12 lg:grid-cols-12">

<div className="text-center lg:text-left lg:col-span-7 space-y-6">

<div className="inline-flex items-center gap-2.5 rounded-md border border-indigo-300 bg-indigo-50 px-3.5 py-1.5 text-xs font-mono uppercase tracking-wider text-indigo-800 dark:border-indigo-500/30 dark:bg-indigo-950/40 dark:text-indigo-300">
  <span className="relative flex h-2 w-2">
    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
    <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
  </span>
 Full Stack Developer
</div>


<div>
 <p className="mb-1 font-mono text-base text-indigo-600 dark:text-indigo-400">
  Hi, I&apos;m
</p>
  <h1 className="text-4xl sm:text-6xl font-black tracking-tight leading-none text-slate-900 dark:text-white">
    Kawsar Ahmed
  </h1>
</div>

<h2 className="text-xl sm:text-2xl font-semibold tracking-wide text-indigo-600 dark:text-indigo-400 min-h-[32px]">
  <Typewriter
    words={[
        "Frontend Developer",
        "Backend Developer",
        "MERN Stack Developer",
        "AI-Integrated App Builder",
        "Full Stack Developer"
      ]}
    loop={0}
    cursor
    cursorStyle="_"
    typeSpeed={60}
    deleteSpeed={40}
    delaySpeed={1800}
  />
</h2>

<p className="mx-auto mb-8 max-w-xl text-sm font-semibold capitalize leading-relaxed text-slate-600 dark:text-slate-300 sm:text-base lg:mx-0">
  Crafting secure,high-performance
  web solutions with scalable architecture, elegant design, and complex problem-solving at heart.
</p>


<div className="flex flex-wrap items-center justify-center lg:justify-start gap-2.5">
  {[
    { label: "Scalable Architecture", Icon: Network },
    { label: "High Performance", Icon: Zap },
    { label: "Problem Solver", Icon: Puzzle },
  ].map(({ label, Icon }) => (
    <div
      key={label}
      className="group flex items-center cursor-pointer gap-2 rounded-md border border-slate-200 bg-slate-100/70 px-3 py-1.5 text-xs font-mono text-slate-600 transition-colors duration-200 hover:border-indigo-400 hover:text-indigo-600 dark:border-slate-800 dark:bg-slate-900/40 dark:text-slate-400 dark:hover:border-indigo-500/40 dark:hover:text-indigo-300"
    >
      <Icon className="h-3.5 w-3.5 text-indigo-500" />
      <span>{label}</span>
    </div>
  ))}
</div>



<div className="flex flex-wrap items-center justify-center lg:justify-start gap-3 pt-2">
  <a
    href="#projects"
    className="group relative inline-flex w-40 items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-purple-600 to-indigo-600 py-3 text-xs sm:text-sm font-semibold text-white shadow-lg shadow-purple-600/20 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-purple-600/35 hover:brightness-110"
  >
    <span>Explore Projects</span>
    <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
  </a>

  <a
    href="#contact"
    className="group inline-flex w-40 items-center justify-center gap-2 rounded-xl border border-slate-200/90 bg-white/80 py-3 text-xs font-semibold text-slate-800 backdrop-blur-md transition-all duration-300 hover:-translate-y-0.5 hover:border-purple-300 hover:bg-white hover:shadow-md dark:border-slate-800 dark:bg-slate-900/80 dark:text-slate-200 dark:hover:border-purple-500/50 dark:hover:bg-slate-900 dark:hover:shadow-lg dark:hover:shadow-purple-500/10 sm:text-sm"
  >
    <span>Contact Me</span>
    <span className="flex h-4 w-4 items-center justify-center rounded bg-purple-500/10 text-purple-600 dark:text-purple-400 text-[10px] transition-colors duration-300 group-hover:bg-purple-600 group-hover:text-white">
      ↗
    </span>
  </a>
</div>

<div className="pt-2 flex items-center justify-center lg:justify-start gap-3">
    {[
      { href: "https://github.com/kawsar9990", label: "GitHub", Icon: FaGithub },
      { href: "https://www.linkedin.com/in/kawsar-ahmed-2a466441b", label: "LinkedIn", Icon: FaLinkedinIn },
      { href: "https://t.me/Atitwed_Boys", label: "Telegram", Icon: FaTelegramPlane },
      { href: "https://wa.me/8801602084187", label: "WhatsApp", Icon: FaWhatsapp },
    ].map(({ href, label, Icon }) => (
      <a
        key={label}
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={label}
        className="rounded-lg border border-slate-200 bg-white p-2.5 text-slate-600 shadow-sm transition-all hover:border-purple-300 hover:text-purple-600 dark:border-slate-800 dark:bg-slate-900 dark:text-slate-400 dark:hover:border-purple-500/40 dark:hover:text-purple-400"
      >
        <Icon className="h-4 w-4" />
      </a>
    ))}
  </div>
</div>


<div className="lg:col-span-5 flex flex-col items-center gap-6">
   
<div className="w-full max-w-sm overflow-hidden rounded-xl border border-white/10 bg-slate-900/95 shadow-xl shadow-purple-500/15">
  <div className="flex items-center gap-2 border-b border-white/10 px-3.5 py-2">
    <span className="h-2.5 w-2.5 rounded-full bg-red-400" />
    <span className="h-2.5 w-2.5 rounded-full bg-yellow-400" />
    <span className="h-2.5 w-2.5 rounded-full bg-emerald-400" />
    <span className="ml-2 text-[11px] font-mono text-slate-400">kawsar.ts</span>
  </div>

  <pre className="overflow-x-auto p-4 font-mono text-xs leading-relaxed text-slate-300">
    <code>
      <span className="text-indigo-500">interface</span>{" "}
      <span className="text-yellow-300">Developer</span> &#123;{"\n"}
      {"  "}role: <span className="text-teal-400">string</span>;{"\n"}
      {"  "}stack: <span className="text-teal-400">string[]</span>;{"\n"}
      {"  "}available: <span className="text-teal-400">boolean</span>;{"\n"}
      &#125;{"\n\n"}
      <span className="text-indigo-300">const</span>{" "}
      <span className="text-indigo-400">kawsar</span>:{" "}
      <span className="text-yellow-300">Developer</span> = &#123;{"\n"}
      {"  "}role: <span className="text-amber-300">&quot;Full Stack Developer&quot;</span>,{"\n"}
      {"  "}stack: [<span className="text-amber-300">&quot;React&quot;</span>, <span className="text-amber-300">&quot;Node&quot;</span>, <span className="text-amber-300">&quot;PostgreSQL&quot;</span>],{"\n"}
      {"  "}available: <span className="text-indigo-400">true</span>,{"\n"}
      &#125;;
      <span className="inline-block h-3.5 w-1.5 ml-0.5 bg-purple-400 animate-pulse align-middle" />
    </code>
  </pre>
</div>

      
<div className="flex max-w-md flex-wrap items-center justify-center gap-2.5">
  {techStackList.map((tech, index) => (
    <div
      key={tech.id}
      style={{ animationDelay: `${index * 150}ms` }}
      className="group flex cursor-pointer items-center gap-2.5 rounded-xl border border-slate-200/80 bg-white/70 py-1.5 pl-2 pr-3.5 text-xs font-semibold text-slate-700 transition-all duration-300 hover:-translate-y-1 hover:border-purple-300 hover:bg-white hover:text-purple-900 hover:shadow-md hover:shadow-purple-500/10 dark:border-slate-800 dark:bg-slate-900/60 dark:text-slate-300 dark:hover:border-purple-500/50 dark:hover:bg-slate-900/90 dark:hover:text-white dark:hover:shadow-purple-500/10"
    >
      <span className={`flex h-7 w-7 items-center justify-center ${tech.colorText}`}>
        <span className="origin-center scale-75">{tech.svg}</span>
      </span>
      {tech.name}
    </div>
  ))}
</div>
       
          
</div>
</div>
</div>
  )
}