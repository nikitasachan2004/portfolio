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
  return (
    <>
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