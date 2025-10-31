import Header from '../components/Header'
import Hero from '../components/Hero'
import About from '../components/About'
import Experience from '../components/Experience'
import Projects from '../components/Projects'
import Skills from '../components/Skills'
import Contact from '../components/Contact'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <div className="text-slate-100 antialiased min-h-screen relative overflow-hidden">
      

      <Header />

      {/* Hero Section - Full Screen */}
      <section id="home" className="relative z-10">
        <Hero />
      </section>

      {/* Main Content - Below Hero */}
      <main className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 content-layer">
        <section id="about" className="pt-20 pb-20">
          <About />
        </section>

        <section id="experience" className="pt-20 pb-20">
          <Experience />
        </section>

        <section id="projects" className="pt-20 pb-20">
          <Projects />
        </section>

        <section id="skills" className="pt-20 pb-20">
          <Skills />
        </section>

        <section id="contact" className="pt-20 pb-20">
          <Contact />
        </section>
      </main>

      <Footer />
    </div>
  )
}
