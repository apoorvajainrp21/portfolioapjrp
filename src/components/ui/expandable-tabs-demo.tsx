
import { Bell, Home, HelpCircle, Settings, Shield, Mail, User, FileText } from "lucide-react";
import { ExpandableTabs } from "@/components/ui/expandable-tabs";

function DefaultDemo() {
  // Explicitly define the separator with type property
  const tabs = [
    { title: "Dashboard", icon: Home },
    { title: "Notifications", icon: Bell },
    { type: "separator" } as const, // Use 'as const' to make TypeScript understand this is a literal
    { title: "Settings", icon: Settings },
    { title: "Support", icon: HelpCircle },
    { title: "Security", icon: Shield },
  ];

  return (
    <div className="flex flex-col gap-4">
      <ExpandableTabs tabs={tabs} />
    </div>
  );
}

function CustomColorDemo() {
  // Explicitly define the separator with type property
  const tabs = [
    { title: "About", icon: User },
    { title: "Contact me", icon: Mail },
    { type: "separator" } as const, // Use 'as const' to make TypeScript understand this is a literal
    { title: "Experience", icon: FileText },
    { title: "Projects", icon: User },
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
