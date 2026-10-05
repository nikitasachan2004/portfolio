import { SparklesText } from "@/components/ui/sparkles-text"

export default function About() {
  return (
    <section id="about" className="bg-[#fbfaf7] py-24 dark:bg-[#202423]">
      <div className="max-w-4xl mx-auto px-6">

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
            I'm the kind of person who needs to understand something fully before touching it.
            Not because I'm slow but because I've learned that most bugs, bad designs, and
            wasted hours come from skipping that step. So I read, I draw things out, I ask
            "why does this exist?" before asking "how do I build it?"
          </p>

          <p>
            My work lives at the crossroads of AI, data, and design which sounds like a
            buzzword salad, but in practice it just means I care about the full picture.
            A model that works but confuses everyone isn't done. A dashboard that's pretty
            but misleading is worse than no dashboard. I want things to be correct
            <em> and</em> clear.
          </p>

          <p>
            I'm also drawn to problems that feel a bit too messy to automate farmer income,
            air quality in chaotic cities, the way people talk to each other. There's something
            satisfying about finding a clean technical thread through something genuinely
            complicated.
          </p>

          <p>
            Outside of code, I think in stories. Some of my best architecture decisions have
            come from explaining a system to a friend who doesn't code. If I can't make it
            make sense to them, I probably don't understand it well enough myself.
          </p>
        </div>

      </div>
    </section>
  )
}
