'use client';

import { motion } from 'framer-motion';
import { Mic, Users, Wrench, MessageCircle, LayoutGrid, Rocket, FileText, Award, Crown } from 'lucide-react';
import { HIGHLIGHTS } from '@/constants';

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Mic,
  Users,
  Wrench,
  MessageCircle,
  LayoutGrid,
  Rocket,
  FileText,
  Award,
  Crown,
};

export function Highlights() {
  return (
    <section className="relative py-24 md:py-32 bg-slate-900/50 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="inline-block px-4 py-1.5 rounded-full text-sm font-medium bg-gradient-to-r from-cyan-600/20 to-blue-600/20 border border-white/10 text-slate-300 mb-4"
          >
            What to Expect
          </motion.span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight">
            Event <span className="text-gradient">Highlights</span>
          </h2>
          <p className="text-lg text-slate-400 leading-relaxed">
            Experience a carefully curated selection of talks, workshops, and networking opportunities designed to accelerate your growth.
          </p>
        </motion.div>

        {/* Highlights Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {HIGHLIGHTS.map((highlight, index) => {
            const Icon = iconMap[highlight.icon] || Mic;

            return (
              <motion.div
                key={highlight.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5, scale: 1.02 }}
                className="group relative"
              >
                <div className="glass-card p-6 rounded-2xl h-full relative overflow-hidden">
                  {/* Glow effect on hover */}
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-600/0 to-purple-600/0 group-hover:from-blue-600/10 group-hover:to-purple-600/10 transition-all duration-500" />

                  {/* Content */}
                  <div className="relative">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-blue-600/20 to-indigo-600/20 flex items-center justify-center mb-4 group-hover:from-blue-600/40 group-hover:to-indigo-600/40 transition-all duration-500">
                      <Icon className="w-6 h-6 text-blue-400 group-hover:text-white transition-colors duration-300" />
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-3">{highlight.title}</h3>
                    <p className="text-slate-400 text-sm leading-relaxed">{highlight.description}</p>
                  </div>

                  {/* Border glow */}
                  <div className="absolute inset-0 rounded-2xl border border-white/5 group-hover:border-white/20 transition-colors duration-500" />
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
