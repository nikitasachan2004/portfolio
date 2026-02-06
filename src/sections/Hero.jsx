export default function Hero() {
  return (
    <section id="hero" className="relative overflow-hidden min-h-screen bg-[#f6f4ef] flex items-center pt-16 dark:bg-[#1B1F1E] dark:before:content-[''] dark:before:absolute dark:before:inset-0 dark:before:pointer-events-none dark:before:bg-[radial-gradient(circle_at_center,rgba(143,167,143,0.04),transparent_60%)]">
      <div className="absolute -top-72 -right-72 w-[900px] h-[900px] bg-[#cfdccf] rounded-full blur-[160px] opacity-45 z-0 dark:bg-[#232827] dark:opacity-20"></div>
      <div className="relative z-10 max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">

        <div>
          <h1 className="text-4xl sm:text-5xl font-semibold text-gray-800 mb-6 dark:bg-gradient-to-r dark:from-[#E6ECE8] dark:via-[#D9E2DA] dark:to-[#8FA78F] dark:bg-clip-text dark:text-transparent" style={{fontFamily: 'Playfair Display'}}>
            Hello. I’m Nikita.
          </h1>

          <p className="text-base sm:text-lg text-gray-600 mb-6 dark:text-[#A8B2AC]">
            I design and build thoughtful AI-driven systems — with clarity, responsibility, and real-world impact in mind.
          </p>

          <p className="text-sm text-gray-500 mb-8 dark:text-[#7B857F]">
            Computer Science (AI & ML) · Builder · Learner · Leader
          </p>

          <a href="#projects" className="inline-block border border-[#7c8f7a] text-[#7c8f7a] px-6 py-3 rounded-lg hover:bg-[#7c8f7a] hover:text-white transition dark:border-[#8FA78F] dark:text-[#8FA78F] dark:hover:bg-[#2B332F] dark:hover:text-[#E6ECE8] focus:outline-none focus:ring-2 focus:ring-[#8FA78F]/40 focus:ring-offset-0">
            View My Work
          </a>
        </div>

        <div className="hidden md:flex justify-center">
          <div className="w-64 h-64 rounded-full bg-[#dfe6da] dark:bg-[#232827]" />
        </div>

      </div>
    </section>
  )
}
