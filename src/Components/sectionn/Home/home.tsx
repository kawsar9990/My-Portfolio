
"use client"

import { useMountedTheme } from "@/hook/useMountedTheme"
import { useState } from "react"
import { BiLogoPostgresql, BiLogoCss3 } from "react-icons/bi"

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
    colorBg:
      "bg-blue-50 hover:bg-blue-100 dark:bg-blue-950/40 dark:hover:bg-blue-900/50",
    colorBorder: "border-blue-300 dark:border-blue-700",
    colorText: "text-[#1572B6] dark:text-blue-400",
    side: "left",
    svg: (
      <BiLogoCss3 className="h-7 w-7 text-[#1572B6]" />
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
      <svg
        className="h-8 w-8"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      >
        <ellipse cx="12" cy="12" rx="10" ry="4.5" />
        <ellipse
          cx="12"
          cy="12"
          rx="10"
          ry="4.5"
          transform="rotate(60 12 12)"
        />
        <ellipse
          cx="12"
          cy="12"
          rx="10"
          ry="4.5"
          transform="rotate(120 12 12)"
        />
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
      <svg
        className="h-8 w-8"
        viewBox="0 0 24 24"
        fill="currentColor"
      >
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
    svg: (
      <span className="font-sans text-lg font-medium tracking-tight text-slate-800">
        ex
      </span>
    ),
  },

  {
    id: "postgresql",
    name: "PostgreSQL",
    colorBg: "bg-blue-50 hover:bg-blue-100",
    colorBorder: "border-blue-200",
    colorText: "text-[#336791]",
    side: "right",
    svg: (
      <BiLogoPostgresql className="h-7 w-7 text-[#336791]" />
    ),
  },

  {
    id: "mongodb",
    name: "MongoDB",
    colorBg: "bg-emerald-50 hover:bg-emerald-100",
    colorBorder: "border-emerald-300",
    colorText: "text-emerald-600",
    side: "right",
    svg: (
      <svg
        className="h-8 w-8"
        viewBox="0 0 24 24"
        fill="currentColor"
      >
        <path d="M12 1.5C12 1.5 5.5 8.33 5.5 13.5C5.5 17.09 8.41 20 12 20C15.59 20 18.5 17.09 18.5 13.5C18.5 8.33 12 1.5 12 1.5ZM12 22.5C11.17 22.5 10.5 21.83 10.5 21H13.5C13.5 21.83 12.83 22.5 12 22.5Z" />
      </svg>
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
  const [hoveredTech, setHoveredTech] = useState<string | null>(null)
  const { isDarkMode } = useMountedTheme()
  
  const leftIcons = techStackList.filter(
    (item) => item.side === "left"
  )

  const rightIcons = techStackList.filter(
    (item) => item.side === "right"
  )

  return (
    <div
      className={`relative flex lg:h-[720px] xl:min-h-screen w-full flex-col items-center justify-center overflow-hidden px-4 pt-10 pb-5 font-sans transition-colors duration-500 xl:pt-20 ${
        isDarkMode
          ? "bg-gradient-to-b from-slate-950 via-[#111827] to-[#141C2B] selection:bg-purple-900"
          : "bg-gradient-to-b from-slate-50 via-[#E9EFFE] to-white selection:bg-purple-200"
      }`}
    >
   
      <style>{`
        @keyframes floatGroup {
          0%, 100% {
            transform: translateY(-50%) translateY(0px);
          }

          50% {
            transform: translateY(-50%) translateY(-16px);
          }
        }

        .animate-float-group {
          animation: floatGroup 4.5s ease-in-out infinite;
        }
      `}</style>

     
      <div className="absolute left-4 top-1/2 z-20 hidden flex-col gap-4 animate-float-group md:flex lg:left-8 lg:gap-5 xl:left-12">
        {leftIcons.map((tech) => (
          <div key={tech.id} className="group relative">

            {hoveredTech === tech.id && (
              <div className="pointer-events-none absolute left-full top-1/2 z-30 ml-3 flex -translate-y-1/2 items-center">
                <div
                  className={`-mr-1.5 h-2.5 w-2.5 rotate-45 shadow-sm ${
                    isDarkMode ? "bg-white" : "bg-slate-900"
                  }`}
                />

                <div
                  className={`whitespace-nowrap rounded-lg px-3 py-1.5 text-xs font-semibold shadow-xl ${
                    isDarkMode
                      ? "bg-white text-slate-900"
                      : "bg-slate-900 text-white"
                  }`}
                >
                  {tech.name}
                </div>
              </div>
            )}

            <button
              onMouseEnter={() => setHoveredTech(tech.id)}
              onMouseLeave={() => setHoveredTech(null)}
              className={`flex h-16 w-16 cursor-pointer items-center justify-center rounded-2xl border-2 ${tech.colorBorder} ${tech.colorBg} ${tech.colorText} shadow-md transition-all duration-300 hover:scale-110 hover:shadow-lg focus:outline-none`}
            >
              {tech.svg}
            </button>
          </div>
        ))}
      </div>


      <div className="absolute right-4 top-1/2 z-20 hidden flex-col gap-4 animate-float-group md:flex lg:right-8 lg:gap-5 xl:right-12">
        {rightIcons.map((tech) => (
          <div key={tech.id} className="group relative">

            {hoveredTech === tech.id && (
              <div className="pointer-events-none absolute right-full top-1/2 z-30 mr-3 flex -translate-y-1/2 items-center">

                <div
                  className={`whitespace-nowrap rounded-lg px-3 py-1.5 text-xs font-semibold shadow-xl ${
                    isDarkMode
                      ? "bg-white text-slate-900"
                      : "bg-slate-900 text-white"
                  }`}
                >
                  {tech.name}
                </div>

                <div
                  className={`-ml-1.5 h-2.5 w-2.5 rotate-45 shadow-sm ${
                    isDarkMode ? "bg-white" : "bg-slate-900"
                  }`}
                />
              </div>
            )}

            <button
              onMouseEnter={() => setHoveredTech(tech.id)}
              onMouseLeave={() => setHoveredTech(null)}
              className={`flex h-16 w-16 cursor-pointer items-center justify-center rounded-2xl border-2 ${tech.colorBorder} ${tech.colorBg} ${tech.colorText} shadow-md transition-all duration-300 hover:scale-110 hover:shadow-lg focus:outline-none`}
            >
              {tech.svg}
            </button>
          </div>
        ))}
      </div>

      
      <main className="z-10 mx-auto flex w-full max-w-3xl flex-1 flex-col items-center justify-center pt-20 text-center md:py-25 lg:py-0">

      
        <div
          className={`mb-6 inline-flex items-center gap-2 rounded-full border px-4 py-1.5 text-xs font-semibold shadow-sm backdrop-blur-sm sm:text-sm ${
            isDarkMode
              ? "border-purple-800 bg-purple-950/50 text-purple-300"
              : "border-purple-200 bg-purple-100/80 text-purple-700"
          }`}
        >
          <span className="h-2 w-2 animate-pulse rounded-full bg-purple-600" />
          Full Stack Developer
        </div>

       
        <h1 className="mb-6 text-3xl font-bold leading-none tracking-tight text-purple-600 drop-shadow-sm sm:text-6xl md:text-6xl lg:text-8xl">
          Kawsar Ahmed
        </h1>

       
        <p
          className={`mb-8 max-w-xl text-[13px] font-medium leading-relaxed sm:text-xl ${
            isDarkMode ? "text-slate-300" : "text-slate-600"
          }`}
        >
          Crafting{" "}
          <span className="font-bold text-purple-600">
            digital experiences
          </span>{" "}
          with modern web technologies
        </p>

       
        <div className="mb-10 flex flex-wrap items-center justify-center gap-3">

          <div
            className={`flex items-center gap-1.5 rounded-full border px-4 py-2 text-[10px] font-semibold shadow-sm sm:text-sm ${
              isDarkMode
                ? "border-purple-800/70 bg-purple-950/50 text-purple-300"
                : "border-purple-200/80 bg-purple-100/60 text-purple-700"
            }`}
          >
            <span className="font-mono font-bold">
              &lt;/&gt;
            </span>
            Clean Code
          </div>

          <div
            className={`flex items-center gap-1.5 rounded-full border px-4 py-2 text-[10px] font-semibold shadow-sm sm:text-sm ${
              isDarkMode
                ? "border-purple-800/70 bg-purple-950/50 text-purple-300"
                : "border-purple-200/80 bg-purple-100/60 text-purple-700"
            }`}
          >
            <svg
              className="h-4 w-4 shrink-0 text-purple-400"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1.3.5 2.6 1.5 3.5.7.7 1.3 1.5 1.5 2.5" />
              <path d="M9 18h6" />
              <path d="M10 22h4" />
            </svg>
            Innovative Solutions
          </div>

          <div
            className={`flex items-center gap-1.5 rounded-full border px-4 py-2 text-[10px] font-semibold shadow-sm sm:text-sm ${
              isDarkMode
                ? "border-purple-800/70 bg-purple-950/50 text-purple-300"
                : "border-purple-200/80 bg-purple-100/60 text-purple-700"
            }`}
          >
            <span>✓</span>
            Production Ready
          </div>
        </div>

       
        <div className="flex w-full flex-col items-center justify-center gap-4 sm:w-auto sm:flex-row">

          <a href="#projects" className="flex w-60 cursor-pointer items-center justify-center gap-2 rounded-full bg-purple-600 px-8 py-3.5 text-sm font-bold text-white shadow-lg shadow-purple-500/30 transition-all duration-300 hover:-translate-y-0.5 hover:bg-purple-700 hover:shadow-purple-500/50 active:translate-y-0 sm:w-auto sm:text-base">
            <span>View Projects</span>
            <span>→</span>
          </a>

          <a href="#contact"
            className={`flex w-60 cursor-pointer items-center justify-center gap-2 rounded-full border-2 px-8 py-3.5 text-sm font-bold transition-all duration-300 hover:-translate-y-0.5 active:translate-y-0 sm:w-auto sm:text-base ${
              isDarkMode
                ? "border-purple-500 bg-slate-900 text-purple-400 hover:bg-purple-950/50"
                : "border-purple-500 bg-white text-purple-600 hover:bg-purple-50"
            }`}
          >
            <span>Get In Touch</span>
            <span className="text-xs">↗</span>
          </a>
        </div>

      
        <div
          className={`mt-12 block w-full border-t pt-6 md:hidden ${
            isDarkMode
              ? "border-slate-700/60"
              : "border-slate-200/60"
          }`}
        >
          <p
            className={`mb-6 text-xs font-semibold uppercase tracking-widest ${
              isDarkMode
                ? "text-slate-500"
                : "text-slate-400"
            }`}
          >
            Tech Stack
          </p>

          <div className="mx-auto grid max-w-md grid-cols-5 justify-items-center gap-3 sm:grid-cols-5">
            {techStackList.map((tech) => (
              <div key={tech.id} className="group relative">

                <button
                  onClick={() =>
                    setHoveredTech(
                      hoveredTech === tech.id
                        ? null
                        : tech.id
                    )
                  }
                  className={`flex h-12 w-12 items-center justify-center rounded-xl border-2 sm:h-14 sm:w-14 ${tech.colorBorder} ${tech.colorBg} ${tech.colorText} shadow-sm transition-transform active:scale-95`}
                >
                  {tech.svg}
                </button>

              </div>
            ))}
          </div>
        </div>
      </main>

     
      <footer className="z-10 flex flex-col items-center pt-4 pb-2 lg:pt-0 lg:pb-0">
        <div
          className={`flex h-10 w-6 justify-center rounded-full border-2 p-1.5 opacity-70 transition-opacity hover:opacity-100 ${
            isDarkMode
              ? "border-slate-600"
              : "border-slate-400"
          }`}
        >
          <div
            className={`h-2.5 w-1.5 animate-bounce rounded-full ${
              isDarkMode
                ? "bg-slate-400"
                : "bg-slate-500"
            }`}
          />
        </div>
      </footer>
    </div>
  )
}