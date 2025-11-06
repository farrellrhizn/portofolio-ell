import CardWithCursorGlow from './CardWithCursorGlow'
import { useScrollReveal } from '../hooks/useScrollReveal'

export default function Contact() {
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
        
        <h3 className="text-2xl font-semibold text-white">Get in touch</h3>
        <p className="mt-3 text-slate-300">I'm available for freelance work and new opportunities.</p>

        <div className="mt-6 space-y-4">
          <div className="flex items-center gap-3 text-slate-300">
            <svg className="w-5 h-5 text-brand-purple" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            <a href="https://mail.google.com/mail/?view=cm&fs=1&to=farrellabrar18@gmail.com" target="_blank" rel="noreferrer" className="hover:text-brand-purple transition-colors">
              farrellabrar18@gmail.com
            </a>
          </div>
          
          <a 
            href="https://mail.google.com/mail/?view=cm&fs=1&to=farrellabrar18@gmail.com&su=Hello%20Farrell&body=Hi%20Farrell,%0D%0A%0D%0AI'd%20like%20to%20get%20in%20touch%20with%20you."
            target="_blank"
            rel="noreferrer"
            className="inline-block w-full text-center bg-brand-purple text-white px-6 py-3 rounded-lg hover:brightness-110 hover:scale-[1.02] transition-all duration-300"
          >
            Send Message via Gmail
          </a>
        </div>
      </div>
    </CardWithCursorGlow>
    </div>
  )
}
