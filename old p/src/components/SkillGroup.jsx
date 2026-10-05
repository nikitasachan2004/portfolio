export default function SkillGroup({ title, skills }) {
  return (
    <div className="bg-[#fbfaf7] border border-[#e5e3dc] rounded-2xl p-6 transition hover:-translate-y-1 hover:shadow-md dark:bg-[#262C2A] dark:border-[#323938] dark:hover:shadow-[inset_0_0_0_1px_rgba(143,167,143,0.20),0_10px_25px_rgba(0,0,0,0.35)] relative after:content-[''] after:absolute after:top-4 after:bottom-4 after:left-0 after:w-[2px] after:bg-transparent dark:hover:after:bg-[#8FA78F]">
      <h3 className="text-lg font-medium text-gray-800 mb-4 dark:text-[#E6ECE8]">
        {title}
      </h3>

      <div className="flex flex-wrap gap-2">
        {skills.map((skill, index) => (
          <span
            key={index}
            className="
                text-sm px-3 py-1 rounded-full
                border border-[#c7d2c3] text-[#6f846d]
                transition
                hover:-translate-y-0.5
                hover:shadow-sm
                hover:bg-[#f1f4ef]
                cursor-default
                dark:border-[#323938] dark:text-[#8FA78F]
                dark:hover:bg-[#2B332F]
                dark:hover:shadow-[0_10px_20px_rgba(0,0,0,0.35)]
            "
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  )
}