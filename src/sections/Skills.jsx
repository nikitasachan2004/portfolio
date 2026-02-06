import SkillGroup from "../components/SkillGroup"

export default function Skills() {
  return (
    <section id="skills" className="bg-[#f6f4ef] py-24 dark:bg-[#1C1F1E]">
      <div className="max-w-6xl mx-auto px-6">

        <h2
          className="text-3xl font-semibold text-gray-800 mb-12 dark:text-[#E7ECE8]"
          style={{ fontFamily: "Playfair Display" }}
        >
          Skills
        </h2>

        <div className="grid md:grid-cols-2 gap-8">

          <SkillGroup
            title="Languages"
            skills={["Python", "Java", "SQL", "C++"]}
          />

          <SkillGroup
            title="Machine Learning & AI"
            skills={["scikit-learn", "TensorFlow", "PyTorch", "Computer Vision"]}
          />

          <SkillGroup
            title="Data & Visualization"
            skills={["Pandas", "NumPy", "Matplotlib", "Streamlit", "Tableau"]}
          />

          <SkillGroup
            title="Development"
            skills={["React", "Node.js", "FastAPI", "Firebase", "HTML", "CSS", "JavaScript"]}
          />

          <SkillGroup
            title="Tools"
            skills={["Git/GitHub", "Azure AI", "Figma", "Chart.js", "Vercel"]}
          />

        </div>

      </div>
    </section>
  )
}