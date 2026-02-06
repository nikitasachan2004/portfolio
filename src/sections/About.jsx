export default function About() {
  return (
    <section id="about" className="bg-[#fbfaf7] py-24 dark:bg-[#202423]">
      <div className="max-w-3xl mx-auto px-6">

        <h2
          className="text-3xl font-semibold text-gray-800 mb-8 dark:text-[#E7ECE8]"
          style={{ fontFamily: "Playfair Display" }}
        >
          How I Think
        </h2>

        <div className="text-gray-600 space-y-5 leading-relaxed dark:text-[#A9B2AC]">
          <p>
            I’m intentional about how I learn and how I build.
          </p>

          <p>
            I prefer understanding systems deeply before optimizing them. I value
            clarity over speed, foundations over shortcuts, and thoughtful design
            over unnecessary complexity.
          </p>

          <p>
            Whether I’m working with data, models, or interfaces, I aim to create
            solutions that are technically sound, ethically grounded, and genuinely
            useful.
          </p>
        </div>

      </div>
    </section>
  )
}