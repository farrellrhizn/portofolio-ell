import projects from '../data/projects'
import ProjectCard from './ProjectCard'

export default function Projects() {
  return (
    <div>
      <h3 className="text-2xl font-semibold text-white mb-6">
        Selected projects
        <span className="ml-3 text-sm text-brand-purple">({projects.length})</span>
      </h3>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((p) => (
          <ProjectCard key={p.id} project={p} />
        ))}
      </div>
    </div>
  )
}
