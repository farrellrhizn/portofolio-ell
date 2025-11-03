import CardWithCursorGlow from './CardWithCursorGlow'
import otakKananLogo from '../assets/logos/otakkanan.jpg'
import revoULogo from '../assets/logos/RevoU.png'
import { useScrollReveal } from '../hooks/useScrollReveal'

interface ExperienceItem {
  year: string
  title: string
  company: string
  description: string
  technologies: string[]
  logo?: string
}

const experiences: ExperienceItem[] = [
  {
    year: 'Aug 2024 - Des 2024',
    title: 'Web Developer',
    company: 'PT. Otak Kanan',
    description: 'Building scalable web applications using modern technologies. Implemented features that improved user engagement by 40%.',
    technologies: ['React', 'Laravel', 'JavaScript', 'Tailwind CSS', 'PHP', 'MySQL'],
    logo: otakKananLogo
  },
  {
    year: 'Feb 2024 - Jun 2024',
    title: 'Study Independent',
    company: 'RevoU',
    description: 'Developed responsive web interfaces and collaborated with design team to create Dashboard Pizza Place Sales from data analytics.',
    technologies: ['HTML', 'CSS', 'JavaScript', 'Google Cloud Platform', 'Figma', 'LookerStudio'],
    logo: revoULogo
  },
]

export default function Experience() {
  const { visibleItems: visibleCards, itemRefs: cardRefs } = useScrollReveal(experiences.length)

  return (
    <div>
      <h3 className="text-2xl font-semibold text-white mb-8">Experience</h3>
      
      <div className="relative">
        {/* Timeline vertical line */}
        <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-linear-to-b from-brand-purple via-brand-purple/50 to-transparent" />
        
        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div 
              key={index} 
              ref={(el) => { cardRefs.current[index] = el }}
              className={`relative pl-8 transition-all duration-700 ${
                visibleCards.has(index) 
                  ? 'opacity-100 translate-y-0' 
                  : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              {/* Timeline dot/pointer */}
              <div className="absolute left-0 top-6 -translate-x-1/2">
                <div className="w-4 h-4 rounded-full bg-brand-purple shadow-[0_0_12px_rgba(124,58,237,0.6)] relative z-10">
                  <div className="absolute inset-0 rounded-full bg-brand-purple animate-ping opacity-40" />
                </div>
              </div>
              
              {/* Experience card */}
              <CardWithCursorGlow className="tilt-card">
                <div className="relative bg-card-900/60 rounded-lg p-5 border border-slate-800/20 hover:border-brand-purple/30 transition-all duration-500 backdrop-blur-sm card-bottom-glow hover:shadow-glow-purple">
                  <div className="absolute inset-0 rounded-lg pointer-events-none" style={{boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.03)'}} />
                  
                  {/* Year badge */}
                  <div className="inline-block px-3 py-1 bg-brand-purple/10 border border-brand-purple/30 rounded-full text-xs text-brand-purple font-medium mb-3">
                    {exp.year}
                  </div>
                  
                  <div className="flex gap-4">
                    {/* Company Logo */}
                    {exp.logo && (
                      <div className="shrink-0">
                        <img 
                          src={exp.logo} 
                          alt={`${exp.company} logo`}
                          className="w-16 h-16 object-contain rounded-lg bg-white/5 p-2 border border-slate-700/30"
                        />
                      </div>
                    )}
                    
                    {/* Content */}
                    <div className="flex-1">
                      {/* Title and company */}
                      <h4 className="text-lg font-semibold text-white">{exp.title}</h4>
                      <p className="text-brand-purple/90 text-sm font-medium mt-1">{exp.company}</p>
                      
                      {/* Description */}
                      <p className="mt-3 text-slate-300 text-sm leading-relaxed">
                        {exp.description}
                      </p>
                      
                      {/* Technologies */}
                      <div className="mt-4 flex flex-wrap gap-2">
                        {exp.technologies.map((tech) => (
                          <span 
                            key={tech} 
                            className="text-xs bg-slate-800/40 border border-slate-700/30 px-2 py-1 rounded text-slate-200 hover:border-brand-purple/40 transition-colors duration-300"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </CardWithCursorGlow>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
