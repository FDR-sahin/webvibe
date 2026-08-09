const stats = [
  { value: '40+', label: 'Projects delivered' },
  { value: '4.9/5', label: 'Average client rating' },
  { value: '< 24h', label: 'Typical response time' },
  { value: '2021', label: 'Founded' },
]

const team = [
  { name: 'Sahin Miah', role: 'Founder & Lead Developer', focus: 'Backend architecture, Node.js, MongoDB', initials: 'SM' },
  { name: 'Jakariya Rakib', role: 'Product & UI Designer', focus: 'Design systems, Tailwind, Figma', initials: 'JK' },
  { name: 'Tanvir Ahmed', role: 'Frontend Engineer', focus: 'React, Next.js, performance', initials: 'TA' },
  { name: 'Md Rayhan', role: 'Frontend Engineer', focus: 'React, Next.js, performance', initials: 'MR' },
]

export default function AboutUs() {
  return (
    <section id="about" className="py-24 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <div>
            <span className="font-mono text-xs text-cyan-400 tracking-wider">// ABOUT US</span>
            <h2 className="font-display text-3xl md:text-4xl font-semibold mt-3">
              A small studio, built for founders who need it done right
            </h2>
            <p className="text-muted mt-5 leading-relaxed">
              WebVibe started in 2021 because too many small businesses were choosing between two bad options:
              overpriced agencies that treat every client like an enterprise account, or drag-and-drop builders
              that fall apart the moment a business tries to grow.
            </p>
            <p className="text-muted mt-4 leading-relaxed">
              We picked a third path — a lean, senior team that writes real, production-grade code and prices it
              like a service for startups, not a corporation. Every project that comes through WebVibe is built by
              the same three people you talk to on day one.
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-10">
              {stats.map((s) => (
                <div key={s.label} className="border border-border bg-surface rounded-xl p-4">
                  <p className="font-display text-2xl font-semibold text-ink">{s.value}</p>
                  <p className="text-xs text-muted mt-1">{s.label}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-4">
            {team.map((m) => (
              <div key={m.name} className="card-hover flex items-center gap-4 border border-border bg-surface rounded-2xl p-5">
                <div className="w-12 h-12 shrink-0 rounded-full bg-gradient-to-br from-indigo-500 to-cyan-400 flex items-center justify-center font-display font-semibold text-void">
                  {m.initials}
                </div>
                <div>
                  <p className="font-display font-medium">{m.name}</p>
                  <p className="text-sm text-indigo-300">{m.role}</p>
                  <p className="text-xs text-muted mt-1">{m.focus}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
