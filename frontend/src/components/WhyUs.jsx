const points = [
  {
    title: 'On-Time Delivery',
    desc: 'We quote realistic timelines and hit them — no disappearing for weeks mid-project.',
    color: 'bg-indigo-500/10 text-indigo-400',
    icon: <path d="M10 5v5l3 3" />,
    circle: true,
  },
  {
    title: 'Clean, Scalable Code',
    desc: 'Every build is documented and structured so another dev — or you — can pick it up later.',
    color: 'bg-cyan-500/10 text-cyan-400',
    icon: <path d="M4 7l6-3 6 3v5c0 4-2.6 6.2-6 7-3.4-.8-6-3-6-7V7z" />,
  },
  {
    title: 'Transparent Pricing',
    desc: 'One flat quote up front. No surprise invoices once the project is underway.',
    color: 'bg-indigo-500/10 text-indigo-400',
    icon: <path d="M10 2l1.6 4.8L16.5 8l-4.9 1.2L10 14l-1.6-4.8L3.5 8l4.9-1.2L10 2z" />,
  },
  {
    title: 'Real, Responsive Support',
    desc: "Message us directly — you'll hear back from an actual developer, same day.",
    color: 'bg-cyan-500/10 text-cyan-400',
    icon: <path d="M10 18s6.5-4 6.5-9.5A4 4 0 0010 6a4 4 0 00-6.5 2.5C3.5 14 10 18 10 18z" />,
  },
  {
    title: 'Startup-Friendly Rates',
    desc: 'Packages built for early-stage budgets, without cutting corners on quality.',
    color: 'bg-indigo-500/10 text-indigo-400',
    icon: <path d="M4 15V8m4 7V5m4 10v-4m4 4V9" />,
  },
]

export default function WhyUs() {
  return (
    <section id="why" className="py-24 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="max-w-2xl mb-16">
          <span className="font-mono text-xs text-cyan-400 tracking-wider">// WHY WEBVIBE</span>
          <h2 className="font-display text-3xl md:text-4xl font-semibold mt-3">
            What working with us actually feels like
          </h2>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-5">
          {points.map((p) => (
            <div key={p.title} className="border border-border rounded-2xl p-6 bg-surface">
              <div className={`w-9 h-9 rounded-lg ${p.color} flex items-center justify-center mb-4`}>
                <svg className="w-4.5 h-4.5" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
                  {p.icon}
                  {p.circle && <circle cx="10" cy="10" r="7.5" />}
                </svg>
              </div>
              <h3 className="font-display font-medium">{p.title}</h3>
              <p className="text-sm text-muted mt-2 leading-relaxed">{p.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
