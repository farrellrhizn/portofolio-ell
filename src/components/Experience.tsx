import CardWithCursorGlow from './CardWithCursorGlow'

interface ExperienceItem {
  year: string
  title: string
  company: string
  description: string
  technologies: string[]
}

const experiences: ExperienceItem[] = [
  {
    year: '2023 - Present',
    title: 'Full Stack Developer',
    company: 'Tech Company',
    description: 'Building scalable web applications using modern technologies. Implemented features that improved user engagement by 40%.',
    technologies: ['React', 'TypeScript', 'Node.js', 'PostgreSQL']
  },
  {
    year: '2022 - 2023',
    title: 'Frontend Developer',
    company: 'Digital Agency',
    description: 'Developed responsive web interfaces and collaborated with design team to create pixel-perfect UIs.',
    technologies: ['React', 'Tailwind CSS', 'JavaScript']
  },
  {
    year: '2021 - 2022',
    title: 'Junior Developer',
    company: 'Startup Inc',
    description: 'Started career building web applications and learning best practices in software development.',
    technologies: ['HTML', 'CSS', 'JavaScript', 'PHP']
  }
]

export default function Experience() {
  return (
    <div>
      <h3 className="text-2xl font-semibold text-white mb-8">Experience</h3>
      
      <div className="relative">
        {/* Timeline vertical line */}
        <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-gradient-to-b from-brand-purple via-brand-purple/50 to-transparent" />
        
        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div key={index} className="relative pl-8">
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
              </CardWithCursorGlow>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
