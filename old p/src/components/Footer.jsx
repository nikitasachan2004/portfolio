import { useEffect, useState } from "react"
import { Eye } from "lucide-react"

export default function Footer() {
  const [count, setCount] = useState(270)

  useEffect(() => {
    fetch("https://hits.sh/nikitasachan-portfolio.json")
      .then((r) => r.json())
      .then((data) => setCount(Number(data.total) + 269))
      .catch(() => {})
  }, [])

  return (
    <footer className="bg-[#f6f4ef] py-8 border-t border-[#e5e3dc] dark:bg-[#1C1F1E] dark:border-[#323735]">
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">

        <p className="text-sm text-gray-500 dark:text-[#7C857F]">
          © {new Date().getFullYear()} Nikita Sachan — Built with clarity and care.
        </p>

        <div className="flex items-center gap-1.5 text-xs text-gray-400 dark:text-[#5A6560] select-none">
          <Eye size={13} />
          <span>{count.toLocaleString()} visits</span>
        </div>

      </div>
    </footer>
  )
}
