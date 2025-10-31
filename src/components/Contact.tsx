import CardWithCursorGlow from './CardWithCursorGlow'

export default function Contact() {
  return (
    <CardWithCursorGlow>
      <div className="relative bg-card-900/60 rounded-2xl p-6 shadow-glow-purple backdrop-blur-sm border border-slate-800/20 hover:border-brand-purple/30 transition-all duration-500 card-bottom-glow">
        <div className="absolute inset-0 rounded-2xl pointer-events-none" style={{boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.03)'}} />
        
        <h3 className="text-2xl font-semibold text-white">Get in touch</h3>
        <p className="mt-3 text-slate-300">I'm available for freelance work and new opportunities.</p>

        <form className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-3">
          <input className="p-3 rounded bg-card-900/70 border border-slate-800/40 placeholder:text-slate-400 focus:border-brand-purple/50 focus:outline-none focus:ring-1 focus:ring-brand-purple/20 transition-all duration-300" placeholder="Your name" />
          <input className="p-3 rounded bg-card-900/70 border border-slate-800/40 placeholder:text-slate-400 focus:border-brand-purple/50 focus:outline-none focus:ring-1 focus:ring-brand-purple/20 transition-all duration-300" placeholder="Your email" type="email" />
          <textarea className="md:col-span-2 p-3 rounded bg-card-900/70 border border-slate-800/40 placeholder:text-slate-400 focus:border-brand-purple/50 focus:outline-none focus:ring-1 focus:ring-brand-purple/20 transition-all duration-300" rows={4} placeholder="Message" />
          <button type="submit" className="md:col-span-2 bg-brand-purple text-white px-4 py-2 rounded hover:brightness-110 hover:scale-[1.02] transition-all duration-300">Send</button>
        </form>
      </div>
    </CardWithCursorGlow>
  )
}
