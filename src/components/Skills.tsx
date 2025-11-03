import CardWithCursorGlow from './CardWithCursorGlow'
import { useScrollReveal } from '../hooks/useScrollReveal'

export default function Skills() {
  const skills = ['Laravel', 'PHP', 'MySQL', 'JavaScript', 'TypeScript', 'React', 'Tailwind', 'HTML', 'CSS', 'Accessibility', 'Vite', 'Git', 'Figma', 'Agile Methodologies',]
  const { visibleItems, itemRefs } = useScrollReveal(1)

  return (
    <div 
      ref={(el) => { itemRefs.current[0] = el }}
      className={`transition-all duration-700 ${
        visibleItems.has(0) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
    >
      <CardWithCursorGlow>
      <div className="relative bg-card-900/60 rounded-2xl p-6 shadow-glow-purple backdrop-blur-sm border border-slate-800/20 hover:border-brand-purple/30 transition-all duration-500 card-bottom-glow">
        <div className="absolute inset-0 rounded-2xl pointer-events-none" style={{boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.03)'}} />
        
        <h3 className="text-2xl font-semibold text-white">Skills</h3>
        <div className="mt-4 flex flex-wrap gap-3">
          {skills.map((s) => (
            <span key={s} className="px-3 py-1 bg-card-900/70 border border-brand-purple/20 rounded text-sm text-slate-200 hover:border-brand-purple/50 hover:bg-brand-purple/10 transition-all duration-300">{s}</span>
          ))}
        </div>
      </div>
    </CardWithCursorGlow>
    </div>
  )
}
