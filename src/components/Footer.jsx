import { useEffect, useState } from "react"
import { Eye } from "lucide-react"

function useVisitorCount(seed = 127) {
  const [count, setCount] = useState(seed)

  useEffect(() => {
    const STORAGE_KEY = "portfolio_visit_count"
    const stored = localStorage.getItem(STORAGE_KEY)
    const current = stored ? parseInt(stored, 10) : seed

    // Increment only once per session
    const SESSION_KEY = "portfolio_visited_this_session"
    if (!sessionStorage.getItem(SESSION_KEY)) {
      const next = current + 1
      localStorage.setItem(STORAGE_KEY, String(next))
      sessionStorage.setItem(SESSION_KEY, "1")
      setCount(next)
    } else {
      setCount(current)
    }
  }, [seed])

  return count
}

export default function Footer() {
  const visits = useVisitorCount(127)

  return (
    <footer className="bg-[#f6f4ef] py-8 border-t border-[#e5e3dc] dark:bg-[#1C1F1E] dark:border-[#323735]">
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">

        <p className="text-sm text-gray-500 dark:text-[#7C857F]">
          © {new Date().getFullYear()} Nikita Sachan — Built with clarity and care.
        </p>

        {/* Visit counter */}
        <div className="flex items-center gap-1.5 text-xs text-gray-400 dark:text-[#5A6560] select-none">
          <Eye size={13} />
          <span>{visits.toLocaleString()} visits</span>
        </div>

      </div>
    </footer>
  )
}
