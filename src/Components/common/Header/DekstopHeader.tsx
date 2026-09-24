"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import { Button } from "@/Components/ui/button"
import { Sun, Moon, ChevronRight } from "lucide-react"
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
  const { isDarkMode, toggleTheme } = useMountedTheme()
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

return (
    <header
      className={`fixed top-0 left-0 right-0 z-999 w-full transition-all duration-300 ${
        isDarkMode
          ? isScrolled
            ? "border-b border-slate-800 bg-[#0e131d] shadow-lg"
            : "border-b border-transparent bg-[#0e131d] shadow-none"
          : isScrolled
            ? "border-b border-slate-200 bg-[#F9FAFC] shadow-lg"
            : "border-b border-transparent bg-[#F7F5FC] shadow-none"
      }`}
    >
      <div className="px-10 flex items-center justify-between py-4">
   
        <Link href="/" className="flex items-center gap-3 group">
          <div 
          className={`flex h-11 w-11 items-center justify-center rounded-xl font-bold text-xl shadow-md transition-transform group-hover:scale-105 ${
              isDarkMode
                ? "bg-white text-black"
                : "bg-slate-900 text-white"
            }`}
          >
            K
          </div>

          <div className="flex flex-col">
            <span className={`text-lg font-bold leading-tight tracking-tight ${
                isDarkMode ? "text-white" : "text-slate-900"
              }`}>
              Kawsar Ahmed
            </span>
            <span className="text-xs font-medium text-purple-600 dark:text-purple-400">
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
                className={`relative px-3 py-1.5 text-sm font-medium transition-colors ${
                  isActive
                    ? "text-purple-600"
                    : isDarkMode
                      ? "text-slate-300 hover:text-white"
                      : "text-slate-600 hover:text-slate-900"
                }`}
              >
                {item.name}
                {isActive && (
                  <motion.div
                    layoutId="activeTab"
                    className={`absolute inset-0 -z-10 rounded-lg ${
                      isDarkMode
                        ? "bg-purple-950/40"
                        : "bg-purple-50"
                    }`}
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
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
            className={`h-10 w-10 cursor-pointer rounded-full shadow-sm transition-all ${
              isDarkMode
                ? "border-slate-700 bg-slate-900 hover:bg-slate-800"
                : "border-slate-200 bg-white hover:bg-slate-100"
            }`}
          >
            {isDarkMode ? (
              <Sun className="h-4 w-4 text-amber-500" />
            ) : (
              <Moon className="h-4 w-4 text-slate-700" />
            )}
          </Button>

          <Button
            size="sm"
            className="gap-2 cursor-pointer rounded-full bg-purple-600 px-5 py-5 text-sm font-medium text-white shadow-md hover:bg-purple-700"
          >
            Download CV
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </header>
  )
}