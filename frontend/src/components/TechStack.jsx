const stack = [
  { icon: '▤', name: 'Tailwind CSS', desc: 'Pixel-precise design, shipped faster.', bg: 'bg-cyan-500/10', color: 'text-cyan-300' },
  { icon: '⚛', name: 'React', desc: 'Interactive interfaces that feel instant.', bg: 'bg-cyan-500/10', color: 'text-cyan-400' },
  { icon: '▲', name: 'Next.js', desc: 'Server-rendered pages built for SEO.', bg: 'bg-indigo-500/10', color: 'text-indigo-400' },
  { icon: '⬢', name: 'Node.js', desc: 'Fast, reliable backends that hold up under load.', bg: 'bg-emerald-500/10', color: 'text-emerald-400' },
  { icon: '▣', name: 'Express', desc: 'Clean, secure APIs that connect it all.', bg: 'bg-slate-400/10', color: 'text-slate-300' },
  { icon: '🍃', name: 'MongoDB', desc: 'Flexible data storage that grows with you.', bg: 'bg-green-500/10', color: 'text-green-400' },
  
]

const features = [
  { label: 'SPEED', desc: 'Optimized builds that load in under 2 seconds, on any device.', color: 'text-indigo-400' },
  { label: 'SECURITY', desc: 'Industry best practices baked in from the first line of code.', color: 'text-cyan-400' },
  { label: 'SEO-FRIENDLY', desc: 'Server-rendered, semantic, and structured to rank from day one.', color: 'text-indigo-400' },
  { label: 'SCALABLE', desc: 'Architecture that handles 10 users or 10 million, without a rebuild.', color: 'text-cyan-400' },
]

export default function TechStack() {
  return (
    <section id="stack" className="py-24 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="max-w-2xl mb-16">
          <span className="font-mono text-xs text-cyan-400 tracking-wider">// OUR STACK</span>
          <h2 className="font-display text-3xl md:text-4xl font-semibold mt-3">
            Built on technology that scales with you
          </h2>
          <p className="text-muted mt-4 leading-relaxed">
            We don't drag-and-drop templates together. Every WebVibe project is hand-coded with production-grade
            tools trusted by the world's fastest-growing companies — so your site stays fast as your business grows.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-16">
          {stack.map((s) => (
            <div key={s.name} className="card-hover border border-border bg-surface rounded-2xl p-6">
              <div className={`w-10 h-10 rounded-lg ${s.bg} flex items-center justify-center ${s.color} font-mono mb-4`}>
                {s.icon}
              </div>
              <h3 className="font-display font-medium">{s.name}</h3>
              <p className="text-sm text-muted mt-1.5">{s.desc}</p>
            </div>
          ))}
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-border rounded-2xl overflow-hidden border border-border">
          {features.map((f) => (
            <div key={f.label} className="bg-void p-6">
              <p className={`font-mono text-xs ${f.color} mb-2`}>{f.label}</p>
              <p className="text-sm text-muted">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
