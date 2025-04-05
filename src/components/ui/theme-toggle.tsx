
"use client"

import { useState, useEffect } from "react"
import { Moon, Sun } from "lucide-react"
import { cn } from "@/lib/utils"

interface ThemeToggleProps {
  className?: string
}

export function ThemeToggle({ className }: ThemeToggleProps) {
  const [isDark, setIsDark] = useState(true)

  useEffect(() => {
    // Apply or remove 'light' class to body based on theme
    if (isDark) {
      document.body.classList.remove('light');
    } else {
      document.body.classList.add('light');
    }
  }, [isDark]);

  return (
    <div
      className={cn(
        "flex w-14 h-7 p-1 rounded-full cursor-pointer transition-all duration-300",
        isDark 
          ? "bg-zinc-950 border border-zinc-800" 
          : "bg-white border border-zinc-200",
        className
      )}
      onClick={() => setIsDark(!isDark)}
      role="button"
      tabIndex={0}
    >
      <div className="flex justify-between items-center w-full">
        <div
          className={cn(
            "flex justify-center items-center w-5 h-5 rounded-full transition-transform duration-300",
            isDark 
              ? "transform translate-x-0 bg-zinc-800" 
              : "transform translate-x-7 bg-gray-200"
          )}
        >
          {isDark ? (
            <Moon 
              className="w-3 h-3 text-white" 
              strokeWidth={1.5}
            />
          ) : (
            <Sun 
              className="w-3 h-3 text-gray-700" 
              strokeWidth={1.5}
            />
          )}
        </div>
        <div
          className={cn(
            "flex justify-center items-center w-5 h-5 rounded-full transition-transform duration-300",
            isDark 
              ? "bg-transparent" 
              : "transform -translate-x-7"
          )}
        >
          {isDark ? (
            <Sun 
              className="w-3 h-3 text-gray-500" 
              strokeWidth={1.5}
            />
          ) : (
            <Moon 
              className="w-3 h-3 text-black" 
              strokeWidth={1.5}
            />
          )}
        </div>
      </div>
    </div>
  )
}
