import { Suspense, useRef } from "react"
import { Canvas, useFrame } from "@react-three/fiber"
import { useGLTF, Center, OrbitControls } from "@react-three/drei"

const educationItems = [
  {
    year: "2023 — 2027",
    institution: "Manipal University Jaipur, Rajasthan, India",
    details: [
      "B.Tech in Computer Science and Engineering",
      "Specialization: Artificial Intelligence & Machine Learning",
    ],
  },
  {
    year: "2023",
    institution: "Carmel Convent Sr. Sec. School (CBSE)",
    details: ["Class XII"],
  },
  {
    year: "2021",
    institution: "Carmel Convent Sr. Sec. School (CBSE)",
    details: ["Class X"],
  },
]

const certifications = [
  {
    organization: "IBM",
    items: ["Generative AI: Introduction and Applications"],
  },
  {
    organization: "Microsoft",
    items: ["Azure AI Fundamentals (AI Services, Computer Vision)"],
  },
  {
    organization: "NPTEL",
    items: ["Design and Analysis of Algorithms", "Introduction to Machine Learning"],
  },
  {
    organization: "Red Hat",
    items: ["System Administration I (RH124)", "System Administration II (RH134)"],
  },
  {
    organization: "Oracle",
    items: ["Database Programming with PL/SQL"],
  },
  {
    organization: "Cisco Networking Academy",
    items: ["Python Programming Essentials"],
  },
]

function MarillModel() {
  const { scene } = useGLTF("/marill.glb")
  const groupRef = useRef()

  useFrame(({ clock }) => {
    if (groupRef.current) {
      groupRef.current.position.y = Math.sin(clock.elapsedTime * 0.8) * 0.04
    }
  })

  return (
    <Center>
      <group ref={groupRef}>
        <primitive
          object={scene}
          scale={5}
          position={[0, -0.25, 0.5]}
          rotation={[0, Math.PI/2, 0]}
        />
      </group>
    </Center>
  )
}

useGLTF.preload("/marill.glb")

export default function Credentials() {
  return (
    <section id="credentials" className="bg-[#fbfaf7] py-24 dark:bg-[#202423]">
      <div className="max-w-6xl mx-auto px-6">
        <h2
          className="text-3xl font-semibold text-gray-800 mb-12 dark:text-[#E7ECE8]"
          style={{ fontFamily: "Playfair Display" }}
        >
          Education & Certifications
        </h2>

        <div className="grid lg:grid-cols-2 gap-8">
          <div className="flex flex-col">
            <h3 className="text-sm tracking-[0.14em] uppercase text-gray-500 mb-5 dark:text-[#7F8A83]">
              Education
            </h3>

            <div className="relative pl-10">
              <div className="absolute left-[9px] top-2 bottom-2 w-px bg-[#e5e3dc] dark:bg-[#323735]" />

              <div className="space-y-10">
                {educationItems.map((item) => (
                  <article key={`${item.year}-${item.institution}`} className="relative group">
                    <span className="absolute -left-10 top-1.5 h-[10px] w-[10px] rounded-full bg-[#7c8f7a] shadow-[0_0_0_3px_rgba(124,143,122,0.14)] transition-all duration-300 group-hover:scale-110 group-hover:shadow-[0_0_0_5px_rgba(124,143,122,0.18)] dark:bg-[#8A9F8A] dark:shadow-[0_0_0_3px_rgba(138,159,138,0.18)] dark:group-hover:shadow-[0_0_0_5px_rgba(138,159,138,0.22)]" />

                    <p className="text-xs font-medium text-gray-500 dark:text-[#8B958F]">{item.year}</p>
                    <h4 className="text-base font-medium text-gray-800 mt-1 dark:text-[#E7ECE8]">{item.institution}</h4>
                    <div className="mt-2 space-y-1 text-sm text-gray-600 dark:text-[#A9B2AC]">
                      {item.details.map((line) => (
                        <p key={line}>{line}</p>
                      ))}
                    </div>
                  </article>
                ))}
              </div>
            </div>

            {/* Marill 3D Model — fills blank space below education */}
            <div className="flex-1 flex items-center justify-center mt-8" style={{ minHeight: "280px" }}>
              <Canvas camera={{ position: [0, 0.8, 2.8], fov: 38 }} gl={{ alpha: true }} style={{ width: "100%", height: "100%", background: "transparent" }}>
                <ambientLight intensity={1.5} />
                <directionalLight position={[3, 5, 4]} intensity={1.2} />
                <directionalLight position={[-3, -2, -2]} intensity={0.5} />
                <Suspense fallback={null}>
                  <MarillModel />
                </Suspense>
                <OrbitControls enableZoom={false} enablePan={false} enableRotate={true} />
              </Canvas>
            </div>
          </div>

          <div>
            <h3 className="text-sm tracking-[0.14em] uppercase text-gray-500 mb-5 dark:text-[#7F8A83]">
              Certifications
            </h3>

            <div className="space-y-4">
              {certifications.map((entry) => (
                <article
                  key={entry.organization}
                  className="bg-[#fbfaf7] border border-[#e5e3dc] rounded-xl p-5 shadow-sm dark:bg-[#242927] dark:border-[#323735] dark:shadow-[0_10px_25px_rgba(0,0,0,0.35)]"
                >
                  <p className="text-sm font-medium text-gray-800 mb-2 dark:text-[#E7ECE8]">{entry.organization}</p>
                  <div className="space-y-1 text-sm text-gray-600 dark:text-[#A9B2AC]">
                    {entry.items.map((certification) => (
                      <p key={certification}>{certification}</p>
                    ))}
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}