import { useEffect, useState, useRef } from "react"
import Switch from "./ui/sky-toggle"
import { InteractiveHoverButton } from "./ui/interactive-hover-button"

const navSections = [
  { id: "hero",        label: null },
  { id: "about",       label: "About" },
  { id: "experience",  label: "Experience" },
  { id: "projects",    label: "Projects" },
  { id: "skills",      label: "Skills" },
  { id: "credentials", label: "Credentials" },
  { id: "contact",     label: "Find me" },
]

export default function Navbar() {
  const [active, setActive]       = useState("")
  const [resumeOpen, setResumeOpen] = useState(false)
  const dropdownRef = useRef(null)

  // Close dropdown on outside click
  useEffect(() => {
    function handleClickOutside(e) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setResumeOpen(false)
      }
    }
    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [])

  // Active section observer
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return
          setActive(entry.target.id === "hero" ? "" : entry.target.id)
        })
      },
      { rootMargin: "-45% 0px -45% 0px" }
    )

    navSections.forEach(({ id }) => {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    })

    return () => observer.disconnect()
  }, [])

  return (
    <nav className="fixed top-0 w-full z-50 bg-[#f6f4ef]/85 backdrop-blur-sm border-b border-[#e5e3dc] dark:bg-[#1B1F1E]/95 dark:backdrop-blur-[2px] dark:border-[#323938]">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">

        {/* Logo */}
        <div className="flex items-center gap-3">
          <img
            src="https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExcGJrZ3NlejZ4ZXlvaDRnbTR1b2VmcG1waGM1Y3hvNGU4aGE0aHcweSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/26BkNnO2qmCWTQuac/giphy.gif"
            alt="avatar"
            className="w-12 h-12 rounded-full object-cover"
          />
          <span className="text-gray-800 font-medium dark:text-[#E6ECE8]">
            Nikita Sachan
          </span>
        </div>

        {/* Links */}
        <div className="flex items-center gap-4 text-sm">
          {navSections
            .filter((s) => s.label)
            .map((link) => {
              const isActive = active === link.id
              return isActive ? (
                /* ── ACTIVE pill — all classes static so Tailwind includes them ── */
                <a
                  key={link.id}
                  href={`#${link.id}`}
                  className="relative px-4 py-2 rounded-full transition-all duration-300
                    bg-[#dfe6da] text-[#2f3a33] shadow-sm
                    dark:bg-[#2B332F] dark:text-[#E6ECE8] dark:shadow-[0_10px_25px_rgba(0,0,0,0.35)]
                    after:content-[''] after:absolute after:left-4 after:right-4 after:bottom-[7px]
                    after:h-px after:bg-[#8FA78F] after:opacity-0
                    dark:after:opacity-25"
                >
                  {link.label}
                </a>
              ) : (
                /* ── INACTIVE ── */
                <a
                  key={link.id}
                  href={`#${link.id}`}
                  className="px-4 py-2 rounded-full transition-all duration-300
                    text-gray-500 hover:text-gray-800
                    dark:text-[#7B857F] dark:hover:text-[#E6ECE8]"
                >
                  {link.label}
                </a>
              )
            })}

          <Switch />

          {/* Resume Dropdown */}
          <div className="relative ml-2" ref={dropdownRef}>
            <div onClick={() => setResumeOpen(!resumeOpen)} className="cursor-pointer">
              <InteractiveHoverButton
                text="Resume"
                hoverBgColor="bg-[#7c8f7a] dark:bg-[#2B332F]"
                hoverTextColor="text-white"
                className="border border-[#7c8f7a] text-[#6f846d] dark:border-[#8A9F8A] dark:text-[#8A9F8A]"
              />
            </div>

            {resumeOpen && (
              <div className="absolute right-0 mt-1.5 w-28 bg-[#fbfaf7] border border-[#e5e3dc] rounded-lg shadow-md overflow-hidden dark:bg-[#242927] dark:border-[#323735] z-50">
                <a
                  href="/NIKITA_ML_RESUME.pdf"
                  target="_blank"
                  rel="noreferrer"
                  onClick={() => setResumeOpen(false)}
                  className="block px-3 py-2 text-xs text-gray-600 hover:bg-[#eaf0ea] hover:text-gray-900 transition dark:text-[#A9B2AC] dark:hover:bg-[#2B332F] dark:hover:text-[#E6ECE8]"
                >
                  AI / ML
                </a>
                <div className="h-px bg-[#e5e3dc] dark:bg-[#323735]" />
                <a
                  href="/NIKITA%20SDE.pdf"
                  target="_blank"
                  rel="noreferrer"
                  onClick={() => setResumeOpen(false)}
                  className="block px-3 py-2 text-xs text-gray-600 hover:bg-[#eaf0ea] hover:text-gray-900 transition dark:text-[#A9B2AC] dark:hover:bg-[#2B332F] dark:hover:text-[#E6ECE8]"
                >
                  SDE
                </a>
              </div>
            )}
          </div>

        </div>
      </div>
    </nav>
  )
}
