"use client"

import { useTheme } from "next-themes"
import { useEffect, useState } from "react"

export function useMountedTheme() {
  const { resolvedTheme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const isDarkMode = mounted && resolvedTheme === "dark"

   const toggleTheme = () => {
    setTheme(resolvedTheme === "dark" ? "light" : "dark")
  }


  return { isDarkMode, toggleTheme, mounted }
}