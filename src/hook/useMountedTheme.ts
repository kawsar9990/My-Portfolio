"use client"

import { useTheme } from "next-themes"
import { useEffect, useState } from "react"

export function useMountedTheme() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const isDarkMode = mounted && theme === "dark"

  const toggleTheme = () => {
    setTheme(isDarkMode ? "light" : "dark")
  }

  return { isDarkMode, toggleTheme, mounted }
}