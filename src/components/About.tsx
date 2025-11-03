import CardWithCursorGlow from './CardWithCursorGlow'

export default function About() {
  return (
    <CardWithCursorGlow>
      <div className="relative bg-card-900/60 rounded-2xl p-6 shadow-glow-purple backdrop-blur-sm border border-slate-800/20 hover:border-brand-purple/30 transition-all duration-500 card-bottom-glow">
        <div className="absolute inset-0 rounded-2xl pointer-events-none" style={{boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.03)'}} />

        <h3 className="text-2xl font-semibold text-white">About me</h3>
        <p className="mt-4 text-slate-300 leading-relaxed">
          Saya fresh graduate dari Politeknik Negeri Jember, Program Studi D4 Teknik Informatika,
          dengan fokus utama pada pengembangan web. Saya senang membangun antarmuka yang bersih,
          mudah diakses, dan responsif, sekaligus terus mengeksplorasi teknologi front-end terbaru
          untuk menghasilkan pengalaman pengguna yang optimal.
        </p>

        <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
          <CardWithCursorGlow className="tilt-card">
            <div className="p-4 bg-card-900/70 rounded border border-slate-800/30 hover:shadow-glow-purple hover:border-brand-purple/30 transition-all duration-500 h-full backdrop-blur-sm card-bottom-glow">
              <h4 className="font-semibold text-white">Latar Belakang</h4>
              <p className="text-slate-300 mt-2">D4 Teknik Informatika, Politeknik Negeri Jember</p>
            </div>
          </CardWithCursorGlow>
          <CardWithCursorGlow className="tilt-card">
            <div className="p-4 bg-card-900/70 rounded border border-slate-800/30 hover:shadow-glow-purple hover:border-brand-purple/30 transition-all duration-500 h-full backdrop-blur-sm card-bottom-glow">
              <h4 className="font-semibold text-white">Fokus</h4>
              <p className="text-slate-300 mt-2">Pengembangan web dengan React, TypeScript, Tailwind</p>
            </div>
          </CardWithCursorGlow>
          <CardWithCursorGlow className="tilt-card">
            <div className="p-4 bg-card-900/70 rounded border border-slate-800/30 hover:shadow-glow-purple hover:border-brand-purple/30 transition-all duration-500 h-full backdrop-blur-sm card-bottom-glow">
              <h4 className="font-semibold text-white">Kesempatan</h4>
              <p className="text-slate-300 mt-2">Siap untuk peran Frontend & Fullstack pemula</p>
            </div>
          </CardWithCursorGlow>
        </div>
      </div>
    </CardWithCursorGlow>
  )
}
