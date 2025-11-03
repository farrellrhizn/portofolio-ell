import projects from '../data/projects'
import ProjectCard from './ProjectCard'
import { useScrollReveal } from '../hooks/useScrollReveal'

export default function Projects() {
  const { visibleItems, itemRefs } = useScrollReveal(projects.length)

  return (
    <div>
      <h3 className="text-2xl font-semibold text-white mb-6">
        Selected projects
        <span className="ml-3 text-sm text-brand-purple">({projects.length})</span>
      </h3>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((p, index) => (
          <div
            key={p.id}
            ref={(el) => { itemRefs.current[index] = el }}
            className={`transition-all duration-700 ${
              visibleItems.has(index) 
                ? 'opacity-100 translate-y-0' 
                : 'opacity-0 translate-y-8'
            }`}
            style={{ transitionDelay: `${index * 150}ms` }}
          >
            <ProjectCard project={p} />
          </div>
        ))}
      </div>
    </div>
  )
}
