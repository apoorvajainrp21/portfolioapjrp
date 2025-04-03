
import { IconCloud } from "@/components/ui/interactive-icon-cloud"

const slugs = [
  "typescript",
  "javascript",
  "dart",
  "java",
  "react",
  "flutter",
  "android",
  "html5",
  "css3",
  "nodedotjs",
  "express",
  "nextdotjs",
  "amazonaws",
  "postgresql",
  "vercel",
  "jest",
  "cypress",
  "docker",
  "git",
  "jira",
  "github",
  "visualstudiocode",
  "androidstudio",
  "sonarqube",
  "figma"
]

export function IconCloudDemo() {
  return (
    <div className="relative flex w-full h-full items-center justify-center overflow-hidden rounded-lg border bg-background px-4 pb-8 pt-4">
      <IconCloud iconSlugs={slugs} />
    </div>
  )
}
