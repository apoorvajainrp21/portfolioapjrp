
import { IconCloud } from "@/components/ui/interactive-icon-cloud"

const slugs = [
  "typescript",
  "javascript",
  "python",
  "java",
  "react",
  "figma",
  "android",
  "html5",
  "css3",
  "nodedotjs",
  "express",
  "nextdotjs",
  "wireshark",
  "amazonaws",
  "postgresql",
  "jira",
  "metasploit",
  "selenium",
  "testinglibrary",
  "jest",
  "cypress",
  "docker",
  "github",
  "gitlab",
  "visualstudiocode",
  "androidstudio",
  "sonarqube",
  "figma", 
  "matlab", 
  "unity",
  "multisim",
  "kotlin"
]

export function IconCloudDemo() {
  return (
    <div className="relative flex w-full h-full items-center justify-center overflow-hidden bg-transparent">
      <IconCloud iconSlugs={slugs} />
    </div>
  )
}
