import { Mail, Github, Linkedin } from "lucide-react"

export default function Contact() {
  return (
    <section id="contact" className="bg-[#f6f4ef] py-28 dark:bg-[#1C1F1E]">
      <div className="max-w-3xl mx-auto px-6 text-center">

        <h2
          className="text-3xl font-semibold text-gray-800 mb-4 dark:text-[#E7ECE8]"
          style={{ fontFamily: "Playfair Display" }}
        >
          Find Me
        </h2>

        <p className="text-gray-600 mb-12 dark:text-[#A9B2AC]">
          Open to meaningful conversations, collaborations, and learning opportunities.
        </p>

        <div className="bg-[#fbfaf7] border border-[#e5e3dc] rounded-2xl p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-md inline-block dark:bg-[#242927] dark:border-[#323735] dark:shadow-[0_10px_25px_rgba(0,0,0,0.35)] dark:hover:shadow-[0_10px_25px_rgba(0,0,0,0.35)] border-l-[2px] border-l-transparent dark:hover:border-l-[#8A9F8A]">

          <div className="flex flex-col gap-6 text-left">

            {/* Email */}
            <a
              href="mailto:nikitasachan36@gmail.com"
              className="group flex items-center gap-4 text-gray-700 hover:text-gray-900 transition dark:text-[#A9B2AC] dark:hover:text-[#E7ECE8]"
            >
              <span className="bg-[#eaf0ea] p-3 rounded-full dark:bg-[#202423]">
                <Mail size={18} className="text-[#6f846d] dark:text-[#7C857F] dark:group-hover:text-[#8A9F8A]" />
              </span>
              <span className="text-sm sm:text-base">
                nikitasachan36@gmail.com
              </span>
            </a>

            {/* GitHub */}
            <a
              href="https://github.com/nikitasachan2004"
              target="_blank"
              rel="noreferrer"
              className="group flex items-center gap-4 text-gray-700 hover:text-gray-900 transition dark:text-[#A9B2AC] dark:hover:text-[#E7ECE8]"
            >
              <span className="bg-[#eaf0ea] p-3 rounded-full dark:bg-[#202423]">
                <Github size={18} className="text-[#6f846d] dark:text-[#7C857F] dark:group-hover:text-[#8A9F8A]" />
              </span>
              <span className="text-sm sm:text-base">
                github.com/nikitasachan2004
              </span>
            </a>

            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/in/nikita-sachan-1ba900282/"
              target="_blank"
              rel="noreferrer"
              className="group flex items-center gap-4 text-gray-700 hover:text-gray-900 transition dark:text-[#A9B2AC] dark:hover:text-[#E7ECE8]"
            >
              <span className="bg-[#eaf0ea] p-3 rounded-full dark:bg-[#202423]">
                <Linkedin size={18} className="text-[#6f846d] dark:text-[#7C857F] dark:group-hover:text-[#8A9F8A]" />
              </span>
              <span className="text-sm sm:text-base">
                linkedin.com/in/nikita-sachan
              </span>
            </a>

          </div>
        </div>

      </div>
    </section>
  )
}