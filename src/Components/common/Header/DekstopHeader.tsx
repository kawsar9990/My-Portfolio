"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import { Button } from "@/Components/ui/button"
import { Sun, Moon, ArrowDownToLine } from "lucide-react"
import { useMountedTheme } from "@/hook/useMountedTheme"


const navItems = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Blogs", href: "#blogs" },
  { name: "Contact", href: "#contact" },
]

export default function Dekstop() {
  const [activeTab, setActiveTab] = useState("Home")
  const { isDarkMode, toggleTheme } = useMountedTheme();
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])



useEffect(() => {
  const handleScroll = () => {
    const scrollPosition = window.scrollY + window.innerHeight / 3

    navItems.forEach((item) => {
      const section = document.querySelector<HTMLElement>(item.href)
      if (section) {
        const top = section.offsetTop
        const height = section.offsetHeight
        if (scrollPosition >= top && scrollPosition < top + height) {
          setActiveTab(item.name)
        }
      }
    })
  }

  window.addEventListener("scroll", handleScroll)
  handleScroll()
  return () => window.removeEventListener("scroll", handleScroll)
}, [])

return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 w-full transition-all duration-300 ${
       isScrolled
    ? "border-b border-slate-200 bg-[#F9FAFC] shadow-lg dark:border-slate-800 dark:bg-[#0e131d]"
    : "border-b border-transparent bg-slate-50 shadow-none dark:bg-[#0e131d]"
}`}
    >
<div className="px-10 flex items-center justify-between py-4">
   
<Link href="/" className="flex items-center gap-3 group">
  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-slate-900 text-white dark:bg-white dark:text-black font-bold text-xl shadow-md transition-transform group-hover:scale-105">
    K
  </div>

  <div className="flex flex-col">
    <span className="text-lg font-bold leading-tight tracking-tight text-slate-900 dark:text-white">
      Kawsar Ahmed
    </span>

    <span className="text-xs font-medium text-slate-500 dark:text-slate-400">
      Full Stack Developer
    </span>
  </div>
</Link>


<nav className="hidden items-center gap-1 md:flex">
  {navItems.map((item) => {
    const isActive = activeTab === item.name
    return (
      <Link
        key={item.name}
        href={item.href}
        onClick={() => setActiveTab(item.name)}
        className={`relative px-3 py-2 text-sm font-semibold transition-colors duration-200 ${
          isActive
            ? "text-indigo-700 dark:text-indigo-300"
            : "text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-200"
        }`}
      >
        {item.name}
        {isActive && (
          <motion.span
            layoutId="activeUnderlineLine"
            className="absolute bottom-0 left-2 right-2 h-[3px] rounded-full bg-gradient-to-r from-indigo-600 to-indigo-500 shadow-[0_0_10px_rgba(147,51,234,0.6)]"
            transition={{
              type: "spring",
              stiffness: 300,
              damping: 30,
              mass: 0.8
            }}
          />
        )}
      </Link>
    )
  })}
</nav>


<div className="hidden items-center gap-3 md:flex">
  <Button
    variant="outline"
    size="icon"
    onClick={toggleTheme}
    className="h-10 w-10 cursor-pointer rounded-full border-slate-200 bg-white shadow-sm transition-all hover:bg-slate-100 dark:border-slate-700 dark:bg-slate-900 dark:hover:bg-slate-800"
  >
    {isDarkMode ? (
      <Moon className="h-4 w-4 text-[#50A2FF]" />
    ) : (
      <Sun className="h-4 w-4 text-amber-500" />
    )}
  </Button>

          <a 
          href="/kawsar-cv.pdf"
          download="Kawsar_Ahmed_CV.pdf"
          target="_blank"
          rel="noopener noreferrer">
            <Button
            size="sm"
            className="gap-2 cursor-pointer rounded-full bg-gradient-to-r from-indigo-600 to-violet-600 hover:from-indigo-700 hover:to-violet-700 px-5 py-5 text-sm font-medium text-white shadow-md transition-all"
          >
            Resume
            <ArrowDownToLine strokeWidth={2.5} />
          </Button>
          </a>
        </div>
      </div>
    </header>
  )
}