export default function Footer() {
  return (
    <footer className="border-t border-white/5 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid md:grid-cols-5 gap-10 pb-12">
          <div className="md:col-span-2">
            <a href="#top" className="flex items-center gap-2 font-display font-semibold text-lg">
              <span className="w-2.5 h-2.5 rounded-sm bg-gradient-to-br from-indigo-500 to-cyan-400"></span>
              WebVibe
            </a>
            <p className="text-sm text-muted mt-4 max-w-xs leading-relaxed">
              A web development studio building fast, custom websites and web apps for startups and small
              businesses.
            </p>
            <div className="flex gap-3 mt-6">
              <a href="#" className="w-9 h-9 rounded-full border border-border flex items-center justify-center hover:border-indigo-400/60 hover:text-indigo-400 transition-colors" aria-label="Twitter / X">
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor"><path d="M18.9 2H22l-7.6 8.7L23.3 22H16.9l-5-6.5L6.1 22H3l8.1-9.3L2.7 2h6.6l4.5 6 5.1-6z" /></svg>
              </a>
              <a href="#" className="w-9 h-9 rounded-full border border-border flex items-center justify-center hover:border-indigo-400/60 hover:text-indigo-400 transition-colors" aria-label="LinkedIn">
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor"><path d="M4.98 3.5a2.5 2.5 0 11-.02 5 2.5 2.5 0 01.02-5zM3 9h4v12H3V9zm7 0h3.8v1.7h.05c.53-1 1.83-2 3.77-2 4 0 4.75 2.6 4.75 6V21h-4v-5.3c0-1.3-.02-2.9-1.8-2.9-1.8 0-2.1 1.4-2.1 2.8V21h-4V9z" /></svg>
              </a>
              <a href="#" className="w-9 h-9 rounded-full border border-border flex items-center justify-center hover:border-indigo-400/60 hover:text-indigo-400 transition-colors" aria-label="GitHub">
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2a10 10 0 00-3.16 19.5c.5.1.68-.22.68-.48v-1.7c-2.78.6-3.37-1.34-3.37-1.34-.46-1.15-1.11-1.46-1.11-1.46-.9-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.9 1.52 2.34 1.08 2.91.83.09-.65.35-1.08.63-1.33-2.22-.25-4.56-1.11-4.56-4.94 0-1.09.39-1.98 1.03-2.68-.1-.25-.45-1.27.1-2.65 0 0 .84-.27 2.75 1.02a9.5 9.5 0 015 0c1.9-1.3 2.75-1.02 2.75-1.02.55 1.38.2 2.4.1 2.65.64.7 1.03 1.59 1.03 2.68 0 3.84-2.34 4.68-4.57 4.93.36.31.68.92.68 1.85v2.75c0 .27.18.58.69.48A10 10 0 0012 2z" /></svg>
              </a>
            </div>
          </div>

          <div>
            <p className="font-medium text-sm mb-4">Navigate</p>
            <ul className="space-y-3 text-sm text-muted">
              <li><a href="#stack" className="hover:text-ink transition-colors">Stack</a></li>
              <li><a href="#services" className="hover:text-ink transition-colors">Services</a></li>
              <li><a href="#work" className="hover:text-ink transition-colors">Our Work</a></li>
              <li><a href="#about" className="hover:text-ink transition-colors">About Us</a></li>
            </ul>
          </div>
          <div>
            <p className="font-medium text-sm mb-4">Company</p>
            <ul className="space-y-3 text-sm text-muted">
              <li><a href="#about" className="hover:text-ink transition-colors">About</a></li>
              <li><a href="#testimonials" className="hover:text-ink transition-colors">Reviews</a></li>
              <li><a href="#contact" className="hover:text-ink transition-colors">Contact</a></li>
              <li><a href="#" className="hover:text-ink transition-colors">Careers</a></li>
            </ul>
          </div>

          <div className="md:col-span-1">
            <p className="font-medium text-sm mb-4">Stay updated</p>
            <p className="text-sm text-muted mb-4">Occasional notes on web dev, launches, and offers. No spam.</p>
            <form className="flex gap-2" onSubmit={(e) => e.preventDefault()}>
              <input
                type="email"
                placeholder="you@email.com"
                className="w-full min-w-0 bg-void border border-border rounded-lg px-3.5 py-2.5 text-sm focus:outline-none focus:border-indigo-400/60 transition-colors"
              />
              <button type="submit" className="shrink-0 bg-ink text-void rounded-lg px-3.5 text-sm font-medium hover:bg-indigo-400 transition-colors">
                Join
              </button>
            </form>
          </div>
        </div>

        <div className="border-t border-white/5 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-muted">
          <p>© 2026 WebVibe Studio. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-ink transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-ink transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
