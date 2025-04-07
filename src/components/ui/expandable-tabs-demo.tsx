
import * as React from "react"
import {
  ArrowDownToLine,
  ArrowUpToLine,
  Bot,
  Braces,
  Code,
  Feed,
  Folder,
  Grid3X3,
  Home,
  Settings,
  User,
} from "lucide-react"

import { ExpandableTabs } from "@/components/ui/expandable-tabs"

const demoTabs = [
  { title: "Home", icon: Home, id: "home" },
  { title: "Dashboard", icon: Grid3X3, id: "dashboard" },
  { title: "Projects", icon: Folder, id: "projects" },
  { title: "Code", icon: Code, id: "code" },
  { title: "Feed", icon: Feed, id: "feed" },
  { title: "Settings", icon: Settings, id: "settings" },
]

const user = [{ title: "Account", icon: User, id: "account" }]
const aiTabs = [
  { title: "Chat", icon: Bot, id: "chat" },
  { title: "Data", icon: Braces, id: "data" },
]

export function ExpandableTabsDemo() {
  return (
    <div className="space-y-8">
      <ExpandableTabs tabs={demoTabs} />

      <div className="flex items-center gap-4">
        <ExpandableTabs tabs={aiTabs} activeColor="text-blue-500" />
        <div className="h-4 w-px bg-muted" />
        <ExpandableTabs tabs={user} activeColor="text-red-500" />
      </div>
    </div>
  )
}
