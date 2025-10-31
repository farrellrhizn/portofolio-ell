import { useState } from 'react'

export default function Header() {
  const [open, setOpen] = useState(false)

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault()
    setOpen(false) // Close mobile menu if open
    
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
    <header className="fixed w-full bg-transparent backdrop-blur-sm z-30">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <a 
            href="#home" 
            onClick={(e) => handleNavClick(e, '#home')}
            className="text-white font-bold text-lg flex items-center gap-3"
          >
            <span className="w-2 h-2 rounded-full bg-brand-purple/90 shadow-glow-purple animate-glow-slow" />
            <span className="text-white">Ell</span>
            <small className="text-slate-400 ml-2">— Portfolio</small>
          </a>

          <nav className="hidden md:flex gap-6 text-slate-300">
            <a 
              href="#about" 
              onClick={(e) => handleNavClick(e, '#about')}
              className="hover:text-white transition-colors duration-300"
            >
              About
            </a>
            <a 
              href="#experience" 
              onClick={(e) => handleNavClick(e, '#experience')}
              className="hover:text-white transition-colors duration-300"
            >
              Experience
            </a>
            <a 
              href="#projects" 
              onClick={(e) => handleNavClick(e, '#projects')}
              className="hover:text-white transition-colors duration-300"
            >
              Projects
            </a>
            <a 
              href="#skills" 
              onClick={(e) => handleNavClick(e, '#skills')}
              className="hover:text-white transition-colors duration-300"
            >
              Skills
            </a>
            <a 
              href="#contact" 
              onClick={(e) => handleNavClick(e, '#contact')}
              className="hover:text-white transition-colors duration-300"
            >
              Contact
            </a>
          </nav>

          <button
            className="md:hidden text-slate-300"
            onClick={() => setOpen((s) => !s)}
            aria-label="Toggle menu"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M4 6H20M4 12H20M4 18H20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
        </div>

        {open && (
          <div className="md:hidden py-2 flex flex-col gap-2 mb-2">
            <a 
              href="#about" 
              onClick={(e) => handleNavClick(e, '#about')}
              className="text-slate-300 hover:text-white transition-colors duration-300"
            >
              About
            </a>
            <a 
              href="#experience" 
              onClick={(e) => handleNavClick(e, '#experience')}
              className="text-slate-300 hover:text-white transition-colors duration-300"
            >
              Experience
            </a>
            <a 
              href="#projects" 
              onClick={(e) => handleNavClick(e, '#projects')}
              className="text-slate-300 hover:text-white transition-colors duration-300"
            >
              Projects
            </a>
            <a 
              href="#skills" 
              onClick={(e) => handleNavClick(e, '#skills')}
              className="text-slate-300 hover:text-white transition-colors duration-300"
            >
              Skills
            </a>
            <a 
              href="#contact" 
              onClick={(e) => handleNavClick(e, '#contact')}
              className="text-slate-300 hover:text-white transition-colors duration-300"
            >
              Contact
            </a>
          </div>
        )}
      </div>
    </header>
  )
}
