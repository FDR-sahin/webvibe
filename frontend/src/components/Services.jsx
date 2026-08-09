const check = (
  <svg className="w-4 h-4 mt-0.5 shrink-0" viewBox="0 0 20 20" fill="none">
    <path d="M4 10l4 4 8-8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
)

const plans = [
  {
    name: 'Starter',
    desc: 'A polished site to launch your business online.',
    price: '$199',
    priceNote: 'starting price',
    features: [
      'Up to 5 responsive pages',
      'Mobile-first responsive design',
      'Contact & lead forms',
      'Basic SEO setup',
      '2 weeks of free support',
    ],
    cta: 'Start with Starter',
    highlight: false,
  },
  {
    name: 'Business',
    desc: 'A full custom website with the features that convert.',
    price: '$999',
    priceNote: 'starting price',
    features: [
      'Up to 12 pages, custom-designed',
      'CMS so you can edit content yourself',
      'API & third-party integrations',
      'Database setup & management',
      'Speed & SEO optimization',
      '60 days of free support',
    ],
    cta: 'Start with Business',
    highlight: true,
  },
  {
    name: 'Custom Enterprise',
    desc: 'A fully bespoke web application, built around your workflow.',
    price: "Let's talk",
    priceNote: '',
    features: [
      'Custom web app or platform',
      'User accounts & authentication',
      'Payments & subscriptions',
      'Dedicated project manager',
      'Ongoing support & SLA options',
    ],
    cta: 'Book a call',
    highlight: false,
  },
]

export default function Services() {
  return (
    <section id="services" className="py-24 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="max-w-2xl mb-16">
          <span className="font-mono text-xs text-cyan-400 tracking-wider">// SERVICES &amp; PACKAGES</span>
          <h2 className="font-display text-3xl md:text-4xl font-semibold mt-3">
            Straightforward packages, built to fit your stage
          </h2>
          <p className="text-muted mt-4 leading-relaxed">
            Every project is custom-quoted, but here's where most clients land. Not sure which fits? Tell us about
            your project and we'll recommend one.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          {plans.map((p) => (
            <div
              key={p.name}
              className={
                p.highlight
                  ? 'relative border border-indigo-500/60 bg-surface2 rounded-2xl p-8 flex flex-col shadow-2xl shadow-indigo-500/10 lg:-translate-y-3'
                  : 'border border-border bg-surface rounded-2xl p-8 flex flex-col'
              }
            >
              {p.highlight && (
                <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 font-mono text-xs bg-gradient-to-r from-indigo-500 to-cyan-400 text-void font-semibold px-3.5 py-1 rounded-full">
                  MOST POPULAR
                </span>
              )}
              <h3 className="font-display text-xl font-semibold">{p.name}</h3>
              <p className="text-sm text-muted mt-2">{p.desc}</p>
              <div className="mt-6 flex items-baseline gap-1">
                <span className="text-3xl font-display font-semibold">{p.price}</span>
                {p.priceNote && <span className="text-muted text-sm">{p.priceNote}</span>}
              </div>
              <ul className="mt-8 space-y-3.5 text-sm flex-1">
                {p.features.map((f) => (
                  <li key={f} className={`flex gap-2.5 ${p.highlight ? 'text-cyan-400' : 'text-indigo-400'}`}>
                    {check}
                    <span className="text-ink">{f}</span>
                  </li>
                ))}
              </ul>
              <a
                href="#contact"
                className={
                  p.highlight
                    ? 'mt-8 text-center bg-indigo-500 hover:bg-indigo-400 text-white rounded-full py-3 font-medium transition-colors'
                    : 'mt-8 text-center border border-border hover:border-white/30 rounded-full py-3 font-medium transition-colors'
                }
              >
                {p.cta}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
