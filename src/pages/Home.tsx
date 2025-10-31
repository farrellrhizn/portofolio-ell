import Header from '../components/Header'
import Hero from '../components/Hero'
import About from '../components/About'
import Projects from '../components/Projects'
import Skills from '../components/Skills'
import Contact from '../components/Contact'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <div className="text-slate-100 antialiased min-h-screen relative overflow-hidden">
      <div className="bg-hero-glow pointer-events-none">
        <div className="glow-1" />
        <div className="glow-2" />
      </div>

      <Header />

      {/* Hero Section - Full Screen */}
      <section id="home" className="relative z-10">
        <Hero />
      </section>

      {/* Main Content - Below Hero */}
      <main className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 content-layer">
        <section id="about" className="pt-20 pb-20 section-glow-leak">
          <About />
        </section>

        <section id="projects" className="pt-20 pb-20 section-glow-leak">
          <Projects />
        </section>

        <section id="skills" className="pt-20 pb-20 section-glow-leak">
          <Skills />
        </section>

        <section id="contact" className="pt-20 pb-20 section-glow-leak">
          <Contact />
        </section>
      </main>

      <Footer />
    </div>
  )
}
