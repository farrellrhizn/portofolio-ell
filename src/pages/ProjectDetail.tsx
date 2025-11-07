import { useParams, Link, Navigate } from 'react-router-dom'
import projects from '../data/projects'
import CardWithCursorGlow from '../components/CardWithCursorGlow'
import academicyAdmImg from '../assets/img/AcademicyAdm.jpg'
import academicyDsnImg from '../assets/img/AcademicyDsn.jpg'
import ayulaDashboardImg from '../assets/img/AyulaDashboard.jpg'

export default function ProjectDetail() {
  const { id } = useParams<{ id: string }>()
  const project = projects.find(p => p.id === id)

  if (!project) {
    return <Navigate to="/" replace />
  }

  return (
    <div className="text-slate-100 antialiased min-h-screen relative overflow-hidden">
      <div className="bg-hero-glow pointer-events-none">
        <div className="glow-1" />
        <div className="glow-2" />
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-20 content-layer">
        {/* Back button */}
        <Link 
          to="/"
          className="inline-flex items-center gap-2 text-slate-300 hover:text-white transition mb-8"
        >
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12.5 15L7.5 10L12.5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          Back to portfolio
        </Link>

        <CardWithCursorGlow>
          <div className="relative bg-card-900/60 rounded-2xl overflow-hidden shadow-glow-purple backdrop-blur-sm border border-slate-800/20">
            <div className="absolute inset-0 rounded-2xl pointer-events-none" style={{boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.03)'}} />
            
            {/* Hero Image */}
            {project.image && (
              <div className="relative h-64 md:h-96 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card-900 via-card-900/60 to-transparent" />
              </div>
            )}

            <div className="p-8">
              {/* Header */}
              <div className="flex items-start justify-between mb-6">
                <div>
                  <h1 className="text-3xl md:text-4xl font-bold text-white">{project.title}</h1>
                  {project.year && (
                    <p className="text-slate-400 mt-2">Developed in {project.year}</p>
                  )}
                </div>
              </div>

              {/* Technologies */}
              <div className="mb-8">
                <h3 className="text-sm uppercase tracking-wider text-slate-400 mb-3">Technologies</h3>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span 
                      key={tech}
                      className="px-3 py-1 bg-card-900/70 border border-brand-purple/20 rounded text-sm text-slate-200 hover:border-brand-purple/50 transition-all duration-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Description */}
              {project.fullDescription && (
                <div className="mb-8">
                  <h3 className="text-xl font-semibold text-white mb-3">About this project</h3>
                  <p className="text-slate-300 leading-relaxed">{project.fullDescription}</p>
                </div>
              )}

              {/* Features */}
              {project.features && project.features.length > 0 && (
                <div className="mb-8">
                  <h3 className="text-xl font-semibold text-white mb-4">Key Features</h3>
                  <ul className="space-y-3">
                    {project.features.map((feature, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <svg className="w-5 h-5 text-brand-purple mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-slate-300">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Gallery - Additional screenshots if available */}
              {project.id === 'academicy' && (
                <div className="mb-8">
                  <h3 className="text-xl font-semibold text-white mb-4">Screenshots</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <img src={academicyAdmImg} alt="Academicy Admin" className="rounded-lg border border-slate-800/40" />
                    <img src={academicyDsnImg} alt="Academicy Lecturer" className="rounded-lg border border-slate-800/40" />
                  </div>
                </div>
              )}

              {project.id === 'ayula-pos' && (
                <div className="mb-8">
                  <h3 className="text-xl font-semibold text-white mb-4">Screenshots</h3>
                  <div className="grid grid-cols-1 gap-4">
                    <img src={ayulaDashboardImg} alt="AyulaPOS Dashboard" className="rounded-lg border border-slate-800/40" />
                  </div>
                </div>
              )}

              {/* CTA */}
              <div className="flex gap-4 pt-6 border-t border-slate-800/40">
                <Link
                  to="/"
                  className="bg-brand-purple text-white px-6 py-2 rounded-lg hover:brightness-110 hover:scale-105 transition-all duration-300"
                >
                  View all projects
                </Link>
              </div>
            </div>
          </div>
        </CardWithCursorGlow>
      </div>
    </div>
  )
}
