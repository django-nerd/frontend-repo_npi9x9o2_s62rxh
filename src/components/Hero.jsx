import Spline from '@splinetool/react-spline';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-slate-950">
      {/* 3D Scene */}
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/Y7DK6OtMHusdC345/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Gradient overlay for contrast (won't block pointer events) */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-slate-950/70 via-slate-950/30 to-slate-950/90" />

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="text-4xl sm:text-6xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-violet-300 via-fuchsia-300 to-pink-300 drop-shadow-[0_0_30px_rgba(168,85,247,0.35)]"
        >
          Neon Circuit Worlds
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: 'easeOut', delay: 0.1 }}
          className="mt-4 text-slate-300/90 max-w-2xl mx-auto"
        >
          A modern, interactive hero that fuses 3D with motion design. Explore the ring of purple neon tiles in a dark digital atmosphere.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: 'easeOut', delay: 0.2 }}
          className="mt-10 flex items-center justify-center gap-4"
        >
          <a href="#features" className="px-6 py-3 rounded-xl bg-violet-600/90 hover:bg-violet-500 text-white font-semibold shadow-lg shadow-violet-600/30 transition-colors">
            Explore Features
          </a>
          <a href="/test" className="px-6 py-3 rounded-xl bg-slate-800/70 hover:bg-slate-700/70 text-slate-100 font-semibold border border-white/10 backdrop-blur-md transition-colors">
            Backend Test
          </a>
        </motion.div>
      </div>
    </section>
  );
}
