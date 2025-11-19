import { motion } from 'framer-motion';
import { Cpu, Sparkles, Zap } from 'lucide-react';

export default function Features() {
  const items = [
    {
      icon: <Sparkles className="w-6 h-6 text-fuchsia-300" />,
      title: 'Motion-first UI',
      desc: 'Smooth preloader sequences and delightful transitions built with Framer Motion.'
    },
    {
      icon: <Cpu className="w-6 h-6 text-violet-300" />,
      title: '3D Integrated',
      desc: 'Immersive hero powered by a Spline 3D scene with interactive neon tile ring.'
    },
    {
      icon: <Zap className="w-6 h-6 text-pink-300" />,
      title: 'Modern Aesthetic',
      desc: 'Dark, tech-forward theme with neon accents and glassy overlays.'
    }
  ];

  return (
    <section id="features" className="relative py-24 bg-slate-950">
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(600px_circle_at_50%_0%,rgba(168,85,247,0.15),transparent)]" />

      <div className="relative max-w-6xl mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6 }}
          className="text-3xl sm:text-4xl font-bold text-white text-center"
        >
          Built for Flow
        </motion.h2>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          {items.map((it, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ delay: 0.05 * i, duration: 0.5 }}
              className="relative rounded-2xl border border-white/10 bg-slate-900/60 backdrop-blur-md p-6 shadow-xl hover:shadow-violet-900/20"
            >
              <div className="mb-4 inline-flex items-center justify-center w-12 h-12 rounded-xl bg-slate-800/70 border border-white/10">
                {it.icon}
              </div>
              <h3 className="text-white font-semibold text-lg">{it.title}</h3>
              <p className="text-slate-300/80 mt-2 text-sm">{it.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
