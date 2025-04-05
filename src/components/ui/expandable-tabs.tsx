
"use client";

import * as React from "react";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";
import { LucideIcon } from "lucide-react";

interface TabWithTitle {
  title: string;
  icon: LucideIcon;
  type: "tab";
}

interface TabSeparator {
  type: "separator";
  title?: never;
  icon?: never;
}

type TabItem = TabWithTitle | TabSeparator;

interface ExpandableTabsProps {
  tabs: (TabWithTitle | TabSeparator)[];
  className?: string;
  activeColor?: string;
  onChange?: (index: number | null) => void;
}

export const ExpandableTabs = ({
  tabs,
  className,
  activeColor = "text-black dark:text-white",
  onChange,
}: ExpandableTabsProps) => {
  const [expanded, setExpanded] = React.useState(false);
  const [activeTabIndex, setActiveTabIndex] = React.useState<number | null>(null);

  // Filter tabs to remove separators when counting actual tab indices
  const tabItems = tabs.filter((tab): tab is TabWithTitle => tab.type === "tab");
  
  // This is purely visual - for rendering the separator
  const SeparatorComponent = () => (
    <div className="w-full h-px bg-gray-200 dark:bg-gray-700/25 my-1.5" />
  );

  const handleTabClick = (index: number) => {
    if (expanded) {
      setActiveTabIndex(index);
      onChange?.(index);
    }
    setExpanded(!expanded);
  };

  const handleBackdropClick = () => {
    setExpanded(false);
  };

  // Find actual tab index (excluding separators)
  const getActualTabIndex = (visibleIndex: number) => {
    let actualIndex = 0;
    let tabCount = 0;
    
    for (let i = 0; i < tabs.length; i++) {
      if (tabs[i].type === "tab") {
        if (tabCount === visibleIndex) {
          actualIndex = i;
          break;
        }
        tabCount++;
      }
    }
    
    return actualIndex;
  };

  return (
    <div className="relative">
      {expanded && (
        <div
          className="fixed inset-0 z-10"
          onClick={handleBackdropClick}
        />
      )}
      <motion.div
        className={cn(
          "flex flex-col bg-white dark:bg-black border border-gray-200 dark:border-gray-800 rounded-xl overflow-hidden z-20 relative",
          expanded ? "absolute top-0 left-0 right-0" : "w-full",
          className
        )}
        layout
      >
        {tabs.map((tab, index) => {
          if (tab.type === "separator") {
            return <SeparatorComponent key={`separator-${index}`} />;
          }

          const isActive = activeTabIndex === index || (!activeTabIndex && index === 0);
          const TabIcon = tab.icon;
          const tabIndex = tabItems.findIndex((t) => t.title === tab.title);

          return (
            <motion.div
              key={tab.title}
              className={cn(
                "flex items-center gap-3 px-4 py-2.5 cursor-pointer",
                isActive ? activeColor : "text-gray-600 dark:text-gray-300",
                expanded ? "justify-start" : "justify-center"
              )}
              onClick={() => handleTabClick(getActualTabIndex(tabIndex))}
              layout
            >
              {TabIcon && <TabIcon size={18} strokeWidth={1.5} />}
              {expanded && <span className="text-sm font-medium">{tab.title}</span>}
            </motion.div>
          );
        })}
        <motion.div
          className="absolute right-3 top-3 w-5 h-5 flex items-center justify-center"
          animate={{ rotate: expanded ? 180 : 0 }}
          transition={{ duration: 0.2 }}
          onClick={() => setExpanded(!expanded)}
        >
          <ChevronRight size={16} className="text-gray-400" />
        </motion.div>
      </motion.div>
    </div>
  );
};
