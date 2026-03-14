import { useEffect, useRef, Suspense } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { useGLTF, Center, OrbitControls } from "@react-three/drei";

function BulbasaurModel() {
  const { scene } = useGLTF("/bulbasaur.glb");
  const groupRef = useRef();

  useFrame(({ clock }) => {
    if (groupRef.current) {
      groupRef.current.position.y = Math.sin(clock.elapsedTime) * 0.05;
    }
  });

  return (
    <Center>
      <group ref={groupRef}>
        <primitive
      object={scene}
      scale={0.5}
      position={[0, -0.35, 0]}
      rotation={[-0.25, 0.2, 0]}
    />

      </group>
    </Center>
  );
}

export default function Hero() {
  const typingRef = useRef(null);

  useEffect(() => {
    const fullText = "Hello! I'm Nikita.";
    let index = 0;

    function type() {
      if (typingRef.current && index <= fullText.length) {
        typingRef.current.textContent = fullText.slice(0, index);
        index++;
        setTimeout(type, 80);
      }
    }

    type();
  }, []);

  return (
    <section
      id="hero"
      className="relative overflow-hidden min-h-screen bg-[#f6f4ef] flex items-center pt-16 dark:bg-[#1C1F1E]"
    >
      <div className="absolute -top-72 -right-72 w-[900px] h-[900px] bg-[#cfdccf] rounded-full blur-[160px] opacity-45 z-0 dark:bg-[#232827] dark:opacity-15"></div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">

        {/* LEFT SIDE TEXT */}
        <div>
          <h1
            className="text-4xl sm:text-5xl font-semibold text-gray-800 dark:text-[#E7ECE8] mb-6"
            style={{ fontFamily: "Playfair Display" }}
          >
            <span ref={typingRef}></span>
          </h1>

          <p className="text-base sm:text-lg text-gray-600 dark:text-[#A9B2AC] mb-6">
            I design and build thoughtful AI-driven systems — with clarity,
            responsibility, and real-world impact in mind.
          </p>

          <p className="text-sm text-gray-500  mb-8">
            Computer Science (AI & ML) · Builder · Learner · Leader
          </p>

          <a
            href="#projects"
            className="inline-block border border-[#7c8f7a] text-[#7c8f7a] px-6 py-3 rounded-lg hover:bg-[#7c8f7a] hover:text-white transition"
          >
            View My Work
          </a>
        </div>

        {/* RIGHT SIDE MODEL */}
        <div className="hidden md:flex justify-center items-center w-full" style={{ height: '450px' }}>
          <Canvas camera={{ position: [0, 0.2, 4.5], fov: 40 }}>
            <ambientLight intensity={1} />
            <directionalLight position={[3, 5, 4]} intensity={1.2} />
            <directionalLight position={[-3, -2, -2]} intensity={0.4} />
            <Suspense fallback={null}>
              <BulbasaurModel />
            </Suspense>
            <OrbitControls enableZoom={false} enablePan={false} enableRotate={true} />
          </Canvas>
        </div>
      </div>
    </section>
  );
}

useGLTF.preload("/bulbasaur.glb");