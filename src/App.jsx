import Hero from "./sections/Hero"
import Projects from "./sections/Projects"
import About from "./sections/About"
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
      <Projects />
      <About />
      <Skills />
      <Credentials />
      <Contact />
      <Footer />
    </>
  )
}