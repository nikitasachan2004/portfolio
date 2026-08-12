import ProjectCard from "../components/ProjectCard"

export default function Projects() {
  return (
    <section id="projects" className="bg-[#f6f4ef] py-24 dark:bg-[#1C1F1E]">
      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-3xl font-semibold text-gray-800 mb-4 dark:text-[#E7ECE8]" style={{fontFamily: 'Playfair Display'}}>
          Things I've Built
        </h2>

        <p className="text-gray-600 mb-12 max-w-xl dark:text-[#A9B2AC]">
          Projects focused on solving real problems through AI, data, and thoughtful engineering.
        </p>

        <div className="grid md:grid-cols-2 gap-8">

          <ProjectCard
            title="VayuDrishti — Air Quality Prediction"
            description="Air quality is invisible until it isn't. VayuDrishti started as a question: can we predict how bad the air will get before people feel it? I pulled together satellite imagery, ERA5 weather data, and ground sensor readings, then trained ML models to forecast AQI trends across urban areas. It's the kind of tool I wish more cities actually used."
            techStack={["Python", "Scikit-learn", "ERA5", "INSAT AOD", "Data Visualization"]}
            github="https://github.com/nishant-gupta911/VayuDrishtii"
            demo="https://youtu.be/046abcHkaLs?si=x4yDpVYfRU4v6uGW"
          />

          <ProjectCard
            title="CookAI — AI Recipe Generator"
            description="How many times have you stared at random ingredients in your fridge with no idea what to make? CookAI fixes that. Tell it what you have, your dietary preferences, and how much time you've got and it figures out a recipe for you. Built with NLP and a recommendation engine, it actually tries to understand what you'd enjoy, not just what's technically possible."
            techStack={["Python", "NLP", "FastAPI", "React", "Recommendation System"]}
            github="https://github.com/nikitasachan2004/CookAI"
          />

          <ProjectCard
            title="KrishiMandi AI — Market Intelligence for Farmers"
            description="Farmers in India often sell at a loss simply because they don't know when or where prices are good. KrishiMandi AI digs into historical mandi price data and crop supply patterns to surface those trends in a way that's actually readable. It's not a flashy product, it's a practical one, built for people who make real decisions based on market information."
            techStack={["Python", "Pandas", "NumPy", "Scikit-learn", "Data Visualization"]}
            github="https://github.com/nikitasachan2004/KrishiMind_SustainAi"
          />

          <ProjectCard
            title="Smart Inventory Management"
            description="Overstocking wastes money. Understocking loses sales. This project tackles both. I built an analytics platform that looks at sales trends and inventory patterns to help businesses forecast demand more accurately. The dashboards make it easy to spot what's going wrong before it becomes a real problem, less guesswork, better decisions."
            techStack={["Data Analytics", "Dashboard Design", "Prototyping"]}
            github="https://github.com/nishant-gupta911/Smart_Inventory_Management_System"
            demo="https://youtu.be/FIwXLg6SQ70?si=39Veg3gtqKnq80eX"
          />

          <ProjectCard
            title="Chat Analyzer — NLP-Powered Chat Insights"
            description="Ever wondered what your WhatsApp conversations actually look like from the outside? Chat Analyzer lets you upload a chat export (or even a screenshot) and runs it through three NLP models one for sentiment, one for emotions, one for toxicity. You get a breakdown by sender, visual dashboards, and pattern flags. It started as curiosity and turned into something genuinely interesting to play with."
            techStack={["Python", "Streamlit", "Transformers", "PyTorch", "EasyOCR", "Plotly", "Pandas"]}
            github="https://github.com/nikitasachan2004/chat-analyzer-ai"
          />

          <ProjectCard
            title="PromptQuest — Infinite Lore"
            description="What if you could walk into any story you imagined? PromptQuest lets you do exactly that. Write your own scenario, pick a genre — fantasy, horror, sci-fi, whatever you're in the mood for and an AI game master takes it from there. Every turn gives you three branching choices, a health bar, an inventory, and ASCII art that sets the scene. No two playthroughs are ever the same, because you're not following a script you're writing one."
            techStack={["React", "Vite", "Tailwind CSS", "FastAPI", "Pydantic", "Uvicorn", "NVIDIA NIM"]}
            github="https://github.com/nikitasachan2004/promptquest-infinite-lore"
          />

          <ProjectCard
            title="Face Emotion Detector — Real-Time Emotion Recognition"
            description="Faces say a lot more than words do. FaceRead is a deep learning system I built from the ground up to read exactly that classifying 8 human emotions (anger, contempt, disgust, fear, happiness, neutral, sadness, surprise) straight from a webcam feed in real time. Under the hood, it's a hybrid model: a custom CNN fused with MobileNetV2 through a two-stage fine-tuning process. It wasn't just about getting the accuracy right I went through the full pipeline: deduplicating the dataset, balancing classes, generating confusion matrices, and wrapping everything in a Streamlit dashboard where you can upload a photo, use your browser webcam, or just explore the model's performance through interactive charts."
            techStack={["Python", "TensorFlow", "OpenCV", "Streamlit", "MobileNetV2"]}
            github="https://github.com/nikitasachan2004/face-emotion-recognition"
          />

        </div>

      </div>
    </section>
  )
}
