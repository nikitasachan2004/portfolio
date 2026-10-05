const experiences = [
  {
    role: "Web Development Intern",
    company: "InAmigos Foundation",
    period: "May – Jun 2026",
    bullets: [
      "Delivered responsive React components reducing page load time by 43% for the foundation's platform.",
      "Tested 5+ REST API endpoints; identified and fixed bugs across frontend and backend modules.",
      "Completed 3+ frontend features across a 4-week internship using Git branching, code reviews, and iterative testing.",
    ],
  },
  {
    role: "AI Data Analytics Intern",
    company: "InAmigos Foundation",
    period: "Jun – Jul 2026",
    bullets: [
      "Analysed datasets using Python, Pandas, and NumPy; performed EDA to surface key patterns and insights.",
      "Built Matplotlib and Seaborn visualizations to communicate findings and support reporting workflows.",
      "Applied data preprocessing, feature engineering, and statistical analysis across analytics tasks.",
    ],
  },
]

export default function Experience() {
  return (
    <section id="experience" className="bg-[#fbfaf7] py-24 dark:bg-[#202423]">
      <div className="max-w-4xl mx-auto px-6">

        <h2
          className="text-3xl font-semibold text-gray-800 mb-4 dark:text-[#E7ECE8]"
          style={{ fontFamily: "Playfair Display" }}
        >
          Experience
        </h2>

        <p className="text-gray-600 mb-12 max-w-xl dark:text-[#A9B2AC]">
          Places where I've turned learning into something real.
        </p>

        <div className="flex flex-col gap-8">
          {experiences.map((exp, i) => (
            <div
              key={i}
              className="relative pl-5 border-l-2 border-[#c7d2c3] dark:border-[#323938]"
            >
              {/* dot */}
              <span className="absolute -left-[5px] top-1.5 w-2 h-2 rounded-full bg-[#8FA78F] dark:bg-[#8FA78F]" />

              <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1 mb-3">
                <div>
                  <h3 className="text-base font-semibold text-gray-800 dark:text-[#E6ECE8]">
                    {exp.role}
                  </h3>
                  <p className="text-sm text-[#6f846d] dark:text-[#8FA78F]">
                    {exp.company}
                  </p>
                </div>
                <span className="text-xs text-gray-400 dark:text-[#5A6560] shrink-0">
                  {exp.period}
                </span>
              </div>

              <ul className="space-y-1.5">
                {exp.bullets.map((b, j) => (
                  <li
                    key={j}
                    className="text-sm text-gray-600 leading-relaxed dark:text-[#A8B2AC] flex gap-2"
                  >
                    <span className="mt-1.5 w-1 h-1 rounded-full bg-[#8FA78F] shrink-0" />
                    {b}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
