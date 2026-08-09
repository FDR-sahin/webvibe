import { useState } from 'react'
import pic from "../../assets/pic.png"
export default function Navbar() {
  const [open, setOpen] = useState(false)

  const links = [
    { href: '#stack', label: 'Stack' },
    { href: '#services', label: 'Services' },
    { href: '#work', label: 'Work' },
    { href: '#about', label: 'About Us' },
    { href: '#why', label: 'Why Us' },
    { href: '#testimonials', label: 'Reviews' },
  ]

  return (
    <header className="fixed top-0 inset-x-0 z-50 border-b border-white/5 bg-void/80 backdrop-blur-lg">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 h-16 flex items-center justify-between">
        <a href="#top" className="flex items-center gap-2 font-display font-semibold text-lg">
          <span className="w-2.5 h-2.5 rounded-sm bg-gradient-to-br from-indigo-500 to-cyan-400"></span>
          <img className='w-15 h-10' src={pic} alt="" />
        </a>
        <nav className="hidden md:flex items-center gap-8 text-sm text-muted">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="hover:text-ink transition-colors">
              {l.label}
            </a>
          ))}
        </nav>
        <div className="hidden md:flex items-center gap-3">
          <a href="#contact" className="text-sm text-muted hover:text-ink transition-colors px-3 py-2">
            Log in to portal
          </a>
          <a
            href="#contact"
            className="text-sm font-medium bg-ink text-void px-4 py-2 rounded-full hover:bg-indigo-400 hover:text-void transition-colors"
          >
            Get a Quote
          </a>
        </div>
        <button onClick={() => setOpen((v) => !v)} className="md:hidden text-ink" aria-label="Open menu">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M4 6h16M4 12h16M4 18h16" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
          </svg>
        </button>
      </div>
      {open && (
        <div className="md:hidden border-t border-white/5 bg-void px-6 py-4 space-y-3 text-sm">
          {links.map((l) => (
            <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="block text-muted hover:text-ink">
              {l.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setOpen(false)}
            className="block mt-2 text-center bg-ink text-void px-4 py-2.5 rounded-full font-medium"
          >
            Get a Quote
          </a>
        </div>
      )}
    </header>
  )
}
