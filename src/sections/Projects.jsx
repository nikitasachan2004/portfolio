import ProjectCard from "../components/ProjectCard"

export default function Projects() {
  return (
    <section id="projects" className="bg-[#f6f4ef] py-24 dark:bg-[#1C1F1E]">
      <div className="max-w-6xl mx-auto px-6">

        <h2 className="text-3xl font-semibold text-gray-800 mb-4 dark:text-[#E7ECE8]" style={{fontFamily: 'Playfair Display'}}>
          Selected Work
        </h2>

        <p className="text-gray-600 mb-12 max-w-xl dark:text-[#A9B2AC]">
          A few projects where I focused on depth, learning, and practical impact.
        </p>

        <div className="grid md:grid-cols-2 gap-8">

          <ProjectCard
            title="VayuDrishti — Air Quality Forecasting"
            problem="Urban air quality data is fragmented and difficult to interpret for timely decisions."
            approach="Built an end-to-end ML pipeline integrating satellite data, ground sensors, and weather variables using spatio-temporal features."
            tech="Python, scikit-learn, ERA5, INSAT AOD, Data Visualization"
            outcome="Strengthened my understanding of real-world data noise, feature engineering, and environmental AI systems."
            github="https://github.com/nishant-gupta911/VayuDrishtii"
            demo="https://youtu.be/046abcHkaLs?si=x4yDpVYfRU4v6uGW"
          />

          <ProjectCard
            title="Chest X-Ray Cancer Detection System"
            problem="Early lung cancer detection requires accurate, scalable, and explainable AI systems."
            approach="Designing a cloud-based AI workflow for medical image analysis with real-time inference."
            tech="PyTorch, TensorFlow, FastAPI, Cloud Deployment"
            outcome="Learning to balance performance with interpretability and ethical responsibility in healthcare AI."
            github="https://github.com/nikitasachan2004/ChestXRay-CancerDetection"
          />

          <ProjectCard
            title="Smart Inventory Management"
            problem="Retail food waste occurs due to poor demand forecasting and inventory planning."
            approach="Proposed an AI-driven inventory intelligence system supported by a decision-focused dashboard."
            tech="Data Analytics, Dashboard Design, Prototyping"
            outcome="Improved my ability to communicate technical ideas clearly to non-technical stakeholders."
            github="https://github.com/nishant-gupta911/Smart_Inventory_Management_System"
            demo="https://youtu.be/FIwXLg6SQ70?si=39Veg3gtqKnq80eX"
          />

        </div>

      </div>
    </section>
  )
}