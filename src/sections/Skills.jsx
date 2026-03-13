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
            title="Programming Languages"
            skills={["Python", "Java", "SQL", "C++", "C"]}
          />

          <SkillGroup
            title="Machine Learning & Deep Learning"
            skills={["scikit-learn", "TensorFlow", "PyTorch", "Computer Vision", "Generative AI", "Model Evaluation", "Feature Engineering"]}
          />

          <SkillGroup
            title="Data Engineering & Analysis"
            skills={["Pandas", "NumPy", "Matplotlib", "Data Preprocessing", "Statistical Analysis"]}
          />

          <SkillGroup
            title="Databases"
            skills={[" MySQL", " PostgreSQL"]}
          />

          <SkillGroup
            title="Backend & APIs"
            skills={["FastAPI", "Node.js", "REST APIs"]}
          />

          <SkillGroup
            title="Frontend"
            skills={["React", "JavaScript", "HTML", "CSS"]}
          />

          <SkillGroup
            title="Tools & Cloud"
            skills={["Git", "GitHub", "Docker", "Jupyter Notebook", "Linux", "Azure AI", "Firebase", "Streamlit"]}
          />

        </div>

      </div>
    </section>
  )
}