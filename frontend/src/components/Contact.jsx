import { useState } from 'react'

const API_URL = 'https://webvibe-backend.onrender.com'

const initialForm = {
  name: '',
  email: '',
  projectType: 'New website',
  budget: 'Under $1,000',
  details: '',
}

export default function Contact() {
  const [form, setForm] = useState(initialForm)
  const [status, setStatus] = useState('idle') // idle | loading | success | error
  const [errorMsg, setErrorMsg] = useState('')

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    if (!form.name.trim() || !form.email.trim() || !form.details.trim()) {
      setStatus('error')
      setErrorMsg('Please fill in your name, email, and project details.')
      return
    }

    setStatus('loading')
    setErrorMsg('')

    try {
      const res = await fetch(`${API_URL}/api/contact`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })

      const data = await res.json()

      if (!res.ok) {
        throw new Error(data.message || 'Something went wrong. Please try again.')
      }

      setStatus('success')
      setForm(initialForm)
    } catch (err) {
      setStatus('error')
      setErrorMsg(err.message || 'Could not reach the server. Please try again in a moment.')
    }
  }

  return (
    <section id="contact" className="py-24 border-t border-white/5 relative overflow-hidden">
      <div className="absolute inset-0 mesh-bg opacity-60"></div>
      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-5 gap-12">
          <div className="lg:col-span-2">
            <span className="font-mono text-xs text-cyan-400 tracking-wider">// START A PROJECT</span>
            <h2 className="font-display text-3xl md:text-4xl font-semibold mt-3">Tell us what you're building</h2>
            <p className="text-muted mt-4 leading-relaxed">
              Fill out the form and we'll reply within one business day with next steps and a rough estimate.
              Prefer to talk it through first?
            </p>
            <div className="flex flex-col gap-3 mt-8">
              <a
                href="https://wa.me/10000000000"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 border border-border hover:border-emerald-400/50 bg-surface rounded-xl px-5 py-3.5 transition-colors"
              >
                <svg className="w-5 h-5 text-emerald-400" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2a10 10 0 00-8.6 15.1L2 22l5.1-1.3A10 10 0 1012 2zm0 18a8 8 0 01-4.1-1.1l-.3-.2-3 .8.8-2.9-.2-.3A8 8 0 1112 20z" />
                </svg>
                <span className="text-sm font-medium">Message us on WhatsApp</span>
              </a>
              <a
                href="#"
                className="flex items-center gap-3 border border-border hover:border-indigo-400/50 bg-surface rounded-xl px-5 py-3.5 transition-colors"
              >
                <svg className="w-5 h-5 text-indigo-400" viewBox="0 0 20 20" fill="none">
                  <rect x="3" y="4" width="14" height="13" rx="2" stroke="currentColor" strokeWidth="1.6" />
                  <path d="M3 8h14M7 2v4M13 2v4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
                </svg>
                <span className="text-sm font-medium">Book a free 20-minute call</span>
              </a>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="lg:col-span-3 bg-surface border border-border rounded-2xl p-7 md:p-9 space-y-5">
            <div className="grid sm:grid-cols-2 gap-5">
              <div>
                <label className="text-sm text-muted block mb-2">Full name</label>
                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Jordan Lee"
                  className="w-full bg-void border border-border rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-indigo-400/60 focus:ring-1 focus:ring-indigo-400/40 transition-colors"
                />
              </div>
              <div>
                <label className="text-sm text-muted block mb-2">Email</label>
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="jordan@company.com"
                  className="w-full bg-void border border-border rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-indigo-400/60 focus:ring-1 focus:ring-indigo-400/40 transition-colors"
                />
              </div>
            </div>
            <div className="grid sm:grid-cols-2 gap-5">
              <div>
                <label className="text-sm text-muted block mb-2">Project type</label>
                <select
                  name="projectType"
                  value={form.projectType}
                  onChange={handleChange}
                  className="w-full bg-void border border-border rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-indigo-400/60 focus:ring-1 focus:ring-indigo-400/40 transition-colors"
                >
                  <option>New website</option>
                  <option>Website redesign</option>
                  <option>Custom web application</option>
                  <option>E-commerce store</option>
                  <option>Something else</option>
                </select>
              </div>
              <div>
                <label className="text-sm text-muted block mb-2">Budget range</label>
                <select
                  name="budget"
                  value={form.budget}
                  onChange={handleChange}
                  className="w-full bg-void border border-border rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-indigo-400/60 focus:ring-1 focus:ring-indigo-400/40 transition-colors"
                >
                  <option>Under $1,000</option>
                  <option>$1,000 – $3,000</option>
                  <option>$3,000 – $8,000</option>
                  <option>$8,000+</option>
                  <option>Not sure yet</option>
                </select>
              </div>
            </div>
            <div>
              <label className="text-sm text-muted block mb-2">Project details</label>
              <textarea
                name="details"
                value={form.details}
                onChange={handleChange}
                rows="4"
                placeholder="Tell us about your business and what you'd like your site to do…"
                className="w-full bg-void border border-border rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-indigo-400/60 focus:ring-1 focus:ring-indigo-400/40 transition-colors resize-none"
              ></textarea>
            </div>

            <button
              type="submit"
              disabled={status === 'loading'}
              className="w-full bg-indigo-500 hover:bg-indigo-400 disabled:opacity-60 disabled:cursor-not-allowed text-white font-medium py-3.5 rounded-xl transition-colors"
            >
              {status === 'loading' ? 'Sending…' : 'Send Project Details'}
            </button>

            {status === 'success' && (
              <p className="text-sm text-emerald-400 text-center">
                Thanks! We received your project details and will reply within one business day.
              </p>
            )}
            {status === 'error' && <p className="text-sm text-red-400 text-center">{errorMsg}</p>}

            <p className="text-xs text-muted text-center">
              We reply within one business day — no spam, no sales calls you didn't ask for.
            </p>
          </form>
        </div>
      </div>
    </section>
  )
}
