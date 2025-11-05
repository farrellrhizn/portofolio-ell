export default function Footer() {
  return (
    <footer className="mt-12 border-t border-slate-800/60 relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-6 text-center text-sm text-slate-400">
        <p>© {new Date().getFullYear()} Ell — Built with React, TypeScript & Tailwind</p>
        <div className="mt-2 flex justify-center gap-4 text-slate-500">
          <a href="https://github.com/farrellrhizn" target="_blank" rel="noreferrer" className="hover:text-brand-purple transition">GitHub</a>
          <a href="https://www.linkedin.com/in/farrell-rhiznanda-079b361b1/" target="_blank" rel="noreferrer" className="hover:text-brand-purple transition">LinkedIn</a>
          <a href="mailto:farrellabrar81@gmail.com?subject=Hello%20from%20Portfolio" className="hover:text-brand-purple transition">Instagram</a>
        </div>
      </div>
    </footer>
  )
}
