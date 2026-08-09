import image1 from "../../assets/p1.png"
import image2 from "../../assets/p2.png"
import image3 from "../../assets/p3.png"

const projects = [
  {
    url: 'https://burakoil.netlify.app/',
    name: 'Burak oil',
    image:image1,
    title: 'OrbitFit — Fitness Booking Platform',
    desc: 'Class scheduling & payments for a multi-location gym chain.',
    tags: [
      { label: 'React', color: 'bg-indigo-500/10 text-indigo-300' },
      { label: 'Node.js', color: 'bg-cyan-500/10 text-cyan-300' },
      { label: 'MongoDB', color: 'bg-green-500/10 text-green-300' },
    ],
    gradient: 'from-indigo-500/25 via-surface2 to-cyan-500/15',
  },
  {
    url: 'https://velvety-custard-6c08d5.netlify.app/',
    name: 'Nestly',
    image:image2,
    title: 'Nestly — Real Estate Marketplace',
    desc: 'Listings, search filters, and agent dashboards for a property startup.',
    tags: [
      { label: 'Next.js', color: 'bg-indigo-500/10 text-indigo-300' },
      { label: 'Express', color: 'bg-cyan-500/10 text-cyan-300' },
      { label: 'Tailwind', color: 'bg-purple-500/10 text-purple-300' },
    ],
    gradient: 'from-cyan-500/20 via-surface2 to-indigo-500/20',
  },
  {
    url: 'https://dreamy-arithmetic-4809b9.netlify.app/',
    name: 'BrewCraft',
    image:image3,
    title: 'BrewCraft — E-commerce Storefront',
    desc: 'Custom storefront & inventory system for an independent coffee roaster.',
    tags: [
      { label: 'React', color: 'bg-indigo-500/10 text-indigo-300' },
      { label: 'MongoDB', color: 'bg-cyan-500/10 text-cyan-300' },
      { label: 'Tailwind', color: 'bg-purple-500/10 text-purple-300' },
    ],
    gradient: 'from-indigo-500/20 via-surface2 to-cyan-500/25',
  },
]

export default function Portfolio() {
  return (
    <section id="work" className="py-24 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="max-w-2xl mb-16">
          <span className="font-mono text-xs text-cyan-400 tracking-wider">// SELECTED WORK</span>
          <h2 className="font-display text-3xl md:text-4xl font-semibold mt-3">Recent builds, live in production</h2>
          <p className="text-muted mt-4 leading-relaxed">
            A few of the products we've designed, built, and shipped for clients across industries.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p) => (
            <div key={p.name} className="card-hover group border border-border bg-surface rounded-2xl overflow-hidden">
              <div className="bg-surface2 border-b border-border px-4 py-2.5 flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-red-400/70"></span>
                <span className="w-2.5 h-2.5 rounded-full bg-yellow-400/70"></span>
                <span className="w-2.5 h-2.5 rounded-full bg-green-400/70"></span>
                <span className="ml-3 font-mono text-[11px] text-muted truncate">{p.url}</span>
              </div>
              <div className={`aspect-[16/10] bg-gradient-to-br ${p.gradient} flex items-center justify-center`}>
                {/* <span className="font-display text-2xl text-white/25">{p.name}</span> */}
                <img className="w-full h-full object-cover" src={p.image} alt="" />
              </div>
              <div className="p-5">
                <h3 className="font-display font-medium">{p.title}</h3>
                <p className="text-sm text-muted mt-1.5">{p.desc}</p>
                <div className="flex flex-wrap gap-1.5 mt-4">
                  {p.tags.map((t) => (
                    <span key={t.label} className={`font-mono text-[11px] px-2 py-1 rounded-md ${t.color}`}>
                      {t.label}
                    </span>
                  ))}
                </div>
                <a href={p.url} className="inline-flex items-center  gap-1.5 text-sm text-indigo-300 mt-4 hover:text-cyan-300 transition-colors">
                  Live preview →
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
