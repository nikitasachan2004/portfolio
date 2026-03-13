import { SparklesText } from "@/components/ui/sparkles-text"

export default function About() {
  return (
    <section id="about" className="bg-[#fbfaf7] py-24 dark:bg-[#202423]">
      <div className="max-w-3xl mx-auto px-6">

        <div className="mb-8" style={{ fontFamily: "Playfair Display" }}>
          <SparklesText
            text="How I Work"
            sparklesCount={7}
            className="text-3xl font-semibold text-gray-800 dark:text-[#E7ECE8]"
            colors={{ first: "#9E7AFF", second: "#FE8BBB" }}
          />
        </div>

        <div className="text-gray-600 space-y-5 leading-relaxed dark:text-[#A9B2AC]">
          <p>
            I’m drawn to problems that require patience and clear thinking. 
            Rather than rushing to tools or frameworks, I try to understand the system first — 
            how the pieces connect, where the real constraints are, and what actually matters.
          </p>

          <p>
            My work sits at the intersection of artificial intelligence, data, and 
            thoughtful design. I enjoy building systems that are not only technically 
            correct, but also understandable, responsible, and useful in real situations.
          </p>

          <p>
            Over time, I’ve learned that good engineering isn’t just about writing 
            code — it’s about making decisions carefully, communicating ideas clearly, 
            and building things that people can trust.
          </p>
        </div>

      </div>
    </section>
  )
}