import CardWithCursorGlow from './CardWithCursorGlow'
import { useScrollReveal } from '../hooks/useScrollReveal'
import sertifMagang from '../assets/img/Sertif Magang.jpg'
import sertifRevou from '../assets/img/sertif Revou.jpg'
import sertifTeam22 from '../assets/img/Sertif team 22.jpg'
import sertifUjikom3 from '../assets/img/Sertif Ujikom3.jpg'

interface Certificate {
  title: string
  issuer: string
  date: string
  image?: string
  credentialUrl?: string
}

const certificates: Certificate[] = [
  {
    title: 'Web Developer Internship Certificate',
    issuer: 'PT. Otak Kanan',
    date: 'August 2024 - December 2024',
    image: sertifMagang,
  },
  {
    title: 'MSIB Study Independent Certificate',
    issuer: 'RevoU',
    date: 'February 2024 - June 2024',
    image: sertifRevou,
  },
  {
    title: 'Best Team Certificate - MSIB Batch 6',
    issuer: 'RevoU',
    date: 'June 2024',
    image: sertifTeam22,
  },
  {
    title: 'Web Developer Competency Certificate',
    issuer: 'BNSP (National Professional Certification Agency)',
    date: '19 Aug 2025 - 19 Aug 2028',
    image: sertifUjikom3,
  },
]

export default function Certificates() {
  const { visibleItems, itemRefs } = useScrollReveal(certificates.length)

  return (
    <div>
      <h3 className="text-2xl font-semibold text-white mb-8">
        Certificates & Achievements
        <span className="ml-3 text-sm text-brand-purple">({certificates.length})</span>
      </h3>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {certificates.map((cert, index) => (
          <div
            key={index}
            ref={(el) => { itemRefs.current[index] = el }}
            className={`transition-all duration-700 ${
              visibleItems.has(index) 
                ? 'opacity-100 translate-y-0' 
                : 'opacity-0 translate-y-8'
            }`}
            style={{ transitionDelay: `${index * 100}ms` }}
          >
            <CardWithCursorGlow className="tilt-card h-full">
              <div className="relative bg-card-900/60 rounded-lg overflow-hidden border border-slate-800/20 hover:border-brand-purple/30 transition-all duration-500 backdrop-blur-sm card-bottom-glow hover:shadow-glow-purple h-full flex flex-col">
                <div className="absolute inset-0 rounded-lg pointer-events-none" style={{boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.03)'}} />
                
                {/* Certificate Image */}
                {cert.image ? (
                  <div 
                    className="relative h-56 overflow-hidden bg-slate-800/50 group/img cursor-pointer"
                    onClick={() => window.open(cert.image, '_blank')}
                  >
                    <img 
                      src={cert.image} 
                      alt={cert.title}
                      className="w-full h-full object-contain p-2 transition-transform duration-500 group-hover/img:scale-105"
                    />
                    <div className="absolute inset-0 bg-linear-to-t from-card-900/80 to-transparent opacity-0 group-hover/img:opacity-100 transition-opacity duration-300 flex items-center justify-center pointer-events-none">
                      <span className="text-white text-sm bg-brand-purple/90 px-4 py-2 rounded-lg shadow-lg">
                        🔍 Click to view full size
                      </span>
                    </div>
                  </div>
                ) : (
                  <div className="relative h-48 bg-linear-to-br from-brand-purple/20 to-slate-800/50 flex items-center justify-center">
                    <svg className="w-16 h-16 text-brand-purple/40" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                    </svg>
                  </div>
                )}

                {/* Certificate Info */}
                <div className="p-5 flex-1 flex flex-col">
                  <h4 className="text-lg font-semibold text-white line-clamp-2">{cert.title}</h4>
                  <p className="text-brand-purple/90 text-sm font-medium mt-2">{cert.issuer}</p>
                  <p className="text-slate-400 text-xs mt-1">{cert.date}</p>
                  
                  {cert.credentialUrl && (
                    <a 
                      href={cert.credentialUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-auto pt-4 text-brand-purple hover:text-brand-purple/80 text-sm inline-flex items-center gap-2 group"
                    >
                      View Credential
                      <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                      </svg>
                    </a>
                  )}
                </div>
              </div>
            </CardWithCursorGlow>
          </div>
        ))}
      </div>
    </div>
  )
}
