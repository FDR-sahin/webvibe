const badges = [
  { label: '⚛ React', color: 'text-cyan-400', pos: 'top-32 left-[7%]', anim: 'float-1' },
  { label: '▲ Next.js', color: 'text-indigo-400', pos: 'top-56 right-[9%]', anim: 'float-2' },
  { label: '⬢ Node.js', color: 'text-emerald-400', pos: 'bottom-40 left-[13%]', anim: 'float-3' },
  { label: '▤ Tailwind', color: 'text-cyan-300', pos: 'bottom-24 right-[15%]', anim: 'float-1' },
  { label: '🍃 MongoDB', color: 'text-green-400', pos: 'top-24 right-[30%]', anim: 'float-3' },
]

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-40 pb-28 md:pt-48 md:pb-36 mesh-bg">
      <div className="absolute inset-0 grid-overlay [mask-image:radial-gradient(ellipse_at_center,black_10%,transparent_70%)]"></div>

      {badges.map((b) => (
        <div key={b.label} className={`hidden lg:block absolute ${b.pos} ${b.anim}`}>
          <span
            className={`badge-glow flex items-center gap-2 font-mono text-xs px-3.5 py-2 rounded-full bg-surface/90 border border-border ${b.color}`}
          >
            {b.label}
          </span>
        </div>
      ))}

      <div className="relative max-w-4xl mx-auto px-6 text-center">
        <div className="inline-flex items-center gap-2 font-mono text-xs text-indigo-300 bg-indigo-500/10 border border-indigo-500/20 px-3 py-1.5 rounded-full mb-7">
          <span className="w-1.5 h-1.5 rounded-full bg-indigo-400 animate-pulse"></span>
          WEBVIBE — WEB DEVELOPMENT AGENCY
        </div>
        <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-semibold leading-[1.08] tracking-tight">
          Custom Web Experiences,
          <span className="block bg-gradient-to-r from-indigo-400 via-indigo-300 to-cyan-300 bg-clip-text text-transparent">
            Engineered to Perform.
          </span>
        </h1>
        <p className="mt-6 text-lg text-muted max-w-2xl mx-auto leading-relaxed">
          WebVibe designs and builds fast, scalable, custom websites and web apps for startups and growing
          businesses — hand-coded with React, Next.js, and Node.js. No templates, no shortcuts.
        </p>
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-3.5">
          <a
            href="#contact"
            className="w-full sm:w-auto text-center bg-indigo-500 hover:bg-indigo-400 text-white font-medium px-7 py-3.5 rounded-full transition-colors shadow-lg shadow-indigo-500/25"
          >
            Get a Free Quote →
          </a>
          <a
            href="#work"
            className="w-full sm:w-auto text-center border border-border hover:border-white/30 text-ink font-medium px-7 py-3.5 rounded-full transition-colors"
          >
            View Our Work
          </a>
        </div>
        <p className="mt-8 text-xs text-muted font-mono">Trusted by 40+ startups &amp; small businesses since 2021</p>
      </div>
    </section>
  )
}
