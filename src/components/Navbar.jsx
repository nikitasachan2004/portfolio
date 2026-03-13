import { useEffect, useState } from "react"
import ThemeToggle from "./ThemeToggle"

const navSections = [
  { id: "hero", label: null }, // special case
  { id: "projects", label: "Projects" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "credentials", label: "Credentials" },
  { id: "contact", label: "Find me" },
]

export default function Navbar() {
  const [active, setActive] = useState("")

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return

          if (entry.target.id === "hero") {
            setActive("")          // ← clear highlight
          } else {
            setActive(entry.target.id)
          }
        })
      },
      {
        rootMargin: "-45% 0px -45% 0px",
      }
    )

    navSections.forEach((section) => {
      const el = document.getElementById(section.id)
      if (el) observer.observe(el)
    })

    return () => observer.disconnect()
  }, [])

  return (
    <nav className="fixed top-0 w-full z-50 bg-[#f6f4ef]/85 backdrop-blur-sm border-b border-[#e5e3dc] dark:bg-[#1B1F1E]/95 dark:backdrop-blur-[2px] dark:border-[#323938]">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">

        <span className="text-gray-800 font-medium dark:text-[#E6ECE8]">
          Nikita Sachan
        </span>

        <div className="flex items-center gap-3 text-sm">
          {navSections
            .filter((s) => s.label)
            .map((link) => {
              const isActive = active === link.id

              return (
                <a
                  key={link.id}
                  href={`#${link.id}`}
                  className={`
                    px-4 py-2 rounded-full transition-all duration-300
                    ${
                      isActive
                        ? "bg-[#dfe6da] text-[#2f3a33] shadow-sm dark:bg-[#2B332F] dark:text-[#E6ECE8] dark:shadow-[0_10px_25px_rgba(0,0,0,0.35)] relative dark:after:content-[''] dark:after:absolute dark:after:left-4 dark:after:right-4 dark:after:bottom-2 dark:after:h-px dark:after:bg-[#8FA78F] dark:after:opacity-25"
                        : "text-gray-500 hover:text-gray-800 dark:text-[#7B857F] dark:hover:text-[#E6ECE8]"
                    }
                  `}
                >
                  {link.label}
                </a>
              )
            })}

            <ThemeToggle />

            <a
              href="/Nikita_Sachan_Resume.pdf"
              target="_blank"
              rel="noreferrer"
              className="
                ml-2 px-4 py-2 rounded-full
                border border-[#7c8f7a]
                text-[#6f846d]
                transition-all duration-300
                hover:bg-[#eaf0ea]
                hover:-translate-y-0.5
                hover:shadow-sm
                dark:border-[#8A9F8A]
                dark:text-[#8A9F8A]
                dark:hover:bg-[#2B332F]
                focus:outline-none focus:ring-2 focus:ring-[#8FA78F]/40 focus:ring-offset-0
                "
            >
              Resume
            </a>
        </div>

      </div>
    </nav>
  )
}