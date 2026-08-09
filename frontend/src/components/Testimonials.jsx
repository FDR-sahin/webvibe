const reviews = [
  {
    quote:
      '"WebVibe rebuilt our site in three weeks and our booking rate doubled the following month. They actually explained every decision instead of just handing over a black box."',
    name: 'Maria Chen',
    role: 'Founder, OrbitFit',
    gradient: 'from-indigo-500 to-cyan-400',
  },
  {
    quote:
      "\"We'd been burned by a freelancer before. WebVibe was the opposite — clear timeline, weekly updates, and the final site loaded faster than anything we'd had.\"",
    name: 'Daniel Okafor',
    role: 'CEO, Nestly Homes',
    gradient: 'from-cyan-400 to-indigo-500',
  },
  {
    quote:
      "\"As a small shop owner, I didn't need an agency's worth of jargon — I needed a site that sells. That's exactly what I got, on budget and on time.\"",
    name: 'Priya Nair',
    role: 'Owner, BrewCraft Coffee',
    gradient: 'from-indigo-400 to-cyan-300',
  },
]

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-24 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="max-w-2xl mb-16">
          <span className="font-mono text-xs text-cyan-400 tracking-wider">// CLIENT REVIEWS</span>
          <h2 className="font-display text-3xl md:text-4xl font-semibold mt-3">Don't just take our word for it</h2>
        </div>

        <div className="relative">
          <div className="flex gap-6 overflow-x-auto scrollbar-none snap-x snap-mandatory pb-4">
            {reviews.map((r) => (
              <div key={r.name} className="snap-start shrink-0 w-[85%] sm:w-[46%] lg:w-[32%] border border-border bg-surface rounded-2xl p-7">
                <div className="flex gap-1 text-cyan-400 mb-4">★★★★★</div>
                <p className="text-ink leading-relaxed">{r.quote}</p>
                <div className="flex items-center gap-3 mt-6">
                  <div className={`w-9 h-9 rounded-full bg-gradient-to-br ${r.gradient}`}></div>
                  <div>
                    <p className="text-sm font-medium">{r.name}</p>
                    <p className="text-xs text-muted">{r.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="flex justify-center gap-2 mt-6">
            <span className="w-6 h-1.5 rounded-full bg-indigo-400"></span>
            <span className="w-1.5 h-1.5 rounded-full bg-border"></span>
            <span className="w-1.5 h-1.5 rounded-full bg-border"></span>
          </div>
        </div>
      </div>
    </section>
  )
}
