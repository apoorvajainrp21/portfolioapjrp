
"use client"

import { useEffect } from "react"
import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"
import { cn } from "@/lib/utils"

interface ThemeToggleProps {
  className?: string
}

export function ThemeToggle({ className }: ThemeToggleProps) {
  const { theme, setTheme } = useTheme()
  
  return (
    <div
      className={cn(
        "flex w-14 h-7 p-1 rounded-full cursor-pointer transition-all duration-300",
        theme === "dark" 
          ? "bg-zinc-950 border border-zinc-800" 
          : "bg-white border border-zinc-200",
        className
      )}
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      role="button"
      tabIndex={0}
    >
      <div className="flex justify-between items-center w-full">
        <div
          className={cn(
            "flex justify-center items-center w-5 h-5 rounded-full transition-transform duration-300",
            theme === "dark" 
              ? "transform translate-x-0 bg-zinc-800" 
              : "transform translate-x-7 bg-gray-200"
          )}
        >
          {theme === "dark" ? (
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
      </div>
    </div>
  )
}
