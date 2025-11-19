import LayoutPreloader from './components/LayoutPreloader';
import Hero from './components/Hero';
import Features from './components/Features';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-white relative">
      {/* Preloader overlays the page on initial load */}
      <LayoutPreloader />

      {/* Simple top bar */}
      <header className="fixed top-0 left-0 right-0 z-20 flex items-center justify-between px-6 py-4 bg-gradient-to-b from-slate-950/80 to-transparent backdrop-blur-sm border-b border-white/5">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-violet-500 to-fuchsia-500 shadow-[0_0_25px_rgba(168,85,247,0.6)]" />
          <span className="font-semibold tracking-tight">Neon Tiles</span>
        </div>
        <nav className="hidden sm:flex items-center gap-5 text-sm text-slate-300/90">
          <a href="#features" className="hover:text-white transition-colors">Features</a>
          <a href="/test" className="hover:text-white transition-colors">Backend Test</a>
          <a href="#" className="px-3 py-1.5 rounded-lg bg-white/10 hover:bg-white/15 border border-white/10 transition-colors">Get Started</a>
        </nav>
      </header>

      {/* Sections */}
      <main className="relative">
        <Hero />
        <Features />
      </main>

      <Footer />
    </div>
  )
}

export default App
