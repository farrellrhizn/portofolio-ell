import CardWithCursorGlow from './CardWithCursorGlow'
import { useScrollReveal } from '../hooks/useScrollReveal'

export default function About() {
  const { visibleItems, itemRefs } = useScrollReveal(4) // 1 main card + 3 mini cards

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

        <h3 className="text-2xl font-semibold text-white">About me</h3>
        <p className="mt-4 text-slate-300 leading-relaxed">
          I'm a fresh graduate from Politeknik Negeri Jember with a degree in Informatics Engineering (D4),
          specializing in web development. I enjoy building clean, accessible, and responsive interfaces,
          while continuously exploring the latest front-end technologies to create optimal user experiences.
        </p>

        <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
          <CardWithCursorGlow className="tilt-card">
            <div className="p-4 bg-card-900/70 rounded border border-slate-800/30 hover:shadow-glow-purple hover:border-brand-purple/30 transition-all duration-500 h-full backdrop-blur-sm card-bottom-glow">
              <h4 className="font-semibold text-white">Background</h4>
              <p className="text-slate-300 mt-2">D4 Informatics Engineering, Politeknik Negeri Jember</p>
            </div>
          </CardWithCursorGlow>
          <CardWithCursorGlow className="tilt-card">
            <div className="p-4 bg-card-900/70 rounded border border-slate-800/30 hover:shadow-glow-purple hover:border-brand-purple/30 transition-all duration-500 h-full backdrop-blur-sm card-bottom-glow">
              <h4 className="font-semibold text-white">Focus</h4>
              <p className="text-slate-300 mt-2">Web development with Laravel, React, TypeScript, Tailwind</p>
            </div>
          </CardWithCursorGlow>
          <CardWithCursorGlow className="tilt-card">
            <div className="p-4 bg-card-900/70 rounded border border-slate-800/30 hover:shadow-glow-purple hover:border-brand-purple/30 transition-all duration-500 h-full backdrop-blur-sm card-bottom-glow">
              <h4 className="font-semibold text-white">Opportunities</h4>
              <p className="text-slate-300 mt-2">Ready for entry-level Frontend & Fullstack roles</p>
            </div>
          </CardWithCursorGlow>
        </div>
      </div>
    </CardWithCursorGlow>
    </div>
  )
}
