import type { Project } from '../types'
import CardWithCursorGlow from './CardWithCursorGlow'
import { Link } from 'react-router-dom'

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <CardWithCursorGlow className="tilt-card">
      <article className="relative bg-card-900/60 rounded-lg overflow-hidden hover:shadow-glow-purple transition-all duration-500 h-full backdrop-blur-sm border border-slate-800/20 hover:border-brand-purple/30 card-bottom-glow">
        <div className="absolute inset-0 rounded-lg pointer-events-none" style={{boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.03)'}} />
        
        {/* Project Image */}
        {project.image && (
          <div className="relative h-48 overflow-hidden">
            <img 
              src={project.image} 
              alt={project.title}
              className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
            />
            <div className="absolute inset-0 bg-linear-to-t from-card-900 to-transparent opacity-60" />
          </div>
        )}

        <div className="p-5">
          <div className="flex items-start justify-between">
            <h4 className="text-lg font-semibold text-white">{project.title}</h4>
            {project.year && (
              <span className="text-xs text-slate-400 bg-slate-800/40 px-2 py-1 rounded">{project.year}</span>
            )}
          </div>
          <p className="mt-2 text-slate-300 text-sm leading-relaxed">{project.description}</p>

          <div className="mt-3 flex flex-wrap gap-2">
            {project.tech.map((t) => (
              <span key={t} className="text-xs bg-[#0b1220]/70 border border-slate-800/40 px-2 py-1 rounded text-slate-200 hover:border-brand-purple/30 transition-colors duration-300">{t}</span>
            ))}
          </div>

          <div className="mt-4 flex gap-2">
            <Link 
              to={`/project/${project.id}`}
              className="text-brand-purple hover:text-brand-purple/80 hover:underline text-sm transition-all duration-300"
            >
              View details →
            </Link>
          </div>
        </div>
      </article>
    </CardWithCursorGlow>
  )
}
