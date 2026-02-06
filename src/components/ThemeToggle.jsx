import { useEffect, useState } from "react"
import { Moon, Sun } from "lucide-react"

export default function ThemeToggle() {
  const [isDark, setIsDark] = useState(false)

  const toggle = () => {
    document.documentElement.classList.toggle("dark")
    setIsDark(document.documentElement.classList.contains("dark"))
  }

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
      className="
        inline-flex items-center gap-2
        px-3 py-2 rounded-full
        border border-[#e5e3dc]
        text-gray-500 hover:text-gray-800
        bg-transparent
        transition-all duration-300
        hover:bg-[#fbfaf7]
        dark:border-[#323938]
        dark:text-[#7B857F] dark:hover:text-[#E6ECE8]
        dark:hover:bg-[#2B332F]
        focus:outline-none focus:ring-2 focus:ring-[#8FA78F]/40 focus:ring-offset-0
      "
    >
      {isDark ? (
        <Moon size={16} className="text-[#A8B2AC] dark:text-[#A8B2AC]" />
      ) : (
        <Sun size={16} className="text-[#6b6b6b] dark:text-[#A8B2AC]" />
      )}
      <span className="text-xs leading-none">
        {isDark ? "Dark" : "Light"}
      </span>
    </button>
  )
}
