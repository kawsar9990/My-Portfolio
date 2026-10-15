"use client"

import { useMountedTheme } from "@/hook/useMountedTheme"
import { BiLogoPostgresql, BiLogoCss3 } from "react-icons/bi"
import { Typewriter } from "react-simple-typewriter"
import { FaGithub, FaLinkedinIn, FaWhatsapp, FaTelegramPlane } from "react-icons/fa"
import { Network, Zap, Puzzle } from "lucide-react"

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
    id: "css3",
    name: "CSS3",
    colorBg: "bg-blue-50 hover:bg-blue-100 dark:bg-blue-950/40 dark:hover:bg-blue-900/50",
    colorBorder: "border-blue-300 dark:border-blue-700",
    colorText: "text-[#1572B6] dark:text-blue-400",
    side: "left",
    svg: <BiLogoCss3 className="h-7 w-7 text-[#1572B6]" />,
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
    id: "express",
    name: "Express.js",
    colorBg: "bg-slate-50 hover:bg-slate-100",
    colorBorder: "border-slate-300",
    colorText: "text-slate-700",
    side: "right",
    svg: <span className="font-sans text-lg font-medium tracking-tight text-slate-800">ex</span>,
  },
  {
    id: "fastify",
    name: "Fastify",
    colorBg: "bg-amber-50 hover:bg-amber-100",
    colorBorder: "border-amber-300",
    colorText: "text-amber-700",
    side: "right",
    svg: (
      <div className="flex h-7 w-7 items-center justify-center rounded-md bg-amber-500 text-xs font-bold text-white">
        ⚡
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
  {
    id: "redis",
    name: "Redis",
    colorBg: "bg-red-50 hover:bg-red-100",
    colorBorder: "border-red-300",
    colorText: "text-red-600",
    side: "right",
    svg: (
      <div className="flex h-7 w-7 items-center justify-center rounded-md bg-red-600 text-xs font-bold text-white">
        RE
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
]

export default function HeroSection() {
const { isDarkMode } = useMountedTheme()

  return (
<div
  className={`relative flex w-full items-center justify-center overflow-hidden px-4 pt-24 pb-8 sm:px-8 sm:pt-28 sm:pb-10 lg:px-12 lg:pt-28 lg:pb-12 font-sans transition-colors duration-500 ${
    isDarkMode
      ? "bg-gradient-to-b from-slate-950 via-[#111827] to-[#141C2B] selection:bg-purple-900"
      : "bg-gradient-to-b from-[#F1ECFC] via-[#E9EFFE] to-slate-50 selection:bg-purple-200"
  }`}
>
      <style>{`
        @keyframes blob {
          0%, 100% { transform: translate(0, 0) scale(1); }
          33% { transform: translate(40px, -50px) scale(1.15); }
          66% { transform: translate(-30px, 30px) scale(0.9); }
        }
        .animate-blob { animation: blob 9s ease-in-out infinite; }
        .animation-delay-3000 { animation-delay: 3s; }
        @keyframes floatCard {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-12px); }
        }
        .animate-float-card { animation: floatCard 5s ease-in-out infinite; }
      `}</style>


      <div className="pointer-events-none absolute -left-24 top-10 h-72 w-72 animate-blob rounded-full bg-purple-400/30 blur-3xl" />
      <div className="animation-delay-3000 pointer-events-none absolute -right-20 bottom-10 h-80 w-80 animate-blob rounded-full bg-purple-500/25 blur-3xl" />

      <div className="relative z-10 mx-auto grid w-full max-w-7xl items-center gap-14 lg:grid-cols-2">
   
        <div className="text-center lg:text-left">
          <div
            className={`mb-6 inline-flex items-center gap-2 rounded-full border px-4 py-1.5 text-xs font-semibold shadow-sm backdrop-blur-sm sm:text-sm ${
              isDarkMode
                ? "border-purple-800 bg-purple-950/50 text-purple-300"
                : "border-purple-200 bg-purple-100/80 text-purple-700"
            }`}
          >
            <span className="relative flex h-2.5 w-2.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-purple-400 opacity-75" />
              <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-purple-600" />
            </span>
            Full Stack Developer
          </div>

          <p className={`mb-2 text-lg font-medium sm:text-xl ${isDarkMode ? "text-slate-400" : "text-slate-500"}`}>
            Hi, I&apos;m
          </p>

          <h1 className="mb-4 text-3xl font-extrabold leading-tight tracking-tight text-purple-600 drop-shadow-sm sm:text-6xl lg:text-5xl xl:text-7xl">
            Kawsar Ahmed
          </h1>

        
          <h2 className={`mb-5 h-8 text-sm font-bold sm:h-9 sm:text-2xl ${isDarkMode ? "text-slate-100" : "text-slate-800"}`}>
            <span className="text-purple-600">
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
                cursorStyle="|"
                typeSpeed={70}
                deleteSpeed={45}
                delaySpeed={1600}
              />
            </span>
          </h2>

          <p
            className={`mx-auto capitalize mb-8 max-w-xl text-sm leading-relaxed sm:text-base font-semibold lg:mx-0 ${
              isDarkMode ? "text-slate-300" : "text-slate-600"
            }`}
          >
            Crafting secure, {" "}
            <span className="font-bold text-purple-600">
               high-performance
            </span>{" "}
            web solutions with scalable architecture, elegant design, and complex problem-solving at heart.
          </p>

      
        <div className="mb-8 flex flex-wrap sm:flex-nowrap items-center justify-center lg:justify-start gap-2 max-w-[340px] xs:max-w-[400px] sm:max-w-none mx-auto lg:mx-0">
          {[
            { label: "Scalable Architecture", Icon: Network },
            { label: "High Performance", Icon: Zap },
            { label: "Problem Solver", Icon: Puzzle },
          ].map(({ label, Icon }) => (
            <div
              key={label}
              className={`group flex w-fit shrink-0 cursor-default items-center gap-1.5 rounded-full border px-2.5 py-1.5 text-[11px] font-semibold shadow-sm backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-purple-500/20 xs:px-3 xs:text-xs sm:gap-1.5 sm:px-2.5 sm:py-1.5 sm:text-[11px] md:gap-2 md:px-3.5 md:py-2 md:text-xs lg:gap-2.5 lg:px-4 lg:text-sm ${
                isDarkMode
                  ? "border-purple-800/70 bg-purple-950/50 text-purple-200"
                  : "border-purple-200/80 bg-white/70 text-purple-700"
              }`}
            >
              <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-purple-600 text-white shadow-md shadow-purple-500/40 transition-transform duration-300 group-hover:rotate-12 xs:h-6 xs:w-6 sm:h-5 sm:w-5 md:h-6 md:w-6 lg:h-7 lg:w-7">
                <Icon className="h-3 w-3 xs:h-3.5 xs:w-3.5 sm:h-3 sm:w-3 md:h-3.5 md:w-3.5 lg:h-3 lg:w-3 xl:h-4 xl:w-4" />
              </span>
              <span className="whitespace-nowrap lg:text-[10px] xl:text-[13px]">{label}</span>
            </div>
          ))}
        </div>
         
          <div className="mb-8 flex flex-col items-center justify-center gap-4 sm:flex-row lg:justify-start">
            <a
              href="#projects"
              className="flex w-60 items-center justify-center gap-2 rounded-xl bg-purple-600 px-8 py-3.5 text-sm font-bold text-white shadow-lg shadow-purple-500/30 transition-all duration-300 hover:-translate-y-0.5 hover:bg-purple-700 hover:shadow-purple-500/50 sm:w-auto sm:text-base"
            >
              <span>View My Project</span>
              <span>→</span>
            </a>

            <a
              href="#contact"
              className={`flex w-60 items-center justify-center gap-2 rounded-xl border-2 px-8 py-3.5 text-sm font-bold transition-all duration-300 hover:-translate-y-0.5 sm:w-auto sm:text-base ${
                isDarkMode
                  ? "border-purple-500 bg-slate-900 text-purple-400 hover:bg-purple-950/50"
                  : "border-purple-500 bg-white text-purple-600 hover:bg-purple-50"
              }`}
            >
              <span>Get In Touch</span>
              <span className="text-xs">↗</span>
            </a>
          </div>

         
          <div className="mx-auto flex max-w-md items-center justify-center gap-4 lg:mx-0 lg:justify-start">

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
                title={label}
                className={`flex h-11 w-11 items-center justify-center rounded-full border-2 text-lg transition-all duration-300 hover:-translate-y-1 hover:border-purple-600 hover:bg-purple-600 hover:text-white hover:shadow-lg hover:shadow-purple-500/40 ${
                  isDarkMode
                    ? "border-purple-800/70 bg-purple-950/40 text-purple-300"
                    : "border-purple-200 bg-white text-purple-600"
                }`}
              >
                <Icon />
              </a>
            ))}
          </div>
        </div>

       
        <div className="flex flex-col items-center gap-8">
          <div className="animate-float-card w-full max-w-md overflow-hidden rounded-2xl border border-white/10 bg-slate-900/95 shadow-2xl shadow-purple-500/20 backdrop-blur">
            <div className="flex items-center gap-2 border-b border-white/10 px-4 py-3">
              <span className="h-3 w-3 rounded-full bg-red-400" />
              <span className="h-3 w-3 rounded-full bg-yellow-400" />
              <span className="h-3 w-3 rounded-full bg-emerald-400" />
              <span className="ml-3 text-xs text-slate-400">kawsar.tsx</span>
            </div>

            <pre className="overflow-x-auto p-5 text-xs leading-relaxed text-slate-300 sm:text-sm">
              <code>
                <span className="text-purple-400">const</span>{" "}
                <span className="text-purple-300">kawsar</span> = {"{"}
                {"\n"}  role: <span className="text-amber-300">&quot;Full Stack Developer&quot;</span>,
                {"\n"}  stack: [
                <span className="text-amber-300">&quot;React&quot;</span>,{" "}
                <span className="text-amber-300">&quot;Node&quot;</span>,{" "}
                <span className="text-amber-300">&quot;PostgreSQL&quot;</span>],
                {"\n"}  focus: <span className="text-amber-300">&quot;MERN + AI&quot;</span>,
                {"\n"}  available: <span className="text-purple-400">true</span>,
                {"\n"}
                {"}"};
              </code>
            </pre>
          </div>

        
          <div className="flex max-w-md flex-wrap items-center justify-center gap-2.5">
            {techStackList.map((tech) => (
              <div
                key={tech.id}
                className={`flex items-center cursor-pointer gap-2 rounded-full border py-1.5 pl-2 pr-3.5 text-xs font-semibold shadow-sm backdrop-blur-sm transition-transform duration-300 hover:-translate-y-1 ${
                  isDarkMode
                    ? "border-purple-800/70 bg-purple-950/50 text-purple-300"
                    : "border-purple-200/80 bg-purple-100/60 text-purple-700"
                }`}
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