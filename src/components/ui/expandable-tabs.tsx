
"use client"

import * as React from "react"
import { cn } from "@/lib/utils"
import { LucideIcon } from "lucide-react"

type Tab = {
  title: string
  icon?: LucideIcon
  id: string
}

interface ExpandableTabsProps {
  tabs: Tab[]
  activeColor?: string
  className?: string
  onChange?: (index: number | null) => void
}

export function ExpandableTabs({
  tabs,
  activeColor = "text-primary",
  className,
  onChange,
}: ExpandableTabsProps) {
  const [hoveredTabIndex, setHoveredTabIndex] = React.useState<number | null>(
    null
  )
  const [clickedTab, setClickedTab] = React.useState<number | null>(null)

  const handleTabClick = (index: number) => {
    if (clickedTab === index) {
      setClickedTab(null)
      onChange?.(null)
    } else {
      setClickedTab(index)
      onChange?.(index)
    }
  }

  return (
    <div className={cn("relative flex items-center gap-2", className)}>
      {tabs.map((tab, index) => {
        const Icon = tab.icon
        const isActive = hoveredTabIndex === index || clickedTab === index

        return (
          <button
            key={index}
            className={cn(
              "relative flex items-center justify-center px-3 py-1.5 text-sm font-medium transition-all",
              isActive ? activeColor : "text-muted-foreground",
              hoveredTabIndex !== null &&
                hoveredTabIndex !== index &&
                "opacity-50"
            )}
            onMouseEnter={() => setHoveredTabIndex(index)}
            onMouseLeave={() => setHoveredTabIndex(null)}
            onClick={() => handleTabClick(index)}
          >
            {Icon && <Icon className="mr-2 size-4" />}
            <span
              className={cn(
                "transition-all duration-300",
                isActive ? "opacity-100" : "opacity-0",
                clickedTab === index ? "opacity-100" : ""
              )}
            >
              {tab.title}
            </span>

            {/* The small dot indicator that shows on hover and click */}
            <span
              className={cn(
                "absolute bottom-0 left-1/2 h-0.5 w-0.5 -translate-x-1/2 rounded-full bg-current transition-all duration-300",
                isActive ? "opacity-100" : "opacity-0"
              )}
              style={{
                width: isActive ? "60%" : "0%",
              }}
            />
          </button>
        )
      })}
    </div>
  )
}
