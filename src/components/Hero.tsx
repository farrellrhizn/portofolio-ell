import CardWithCursorGlow from './CardWithCursorGlow'
import Lottie from 'lottie-react'
import waveAnimation from '../assets/animation/WaveLoop.json'

export default function Hero() {
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault()
    
    const element = document.querySelector(targetId)
    if (element) {
      const offset = 80 // Header height offset
      const elementPosition = element.getBoundingClientRect().top
      const offsetPosition = elementPosition + window.pageYOffset - offset

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      })
    }
  }

  return (
    <div className="h-screen flex items-center justify-center px-4 relative">
      {/* Wave Animation Background */}
      <div className="absolute inset-0 overflow-hidden opacity-20 pointer-events-none">
        <Lottie 
          animationData={waveAnimation} 
          loop={true}
          className="w-full h-full scale-150"
        />
      </div>

      <div className="text-center relative w-full z-10">
        <CardWithCursorGlow className="inline-block w-full max-w-4xl">
          <div className="tilt-card relative bg-card-900/60 rounded-2xl p-12 md:p-16 shadow-glow-purple card-glow card-bottom-glow backdrop-blur-sm border border-slate-800/20 hover:border-brand-purple/30 transition-all duration-500">

            <h2 className="text-5xl sm:text-6xl md:text-7xl font-extrabold text-white leading-tight">
              Farrell Abrar Rhiznanda
            </h2>
            <p className="mt-6 max-w-3xl mx-auto text-slate-300 leading-relaxed text-lg">
              I'm a web developer who builds performant and accessible web experiences using
              modern technologies. I focus on creating clean, responsive interfaces and delightful user interactions.
            </p>

            <div className="mt-8 flex justify-center gap-4 flex-wrap">
              <a 
                href="#projects" 
                onClick={(e) => handleNavClick(e, '#projects')}
                className="bg-brand-purple text-white px-6 py-3 text-lg rounded-lg shadow hover:brightness-110 hover:scale-105 transition-all duration-300"
              >
                See projects
              </a>
              <a 
                href="#contact" 
                onClick={(e) => handleNavClick(e, '#contact')}
                className="border border-slate-700 text-slate-200 px-6 py-3 text-lg rounded-lg hover:bg-slate-800 hover:border-brand-purple/40 transition-all duration-300"
              >
                Contact
              </a>
            </div>
          </div>
        </CardWithCursorGlow>
      </div>
    </div>
  )
}
