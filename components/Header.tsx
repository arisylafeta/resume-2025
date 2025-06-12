import React from "react";
import { cn } from "@/lib/utils";

interface HeaderProps {
  currentSection: string;
  onSectionChange: (section: string) => void;
}

const NAV_ITEMS = [
  { id: "hero", label: "Home" },
  { id: "about", label: "About" },
  { id: "projects", label: "Projects" },
  { id: "contact", label: "Contact" },
];

export default function Header({ currentSection, onSectionChange }: HeaderProps) {
  return (
    <header className="fixed top-6 left-1/2 z-50 -translate-x-1/2">
      <nav
        className="flex gap-2 p-2 rounded-full shadow-lg bg-black/70 backdrop-blur-md border border-white/10"
        aria-label="Main navigation"
      >
        {NAV_ITEMS.map((item) => (
          <a
            key={item.id}
            href={`#${item.id}`}
            onClick={() => onSectionChange(item.id)}
            className={cn(
              "rounded-full px-4 py-1.5 text-sm font-semibold transition-all",
              "rounded-full px-4 py-1.5 text-sm font-semibold transition-all",
              "flex items-center justify-center",
              currentSection === item.id
                ? "bg-white text-black shadow-md"
                : "bg-transparent text-white hover:bg-white/10"
            )}
          >
            {item.label}
          </a>
        ))}
      </nav>
    </header>
  );
}
