import Hero from "./sections/Hero"
import About from "./sections/About"
import Experience from "./sections/Experience"
import Projects from "./sections/Projects"
import Skills from "./sections/Skills"
import Credentials from "./sections/Credentials"
import Contact from "./sections/Contact"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"

export default function App() {
  const handleBackToNew = () => {
    if (window.parent && window.parent !== window) {
      window.parent.postMessage({ type: 'BACK_TO_NEW' }, '*');
    } else {
      window.location.href = '/';
    }
  };

  return (
    <>
      <button
        type="button"
        onClick={handleBackToNew}
        aria-label="Back to new portfolio"
        className="fixed top-20 right-6 z-50 flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-white/95 text-gray-800 border border-[#c7d2c3] shadow-md hover:bg-white hover:scale-105 transition-all dark:bg-[#242927]/95 dark:text-[#E6ECE8] dark:border-[#3a4441] cursor-pointer"
      >
        <span>←</span>
        <span>Back to new portfolio</span>
      </button>

      <Navbar />
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Skills />
      <Credentials />
      <Contact />
      <Footer />
    </>
  )
}