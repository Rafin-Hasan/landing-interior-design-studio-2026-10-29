export default function App() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <nav className="max-w-6xl mx-auto flex items-center justify-between px-6 py-6">
        <span className="font-bold text-xl">Fern & Stone Studio</span>
        <a href="#cta" className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition">
          Get Started
        </a>
      </nav>

      <header className="max-w-4xl mx-auto text-center px-6 py-24">
        <p className="uppercase tracking-wide text-blue-600 font-semibold mb-4">Interior Design</p>
        <h1 className="text-4xl sm:text-5xl font-extrabold mb-6">Spaces that feel like you, at last</h1>
        <p className="text-lg text-slate-600 mb-10">Full-service interior design for homes that need to work as hard as they look good.</p>
        <a href="#cta" className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-blue-700 transition">
          Book a Design Consult
        </a>
      </header>

      <section className="max-w-6xl mx-auto px-6 py-16 grid sm:grid-cols-3 gap-8">
        <div className="p-6 rounded-xl border border-slate-100 shadow-sm">
          <h3 className="font-semibold text-lg mb-2">Full-Service Design</h3>
          <p className="text-slate-600">From mood board to final furniture placement.</p>
        </div>

        <div className="p-6 rounded-xl border border-slate-100 shadow-sm">
          <h3 className="font-semibold text-lg mb-2">Trade Pricing</h3>
          <p className="text-slate-600">Access to designer-only furniture and finishes.</p>
        </div>

        <div className="p-6 rounded-xl border border-slate-100 shadow-sm">
          <h3 className="font-semibold text-lg mb-2">Project Management</h3>
          <p className="text-slate-600">We coordinate contractors so you don’t have to.</p>
        </div>
      </section>

      <section id="cta" className="bg-blue-600 text-white text-center px-6 py-20">
        <h2 className="text-3xl font-bold mb-4">Let’s design your space</h2>
        <p className="mb-8 text-blue-100">Complimentary 30-minute discovery call.</p>
        <a href="#" className="inline-block bg-white text-blue-700 px-8 py-3 rounded-lg text-lg font-semibold hover:bg-slate-100 transition">
          Book a Design Consult
        </a>
      </section>

      <footer className="text-center py-8 text-slate-400 text-sm">
        © 2026 Fern & Stone Studio. All rights reserved.
      </footer>
    </div>
  )
}
