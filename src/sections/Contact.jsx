import { Mail, Github, Linkedin } from "lucide-react"

export default function Contact() {
  return (
    <section id="contact" className="bg-[#f6f4ef] py-28 dark:bg-[#1C1F1E]">
      <div className="max-w-4xl mx-auto px-6 text-center">

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

            {/* LeetCode */}
            <a
              href="https://leetcode.com/u/nikitasachan_/"
              target="_blank"
              rel="noreferrer"
              className="group flex items-center gap-4 text-gray-700 hover:text-gray-900 transition dark:text-[#A9B2AC] dark:hover:text-[#E7ECE8]"
            >
              <span className="bg-[#eaf0ea] p-3 rounded-full dark:bg-[#202423]">
                <svg
                  viewBox="0 0 24 24"
                  width="18"
                  height="18"
                  fill="currentColor"
                  className="text-[#6f846d] dark:text-[#7C857F] dark:group-hover:text-[#8A9F8A]"
                >
                  <path d="M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 6.226l-3.854 4.126a5.266 5.266 0 0 0-1.209 2.104 5.35 5.35 0 0 0-.125.513 5.527 5.527 0 0 0 .062 2.362 5.83 5.83 0 0 0 .349 1.017 5.938 5.938 0 0 0 1.271 1.818l4.277 4.193.039.038c2.248 2.165 5.852 2.133 8.063-.074l2.396-2.392c.54-.54.54-1.414.003-1.955a1.378 1.378 0 0 0-1.951-.003l-2.396 2.392a3.021 3.021 0 0 1-4.205.038l-.02-.019-4.276-4.193c-.652-.64-.972-1.469-.948-2.263a2.68 2.68 0 0 1 .066-.523 2.545 2.545 0 0 1 .619-1.164L9.13 8.114c1.058-1.134 3.204-1.27 4.43-.278l3.501 2.831c.593.48 1.461.387 1.94-.207a1.384 1.384 0 0 0-.207-1.943l-3.5-2.831c-.8-.647-1.766-1.045-2.774-1.202l2.015-2.158A1.384 1.384 0 0 0 13.483 0zm-2.866 12.815a1.38 1.38 0 0 0-1.38 1.382 1.38 1.38 0 0 0 1.38 1.382H20.79a1.38 1.38 0 0 0 1.38-1.382 1.38 1.38 0 0 0-1.38-1.382z" />
                </svg>
              </span>
              <span className="text-sm sm:text-base">
                leetcode.com/u/nikitasachan_
              </span>
            </a>

          </div>
        </div>

      </div>
    </section>
  )
}