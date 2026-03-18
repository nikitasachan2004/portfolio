import ProjectCard from "../components/ProjectCard"

export default function Projects() {
  return (
    <section id="projects" className="bg-[#f6f4ef] py-24 dark:bg-[#1C1F1E]">
      <div className="max-w-6xl mx-auto px-6">

        <h2 className="text-3xl font-semibold text-gray-800 mb-4 dark:text-[#E7ECE8]" style={{fontFamily: 'Playfair Display'}}>
          Things I’ve Built
        </h2>

        <p className="text-gray-600 mb-12 max-w-xl dark:text-[#A9B2AC]">
          Projects focused on solving real problems through AI, data, and thoughtful engineering.
        </p>

        <div className="grid md:grid-cols-2 gap-8">

          <ProjectCard
            title="VayuDrishti — Air Quality Prediction"
            description="An AI-powered system that predicts urban air quality using satellite imagery, weather variables, and ground sensor data. It combines spatio-temporal features with machine learning models to forecast AQI trends and support data-driven environmental monitoring."
            techStack={["Python", "Scikit-learn", "ERA5", "INSAT AOD", "Data Visualization"]}
            github="https://github.com/nishant-gupta911/VayuDrishtii"
            demo="https://youtu.be/046abcHkaLs?si=x4yDpVYfRU4v6uGW"
          />

          <ProjectCard
            title="CookAI — AI Recipe Generator"
            description="An intelligent cooking assistant that generates recipes based on available ingredients, dietary preferences, and cooking time. The system uses NLP and recommendation techniques to suggest personalized meal options while making meal planning faster and reducing food waste."
            techStack={["Python", "NLP", "FastAPI", "React", "Recommendation System"]}
            github="https://github.com/nikitasachan2004/CookAI"
          />

          <ProjectCard
            title="KrishiMandi AI — Market Intelligence for Farmers"
            description="A predictive analytics system that analyzes historical mandi prices and crop supply trends. The platform helps farmers and stakeholders understand market patterns, compare seasonal movement, and make more informed selling decisions."
            techStack={["Python", "Pandas", "NumPy", "Scikit-learn", "Data Visualization"]}
            github="https://github.com/nikitasachan2004/KrishiMind_SustainAi"
          />

          <ProjectCard
            title="Smart Inventory Management"
            description="An AI-driven inventory analytics platform designed to improve demand forecasting and stock planning. It analyzes sales trends and inventory data to surface actionable insights through dashboards that help businesses reduce waste and manage stock more efficiently."
            techStack={["Data Analytics", "Dashboard Design", "Prototyping"]}
            github="https://github.com/nishant-gupta911/Smart_Inventory_Management_System"
            demo="https://youtu.be/FIwXLg6SQ70?si=39Veg3gtqKnq80eX"
          />

        </div>

      </div>
    </section>
  )
}

