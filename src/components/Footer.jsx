export default function Footer() {
  return (
    <footer className="bg-[#f6f4ef] py-8 border-t border-[#e5e3dc] dark:bg-[#1C1F1E] dark:border-[#323735]">
      <p className="text-center text-sm text-gray-500 dark:text-[#7C857F]">
        © {new Date().getFullYear()} Nikita Sachan — Built with clarity and care.
      </p>
    </footer>
  )
}