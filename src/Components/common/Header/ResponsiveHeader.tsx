"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"
import { useMountedTheme } from "@/hook/useMountedTheme"
import { Button } from "@/Components/ui/button"
import {
  Sun,
  Moon,
  ChevronRight,
  Menu,
  X,
} from "lucide-react"

const navItems = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Blogs", href: "#blogs" },
  { name: "Contact", href: "#contact" },
]

export default function ResponsiveHeader() {
  const [activeTab, setActiveTab] = useState("Home")
  const [isScrolled, setIsScrolled] = useState(false)
  const { isDarkMode, toggleTheme } = useMountedTheme()
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }

    window.addEventListener("scroll", handleScroll)

    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 w-full py-2 transition-all duration-300 ${
        isDarkMode
          ? isScrolled || isMenuOpen
            ? "border-b border-slate-800 bg-[#0e131d] backdrop-blur-md shadow-md"
            : "border-b border-transparent bg-[#0e131d] shadow-sm"
          : isScrolled || isMenuOpen
            ? "border-b border-slate-200 bg-white/90 backdrop-blur-md shadow-md"
            : "border-b border-transparent bg-[#F7F5FC] shadow-sm"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-3 py-2.5 sm:px-6">

        <Link
          href="/"
          className="group flex shrink-0 items-center gap-2.5"
        >

          <div
            className={`flex h-8 w-8 items-center justify-center rounded-xl text-lg font-bold shadow-md transition-transform group-hover:scale-105 md:h-10 md:w-10 ${
              isDarkMode
                ? "bg-white text-black"
                : "bg-slate-900 text-white"
            }`}
          >
            K
          </div>


          <div className="hidden flex-col sm:flex">
            <span
              className={`whitespace-nowrap text-sm font-bold leading-tight sm:text-base ${
                isDarkMode ? "text-white" : "text-slate-900"
              }`}
            >
              Kawsar Ahmed
            </span>

            <span className="whitespace-nowrap text-[10px] font-medium text-purple-600 sm:text-[11px]">
              Full Stack Developer
            </span>
          </div>
        </Link>

       
        <nav className="hidden items-center gap-1 xl:flex">
          {navItems.map((item) => {
            const isActive = activeTab === item.name

            return (
              <Link
                key={item.name}
                href={item.href}
                onClick={() => setActiveTab(item.name)}
                className={`relative cursor-pointer px-3 py-1.5 text-sm font-medium transition-colors ${
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
                        ? "bg-purple-950/50"
                        : "bg-purple-50"
                    }`}
                    transition={{
                      type: "spring",
                      stiffness: 380,
                      damping: 30,
                    }}
                  />
                )}
              </Link>
            )
          })}
        </nav>

        <div className="flex items-center gap-1.5 sm:gap-2">

       
          <Button
            variant="outline"
            size="icon"
            onClick={toggleTheme}
            aria-label="Toggle dark mode"
            className={`h-8 w-8 cursor-pointer rounded-xl border-none shadow-sm transition-all sm:h-9 sm:w-9 ${
              isDarkMode
                ? "bg-slate-800 hover:bg-slate-700"
                : "bg-slate-100 hover:bg-slate-200"
            }`}
          >
            {isDarkMode ? (
              <Sun className="h-4 w-4 text-amber-400" />
            ) : (
              <Moon className="h-4 w-4 text-amber-500" />
            )}
          </Button>

         
          <Button
            variant="outline"
            size="icon"
            onClick={() => setIsMenuOpen((prev) => !prev)}
            aria-label="Toggle Menu"
            className={`flex h-8 w-8 cursor-pointer rounded-xl border-none shadow-sm sm:h-9 sm:w-9 xl:hidden ${
              isDarkMode
                ? "bg-slate-800 hover:bg-slate-700"
                : "bg-slate-100 hover:bg-slate-200"
            }`}
          >
            {isMenuOpen ? (
              <X
                className={`h-4 w-4 ${
                  isDarkMode ? "text-white" : "text-slate-900"
                }`}
              />
            ) : (
              <Menu
                className={`h-4 w-4 ${
                  isDarkMode ? "text-white" : "text-slate-900"
                }`}
              />
            )}
          </Button>
        </div>
      </div>

     
<AnimatePresence>
  {isMenuOpen && (
    <motion.div
      initial={{ opacity: 0, height: 0 }}
      animate={{ opacity: 1, height: "auto" }}
      exit={{ opacity: 0, height: 0 }}
      transition={{
        duration: 0.25,
        ease: "easeInOut",
      }}
      className={`overflow-hidden px-3 pb-4 pt-1 sm:px-4 xl:hidden ${
        isDarkMode
          ? "bg-black/95"
          : "bg-white/95"
      } backdrop-blur-md`}
    >
      <div
        className={`mx-auto max-h-[calc(100vh-80px)] max-w-7xl overflow-y-auto rounded-2xl border p-3 shadow-xl ${
          isDarkMode
            ? "border-purple-900/40 bg-slate-950"
            : "border-purple-100 bg-white"
        }`}
      >

            
<nav className="flex flex-col gap-1">
  {navItems.map((item) => {
    const isActive = activeTab === item.name

    return (
      <Link
        key={item.name}
        href={item.href}
        onClick={() => {
          setActiveTab(item.name)
          setIsMenuOpen(false)
        }}
        className={`flex cursor-pointer items-center justify-between rounded-xl px-4 py-2.5 text-sm font-medium transition-all ${
          isActive
            ? isDarkMode
              ? "bg-purple-950/50 font-semibold text-purple-400"
              : "bg-purple-50 font-semibold text-[#8b5cf6]"
            : isDarkMode
              ? "text-slate-300 hover:bg-slate-900 hover:text-white"
              : "text-slate-600 hover:bg-slate-50"
        }`}
      >
        <span>{item.name}</span>
        <ChevronRight
          className={`h-4 w-4 ${
            isActive
              ? "text-[#8b5cf6]"
              : isDarkMode
                ? "text-slate-500"
                : "text-slate-400"
          }`}
        />
      </Link>
    )
  })}
</nav>

              <div className="mt-3 pt-1">
                 <a 
                  href="/kawsar-cv.pdf"
                  download="Kawsar_Ahmed_CV.pdf"
                  target="_blank"
                  rel="noopener noreferrer">
                  <Button
                  size="lg"
                  className="w-full cursor-pointer gap-2 rounded-xl bg-[#8b5cf6] py-4 text-sm font-medium text-white shadow-lg hover:bg-[#7c3aed]"
                >
                  Download CV
                  <ChevronRight className="h-4 w-4" />
                </Button>
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
