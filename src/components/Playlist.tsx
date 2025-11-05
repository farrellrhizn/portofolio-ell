import CardWithCursorGlow from './CardWithCursorGlow'
import { useScrollReveal } from '../hooks/useScrollReveal'

export default function Playlist() {
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
          
          <div className="flex items-center gap-3 mb-4">
            <svg className="w-6 h-6 text-[#1DB954]" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z"/>
            </svg>
            <h3 className="text-2xl font-semibold text-white">Beyond Work</h3>
          </div>
          
          <p className="text-slate-300 mb-4">
            When I'm not coding, you'll find me enjoying music. Here's my current coding playlist 🎧
          </p>

          <div className="relative rounded-lg overflow-hidden bg-slate-900/50 border border-slate-800/40">
            <iframe 
              style={{ borderRadius: '12px' }}
              src="https://open.spotify.com/embed/playlist/1fAaXy8LitQFZ7lvBts4fi?utm_source=generator&theme=0" 
              width="100%" 
              height="352" 
              frameBorder="0" 
              allowFullScreen
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" 
              loading="lazy"
              title="Spotify Playlist"
            />
          </div>

          <p className="mt-3 text-xs text-slate-400 text-center">
            Music fuels creativity ✨
          </p>
        </div>
      </CardWithCursorGlow>
    </div>
  )
}
