
import { Bell, Home, HelpCircle, Settings, Shield, Mail, User, FileText } from "lucide-react";
import { ExpandableTabs } from "@/components/ui/expandable-tabs";

function DefaultDemo() {
  // Define tabs with correct type declarations
  const tabs = [
    { title: "Dashboard", icon: Home, type: "tab" } as const,
    { title: "Notifications", icon: Bell, type: "tab" } as const,
    { type: "separator" } as const, 
    { title: "Settings", icon: Settings, type: "tab" } as const,
    { title: "Support", icon: HelpCircle, type: "tab" } as const,
    { title: "Security", icon: Shield, type: "tab" } as const,
  ];

  return (
    <div className="flex flex-col gap-4">
      <ExpandableTabs tabs={tabs} />
    </div>
  );
}

function CustomColorDemo() {
  // Define tabs with correct type declarations
  const tabs = [
    { title: "About", icon: User, type: "tab" } as const,
    { title: "Contact me", icon: Mail, type: "tab" } as const,
    { type: "separator" } as const,
    { title: "Experience", icon: FileText, type: "tab" } as const,
    { title: "Projects", icon: User, type: "tab" } as const,
  ];

  return (
    <div className="flex flex-col gap-4">
      <ExpandableTabs 
        tabs={tabs} 
        activeColor="text-blue-500"
        className="border-blue-200 dark:border-blue-800" 
      />
    </div>
  );
}

export { DefaultDemo, CustomColorDemo };
