import { useRef, useState, type ReactNode } from 'react'

interface CardWithCursorGlowProps {
  children: ReactNode
  className?: string
}

export default function CardWithCursorGlow({ children, className = '' }: CardWithCursorGlowProps) {
  const cardRef = useRef<HTMLDivElement>(null)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return
    const rect = cardRef.current.getBoundingClientRect()
    setMousePosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    })
  }

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      className={`relative group ${className}`}
      style={{
        // @ts-expect-error - CSS custom properties for mouse position
        '--mouse-x': `${mousePosition.x}px`,
        '--mouse-y': `${mousePosition.y}px`,
      }}
    >
      {/* Glow border yang mengikuti cursor */}
      <div
        className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"
        style={{
          background: `radial-gradient(650px circle at var(--mouse-x) var(--mouse-y), rgba(124, 58, 237, 0.12), transparent 40%)`,
        }}
      />
      
      {/* Border gradient yang mengikuti cursor */}
      <div
        className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
        style={{
          background: `radial-gradient(450px circle at var(--mouse-x) var(--mouse-y), rgba(124, 58, 237, 0.35), transparent 40%)`,
          WebkitMaskImage: 'linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0)',
          WebkitMaskComposite: 'xor',
          maskComposite: 'exclude',
          padding: '1px',
        }}
      />

      {children}
    </div>
  )
}
