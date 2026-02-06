export default function ProjectCard({ title, problem, approach, tech, outcome, github, demo }) {
  return (
    <div className="bg-[#fbfaf7] border border-[#e5e3dc] rounded-2xl p-6 transition hover:-translate-y-1 hover:shadow-md dark:bg-[#262C2A] dark:border-[#323938] dark:hover:shadow-[inset_0_0_0_1px_rgba(143,167,143,0.22),0_10px_25px_rgba(0,0,0,0.35)] relative after:content-[''] after:absolute after:top-4 after:bottom-4 after:left-0 after:w-[2px] after:bg-transparent dark:hover:after:bg-[#8FA78F]">
      <h3 className="text-xl font-semibold text-gray-800 mb-3 dark:text-[#E6ECE8]">
        {title}
      </h3>

      <p className="text-sm text-gray-600 mb-3 dark:text-[#A8B2AC]">
        <span className="font-medium text-gray-700 dark:text-[#E6ECE8]">Problem:</span> {problem}
      </p>

      <p className="text-sm text-gray-600 mb-3 dark:text-[#A8B2AC]">
        <span className="font-medium text-gray-700 dark:text-[#E6ECE8]">Approach:</span> {approach}
      </p>

      <p className="text-sm text-gray-600 mb-3 dark:text-[#A8B2AC]">
        <span className="font-medium text-gray-700 dark:text-[#E6ECE8]">Tech:</span> {tech}
      </p>

      <p className="text-sm text-gray-600 dark:text-[#A8B2AC]">
        <span className="font-medium text-gray-700 dark:text-[#E6ECE8]">Outcome:</span> {outcome}
      </p>
      {(github || demo) && (
        <div className="mt-5 flex gap-3 flex-wrap">
          {github && (
            <a
              href={github}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 text-sm text-[#6f846d] border border-[#c7d2c3] px-4 py-2 rounded-lg transition hover:bg-[#eaf0ea] hover:-translate-y-0.5 hover:shadow-sm dark:text-[#8FA78F] dark:border-[#323938] dark:hover:bg-[#2B332F] dark:hover:shadow-[0_10px_20px_rgba(0,0,0,0.35)] focus:outline-none focus:ring-2 focus:ring-[#8FA78F]/40 focus:ring-offset-0"
            >
              GitHub →
            </a>
          )}
          
          {demo && (
            <a
              href={demo}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 text-sm text-[#6f846d] border border-[#c7d2c3] px-4 py-2 rounded-lg transition hover:bg-[#eaf0ea] hover:-translate-y-0.5 hover:shadow-sm dark:text-[#8FA78F] dark:border-[#323938] dark:hover:bg-[#2B332F] dark:hover:shadow-[0_10px_20px_rgba(0,0,0,0.35)] focus:outline-none focus:ring-2 focus:ring-[#8FA78F]/40 focus:ring-offset-0"
            >
              Demo →
            </a>
          )}
        </div>
      )}
    </div>
  )
}